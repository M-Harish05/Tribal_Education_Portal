import { Router } from 'express';
import Joi from 'joi';
import User from '../models/User.firestore.js';
import { signJwt } from '../middleware/auth.js';
import bcrypt from 'bcryptjs';

const router = Router();
// Email/password signup
router.post('/signup', async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      name: Joi.string().allow('', null)
    });
    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const existing = await User.findOne({ email: value.email });
    if (existing) return res.status(409).json({ error: 'Email already in use' });

    const hash = await bcrypt.hash(value.password, 10);
    const user = await User.create({ email: value.email, passwordHash: hash, nameEnglish: value.name || 'Learner' });
    const token = signJwt(user._id);
    res.json({ success: true, token, user: {
      id: user._id,
      mobile: user.mobile,
      name: user.name,
      nameEnglish: user.nameEnglish,
      email: user.email,
      profilePicture: user.profilePicture,
      joinDate: user.joinDate,
      lastLogin: user.lastLogin,
      preferences: user.preferences,
      stats: user.stats
    }});
  } catch (e) {
    console.error('signup error:', e);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

// Email/password login
router.post('/login', async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() });
    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const user = await User.findOne({ email: value.email }, { includePassword: true });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(value.password, user.passwordHash || '');
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });

    // Update last login
    await User.findByIdAndUpdate(user._id, { $set: { lastLogin: new Date() } });
    
    const token = signJwt(user._id);
    res.json({ success: true, token, user: {
      id: user._id,
      mobile: user.mobile,
      name: user.name,
      nameEnglish: user.nameEnglish,
      email: user.email,
      profilePicture: user.profilePicture,
      joinDate: user.joinDate,
      lastLogin: new Date(),
      preferences: user.preferences,
      stats: user.stats
    }});
  } catch (e) {
    console.error('login error:', e);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// In-memory OTP store for demo; replace with provider service
const otpStore = new Map(); // key: mobile, value: { code, expiresAt }

router.post('/request-otp', async (req, res) => {
  const schema = Joi.object({ mobile: Joi.string().pattern(/^\d{10}$/).required() });
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const code = '123456'; // demo; integrate provider for real SMS
  const expiresAt = Date.now() + 5 * 60_000;
  otpStore.set(value.mobile, { code, expiresAt });

  return res.json({ success: true });
});

router.post('/verify-otp', async (req, res) => {
  try {
    const schema = Joi.object({ mobile: Joi.string().pattern(/^\d{10}$/).required(), otp: Joi.string().length(6).required() });
    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const record = otpStore.get(value.mobile);
    if (!record || record.code !== value.otp || record.expiresAt < Date.now()) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    const now = new Date();
    const user = await User.findOneAndUpdate(
      { mobile: value.mobile },
      { $set: { lastLogin: now }, $setOnInsert: { nameEnglish: 'Learner', joinDate: now } },
      { upsert: true, new: true }
    );

    const token = signJwt(user._id);
    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        mobile: user.mobile,
        name: user.name,
        nameEnglish: user.nameEnglish,
        email: user.email,
        profilePicture: user.profilePicture,
        joinDate: user.joinDate,
        lastLogin: user.lastLogin,
        preferences: user.preferences,
        stats: user.stats
      }
    });
  } catch (e) {
    if (e && e.code === 11000) {
      // Duplicate key race condition fallback
      try {
        const fallback = await User.findOne({ mobile: req.body.mobile });
        if (fallback) {
          const token = signJwt(fallback._id);
          return res.json({ success: true, token, user: {
            id: fallback._id,
            mobile: fallback.mobile,
            name: fallback.name,
            nameEnglish: fallback.nameEnglish,
            email: fallback.email,
            profilePicture: fallback.profilePicture,
            joinDate: fallback.joinDate,
            lastLogin: fallback.lastLogin,
            preferences: fallback.preferences,
            stats: fallback.stats
          }});
        }
      } catch {}
    }
    console.error('verify-otp error:', e);
    return res.status(500).json({ error: 'Server error during verification' });
  }
});

export default router;



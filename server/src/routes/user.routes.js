import { Router } from 'express';
import Joi from 'joi';
import { requireAuth } from '../middleware/auth.js';
import User from '../models/User.firestore.js';

const router = Router();

router.use(requireAuth);

router.get('/me', async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({
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
  });
});

router.patch('/me/preferences', async (req, res) => {
  const schema = Joi.object({
    language: Joi.string().valid('english', 'telugu'),
    notifications: Joi.boolean(),
    voiceEnabled: Joi.boolean(),
    onboardingCompleted: Joi.boolean()
  }).min(1);
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: Object.fromEntries(Object.entries(value).map(([k, v]) => [`preferences.${k}`, v])) },
    { new: true }
  );
  res.json({ preferences: user.preferences });
});

export default router;



import { Router } from 'express';
import Joi from 'joi';
import { requireAuth } from '../middleware/auth.js';
import Progress from '../models/Progress.firestore.js';

const router = Router();
router.use(requireAuth);

router.get('/', async (req, res) => {
  const progress = await Progress.findOne({ userId: req.user.id });
  res.json(progress || { lessons: [], badges: [] });
});

router.post('/lesson', async (req, res) => {
  const schema = Joi.object({
    moduleKey: Joi.string().required(),
    lessonId: Joi.string().required(),
    completed: Joi.boolean().default(false),
    score: Joi.number().min(0).max(100).default(0)
  });
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  let progress = await Progress.findOne({ userId: req.user.id });
  if (!progress) progress = await Progress.create({ userId: req.user.id });

  const idx = progress.lessons.findIndex(l => l.moduleKey === value.moduleKey && l.lessonId === value.lessonId);
  if (idx >= 0) {
    progress.lessons[idx] = { ...progress.lessons[idx].toObject(), ...value, attempts: (progress.lessons[idx].attempts || 0) + 1, lastAttemptAt: new Date() };
  } else {
    progress.lessons.push({ ...value, attempts: 1, lastAttemptAt: new Date() });
  }
  await progress.save();
  res.json(progress);
});

export default router;



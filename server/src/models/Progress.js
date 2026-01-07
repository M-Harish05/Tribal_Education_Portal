import mongoose from 'mongoose';

const lessonProgressSchema = new mongoose.Schema({
  moduleKey: { type: String, required: true },
  lessonId: { type: String, required: true },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  attempts: { type: Number, default: 0 },
  lastAttemptAt: { type: Date }
}, { _id: false });

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  lessons: { type: [lessonProgressSchema], default: [] },
  badges: { type: [String], default: [] }
}, { timestamps: true });

progressSchema.index({ userId: 1, 'lessons.moduleKey': 1, 'lessons.lessonId': 1 });

export default mongoose.model('Progress', progressSchema);



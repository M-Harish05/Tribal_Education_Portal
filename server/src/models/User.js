import mongoose from 'mongoose';

const preferenceSchema = new mongoose.Schema({
  language: { type: String, enum: ['english', 'telugu'], default: 'english' },
  notifications: { type: Boolean, default: true },
  voiceEnabled: { type: Boolean, default: true },
  onboardingCompleted: { type: Boolean, default: false }
}, { _id: false });

const statsSchema = new mongoose.Schema({
  totalSessions: { type: Number, default: 0 },
  totalTimeSpent: { type: Number, default: 0 },
  favoriteModule: { type: String, default: null }
}, { _id: false });

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true, sparse: true, index: true },
  email: { type: String, unique: true, sparse: true },
  passwordHash: { type: String, select: false },
  name: { type: String },
  nameEnglish: { type: String },
  profilePicture: { type: String },
  joinDate: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  preferences: { type: preferenceSchema, default: () => ({}) },
  stats: { type: statsSchema, default: () => ({}) }
}, { timestamps: true });

export default mongoose.model('User', userSchema);



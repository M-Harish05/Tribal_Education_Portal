import { getFirestore } from '../lib/db.js';
import { nanoid } from 'nanoid';

const COLLECTION = 'progress';

export default {
  async findOne(query) {
    const db = getFirestore();
    const progressRef = db.collection(COLLECTION);
    
    if (query.userId) {
      const snapshot = await progressRef.where('userId', '==', query.userId).limit(1).get();
      if (snapshot.empty) return null;
      const doc = snapshot.docs[0];
      return { _id: doc.id, ...doc.data(), save: async function() { await this._save(); } };
    }
    
    return null;
  },

  async create(data) {
    const db = getFirestore();
    const id = nanoid();
    const progress = {
      id,
      userId: data.userId,
      lessons: [],
      badges: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    await db.collection(COLLECTION).doc(id).set(progress);
    
    return {
      _id: id,
      ...progress,
      save: async function() {
        const db = getFirestore();
        await db.collection(COLLECTION).doc(this._id).update({
          lessons: this.lessons,
          badges: this.badges,
          updatedAt: new Date()
        });
      }
    };
  },

  async save(progressDoc) {
    const db = getFirestore();
    await db.collection(COLLECTION).doc(progressDoc._id).update({
      lessons: progressDoc.lessons,
      badges: progressDoc.badges,
      updatedAt: new Date()
    });
  }
};

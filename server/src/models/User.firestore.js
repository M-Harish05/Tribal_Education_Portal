import { getFirestore } from '../lib/db.js';
import { nanoid } from 'nanoid';

const COLLECTION = 'users';

export default {
  async create(userData) {
    const db = getFirestore();
    const id = nanoid();
    const user = {
      id,
      mobile: userData.mobile || null,
      email: userData.email || null,
      passwordHash: userData.passwordHash || null,
      name: userData.name || null,
      nameEnglish: userData.nameEnglish || 'Learner',
      profilePicture: userData.profilePicture || null,
      joinDate: new Date(),
      lastLogin: new Date(),
      preferences: {
        language: 'english',
        notifications: true,
        voiceEnabled: true,
        onboardingCompleted: false
      },
      stats: {
        totalSessions: 0,
        totalTimeSpent: 0,
        favoriteModule: null
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    await db.collection(COLLECTION).doc(id).set(user);
    return { _id: id, ...user };
  },

  async findOne(query, options = {}) {
    const db = getFirestore();
    const usersRef = db.collection(COLLECTION);
    
    let snapshot;
    if (query.email) {
      snapshot = await usersRef.where('email', '==', query.email).limit(1).get();
    } else if (query.mobile) {
      snapshot = await usersRef.where('mobile', '==', query.mobile).limit(1).get();
    } else if (query._id) {
      const doc = await usersRef.doc(query._id).get();
      if (!doc.exists) return null;
      const data = doc.data();
      // Include passwordHash if requested
      if (!options.includePassword) {
        delete data.passwordHash;
      }
      return { _id: doc.id, ...data };
    }
    
    if (!snapshot || snapshot.empty) return null;
    const doc = snapshot.docs[0];
    const data = doc.data();
    // Include passwordHash if requested
    if (!options.includePassword) {
      delete data.passwordHash;
    }
    return { _id: doc.id, ...data };
  },

  async findById(id) {
    const db = getFirestore();
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return null;
    return { _id: doc.id, ...doc.data() };
  },

  async findOneAndUpdate(query, update, options = {}) {
    const db = getFirestore();
    const usersRef = db.collection(COLLECTION);
    
    let user;
    if (query.mobile) {
      const snapshot = await usersRef.where('mobile', '==', query.mobile).limit(1).get();
      if (!snapshot.empty) {
        user = { _id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
      }
    }
    
    if (!user && options.upsert) {
      // Create new user
      const id = nanoid();
      const newUser = {
        id,
        mobile: query.mobile || null,
        nameEnglish: update.$setOnInsert?.nameEnglish || 'Learner',
        joinDate: update.$setOnInsert?.joinDate || new Date(),
        lastLogin: update.$set?.lastLogin || new Date(),
        preferences: {
          language: 'english',
          notifications: true,
          voiceEnabled: true,
          onboardingCompleted: false
        },
        stats: {
          totalSessions: 0,
          totalTimeSpent: 0,
          favoriteModule: null
        },
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await usersRef.doc(id).set(newUser);
      return { _id: id, ...newUser };
    }
    
    if (user && update.$set) {
      await usersRef.doc(user._id).update({
        ...update.$set,
        updatedAt: new Date()
      });
      const updated = await usersRef.doc(user._id).get();
      return { _id: updated.id, ...updated.data() };
    }
    
    return user;
  },

  async findByIdAndUpdate(id, update, options = {}) {
    const db = getFirestore();
    const userRef = db.collection(COLLECTION).doc(id);
    const doc = await userRef.get();
    
    if (!doc.exists) return null;
    
    await userRef.update({
      ...update.$set,
      updatedAt: new Date()
    });
    
    if (options.new) {
      const updated = await userRef.get();
      return { _id: updated.id, ...updated.data() };
    }
    
    return { _id: doc.id, ...doc.data() };
  },

  select(fields) {
    // For Firestore, we handle this differently
    // This is just for compatibility with existing code
    return this;
  }
};

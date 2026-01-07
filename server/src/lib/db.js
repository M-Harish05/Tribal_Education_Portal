import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;

export async function connectToDatabase() {
  try {
    let serviceAccount;
    
    // Try to get Firebase config from environment variable (for production)
    if (process.env.FIREBASE_CONFIG) {
      serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
      console.log('Using Firebase config from environment variable');
    } else {
      // Fall back to file (for local development)
      const serviceAccountPath = path.join(__dirname, '../../config/firebase-admin-key.json');
      serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
      console.log('Using Firebase config from file');
    }

    // Initialize Firebase Admin
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    }

    db = admin.firestore();
    console.log('Connected to Firebase Firestore');
    return db;
  } catch (error) {
    console.error('Firebase connection error:', error);
    throw new Error('Failed to connect to Firebase');
  }
}

export function getFirestore() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase first.');
  }
  return db;
}

export function disconnectFromDatabase() {
  // Firebase Admin SDK doesn't need explicit disconnect
  console.log('Firebase connection closed');
}

#!/usr/bin/env node

/**
 * Deployment Helper Script
 * Helps generate the necessary configurations for deployment
 */

import { readFileSync } from 'fs';
import { createHash, randomBytes } from 'crypto';

console.log('🚀 Tribal Education App - Deployment Helper\n');
console.log('=' .repeat(60));

// Generate JWT Secret
console.log('\n📝 1. JWT SECRET (Copy this for Render environment variable):');
console.log('─'.repeat(60));
const jwtSecret = randomBytes(64).toString('hex');
console.log(jwtSecret);

// Read and format Firebase config
console.log('\n📝 2. FIREBASE_CONFIG (Copy this for Render environment variable):');
console.log('─'.repeat(60));
try {
  const firebaseConfig = readFileSync('./server/config/firebase-admin-key.json', 'utf8');
  const minifiedConfig = JSON.stringify(JSON.parse(firebaseConfig));
  console.log(minifiedConfig);
} catch (error) {
  console.log('⚠️  Error reading Firebase config file.');
  console.log('Make sure server/config/firebase-admin-key.json exists.');
}

// Deployment URLs template
console.log('\n📝 3. DEPLOYMENT URLS:');
console.log('─'.repeat(60));
console.log('After deploying to Render, your backend URL will be:');
console.log('https://YOUR-SERVICE-NAME.onrender.com');
console.log('\nSet this in Netlify environment variables:');
console.log('VITE_API_BASE=https://YOUR-SERVICE-NAME.onrender.com/api');
console.log('\nAfter deploying to Netlify, update Render CLIENT_ORIGIN to:');
console.log('CLIENT_ORIGIN=https://your-netlify-site.netlify.app');

// Quick checklist
console.log('\n✅ DEPLOYMENT CHECKLIST:');
console.log('─'.repeat(60));
console.log('[ ] Push code to GitHub');
console.log('[ ] Deploy backend to Render with above environment variables');
console.log('[ ] Test backend health endpoint: /api/health');
console.log('[ ] Deploy frontend to Netlify with VITE_API_BASE');
console.log('[ ] Update CLIENT_ORIGIN in Render with Netlify URL');
console.log('[ ] Test the full application');
console.log('[ ] Share your live link! 🎉');

console.log('\n' + '='.repeat(60));
console.log('💡 For detailed instructions, see QUICK_DEPLOY.md');
console.log('=' .repeat(60) + '\n');

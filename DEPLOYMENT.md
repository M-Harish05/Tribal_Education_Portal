# 🚀 Complete Deployment Guide - Tribal Education Web App

## Table of Contents
1. [Project Overview](#project-overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Frontend Deployment (Netlify)](#frontend-deployment-netlify)
4. [Backend Deployment (Railway/Render)](#backend-deployment-railwayrender)
5. [Environment Variables](#environment-variables)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a **full-stack** application:
- **Frontend**: React + Vite (SPA) - Deploy to Netlify/Vercel
- **Backend**: Express.js + MongoDB - Deploy to Railway/Render/Heroku
- **Database**: MongoDB Atlas (Cloud)

---

## ⚠️ Pre-Deployment Checklist

### 1. **IMMEDIATE SECURITY FIXES** (CRITICAL!)

#### A. Rotate All Secrets
Your current credentials are exposed in the repository. You MUST:

1. **Generate a new JWT secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```
   
2. **Update MongoDB password:**
   - Go to MongoDB Atlas → Database Access
   - Change password for user `saitama`
   - Update your `server/.env` file

3. **Never commit .env files:**
   - Verify `.gitignore` includes `.env` (already fixed)
   - Remove `.env` from git history if committed:
     ```bash
     git rm --cached .env server/.env
     git commit -m "Remove exposed credentials"
     ```

#### B. Environment Variables Setup
```bash
# Frontend (.env)
cp .env.example .env
# Edit .env and update VITE_API_BASE

# Backend (server/.env)
cp server/.env.example server/.env
# Edit server/.env with NEW secure values
```

### 2. **Verify Build Process**
```bash
# Frontend build test
npm install
npm run build
# Should create a 'dist' folder

# Backend test
cd server
npm install
npm start
# Should connect to MongoDB
```

---

## 🌐 Frontend Deployment (Netlify)

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build and Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option 2: Deploy via Netlify Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18`

4. **Environment Variables** (in Netlify Dashboard):
   ```
   VITE_API_BASE=https://your-backend-url.railway.app/api
   ```

5. **Deploy Settings:**
   - The `netlify.toml` file is already configured
   - Automatic deployments on push enabled

### Voice Feature Requirements
- ✅ Netlify provides HTTPS automatically
- ✅ Required for microphone access
- ✅ Permissions-Policy headers already configured

---

## 🖥️ Backend Deployment (Railway)

### Option 1: Railway (Recommended - Free Tier Available)

1. **Sign up at [railway.app](https://railway.app)**

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Root Directory:**
   - Settings → Build & Deploy
   - **Root Directory:** `server`
   - **Build Command:** (leave empty)
   - **Start Command:** `npm start`

4. **Environment Variables:**
   Add these in Railway dashboard:
   ```
   PORT=8080
   MONGODB_URI=mongodb+srv://username:NEW_PASSWORD@cluster.mongodb.net/tribal_education?retryWrites=true&w=majority
   JWT_SECRET=<paste-the-64-char-random-string>
   CLIENT_ORIGIN=https://your-netlify-app.netlify.app
   NODE_ENV=production
   ```

5. **Deploy:**
   - Railway auto-deploys
   - Copy the generated URL (e.g., `https://your-app.railway.app`)

### Option 2: Render

1. **Sign up at [render.com](https://render.com)**

2. **Create Web Service:**
   - New → Web Service
   - Connect GitHub repository
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

3. **Environment Variables** (same as Railway)

4. **Deploy** - Copy the generated URL

---

## 📋 Environment Variables Summary

### Frontend (.env)
```bash
VITE_API_BASE=https://your-backend-domain.railway.app/api
```

### Backend (server/.env)
```bash
PORT=8080
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
JWT_SECRET=<64-character-random-string>
CLIENT_ORIGIN=https://your-frontend.netlify.app
NODE_ENV=production
```

---

## ✅ Post-Deployment Steps

### 1. **Update Frontend API URL**
After backend is deployed, update frontend `.env`:
```bash
VITE_API_BASE=https://your-actual-backend-url.railway.app/api
```

### 2. **Update Backend CORS**
Update `CLIENT_ORIGIN` in backend:
```bash
CLIENT_ORIGIN=https://your-actual-frontend.netlify.app
```

### 3. **Redeploy Frontend**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### 4. **Test the Application**
- Visit your Netlify URL
- Test login/authentication
- Test voice features (requires HTTPS ✅)
- Verify API calls work

### 5. **MongoDB Atlas Whitelist**
- Go to MongoDB Atlas → Network Access
- Add IP: `0.0.0.0/0` (allow all) OR
- Add specific Railway/Render IPs

---

## 🔧 Troubleshooting

### Issue: Frontend can't connect to backend
**Solution:**
- Check browser console for CORS errors
- Verify `VITE_API_BASE` in Netlify environment variables
- Verify `CLIENT_ORIGIN` in backend matches frontend URL

### Issue: MongoDB connection fails
**Solution:**
- Check MongoDB Atlas network access (whitelist IPs)
- Verify `MONGODB_URI` is correct
- Check MongoDB user has read/write permissions

### Issue: Voice features not working
**Solution:**
- ✅ HTTPS is required (Netlify provides this)
- User must grant microphone permissions
- Check browser console for errors
- Use Chrome/Edge (best support)

### Issue: Build fails
**Solution:**
- Check Node.js version (requires v18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for missing dependencies

### Issue: 404 on page refresh
**Solution:**
- ✅ Already configured in `netlify.toml` and `_redirects`
- All routes redirect to `index.html`

---

## 📝 Quick Deployment Commands

### First Time Setup
```bash
# 1. Install dependencies
npm install
cd server && npm install && cd ..

# 2. Configure environment
cp .env.example .env
cp server/.env.example server/.env
# Edit both .env files with your values

# 3. Test locally
npm start  # Frontend on http://localhost:4028
cd server && npm start  # Backend on http://localhost:8080

# 4. Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Update Deployment
```bash
# After making changes
git add .
git commit -m "Your changes"
git push origin main
# Netlify and Railway will auto-deploy
```

---

## 🔒 Security Best Practices

1. ✅ **Never commit `.env` files**
2. ✅ **Use strong, random JWT secrets** (64+ characters)
3. ✅ **Rotate credentials regularly**
4. ✅ **Use HTTPS in production** (Netlify provides this)
5. ✅ **Whitelist specific CORS origins** (no wildcards in production)
6. ✅ **Keep dependencies updated**: `npm audit fix`
7. ✅ **Use environment variables for all secrets**

---

## 📞 Support

### Deployment Platforms
- **Netlify Docs**: https://docs.netlify.com
- **Railway Docs**: https://docs.railway.app
- **MongoDB Atlas**: https://docs.atlas.mongodb.com

### Common Issues
- Check server logs in Railway/Render dashboard
- Use Netlify deploy logs for frontend issues
- Monitor MongoDB Atlas metrics

---

## 🎉 Success Checklist

- [ ] Frontend builds successfully
- [ ] Backend connects to MongoDB
- [ ] Environment variables configured
- [ ] Frontend deployed to Netlify
- [ ] Backend deployed to Railway/Render
- [ ] CORS configured correctly
- [ ] Voice features work (HTTPS)
- [ ] Authentication works
- [ ] All pages accessible
- [ ] No console errors
- [ ] Mobile responsive

---

**Your app is now live! 🚀**

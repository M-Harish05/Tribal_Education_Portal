# 🚀 Quick Deployment Guide - Get Your Shareable Link

## Overview
This guide will help you deploy your Tribal Education app with both **backend** and **frontend** live, giving you a shareable link.

**Deployment Stack:**
- **Backend**: Render.com (Free tier) - Handles API and Firebase
- **Frontend**: Netlify (Free tier) - Hosts your React app
- **Database**: Firebase Firestore (Already configured)

**Estimated Time**: 15-20 minutes

---

## 📋 Prerequisites

1. GitHub account (to push your code)
2. Render account (sign up at [render.com](https://render.com))
3. Netlify account (sign up at [netlify.com](https://netlify.com))
4. Your Firebase credentials (already in `server/config/firebase-admin-key.json`)

---

## 🔥 Step 1: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 🖥️ Step 2: Deploy Backend to Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render to access your repositories

### 2.2 Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. **Configure the service:**
   - **Name**: `tribal-education-backend`
   - **Region**: `Singapore` (or closest to you)
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 2.3 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"** and add these:

#### PORT
```
PORT=8080
```

#### NODE_ENV
```
NODE_ENV=production
```

#### JWT_SECRET
Generate a secure secret:
```bash
# Run this command on your local machine:
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Copy the output and paste as `JWT_SECRET` value.

#### FIREBASE_CONFIG
**IMPORTANT**: Copy the **entire content** of your `server/config/firebase-admin-key.json` file and paste it as a single-line JSON:

Open `server/config/firebase-admin-key.json`, copy everything, and paste it in the FIREBASE_CONFIG variable. It should look like:
```json
{"type":"service_account","project_id":"tribal-education","private_key_id":"d4aecf6ba1bff8f0150c51fa568db4ca264b82c1","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgmijS2PAFtLLZ\ngsPlpOojmb9/RSzHGnrrdvmbkVdQF7NsDlVCniaKbgs2fYeChBKFq4j2hAfsIuUL\nU72nUo/QKugJ73nL3YXg9fzHN9zAqBSwkF8PKkgSZe4YUiWOBlOGSIKskN76Fqaj\nbu8FN9138yew8EsRGAYzG6A3Nvr2LNtCMfhR1KZe8CN7EGmMECsXxoVK/n2HaNwu\nEM0yxFaQGm2SFULoziQmENDOr5S3+MJs3gFoAEIkzcgQQSL0X2ZK3E7HtFLbYtVy\nSvnZHwV73lCADPFInxHZZ14Jf7p6FZiM2pjZukY/6Wh+MOZfpnFE0u2iVP+L8x9J\noadj3uTfAgMBAAECggEAT31v5lOd+z79L2sO3uczcJ8Y/bejReIyz8QfSjYxsyh4\nOU2HUlj7pfGVaVcbDw+kKIfRpQGMdj/RVWVxUVcwi8mrrtyA/CxuFfSpXm6AY/T4\nwZaO9iSONmi50AS+wtmtVPCzwtRQ/iznFB+OW4fui2XUzdP1lVqt0we7d98vCdGj\nTg1EGxrv/KU9Z10jjRKt2tvJq3SdGwmbYmUvjF6kuITQkuAg3cdgNSaOmV2fmdz6\nwRf0t5eithsXHNDdHyHVf1p5qBP+N+0DGqL8hw9iPHrhkecyCGQgdCHyGm/abzow\n0Hw0tAZ8J9Wgp62ud4nj3b6N0zticQlGJY5ax3CGgQKBgQD+dpREwc8/8Q+obeaz\neaQbyZxcPx2acVuPUkEuEWgHra+IaxgoZMDRZKortvg1tyYDIysRkNV2G+AyCYnZ\n2/RocLvL2w7yycPveW/QVnBmhfet0osV8A6QXv0fG8xtGIassrEJPEZziacjxpej\nt77uMz3l4fQo30sgkpFtLG9rgQKBgQDh9Wmo5Yqk/I/e5FHWaIfwtzEwzu2wfYtj\nj9pZrFlBYPaJFZB8HMZ1sAaQbpp4iDyMLJ0oQY+Ycd753QSfiFACjqwTT6cTxS+t\nWaJH2G4pN+EgnQrgqjWsErCBYPBxll/8TntrzA9d75ftbrNP1O0esLdHEtyZ5kdO\n1z32IYYAXwKBgQDw1LWbJXrK35GcLPetYTDqg7OSssGHzEWFram2ug6lRcLd783b\nXRAInadY3ECqRf6Z9YzrgRImSFe1w8VOBZiZyChU1ayeKEtiuKIUodqbjatOPfgY\n+Swvg1c5PAwMLKw5gp1/Sia7bspbV7do4Zy4wJKSoXl9vWfTGiS9GNMTAQKBgQCs\nmNUYmh2JYRJUY3rPmBEeohAFBEszIPK0HlHfZXLYKcSneb1f0GsXwlmBQbrkjswR\nFpMFCO8ytuhnW5gIdAsJqQlvxswMofaFJ4556qxa98ATNWH1so5E3hHNAcsoOIEh\nLKHB+aFTU4xtZL27IR3u73VP6Oxw8iFN68P8mibNaQKBgHiraU7OY9HsvrKGObtJ\njKw5IugokDP4KnULFqIYv8TXbWVSKvU3VWPofB6xYn02OS9Oe9DA1pbu9CjdZxMx\nC5Cqda2Hzbi6ieVi06vX6tZdphEQXXjdycSKVG4Q72GVQNJE+b20zN13A/FyCts6\n8jbgR1/ytzxvWn+l9L+lhpRo\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-fbsvc@tribal-education.iam.gserviceaccount.com","client_id":"105616930497966392965","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40tribal-education.iam.gserviceaccount.com","universe_domain":"googleapis.com"}
```

#### CLIENT_ORIGIN
For now, set it to:
```
CLIENT_ORIGIN=*
```
(We'll update this after deploying the frontend)

### 2.4 Deploy Backend
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. Once deployed, you'll get a URL like: `https://tribal-education-backend.onrender.com`
4. **Test it**: Visit `https://YOUR-BACKEND-URL.onrender.com/api/health`
   - You should see: `{"ok":true,"service":"tribal-education-backend","time":"..."}`

**✅ SAVE YOUR BACKEND URL!** You'll need it for the frontend.

---

## 🌐 Step 3: Deploy Frontend to Netlify

### 3.1 Update Frontend Environment Variable Locally
Create/update `.env` file in the root directory:
```bash
VITE_API_BASE=https://YOUR-BACKEND-URL.onrender.com/api
```
Replace `YOUR-BACKEND-URL` with your actual Render URL.

### 3.2 Commit and Push
```bash
# Note: .env should NOT be committed (it's in .gitignore)
# We'll set it in Netlify dashboard instead
git add .
git commit -m "Update backend configuration"
git push origin main
```

### 3.3 Deploy to Netlify

#### Option A: Using Netlify Dashboard (Easier)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize
4. Select your repository
5. **Configure build settings:**
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click **"Show advanced"** → **"New variable"**
   
6. **Add Environment Variable:**
   - **Key**: `VITE_API_BASE`
   - **Value**: `https://YOUR-BACKEND-URL.onrender.com/api`

7. Click **"Deploy site"**
8. Wait 3-5 minutes for deployment
9. You'll get a URL like: `https://amazing-site-name-123.netlify.app`

#### Option B: Using Netlify CLI (Advanced)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build your app
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Follow the prompts to create a new site
```

---

## 🔗 Step 4: Update CORS Configuration

Now that you have both URLs, update your backend's CORS:

1. Go to Render dashboard
2. Select your backend service
3. Go to **"Environment"**
4. Update **CLIENT_ORIGIN** to your Netlify URL:
   ```
   CLIENT_ORIGIN=https://your-actual-frontend.netlify.app
   ```
5. Save changes (Render will auto-redeploy)

---

## 🎉 Step 5: Test Your Deployment

1. **Visit your Netlify URL**: `https://your-site.netlify.app`
2. **Test the app**:
   - ✅ Homepage loads
   - ✅ Login/signup works
   - ✅ Dashboard accessible
   - ✅ Voice features work (HTTPS required)
   - ✅ Progress tracking works

---

## 📱 Your Shareable Link

**🎊 Your app is now live!**

**Frontend URL (Share this)**: `https://your-site.netlify.app`
**Backend API**: `https://your-backend.onrender.com/api`

You can share the frontend URL with anyone, and they can access your app!

---

## 🔧 Troubleshooting

### Issue: Frontend can't connect to backend
**Solution:**
- Open browser console (F12)
- Check for CORS errors
- Verify `VITE_API_BASE` in Netlify environment variables
- Verify `CLIENT_ORIGIN` in Render matches your Netlify URL

### Issue: Backend shows "Failed to connect to Firebase"
**Solution:**
- Check that `FIREBASE_CONFIG` environment variable is set correctly in Render
- Ensure the JSON is properly formatted (no line breaks within the JSON string)
- Check Render logs for detailed error messages

### Issue: "Free instance will spin down with inactivity"
**Note:** Render's free tier sleeps after 15 minutes of inactivity. First request after sleep takes ~30 seconds to wake up. This is normal for free tier.

### Issue: Voice features not working
**Solution:**
- ✅ HTTPS is automatically provided by Netlify
- Allow microphone permissions when prompted
- Use Chrome or Edge browser (best support)

---

## 🔄 Updating Your Deployment

### After making changes:
```bash
# Commit changes
git add .
git commit -m "Your update message"
git push origin main

# Both Netlify and Render will automatically redeploy!
```

---

## 💰 Cost

**Everything is FREE!**
- ✅ Netlify Free: 100GB bandwidth/month
- ✅ Render Free: 750 hours/month
- ✅ Firebase Free: 1GB storage, 10GB/month transfer
- ✅ Total monthly cost: $0

---

## 📞 Need Help?

- **Render Docs**: https://docs.render.com
- **Netlify Docs**: https://docs.netlify.com
- **Firebase Docs**: https://firebase.google.com/docs

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Backend health check works (`/api/health`)
- [ ] Frontend environment variable set in Netlify
- [ ] Frontend deployed to Netlify
- [ ] CORS updated with correct frontend URL
- [ ] Login/authentication tested
- [ ] Voice features tested
- [ ] Shareable link ready! 🎉

---

**Congratulations! Your app is now live and shareable! 🚀**

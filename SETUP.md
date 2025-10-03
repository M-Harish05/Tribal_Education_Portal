# Tribal Education Portal - Setup Instructions

## Quick Start Guide

### 1. Extract Files
Extract the zip file to your desired location on your computer.

### 2. Local Server Setup (Required for full PWA functionality)

#### Option A: Using Python (if installed)
```bash
cd tribal-education-portal
python -m http.server 8000
```
Then open: http://localhost:8000

#### Option B: Using Node.js (if installed)
```bash
cd tribal-education-portal
npx http-server
```

#### Option C: Using VS Code Live Server Extension
1. Open the folder in VS Code
2. Install "Live Server" extension
3. Right-click on index.html
4. Select "Open with Live Server"

### 3. Mobile Testing
1. Make sure your computer and phone are on the same network
2. Find your computer's IP address
3. Open http://YOUR_IP_ADDRESS:8000 on your mobile browser
4. Test the "Add to Home Screen" functionality

### 4. Production Deployment
- Upload all files to your web hosting service
- Ensure HTTPS is enabled for full PWA features
- Test all functionality after deployment

## Features to Test

### Basic Functionality
- ✅ Language selection (Telugu/English)
- ✅ Voice commands and text-to-speech
- ✅ Navigation between modules
- ✅ Offline functionality (disconnect internet and test)
- ✅ Mobile responsive design

### Learning Features
- ✅ Telugu alphabet learning with audio
- ✅ Number learning system
- ✅ Traditional stories with narration
- ✅ Government schemes information
- ✅ Community features

### PWA Features
- ✅ Install app on mobile device
- ✅ Offline operation after installation
- ✅ App-like experience on mobile

## Troubleshooting

### Voice Features Not Working
- Ensure HTTPS connection (required for speech API)
- Allow microphone permissions in browser
- Check browser compatibility

### PWA Installation Issues
- Must be served over HTTPS
- Browser must support service workers
- Check for manifest.json accessibility

### Offline Features Not Working
- Service worker may need HTTPS
- Clear browser cache and reload
- Check console for service worker errors

## Browser Console Testing
Open Developer Tools (F12) and check:
- No error messages in Console tab
- Service Worker registered in Application tab
- Offline mode works in Network tab

## Performance Optimization
The app is optimized for:
- Low-end Android devices
- Slow internet connections
- Limited data usage
- Battery efficiency

Enjoy building technology for tribal empowerment! 🚀

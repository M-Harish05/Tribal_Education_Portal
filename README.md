# Tribal Education Web App

A comprehensive bilingual (English/Telugu) educational platform designed specifically for tribal communities, featuring voice navigation, interactive learning modules, and cultural preservation tools.

## 🎤 Voice Features

### Voice Navigation
- **Hands-free navigation** using voice commands
- **Bilingual support** for English and Telugu
- **Voice input** for mobile number entry
- **Speech synthesis** for audio feedback

### Voice Commands
- Say "Home" to go to dashboard
- Say "Learn" to start learning
- Say "Schemes" for government schemes
- Say "Culture" for traditional knowledge
- Say "Progress" to view your progress
- Say "Stories" for stories and games

### Requirements for Voice Features
- **HTTPS/SSL Certificate** (Required for production)
- **Microphone permissions** (User must grant access)
- **Modern browser** (Chrome/Edge recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.x or higher)
- npm or yarn
- HTTPS-enabled hosting (for voice features)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```

### Production Deployment
```bash
# Build for production
npm run build

# Deploy to Netlify
npm run deploy:netlify

# Deploy to Vercel
npm run deploy:vercel
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with concurrent features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router v6** - Declarative routing
- **Framer Motion** - Smooth animations
- **Web Speech API** - Voice recognition and synthesis

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📱 Key Features

### Learning Modules
- **Basic Literacy Learning** - Interactive lessons with progress tracking
- **Traditional Knowledge Hub** - Cultural stories and heritage preservation
- **Government Schemes Hub** - Information about tribal welfare programs
- **Stories & Games** - Educational games and interactive stories
- **Progress Tracking** - Achievement badges and learning analytics

### Accessibility Features
- **Voice-First Design** - Complete voice navigation capability
- **Offline Support** - Works without internet connection
- **Touch-Friendly** - Optimized for mobile devices
- **Cultural Sensitivity** - Designed specifically for tribal communities

## 🔧 Voice Features Troubleshooting

### Voice Features Not Working?
1. **Check HTTPS**: Ensure site is served over HTTPS
2. **Check Browser Console**: Look for security errors
3. **Check Permissions**: Verify microphone access
4. **Check Browser Support**: Test in Chrome/Edge

### Common Issues
- **"Voice features require HTTPS"**: Deploy with SSL certificate
- **"Microphone access denied"**: Allow microphone permissions
- **"Voice features not supported"**: Use supported browser

### Testing Voice Features
The app includes a voice test component accessible at `/voice-test` (if implemented) that shows:
- HTTPS/SSL status
- Browser support
- Microphone permissions
- Detailed error messages

## 📦 Deployment

### Netlify (Recommended)
```bash
npm run deploy:netlify
```

### Vercel
```bash
npm run deploy:vercel
```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Ensure HTTPS is enabled
4. Configure proper headers (see `netlify.toml`)

## 🎯 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   └── VoiceTestComponent.jsx  # Voice testing component
├── pages/              # Page components
├── contexts/           # React contexts
├── utils/              # Utility functions
│   └── voiceUtils.js   # Voice API utilities
└── styles/             # Global styles
```

### Voice API Integration
- **VoiceManager Class**: Centralized voice functionality
- **Error Handling**: Comprehensive error management
- **Fallback Support**: Graceful degradation
- **Permission Management**: Microphone access handling

## 🔒 Security

### HTTPS Requirements
- Voice features require secure context
- SSL certificate mandatory for production
- Security headers configured for voice APIs

### Privacy
- Microphone access requested only when needed
- No voice data stored permanently
- Local processing only (no cloud voice services)

## 📊 Performance

- **Code Splitting**: Voice utilities loaded separately
- **Bundle Optimization**: Optimized for production
- **Caching**: Static assets cached appropriately
- **Error Boundaries**: Graceful error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test voice features thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS
- Voice features powered by Web Speech API

---

**Note**: Voice features require HTTPS in production. Ensure your hosting provider supports SSL certificates for full functionality.

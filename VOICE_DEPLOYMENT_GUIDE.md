# Voice Features Deployment Guide

## Overview
This guide ensures that voice features work properly when deployed to production environments.

## Requirements for Voice Features

### 1. HTTPS/SSL Certificate
- **Critical**: Web Speech API requires HTTPS in production
- Voice features will NOT work on HTTP sites
- Ensure your hosting provider supports HTTPS

### 2. Browser Support
- Chrome/Edge: Full support
- Firefox: Limited support
- Safari: Limited support
- Mobile browsers: Varies by platform

### 3. Microphone Permissions
- Users must grant microphone access
- Browser will prompt for permission on first use

## Deployment Platforms

### Netlify (Recommended)
```bash
# Deploy with HTTPS automatically enabled
npm run build
# Upload dist folder to Netlify
```

**netlify.toml** configuration:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Permissions-Policy = "microphone=(), camera=()"
    Feature-Policy = "microphone 'self'"
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### GitHub Pages
- Requires custom domain with HTTPS
- Voice features may not work on github.io domains

### AWS S3 + CloudFront
- Enable HTTPS on CloudFront distribution
- Configure proper CORS headers

## Testing Voice Features

### Local Testing
```bash
# Start development server
npm start

# Test voice features
# Note: May not work on localhost without HTTPS
```

### Production Testing
1. Deploy to staging environment with HTTPS
2. Test voice navigation
3. Test voice input
4. Test speech synthesis
5. Verify microphone permissions

## Troubleshooting

### Voice Features Not Working
1. **Check HTTPS**: Ensure site is served over HTTPS
2. **Check Browser Console**: Look for security errors
3. **Check Permissions**: Verify microphone access
4. **Check Browser Support**: Test in Chrome/Edge

### Common Errors
- `not-allowed`: Microphone permission denied
- `network`: Network connectivity issues
- `service-not-allowed`: HTTPS required
- `no-speech`: No speech detected

### Fallback Behavior
- Voice buttons show error messages
- Manual input options available
- Graceful degradation for unsupported browsers

## Security Considerations

### Permissions Policy
```html
<meta http-equiv="Permissions-Policy" content="microphone=()">
```

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; media-src 'self'">
```

## Performance Optimization

### Code Splitting
- Voice utilities are loaded separately
- Reduces initial bundle size
- Improves loading performance

### Error Handling
- Comprehensive error messages
- User-friendly fallbacks
- Detailed logging for debugging

## Monitoring

### Analytics
- Track voice feature usage
- Monitor error rates
- Identify browser compatibility issues

### Logging
- Voice API errors logged to console
- Support information available
- Debug mode for troubleshooting

## Best Practices

1. **Always use HTTPS** in production
2. **Test on multiple browsers** and devices
3. **Provide clear error messages** to users
4. **Implement graceful fallbacks** for unsupported browsers
5. **Request permissions** before using voice features
6. **Handle errors gracefully** with user feedback

## Support Information

The app includes a voice status indicator that shows:
- HTTPS/SSL status
- Browser support
- Microphone permissions
- Detailed error messages

This helps users understand why voice features might not be working.

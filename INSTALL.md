# 📋 Installation Guide
## Tribal Education Portal - Setup Instructions

### 🎯 **Quick Installation**

The Tribal Education Portal is a client-side Progressive Web App (PWA) that requires no server-side dependencies. You just need a web server to serve the static files.

---

## 🖥️ **System Requirements**

### **Minimum Requirements**
- **OS**: Windows 7+, macOS 10.12+, Ubuntu 16.04+, or any modern Linux distribution
- **RAM**: 2GB (4GB recommended)
- **Storage**: 50MB free space
- **Browser**: Chrome 60+, Firefox 55+, Safari 13+, or Edge 79+
- **Internet**: Required for initial setup, then works offline

### **Recommended for Best Experience**
- **Mobile Device**: Android 7.0+ or iOS 13+
- **Network**: WiFi for mobile testing
- **Microphone**: For voice command features
- **Speakers/Headphones**: For audio content

---

## 🚀 **Installation Methods**

### **Method 1: Python (Recommended)**
*Works on all operating systems with Python installed*

```bash
# 1. Clone or download the repository
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal

# 2. Start the server
python3 -m http.server 8000

# 3. Open in browser
# Navigate to: http://localhost:8000
```

### **Method 2: Node.js**
*For developers familiar with Node.js*

```bash
# 1. Clone the repository
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal

# 2. Install and run http-server
npx http-server -p 8000

# 3. Access the application
# Navigate to: http://localhost:8000
```

### **Method 3: Live Server (VS Code)**
*For VS Code users*

```bash
# 1. Install VS Code Live Server extension
# 2. Open project folder in VS Code
# 3. Right-click index.html → "Open with Live Server"
```

---

## 🐧 **Linux Installation**

### **Ubuntu/Debian**
```bash
# Update package list
sudo apt update

# Install Python 3 (usually pre-installed)
sudo apt install python3

# Clone and run
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python3 -m http.server 8000

# Open browser
xdg-open http://localhost:8000
```

### **CentOS/RHEL/Fedora**
```bash
# Install Python 3
sudo yum install python3  # CentOS/RHEL
sudo dnf install python3  # Fedora

# Clone and run
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python3 -m http.server 8000

# Open browser
firefox http://localhost:8000
```

### **Arch Linux**
```bash
# Install Python (usually pre-installed)
sudo pacman -S python

# Clone and run
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python -m http.server 8000
```

---

## 🪟 **Windows Installation**

### **Method 1: Using Python**
```cmd
# 1. Install Python from python.org (if not installed)
# 2. Open Command Prompt or PowerShell

# Clone the repository
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal

# Start server
python -m http.server 8000

# Open browser and go to: http://localhost:8000
```

### **Method 2: Using XAMPP**
```cmd
# 1. Download and install XAMPP
# 2. Copy project files to: C:\xampp\htdocs\tribal-portal\
# 3. Start XAMPP Control Panel
# 4. Start Apache service
# 5. Open: http://localhost/tribal-portal/
```

---

## 🍎 **macOS Installation**

### **Using Built-in Python**
```bash
# Open Terminal
# Clone repository
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal

# Start server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

---

## 📱 **Mobile Device Testing**

### **Local Network Access**
```bash
# 1. Find your computer's IP address
# Linux/macOS:
hostname -I

# Windows:
ipconfig

# 2. Start server on your computer
python3 -m http.server 8000

# 3. On mobile browser, visit:
# http://YOUR_IP_ADDRESS:8000
# Example: http://192.168.1.100:8000
```

### **PWA Installation on Mobile**
1. Open the web app in mobile browser
2. Look for "Add to Home Screen" prompt
3. Tap "Add" or "Install"
4. App will be installed like a native app
5. Can be used offline after installation

---

## 🌐 **Production Deployment**

### **GitHub Pages (Free)**
```bash
# 1. Fork the repository on GitHub
# 2. Go to repository settings
# 3. Enable GitHub Pages from main branch
# 4. Access at: https://your-username.github.io/tribal-education-portal
```

### **Netlify (Free)**
```bash
# 1. Connect GitHub repository to Netlify
# 2. Deploy automatically on every commit
# 3. Get custom URL: https://your-app-name.netlify.app
```

---

## 🔧 **Troubleshooting**

### **Common Issues**

#### **Port 8000 already in use**
```bash
# Find process using port
sudo netstat -tulpn | grep :8000

# Kill the process
sudo kill -9 [PID]

# Use different port
python3 -m http.server 8080
```

#### **Python not found**
```bash
# Check Python installation
python --version
python3 --version

# Install Python:
# Ubuntu: sudo apt install python3
# CentOS: sudo yum install python3
# Windows: Download from python.org
# macOS: brew install python3
```

#### **Permission denied**
```bash
# Linux/macOS: Make files readable
chmod -R 755 tribal-education-portal/

# Windows: Run as administrator
```

#### **Firewall blocking access**
```bash
# Linux: Allow port through firewall
sudo ufw allow 8000

# Windows: Add firewall rule for port 8000
```

### **Browser Issues**

#### **Voice features not working**
- Ensure HTTPS connection (required for microphone access)
- Allow microphone permissions in browser
- Check browser compatibility with Web Speech API

#### **PWA installation not available**
- Must be served over HTTPS
- Check browser PWA support
- Ensure manifest.json is accessible

#### **Offline features not working**
- Service worker requires HTTPS
- Clear browser cache and reload
- Check browser console for errors

---

## ✅ **Verification Steps**

### **Basic Functionality Test**
1. ✅ **Language Selection** - Can switch between Telugu and English
2. ✅ **Navigation** - All menu items work correctly
3. ✅ **Voice Commands** - "గృహం", "నేర్చుకోవడం" work (with microphone permission)
4. ✅ **Learning Modules** - Telugu alphabets display and play audio
5. ✅ **Responsive Design** - Works on mobile and desktop
6. ✅ **Offline Mode** - Disconnect internet, app still functions

### **PWA Features Test**
1. ✅ **Installation** - "Add to Home Screen" option appears
2. ✅ **Standalone Mode** - Runs like native app after installation
3. ✅ **Offline Access** - Works without internet after first load

### **Performance Test**
1. ✅ **Load Time** - Initial page loads within 3 seconds
2. ✅ **Smooth Animations** - No lag during transitions
3. ✅ **Memory Usage** - Reasonable RAM consumption
4. ✅ **Battery Impact** - Minimal battery drain on mobile

---

## 🆘 **Getting Help**

### **Self-Help Resources**
- 📖 **README.md** - Main project documentation
- 🐛 **Browser Console** - Check for error messages (F12)
- 🔍 **Network Tab** - Monitor file loading issues
- 📱 **Mobile Testing** - Use browser developer tools

### **Community Support**
- 🐛 **GitHub Issues** - Report bugs and get help
- 💬 **Discussions** - Community Q&A and feature requests
- 📧 **Email Support** - Direct contact for urgent issues

---

## 🚀 **Quick Start Commands**

### **Ubuntu/Linux**
```bash
sudo apt update && sudo apt install python3 git -y
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python3 -m http.server 8000 &
xdg-open http://localhost:8000
```

### **Windows (PowerShell)**
```powershell
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python -m http.server 8000
Start-Process "http://localhost:8000"
```

### **macOS**
```bash
git clone https://github.com/your-username/tribal-education-portal.git
cd tribal-education-portal
python3 -m http.server 8000 &
open http://localhost:8000
```

---

<div align="center">

## 🎉 **Installation Complete!**

**Your Tribal Education Portal is now ready to use!**

📱 **Mobile**: http://YOUR_IP:8000  
💻 **Desktop**: http://localhost:8000  
🌐 **Online**: https://your-username.github.io/tribal-education-portal

---

**Need help? Create an issue on GitHub or contact us!**

</div>
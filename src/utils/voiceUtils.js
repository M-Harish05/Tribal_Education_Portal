// Voice recognition and synthesis utilities for Telugu and English

export class VoiceManager {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    this.isSpeaking = false;
    this.currentLanguage = 'en-US';
    this.isSecureContext = this.checkSecureContext();
    this.isSupported = this.checkBrowserSupport();
    
    this.initializeRecognition();
  }

  // Check if we're in a secure context (HTTPS or localhost)
  checkSecureContext() {
    // Always allow localhost and 127.0.0.1 for development
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname === '0.0.0.0') {
      return true;
    }
    
    // For production, require HTTPS or secure context
    return window.isSecureContext || 
           window.location.protocol === 'https:' || 
           window.location.hostname.includes('netlify.app') ||
           window.location.hostname.includes('vercel.app') ||
           window.location.hostname.includes('github.io') ||
           window.location.hostname.includes('herokuapp.com');
  }

  // Check browser support for Web Speech API
  checkBrowserSupport() {
    const hasRecognition = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    const hasSynthesis = 'speechSynthesis' in window;
    const isSecure = this.isSecureContext;
    
    console.log('Voice API Support Check:', {
      hasRecognition,
      hasSynthesis,
      isSecure,
      protocol: window.location.protocol,
      hostname: window.location.hostname,
      isLocalhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
      userAgent: navigator.userAgent,
      windowIsSecureContext: window.isSecureContext
    });
    
    // For localhost, be more lenient - only require recognition and synthesis
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname === '0.0.0.0') {
      return hasRecognition && hasSynthesis;
    }
    
    // For production, require secure context
    return hasRecognition && hasSynthesis && isSecure;
  }

  initializeRecognition() {
    // Check if speech recognition is available
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech recognition not supported in this browser');
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      
      this.recognition.continuous = false;
      this.recognition.interimResults = false; // Disable interim results to reduce network load
      this.recognition.maxAlternatives = 1; // Reduce alternatives to minimize network usage
      this.recognition.lang = 'en-US'; // Set explicit language
      
      this.recognition.onstart = () => {
        this.isListening = true;
        console.log('Voice recognition started');
      };
      
      this.recognition.onend = () => {
        this.isListening = false;
        console.log('Voice recognition ended');
      };
      
      this.recognition.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
        this.isListening = false;
        
        // Handle specific error types
        if (event.error === 'not-allowed') {
          console.warn('Microphone access denied. Please allow microphone permissions.');
        } else if (event.error === 'network') {
          console.warn('Network error occurred during speech recognition.');
        }
      };
      
      console.log('Speech recognition initialized successfully');
    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
      this.recognition = null;
    }
  }

  // Set language for recognition and synthesis
  setLanguage(language) {
    this.currentLanguage = language;
    
    if (this.recognition) {
      // Map our language codes to speech recognition languages
      const recognitionLanguages = {
        'english': 'en-US',
        'telugu': 'te-IN'
      };
      
      this.recognition.lang = recognitionLanguages[language] || 'en-US';
    }
  }

  // Start listening for voice input
  startListening(onResult, onError) {
    if (!this.isSupported) {
      const errorMsg = !this.isSecureContext 
        ? 'Voice features require HTTPS. Please use a secure connection.'
        : 'Voice recognition not supported in this browser';
      onError(errorMsg);
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    // Simple, direct approach
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      this.isListening = true;
      console.log('Voice recognition started');
    };

    recognition.onend = () => {
      this.isListening = false;
      console.log('Voice recognition ended');
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      console.log('Speech recognition result:', result);
      onResult(result);
    };

    recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
      this.isListening = false;
      
      let errorMessage = 'Voice recognition error';
      
      switch (event.error) {
        case 'not-allowed':
          errorMessage = 'Microphone access denied. Please check your browser settings and allow microphone access for this site.';
          break;
        case 'no-speech':
          errorMessage = 'No speech detected. Please try speaking again.';
          break;
        case 'network':
          errorMessage = 'Network error. Please check your internet connection and try again.';
          break;
        case 'service-not-allowed':
          errorMessage = 'Voice service not allowed. Please use HTTPS.';
          break;
        case 'aborted':
          errorMessage = 'Voice recognition was stopped.';
          break;
        default:
          errorMessage = `Voice recognition error: ${event.error}`;
      }
      
      onError(errorMessage);
    };

    try {
      recognition.start();
      
      // Set a timeout to prevent hanging
      setTimeout(() => {
        if (this.isListening) {
          console.log('Speech recognition timeout - stopping');
          recognition.stop();
          onError('No speech detected. Please try again.');
        }
      }, 10000); // 10 second timeout
      
    } catch (error) {
      console.error('Failed to start voice recognition:', error);
      onError('Failed to start voice recognition. Please try again.');
    }
  }

  // Stop listening
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  // Speak text with proper Telugu pronunciation
  speak(text, options = {}) {
    if (!this.isSupported) {
      console.warn('Speech synthesis not supported or not in secure context');
      if (options.onError) {
        options.onError('Speech synthesis not available');
      }
      return;
    }

    if (this.isSpeaking) {
      this.stopSpeaking();
    }

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice settings
      utterance.lang = this.currentLanguage === 'telugu' ? 'te-IN' : 'en-US';
      utterance.rate = options.rate || 0.8;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // Wait for voices to load before setting voice
      const setVoice = () => {
        if (this.currentLanguage === 'telugu') {
          const voices = this.synthesis.getVoices();
          const teluguVoice = voices.find(voice => 
            voice.lang.includes('te') || 
            voice.name.includes('Telugu') ||
            voice.name.includes('తెలుగు')
          );
          
          if (teluguVoice) {
            utterance.voice = teluguVoice;
          }
        }
      };

      // Set voice immediately if voices are loaded, otherwise wait
      if (this.synthesis.getVoices().length > 0) {
        setVoice();
      } else {
        this.synthesis.onvoiceschanged = setVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        if (options.onStart) options.onStart();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        if (options.onEnd) options.onEnd();
      };

      utterance.onerror = (event) => {
        this.isSpeaking = false;
        console.error('Speech synthesis error:', event.error);
        if (options.onError) {
          let errorMessage = 'Speech synthesis error';
          switch (event.error) {
            case 'not-allowed':
              errorMessage = 'Speech synthesis not allowed. Please use HTTPS.';
              break;
            case 'network':
              errorMessage = 'Network error during speech synthesis.';
              break;
            default:
              errorMessage = `Speech synthesis error: ${event.error}`;
          }
          options.onError(errorMessage);
        }
      };

      this.synthesis.speak(utterance);
    } catch (error) {
      console.error('Failed to create speech utterance:', error);
      if (options.onError) {
        options.onError('Failed to create speech utterance');
      }
    }
  }

  // Stop speaking
  stopSpeaking() {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
      this.isSpeaking = false;
    }
  }

  // Speak with Telugu pronunciation guide
  speakWithPronunciation(text, pronunciation) {
    const fullText = `${text}. ${pronunciation}`;
    this.speak(fullText);
  }

  // Get available voices
  getAvailableVoices() {
    return this.synthesis.getVoices();
  }

  // Check if voice recognition is supported
  isRecognitionSupported() {
    return this.isSupported;
  }

  // Check if speech synthesis is supported
  isSynthesisSupported() {
    return this.isSupported;
  }

  // Get detailed support information
  getSupportInfo() {
    return {
      isSupported: this.isSupported,
      isSecureContext: this.isSecureContext,
      hasRecognition: !!this.recognition,
      hasSynthesis: !!this.synthesis,
      protocol: window.location.protocol,
      hostname: window.location.hostname,
      userAgent: navigator.userAgent,
      speechRecognitionAvailable: 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window,
      speechSynthesisAvailable: 'speechSynthesis' in window
    };
  }

  // Get Telugu pronunciation for common words
  getTeluguPronunciation(word) {
    const pronunciations = {
      'hello': 'హలో',
      'thank you': 'ధన్యవాదాలు',
      'good': 'మంచిది',
      'bad': 'చెడ్డది',
      'yes': 'అవును',
      'no': 'కాదు',
      'please': 'దయచేసి',
      'sorry': 'క్షమించండి',
      'welcome': 'స్వాగతం',
      'goodbye': 'వీడ్కోలు',
      'name': 'పేరు',
      'age': 'వయస్సు',
      'home': 'ఇల్లు',
      'school': 'పాఠశాల',
      'book': 'పుస్తకం',
      'water': 'నీరు',
      'food': 'ఆహారం',
      'mother': 'అమ్మ',
      'father': 'నాన్న',
      'brother': 'సోదరుడు',
      'sister': 'సోదరి'
    };

    return pronunciations[word.toLowerCase()] || word;
  }

  // Convert English text to Telugu transliteration
  transliterateToTelugu(text) {
    const transliterationMap = {
      'a': 'అ', 'aa': 'ఆ', 'i': 'ఇ', 'ii': 'ఈ', 'u': 'ఉ', 'uu': 'ఊ',
      'e': 'ఎ', 'ee': 'ఏ', 'o': 'ఒ', 'oo': 'ఓ', 'ai': 'ఐ', 'au': 'ఔ',
      'k': 'క', 'kh': 'ఖ', 'g': 'గ', 'gh': 'ఘ', 'ng': 'ఙ',
      'c': 'చ', 'ch': 'ఛ', 'j': 'జ', 'jh': 'ఝ', 'ny': 'ఞ',
      't': 'త', 'th': 'థ', 'd': 'ద', 'dh': 'ధ', 'n': 'న',
      'p': 'ప', 'ph': 'ఫ', 'b': 'బ', 'bh': 'భ', 'm': 'మ',
      'y': 'య', 'r': 'ర', 'l': 'ల', 'v': 'వ', 'sh': 'శ',
      's': 'స', 'h': 'హ', 'ksh': 'క్ష', 'jny': 'జ్ఞ'
    };

    // Simple transliteration (this is a basic implementation)
    let result = text.toLowerCase();
    
    // Replace common English words with Telugu equivalents
    const wordMap = {
      'hello': 'హలో',
      'thank you': 'ధన్యవాదాలు',
      'good': 'మంచిది',
      'yes': 'అవును',
      'no': 'కాదు'
    };

    Object.entries(wordMap).forEach(([english, telugu]) => {
      result = result.replace(new RegExp(english, 'gi'), telugu);
    });

    return result;
  }
}

// Create a singleton instance
export const voiceManager = new VoiceManager();

// Utility functions for common voice operations
export const speakText = (text, language = 'english', options = {}) => {
  voiceManager.setLanguage(language);
  voiceManager.speak(text, options);
};

export const startVoiceInput = (onResult, onError, language = 'english') => {
  voiceManager.setLanguage(language);
  voiceManager.startListening(onResult, onError);
};

export const stopVoiceInput = () => {
  voiceManager.stopListening();
};

export const stopSpeaking = () => {
  voiceManager.stopSpeaking();
};

export const isVoiceSupported = () => {
  return voiceManager.isRecognitionSupported() && voiceManager.isSynthesisSupported();
};

export const getVoiceSupportInfo = () => {
  return voiceManager.getSupportInfo();
};

// Manual permission request that might work better
export const requestMicrophoneAccess = async () => {
  try {
    console.log('Requesting microphone access...');
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
    console.log('Microphone access granted');
    // Stop the stream immediately - we just needed permission
    stream.getTracks().forEach(track => {
      track.stop();
      console.log('Stopped track:', track.label);
    });
    return true;
  } catch (error) {
    console.error('Microphone access denied:', error);
    return false;
  }
};

export default voiceManager;

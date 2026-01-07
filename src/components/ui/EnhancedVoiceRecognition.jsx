import React, { useState, useEffect, useRef } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const EnhancedVoiceRecognition = ({ 
  onResult, 
  onError, 
  expectedAnswer = '', 
  expectedAnswerTelugu = '',
  isListening = false,
  onStartListening,
  onStopListening,
  className = ''
}) => {
  const [recognition, setRecognition] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en-US');
  const [confidence, setConfidence] = useState(0);
  const [lastTranscript, setLastTranscript] = useState('');
  const recognitionRef = useRef(null);

  // Helper function to convert numbers to Telugu words
  const convertNumbersToTelugu = (text) => {
    // Telugu number words mapping
    const teluguNumbers = {
      '0': 'సున్నా',
      '1': 'ఒకటి',
      '2': 'రెండు',
      '3': 'మూడు',
      '4': 'నాలుగు',
      '5': 'అయిదు',  // Using అయిదు as it matches lesson data
      '6': 'ఆరు',
      '7': 'ఏడు',
      '8': 'ఎనిమిది',
      '9': 'తొమ్మిది',
      '10': 'పది',
      '11': 'పదకొండు',
      '12': 'పన్నెండు',
      '13': 'పదమూడు',
      '14': 'పద్నాలుగు',
      '15': 'పదిహేను',
      '16': 'పదహారు',
      '17': 'పదిహేడు',
      '18': 'పద్దెనిమిది',
      '19': 'పందొమ్మిది',
      '20': 'ఇరవై'
    };

    // If the entire text is just a number, convert it
    if (/^\d+$/.test(text.trim())) {
      return teluguNumbers[text.trim()] || text;
    }

    // Replace any numbers in the text with Telugu words
    return text.replace(/\d+/g, (match) => teluguNumbers[match] || match);
  };

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.maxAlternatives = 3;
      
      recognitionInstance.onstart = () => {
        console.log('Voice recognition started');
      };
      
      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        let maxConfidence = 0;
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          const confidence = event.results[i][0].confidence;
          
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
            maxConfidence = Math.max(maxConfidence, confidence);
          } else {
            interimTranscript += transcript;
          }
        }
        
        // Convert numbers to Telugu if using Telugu language
        const currentLang = recognitionInstance.lang || 'en-US';
        if (currentLang === 'te-IN') {
          if (finalTranscript) {
            finalTranscript = convertNumbersToTelugu(finalTranscript);
          }
          if (interimTranscript) {
            interimTranscript = convertNumbersToTelugu(interimTranscript);
          }
        }
        
        setLastTranscript(interimTranscript || finalTranscript);
        setConfidence(maxConfidence);
        
        if (finalTranscript) {
          onResult(finalTranscript, maxConfidence);
        }
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
        let errorMessage = 'Voice recognition error';
        
        switch (event.error) {
          case 'not-allowed':
            errorMessage = 'Microphone access denied. Please allow microphone access for this site.';
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
      
      recognitionInstance.onend = () => {
        console.log('Voice recognition ended');
        onStopListening?.();
      };
      
      setRecognition(recognitionInstance);
      setIsSupported(true);
    } else {
      setIsSupported(false);
      onError('Voice recognition not supported in this browser');
    }
  }, [onResult, onError, onStopListening]);

  // Determine optimal language based on expected answers
  useEffect(() => {
    if (recognition) {
      const hasEnglish = /^[A-Za-z\s]+$/.test(expectedAnswer) && expectedAnswer.length > 0;
      const hasTelugu = /[\u0C00-\u0C7F]/.test(expectedAnswerTelugu) && expectedAnswerTelugu.length > 0;
      
      // Prefer Telugu if both are available, otherwise use English
      const language = (hasTelugu && expectedAnswerTelugu) ? 'te-IN' : 'en-US';
      recognition.lang = language;
      setCurrentLanguage(language);
    }
  }, [recognition, expectedAnswer, expectedAnswerTelugu]);

  const startListening = () => {
    if (recognition && !isListening) {
      try {
        recognition.start();
        onStartListening?.();
      } catch (error) {
        console.error('Failed to start recognition:', error);
        onError('Failed to start voice recognition. Please try again.');
      }
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
    }
  };

  if (!isSupported) {
    return (
      <div className={`text-center p-4 bg-muted/50 rounded-tribal ${className}`}>
        <Icon name="MicOff" size={24} className="text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">
          Voice recognition not supported in this browser
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Voice Recognition Button */}
      <div className="flex flex-col items-center space-y-2">
        <Button
          variant={isListening ? "default" : "outline"}
          onClick={isListening ? stopListening : startListening}
          disabled={!isSupported}
          iconName={isListening ? "Mic" : "Mic"}
          iconPosition="left"
          className={`${isListening ? 'voice-pulse bg-primary text-primary-foreground' : ''} transition-all duration-200`}
        >
          {isListening ? 'Listening... (Click to Stop)' : 'Speak the Answer'}
        </Button>
        
        {/* Language Indicator */}
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Globe" size={14} />
          <span>
            {currentLanguage === 'te-IN' ? 'Telugu (తెలుగు)' : 'English'}
          </span>
        </div>
      </div>

      {/* Live Transcript Display */}
      {lastTranscript && (
        <div className="bg-muted/30 border border-border rounded-tribal p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">You said:</span>
            {confidence > 0 && (
              <span className="text-xs text-muted-foreground">
                Confidence: {Math.round(confidence * 100)}%
              </span>
            )}
          </div>
          <p className="text-sm text-foreground font-medium">
            "{lastTranscript}"
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Speak clearly in {currentLanguage === 'te-IN' ? 'Telugu' : 'English'}</p>
        <p>Expected: {expectedAnswerTelugu || expectedAnswer}</p>
      </div>
    </div>
  );
};

export default EnhancedVoiceRecognition;

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { voiceManager } from '../../../utils/voiceUtils';

const VoiceInputButton = ({ onVoiceInput, isListening, disabled }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkSupport = () => {
      const supported = voiceManager.isRecognitionSupported() && voiceManager.isSynthesisSupported();
      setIsSupported(supported);
      
      if (!supported) {
        const supportInfo = voiceManager.getSupportInfo();
        if (!supportInfo.isSecureContext) {
          setErrorMessage('Voice input requires HTTPS');
        } else {
          setErrorMessage('Voice input not supported');
        }
      }
    };

    checkSupport();
  }, []);

  const handleVoiceInput = async () => {
    if (!isSupported || disabled) {
      if (errorMessage) {
        alert(errorMessage);
      }
      return;
    }

    try {
      // Request microphone permission first
      console.log('Requesting microphone permission for voice input...');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      console.log('Microphone permission granted for voice input');
      
      // Stop the stream immediately - we just needed permission
      stream.getTracks().forEach(track => track.stop());
      
      // Now start voice recognition
      voiceManager.setLanguage('telugu');
      voiceManager.startListening(
        (result) => {
          // Extract numbers from speech
          const numbers = result.replace(/\D/g, '');
          if (numbers.length >= 10) {
            onVoiceInput(numbers.slice(-10)); // Take last 10 digits
          } else {
            alert('Please speak your 10-digit mobile number clearly.');
          }
        },
        (error) => {
          console.error('Speech recognition error:', error);
          alert(`Voice input error: ${error}`);
        }
      );
    } catch (permissionError) {
      console.error('Microphone permission denied:', permissionError);
      alert('Microphone access denied. Please allow microphone access and try again.');
    }
  };

  if (!isSupported) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled={true}
        className="h-12 w-12 rounded-tribal opacity-50"
        title={`${errorMessage}. Click for manual input.`}
      >
        <Icon name="MicOff" size={20} className="text-muted-foreground" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleVoiceInput}
      disabled={disabled}
      className={`h-12 w-12 rounded-tribal ${isListening ? 'voice-pulse' : ''}`}
      title="మీ మొబైల్ నంబర్ చెప్పండి / Speak your mobile number"
    >
      <Icon 
        name={isListening ? "MicIcon" : "Mic"} 
        size={20} 
        className={isListening ? "text-primary" : "text-muted-foreground"}
      />
    </Button>
  );
};

export default VoiceInputButton;
import React, { useState } from 'react';
import { voiceManager, getVoiceSupportInfo } from '../../utils/voiceUtils';
import Button from './Button';
import Icon from '../AppIcon';
import VoiceStatusIndicator from './VoiceStatusIndicator';

const VoiceTestComponent = () => {
  const [testResult, setTestResult] = useState('');
  const [isListening, setIsListening] = useState(false);

  const testVoiceRecognition = () => {
    setIsListening(true);
    setTestResult('Listening... Speak now!');
    
    voiceManager.startListening(
      (result) => {
        setTestResult(`You said: "${result}"`);
        setIsListening(false);
      },
      (error) => {
        setTestResult(`Error: ${error}`);
        setIsListening(false);
      }
    );
  };

  const testSpeechSynthesis = () => {
    const testText = 'Hello! This is a test of speech synthesis. Voice features are working correctly.';
    
    voiceManager.speak(testText, {
      onStart: () => setTestResult('Speaking...'),
      onEnd: () => setTestResult('Speech synthesis completed!'),
      onError: (error) => setTestResult(`Speech error: ${error}`)
    });
  };

  const supportInfo = getVoiceSupportInfo();

  return (
    <div className="max-w-md mx-auto p-6 bg-card border border-border rounded-tribal shadow-tribal-lg">
      <h2 className="text-xl font-bold text-foreground mb-4">Voice Features Test</h2>
      
      <VoiceStatusIndicator />
      
      <div className="mt-4 space-y-3">
        <Button
          onClick={testVoiceRecognition}
          disabled={isListening || !supportInfo.isSupported}
          className="w-full"
        >
          <Icon name={isListening ? "Mic" : "Mic"} size={16} className="mr-2" />
          {isListening ? 'Listening...' : 'Test Voice Recognition'}
        </Button>
        
        <Button
          onClick={testSpeechSynthesis}
          disabled={!supportInfo.isSupported}
          variant="outline"
          className="w-full"
        >
          <Icon name="Volume2" size={16} className="mr-2" />
          Test Speech Synthesis
        </Button>
      </div>
      
      {testResult && (
        <div className="mt-4 p-3 bg-muted rounded-tribal">
          <p className="text-sm text-muted-foreground">{testResult}</p>
        </div>
      )}
      
      <div className="mt-4 text-xs text-muted-foreground">
        <p><strong>Protocol:</strong> {supportInfo.protocol}</p>
        <p><strong>Hostname:</strong> {supportInfo.hostname}</p>
        <p><strong>Secure Context:</strong> {supportInfo.isSecureContext ? 'Yes' : 'No'}</p>
        <p><strong>Browser:</strong> {supportInfo.userAgent.split(' ')[0]}</p>
      </div>
    </div>
  );
};

export default VoiceTestComponent;

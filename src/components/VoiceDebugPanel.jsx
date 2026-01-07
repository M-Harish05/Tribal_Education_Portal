import React, { useState, useEffect } from 'react';
import { voiceManager, getVoiceSupportInfo } from '../utils/voiceUtils';
import Button from './ui/Button';
import Icon from './AppIcon';

const VoiceDebugPanel = () => {
  const [supportInfo, setSupportInfo] = useState(null);
  const [testResult, setTestResult] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const info = getVoiceSupportInfo();
    setSupportInfo(info);
    console.log('Voice Debug Info:', info);
  }, []);

  const testVoiceRecognition = () => {
    setIsListening(true);
    setTestResult('Listening... Speak now!');
    
    voiceManager.startListening(
      (result) => {
        setTestResult(`✅ Success! You said: "${result}"`);
        setIsListening(false);
      },
      (error) => {
        setTestResult(`❌ Error: ${error}`);
        setIsListening(false);
      }
    );
  };

  const testSpeechSynthesis = () => {
    const testText = 'Hello! This is a test of speech synthesis.';
    
    voiceManager.speak(testText, {
      onStart: () => setTestResult('🔊 Speaking...'),
      onEnd: () => setTestResult('✅ Speech synthesis completed!'),
      onError: (error) => setTestResult(`❌ Speech error: ${error}`)
    });
  };

  if (!supportInfo) {
    return <div>Loading voice debug info...</div>;
  }

  return (
    <div className="fixed top-4 left-4 bg-card border border-border rounded-tribal p-4 shadow-tribal-lg max-w-sm z-50">
      <h3 className="text-lg font-bold text-foreground mb-3">🎤 Voice Debug Panel</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Protocol:</span>
          <span className={supportInfo.protocol === 'https:' ? 'text-success' : 'text-warning'}>
            {supportInfo.protocol}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Hostname:</span>
          <span className="text-muted-foreground">{supportInfo.hostname}</span>
        </div>
        <div className="flex justify-between">
          <span>Secure Context:</span>
          <span className={supportInfo.isSecureContext ? 'text-success' : 'text-error'}>
            {supportInfo.isSecureContext ? '✅' : '❌'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Recognition:</span>
          <span className={supportInfo.hasRecognition ? 'text-success' : 'text-error'}>
            {supportInfo.hasRecognition ? '✅' : '❌'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Synthesis:</span>
          <span className={supportInfo.hasSynthesis ? 'text-success' : 'text-error'}>
            {supportInfo.hasSynthesis ? '✅' : '❌'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Overall Support:</span>
          <span className={supportInfo.isSupported ? 'text-success' : 'text-error'}>
            {supportInfo.isSupported ? '✅' : '❌'}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Button
          onClick={testVoiceRecognition}
          disabled={isListening || !supportInfo.isSupported}
          className="w-full"
          size="sm"
        >
          <Icon name={isListening ? "Mic" : "Mic"} size={14} className="mr-2" />
          {isListening ? 'Listening...' : 'Test Recognition'}
        </Button>
        
        <Button
          onClick={testSpeechSynthesis}
          disabled={!supportInfo.isSupported}
          variant="outline"
          className="w-full"
          size="sm"
        >
          <Icon name="Volume2" size={14} className="mr-2" />
          Test Synthesis
        </Button>
      </div>
      
      {testResult && (
        <div className="mt-3 p-2 bg-muted rounded text-xs">
          {testResult}
        </div>
      )}
      
      <div className="mt-3 text-xs text-muted-foreground">
        <p><strong>Browser:</strong> {supportInfo.userAgent.split(' ')[0]}</p>
        <p><strong>Note:</strong> Check browser console for detailed logs</p>
      </div>
    </div>
  );
};

export default VoiceDebugPanel;

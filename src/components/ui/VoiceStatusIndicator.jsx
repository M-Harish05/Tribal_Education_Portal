import React, { useState, useEffect } from 'react';
import { getVoiceSupportInfo, requestMicrophonePermission } from '../../utils/voiceUtils';
import Button from './Button';
import Icon from '../AppIcon';

const VoiceStatusIndicator = () => {
  const [supportInfo, setSupportInfo] = useState(null);
  const [isChecking, setIsChecking] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState('unknown');

  useEffect(() => {
    const checkVoiceSupport = async () => {
      setIsChecking(true);
      
      try {
        const info = getVoiceSupportInfo();
        setSupportInfo(info);
        
        // Check microphone permission
        const hasPermission = await requestMicrophonePermission();
        setPermissionStatus(hasPermission ? 'granted' : 'denied');
      } catch (error) {
        console.error('Error checking voice support:', error);
        setPermissionStatus('error');
      } finally {
        setIsChecking(false);
      }
    };

    checkVoiceSupport();
  }, []);

  const getStatusColor = () => {
    if (isChecking) return 'text-muted-foreground';
    if (!supportInfo?.isSupported) return 'text-error';
    if (permissionStatus === 'denied') return 'text-warning';
    if (permissionStatus === 'granted') return 'text-success';
    return 'text-muted-foreground';
  };

  const getStatusText = () => {
    if (isChecking) return 'Checking voice support...';
    if (!supportInfo?.isSupported) {
      if (!supportInfo?.isSecureContext) {
        return 'Voice features require HTTPS';
      }
      return 'Voice features not supported';
    }
    if (permissionStatus === 'denied') return 'Microphone access denied';
    if (permissionStatus === 'granted') return 'Voice features ready';
    return 'Voice features available';
  };

  const getStatusIcon = () => {
    if (isChecking) return 'Loader2';
    if (!supportInfo?.isSupported) return 'MicOff';
    if (permissionStatus === 'denied') return 'AlertTriangle';
    if (permissionStatus === 'granted') return 'Mic';
    return 'Mic';
  };

  if (!supportInfo) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-tribal p-3 shadow-tribal-sm">
      <div className="flex items-center space-x-2">
        <Icon 
          name={getStatusIcon()} 
          size={16} 
          className={`${getStatusColor()} ${isChecking ? 'animate-spin' : ''}`} 
        />
        <span className={`text-sm font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </span>
      </div>
      
      {!isChecking && (
        <div className="mt-2 text-xs text-muted-foreground">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Secure Context:</span>
              <span className={supportInfo.isSecureContext ? 'text-success' : 'text-error'}>
                {supportInfo.isSecureContext ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Speech Recognition:</span>
              <span className={supportInfo.hasRecognition ? 'text-success' : 'text-error'}>
                {supportInfo.hasRecognition ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Speech Synthesis:</span>
              <span className={supportInfo.hasSynthesis ? 'text-success' : 'text-error'}>
                {supportInfo.hasSynthesis ? '✓' : '✗'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Microphone:</span>
              <span className={permissionStatus === 'granted' ? 'text-success' : 'text-error'}>
                {permissionStatus === 'granted' ? '✓' : '✗'}
              </span>
            </div>
          </div>
          
          {!supportInfo.isSecureContext && (
            <div className="mt-2 p-2 bg-warning/10 border border-warning/20 rounded text-warning">
              <p className="font-medium">HTTPS Required</p>
              <p className="text-xs mt-1">
                Voice features require a secure connection (HTTPS). 
                Please ensure you're accessing the app via HTTPS.
              </p>
            </div>
          )}
          
          {permissionStatus === 'denied' && (
            <div className="mt-2 p-2 bg-warning/10 border border-warning/20 rounded text-warning">
              <p className="font-medium">Microphone Access Denied</p>
              <p className="text-xs mt-1">
                Please allow microphone access in your browser settings to use voice features.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceStatusIndicator;

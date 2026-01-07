import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { voiceManager, getVoiceSupportInfo } from '../../utils/voiceUtils';
import Button from './Button';
import Icon from '../AppIcon';

const VoiceNavigationButton = () => {
  const { getText } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [showManualMenu, setShowManualMenu] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);

  useEffect(() => {
    // Check voice support with detailed info
    const checkSupport = async () => {
      const supportInfo = getVoiceSupportInfo();
      console.log('Voice Support Info:', supportInfo);
      
      // Direct browser API check
      const hasRecognition = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
      const hasSynthesis = 'speechSynthesis' in window;
      const isSecure = window.isSecureContext || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      console.log('Direct API Check:', { hasRecognition, hasSynthesis, isSecure });
      
      const supported = hasRecognition && hasSynthesis && isSecure;
      setIsSupported(supported);
      
      // Show button even if not supported, but with different behavior
      setIsVisible(true);
      
      // If not supported, show appropriate message
      if (!supported) {
        if (!isSecure) {
          setErrorMessage('Voice features require HTTPS. Please use a secure connection.');
        } else if (!hasRecognition || !hasSynthesis) {
          setErrorMessage('Voice features are not supported in this browser.');
        }
      }
    };

    checkSupport();
  }, []);

  const handleVoiceCommand = async () => {
    if (!isSupported) {
      // Show error message or fallback
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    if (isListening) {
      voiceManager.stopListening();
      setIsListening(false);
    } else {
      // Check internet connectivity first
      if (!navigator.onLine) {
        setErrorMessage('No internet connection. Voice recognition requires internet access.');
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
        return;
      }

      // Skip network test - go straight to voice recognition

      // Request microphone permission first
      try {
        console.log('Requesting microphone permission...');
        const stream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
        console.log('Microphone permission granted');
        
        // Stop the stream immediately - we just needed permission
        stream.getTracks().forEach(track => track.stop());
        
        // Now start voice recognition
        setIsListening(true);
        setErrorMessage('');
        
        // Try multiple approaches to make voice recognition work
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        // First attempt with basic settings
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.lang = 'en';
        
        let recognitionAttempts = 0;
        const maxAttempts = 3;
        
        const tryRecognition = (attemptNumber) => {
          console.log(`Voice recognition attempt ${attemptNumber}`);
          
          const currentRecognition = new SpeechRecognition();
          currentRecognition.continuous = false;
          currentRecognition.interimResults = false;
          currentRecognition.maxAlternatives = 1;
          
          // Try different language settings
          if (attemptNumber === 1) {
            currentRecognition.lang = 'en-US';
          } else if (attemptNumber === 2) {
            currentRecognition.lang = 'en';
          } else {
            currentRecognition.lang = 'en-GB';
          }
          
          currentRecognition.onstart = () => {
            console.log(`Voice recognition started (attempt ${attemptNumber})`);
          };
          
          currentRecognition.onend = () => {
            console.log(`Voice recognition ended (attempt ${attemptNumber})`);
            setIsListening(false);
          };
          
          currentRecognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            console.log(`Voice command received (attempt ${attemptNumber}):`, result);
            handleVoiceResult(result);
            setIsListening(false);
          };
          
          currentRecognition.onerror = (event) => {
            console.error(`Voice recognition error (attempt ${attemptNumber}):`, event.error);
            setIsListening(false);
            
            if (event.error === 'network' && attemptNumber < maxAttempts) {
              console.log(`Network error on attempt ${attemptNumber}, trying next attempt...`);
              setTimeout(() => {
                tryRecognition(attemptNumber + 1);
              }, 1000);
            } else {
              console.log('All voice recognition attempts failed, showing text input');
              setErrorMessage('Voice recognition unavailable. Please type your command below.');
              setShowError(true);
              setShowTextInput(true);
              setTimeout(() => setShowError(false), 8000);
            }
          };
          
          try {
            currentRecognition.start();
          } catch (error) {
            console.error(`Failed to start recognition (attempt ${attemptNumber}):`, error);
            if (attemptNumber < maxAttempts) {
              setTimeout(() => {
                tryRecognition(attemptNumber + 1);
              }, 1000);
            } else {
              setErrorMessage('Voice recognition is not available. Please type your command below.');
              setShowError(true);
              setShowTextInput(true);
              setTimeout(() => setShowError(false), 8000);
            }
          }
        };
        
        tryRecognition(1);
      } catch (permissionError) {
        console.error('Microphone permission denied:', permissionError);
        setErrorMessage('Microphone access denied. Please allow microphone access and refresh the page.');
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    }
  };

  const handleVoiceResult = (result) => {
    const command = result.toLowerCase().trim();
    console.log('Voice command received:', command);
    processCommand(command);
  };

  const handleTextCommand = (command) => {
    console.log('Processing text command:', command);
    processCommand(command);
    setShowTextInput(false);
  };

  const processCommand = (command) => {
    // More flexible command matching with multiple variations
    const commands = {
      home: ['home', 'dashboard', 'main', 'start', 'begin', 'హోమ్', 'ముఖ్య'],
      learn: ['learn', 'learning', 'education', 'study', 'course', 'lesson', 'నేర్చుకోండి', 'విద్య'],
      schemes: ['scheme', 'schemes', 'government', 'benefit', 'program', 'policy', 'పథకాలు', 'ప్రభుత్వ'],
      culture: ['culture', 'cultural', 'traditional', 'knowledge', 'heritage', 'custom', 'tradition', 'సంస్కృతి', 'సాంప్రదాయ'],
      progress: ['progress', 'tracking', 'track', 'status', 'ప్రగతి', 'స్థితి'],
      stories: ['stories', 'story', 'games', 'game', 'entertainment', 'కథలు', 'ఆటలు'],
      login: ['login', 'sign in', 'signin', 'auth', 'authentication', 'లాగిన్', 'ప్రవేశం']
    };
    
    // Check each command category
    for (const [route, keywords] of Object.entries(commands)) {
      if (keywords.some(keyword => command.includes(keyword))) {
        console.log(`Navigating to: ${route}`);
        const routes = {
          home: '/dashboard-home',
          learn: '/basic-literacy-learning',
          schemes: '/government-schemes-hub',
          culture: '/traditional-knowledge',
          progress: '/progress-tracking',
          stories: '/stories-games',
          login: '/login-authentication'
        };
        window.location.href = routes[route];
        return;
      }
    }
    
    // If no recognized command, speak the result back and show help
    console.log('No recognized command, showing help');
    voiceManager.speak(`I heard: ${command}. Please say Home, Learn, Schemes, Culture, Progress, Stories, or Login.`);
    showVoiceCommands();
  };

  const showVoiceCommands = () => {
    const commands = [
      'Say "Home" to go to dashboard',
      'Say "Learn" to start learning',
      'Say "Schemes" for government schemes',
      'Say "Culture" for traditional knowledge',
      'Say "Progress" to view your progress',
      'Say "Stories" for stories and games'
    ];

    const commandText = commands.join('. ');
    
    if (isSupported) {
      voiceManager.speak(commandText, {
        onError: (error) => {
          console.error('Speech synthesis error:', error);
          setErrorMessage(error);
          setShowError(true);
          setTimeout(() => setShowError(false), 5000);
        }
      });
    } else {
      // Fallback: show commands in a modal or alert
      alert(`Voice Commands:\n${commands.join('\n')}`);
    }
  };

  const speakWelcome = () => {
    const welcomeText = getText(
      'Welcome to Tribal Education Portal. Use voice commands to navigate.',
      'గిరిజన విద్యా పోర్టల్‌కు స్వాగతం. నావిగేట్ చేయడానికి వాయిస్ కమాండ్‌లను ఉపయోగించండి.'
    );
    
    if (isSupported) {
      voiceManager.speak(welcomeText, {
        onError: (error) => {
          console.error('Speech synthesis error:', error);
          setErrorMessage(error);
          setShowError(true);
          setTimeout(() => setShowError(false), 5000);
        }
      });
    } else {
      // Fallback: show welcome message
      alert(welcomeText);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Error Message */}
        {showError && errorMessage && (
          <div className="bg-error/10 border border-error/20 rounded-tribal px-4 py-3 text-sm text-error max-w-xs">
            <div className="flex items-start space-x-2">
              <Icon name="AlertCircle" size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Voice Error</p>
                <p className="text-xs mt-1">{errorMessage}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowError(false)}
                className="h-6 w-6 p-0 ml-auto"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
          </div>
        )}

        {/* Manual Navigation Menu - Last Resort */}
        {showManualMenu && (
          <div className="fixed bottom-20 right-4 bg-card border border-border rounded-tribal p-4 shadow-tribal-lg max-w-xs z-[9999]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">
                {getText('Manual Navigation', 'మాన్యువల్ నావిగేషన్')}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowManualMenu(false)}
                className="h-6 w-6 p-0"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
            <div className="mb-3 p-2 bg-muted rounded text-xs text-muted-foreground">
              {getText(
                'Voice recognition is unavailable. Use the buttons below to navigate.',
                'వాయిస్ గుర్తింపు అందుబాటులో లేదు. నావిగేట్ చేయడానికి క్రింది బటన్‌లను ఉపయోగించండి.'
              )}
            </div>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/dashboard-home';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="Home" size={16} className="mr-2" />
                {getText('Home', 'హోమ్')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/basic-literacy-learning';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="BookOpen" size={16} className="mr-2" />
                {getText('Learn', 'నేర్చుకోండి')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/government-schemes-hub';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="FileText" size={16} className="mr-2" />
                {getText('Schemes', 'పథకాలు')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/traditional-knowledge';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="Users" size={16} className="mr-2" />
                {getText('Culture', 'సంస్కృతి')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/progress-tracking';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="TrendingUp" size={16} className="mr-2" />
                {getText('Progress', 'ప్రగతి')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = '/stories-games';
                  setShowManualMenu(false);
                }}
                className="w-full justify-start"
              >
                <Icon name="Gamepad2" size={16} className="mr-2" />
                {getText('Stories', 'కథలు')}
              </Button>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  setShowManualMenu(false);
                  setRetryCount(0);
                  setIsRetrying(false);
                  handleVoiceCommand();
                }}
                className="w-full"
              >
                <Icon name="RefreshCw" size={16} className="mr-2" />
                {getText('Try Voice Again', 'వాయిస్ మళ్లీ ప్రయత్నించండి')}
              </Button>
            </div>
          </div>
        )}

        {/* Text Input Fallback */}
        {showTextInput && (
          <div className="fixed bottom-20 right-4 bg-card border border-border rounded-tribal p-4 shadow-tribal-lg max-w-xs z-[9999]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">
                {getText('Type Your Command', 'మీ కమాండ్‌ను టైప్ చేయండి')}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTextInput(false)}
                className="h-6 w-6 p-0"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
            <div className="mb-3 p-2 bg-muted rounded text-xs text-muted-foreground">
              {getText(
                'Voice recognition is unavailable. Type commands like "home", "learn", "culture", etc.',
                'వాయిస్ గుర్తింపు అందుబాటులో లేదు. "హోమ్", "నేర్చుకోండి", "సంస్కృతి" వంటి కమాండ్‌లను టైప్ చేయండి.'
              )}
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder={getText('Type command here...', 'కమాండ్‌ను ఇక్కడ టైప్ చేయండి...')}
                className="w-full px-3 py-2 border border-border rounded-md text-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleTextCommand(e.target.value);
                    e.target.value = '';
                  }
                }}
                autoFocus
              />
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const input = document.querySelector('input[type="text"]');
                    if (input) {
                      handleTextCommand(input.value);
                      input.value = '';
                    }
                  }}
                  className="flex-1"
                >
                  {getText('Go', 'వెళ్ళండి')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTextInput(false)}
                  className="flex-1"
                >
                  {getText('Cancel', 'రద్దు')}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Voice Commands Help */}
        <div className="hidden group-hover:block bg-card border border-border rounded-tribal p-3 shadow-tribal-lg max-w-xs">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            {getText('Voice Commands', 'వాయిస్ కమాండ్‌లు')}
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• {getText('Say "Home" for dashboard', '"హోమ్" చెప్పండి డ్యాష్‌బోర్డ్ కోసం')}</li>
            <li>• {getText('Say "Learn" to start learning', '"నేర్చుకోండి" చెప్పండి అభ్యాసం ప్రారంభించడానికి')}</li>
            <li>• {getText('Say "Schemes" for government schemes', '"పథకాలు" చెప్పండి ప్రభుత్వ పథకాల కోసం')}</li>
            <li>• {getText('Say "Culture" for traditional knowledge', '"సంస్కృతి" చెప్పండి సాంప్రదాయ జ్ఞానం కోసం')}</li>
          </ul>
        </div>

        {/* Main Voice Button */}
        <Button
          variant={isListening ? "default" : "outline"}
          size="icon"
          onClick={handleVoiceCommand}
          className={`h-14 w-14 rounded-full shadow-tribal-lg transition-all duration-300 ${
            isListening || isRetrying
              ? 'bg-primary text-primary-foreground animate-pulse ring-4 ring-primary/20' 
              : 'bg-card hover:bg-primary hover:text-primary-foreground'
          }`}
          title={getText(
            isRetrying ? 'Retrying... Please wait' : isListening ? 'Listening... Click to stop' : 'Click to start voice navigation',
            isRetrying ? 'మళ్లీ ప్రయత్నిస్తోంది... దయచేసి వేచి ఉండండి' : isListening ? 'వినుతోంది... ఆపడానికి క్లిక్ చేయండి' : 'వాయిస్ నావిగేషన్ ప్రారంభించడానికి క్లిక్ చేయండి'
          )}
        >
          {isRetrying ? (
            <div className="flex flex-col items-center">
              <Icon name="RefreshCw" size={24} className="animate-spin" />
              <div className="text-xs mt-1">Retrying...</div>
            </div>
          ) : isListening ? (
            <div className="flex flex-col items-center">
              <Icon name="Mic" size={24} className="animate-pulse" />
              <div className="text-xs mt-1 animate-bounce">Listening...</div>
            </div>
          ) : (
            <Icon name="Mic" size={24} />
          )}
        </Button>

        {/* Try Again Button for Network Errors */}
        {showManualMenu && (
          <div className="mt-3 pt-3 border-t border-border">
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                setShowManualMenu(false);
                setRetryCount(0);
                setIsRetrying(false);
                handleVoiceCommand();
              }}
              className="w-full"
            >
              <Icon name="RefreshCw" size={16} className="mr-2" />
              {getText('Try Voice Recognition Again', 'వాయిస్ గుర్తింపును మళ్లీ ప్రయత్నించండి')}
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {getText('Voice may work if network conditions improve', 'నెట్‌వర్క్ పరిస్థితులు మెరుగుపడితే వాయిస్ పని చేయవచ్చు')}
            </p>
          </div>
        )}

        {/* Status Indicator */}
        {isListening && (
          <div className="bg-primary/10 border border-primary/20 rounded-tribal px-3 py-2 text-xs text-primary">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>{getText('Listening...', 'వినుతోంది...')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceNavigationButton;

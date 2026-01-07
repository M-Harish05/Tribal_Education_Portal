import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import EnhancedVoiceRecognition from '../../../components/ui/EnhancedVoiceRecognition';

const InteractiveLessonViewer = ({ 
  lesson, 
  onComplete, 
  onNext, 
  onPrevious,
  className = '' 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastIsCorrect, setLastIsCorrect] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const canvasRef = useRef(null);
  const recognitionRef = useRef(null);
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'te-IN'; // default Telugu
    }
  }, []);

  const playAudio = (text, lang = 'te-IN') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
    }
  };

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

  const startListening = () => {
    if (recognitionRef?.current) {
      const step = lesson?.steps?.[currentStep];
      const expected = step?.expectedAnswer || '';
      const expectedTelugu = step?.expectedAnswerTelugu || '';
      
      // Determine language based on expected answer
      const isEnglish = /^[A-Za-z\s]+$/.test(expected) && expected.length > 0;
      const isTelugu = /[\u0C00-\u0C7F]/.test(expectedTelugu) && expectedTelugu.length > 0;
      
      // Set language - prefer Telugu if both are available, otherwise use English
      const language = (isTelugu && expectedTelugu) ? 'te-IN' : 'en-US';
      recognitionRef.current.lang = language;
      
      setIsListening(true);
      recognitionRef?.current?.start();
      
      recognitionRef.current.onresult = (event) => {
        let transcript = event?.results?.[0]?.[0]?.transcript;
        const currentStepData = lesson?.steps?.[currentStep];
        
        // Convert numbers to Telugu words if using Telugu language
        if (language === 'te-IN' && transcript) {
          transcript = convertNumbersToTelugu(transcript);
        }
        
        // For letter lessons, always set the input as the expected Telugu letter
        if (currentStepData?.type === 'letter') {
          setUserInput(currentStepData?.contentTelugu || 'అ');
          checkAnswer(currentStepData?.contentTelugu || 'అ');
        } else {
          setUserInput(transcript);
          checkAnswer(transcript);
        }
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  };

  const checkAnswer = async (input) => {
    const currentStepData = lesson?.steps?.[currentStep];
    
    // For letter lessons, always accept any voice input as correct
    if (currentStepData?.type === 'letter') {
      const isCorrect = true;
      setLastIsCorrect(isCorrect);
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        if (isCorrect) {
          if (currentStep < lesson?.steps?.length - 1) {
            setCurrentStep(currentStep + 1);
          } else {
            // Move to next lesson instead of closing the viewer
            if (onNext) {
              onNext();
            } else if (onComplete) {
              onComplete();
            }
          }
        }
      }, 800);
      return;
    }
    
    // For other lesson types, use the original logic
    const expected = currentStepData?.expectedAnswer || '';
    const expectedTelugu = currentStepData?.expectedAnswerTelugu || '';
    let isCorrect = false;
    
    try {
      if (token && (expected || expectedTelugu)) {
        const res = await fetch(`${API_BASE}/voice/evaluate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ 
            expected, 
            expectedTelugu,
            transcript: input || '' 
          })
        });
        const data = await res.json();
        if (res.ok) {
          isCorrect = (data?.score || 0) >= 70; // threshold
        } else {
          // fallback to simple includes for both languages
          const inputLower = input?.toLowerCase() || '';
          const expectedLower = expected?.toLowerCase() || '';
          const expectedTeluguLower = expectedTelugu?.toLowerCase() || '';
          
          isCorrect = inputLower.includes(expectedLower) || 
                     inputLower.includes(expectedTeluguLower) ||
                     expectedLower.includes(inputLower) ||
                     expectedTeluguLower.includes(inputLower);
        }
      } else {
        // Local fallback - check both English and Telugu
        const inputLower = input?.toLowerCase() || '';
        const expectedLower = expected?.toLowerCase() || '';
        const expectedTeluguLower = expectedTelugu?.toLowerCase() || '';
        
        isCorrect = inputLower.includes(expectedLower) || 
                   inputLower.includes(expectedTeluguLower) ||
                   expectedLower.includes(inputLower) ||
                   expectedTeluguLower.includes(inputLower);
      }
    } catch {
      // Local fallback on error
      const inputLower = input?.toLowerCase() || '';
      const expectedLower = expected?.toLowerCase() || '';
      const expectedTeluguLower = expectedTelugu?.toLowerCase() || '';
      
      isCorrect = inputLower.includes(expectedLower) || 
                 inputLower.includes(expectedTeluguLower) ||
                 expectedLower.includes(inputLower) ||
                 expectedTeluguLower.includes(inputLower);
    }

    setLastIsCorrect(isCorrect);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      if (isCorrect) {
        if (currentStep < lesson?.steps?.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          // Move to next lesson instead of closing the viewer
          if (onNext) {
            onNext();
          } else if (onComplete) {
            onComplete();
          }
        }
      }
    }, 800);
  };

  const handleNextStep = () => {
    if (currentStep < lesson?.steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete && onComplete();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = lesson?.steps?.[currentStep];

  return (
    <div className={`bg-card border border-border rounded-tribal p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">
            {lesson?.title}
          </h2>
          <p className="text-sm font-caption text-muted-foreground">
            {lesson?.titleTelugu}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-mono text-muted-foreground">
            {currentStep + 1} / {lesson?.steps?.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => playAudio(currentStepData?.instruction, 'te-IN')}
            disabled={isPlaying}
            className="text-primary"
          >
            <Icon name={isPlaying ? "Volume2" : "VolumeX"} size={20} />
          </Button>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full smooth-transition"
            style={{ width: `${((currentStep + 1) / lesson?.steps?.length) * 100}%` }}
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="space-y-6">
        {/* Visual Content */}
        {currentStepData?.type === 'letter' && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-tribal border-2 border-primary/20">
              <span className="text-6xl font-heading font-bold text-primary">
                {currentStepData?.contentTelugu}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm font-caption text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'word' && (
          <div className="text-center space-y-4">
            <Image
              src={currentStepData?.image}
              alt={currentStepData?.content}
              className="w-48 h-32 object-cover rounded-tribal mx-auto"
            />
            <div className="space-y-2">
              <p className="text-2xl font-heading font-semibold text-primary">
                {currentStepData?.content}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.contentTelugu}
              </p>
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'number' && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-tribal border-2 border-primary/20">
              <span className="text-6xl font-heading font-bold text-primary">
                {currentStepData?.content}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-heading font-semibold text-primary">
                {currentStepData?.contentTelugu}
              </p>
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'counting' && (
          <div className="text-center space-y-4">
            <Image
              src={currentStepData?.image}
              alt={currentStepData?.content}
              className="w-64 h-48 object-cover rounded-tribal mx-auto"
            />
            <div className="space-y-2">
              <p className="text-xl font-heading font-semibold text-primary">
                {currentStepData?.content}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.contentTelugu}
              </p>
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {(currentStepData?.type === 'addition' || currentStepData?.type === 'subtraction') && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-8 bg-primary/10 rounded-tribal border-2 border-primary/20">
              <span className="text-5xl font-heading font-bold text-primary">
                {currentStepData?.content}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-heading font-semibold text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'color' && (
          <div className="text-center space-y-4">
            <div 
              className="w-48 h-48 rounded-tribal mx-auto border-4 border-border shadow-lg"
              style={{ backgroundColor: currentStepData?.colorCode || '#FF0000' }}
            />
            <div className="space-y-2">
              <p className="text-2xl font-heading font-semibold text-primary">
                {currentStepData?.content}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.contentTelugu}
              </p>
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'color-mixing' && (
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-4">
              <div 
                className="w-24 h-24 rounded-tribal border-2 border-border"
                style={{ backgroundColor: '#FF0000' }}
              />
              <div className="flex items-center text-2xl font-bold text-primary">+</div>
              <div 
                className="w-24 h-24 rounded-tribal border-2 border-border"
                style={{ backgroundColor: '#0000FF' }}
              />
              <div className="flex items-center text-2xl font-bold text-primary">=</div>
              <div 
                className="w-24 h-24 rounded-tribal border-2 border-border"
                style={{ backgroundColor: currentStepData?.colorCode || '#800080' }}
              />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-heading font-semibold text-primary">
                {currentStepData?.content}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.contentTelugu}
              </p>
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'sentence' && (
          <div className="text-center space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-tribal p-6">
              <p className="text-xl font-heading font-semibold text-primary mb-2">
                {currentStepData?.content}
              </p>
              <p className="text-lg font-caption text-muted-foreground">
                {currentStepData?.contentTelugu}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                {currentStepData?.instruction}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentStepData?.instructionTelugu}
              </p>
            </div>
          </div>
        )}

        {currentStepData?.type === 'tracing' && (
          <div className="text-center space-y-4">
            <div className="bg-muted/50 rounded-tribal p-4">
              <canvas
                ref={canvasRef}
                width={300}
                height={200}
                className="border border-border rounded-tribal bg-background cursor-pointer mx-auto"
                style={{ touchAction: 'none' }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Trace the letter with your finger or mouse
            </p>
          </div>
        )}

        {/* Interactive Elements */}
        {currentStepData?.interactive && (
          <div className="flex flex-col items-center space-y-4">
            {/* Enhanced Voice Recognition */}
            <EnhancedVoiceRecognition
              onResult={(transcript, confidence) => {
                setUserInput(transcript);
                checkAnswer(transcript);
              }}
              onError={(error) => {
                console.error('Voice recognition error:', error);
                // You could show a toast notification here
              }}
              expectedAnswer={currentStepData?.expectedAnswer || ''}
              expectedAnswerTelugu={currentStepData?.expectedAnswerTelugu || ''}
              isListening={isListening}
              onStartListening={() => setIsListening(true)}
              onStopListening={() => setIsListening(false)}
              className="w-full max-w-md"
            />

            {/* Text Input */}
            <div className="w-full max-w-md">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e?.target?.value)}
                placeholder="Type your answer here..."
                className="w-full px-4 py-2 border border-border rounded-tribal bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <Button
              variant="default"
              onClick={() => checkAnswer(userInput)}
              disabled={!userInput?.trim()}
              iconName="Check"
              iconPosition="left"
            >
              Check Answer
            </Button>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div className={`text-center p-4 rounded-tribal ${
            lastIsCorrect ? 'bg-success/10 border border-success/20' : 'bg-warning/10 border border-warning/20'
          }`}>
            <Icon 
            name={lastIsCorrect ? "CheckCircle" : "AlertCircle"} 
              size={24} 
            className={lastIsCorrect ? "text-success" : "text-warning"}
            />
            <p className="mt-2 font-medium">
            {lastIsCorrect ? 'Excellent! Well done!' :'Try again! You can do it!'}
            </p>
          </div>
        )}
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Previous
        </Button>

        <div className="flex items-center space-x-2">
          {lesson?.steps?.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index <= currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <Button
          variant="default"
          onClick={handleNextStep}
          iconName={currentStep === lesson?.steps?.length - 1 ? "Check" : "ChevronRight"}
          iconPosition="right"
        >
          {currentStep === lesson?.steps?.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 tribal-pattern opacity-5 pointer-events-none rounded-tribal" />
    </div>
  );
};

export default InteractiveLessonViewer;
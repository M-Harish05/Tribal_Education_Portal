import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useProgress } from '../../contexts/ProgressContext';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import VoiceNavigationButton from '../../components/ui/VoiceNavigationButton';
import OfflineStatusIndicator from '../../components/ui/OfflineStatusIndicator';
import NotificationAlertBanner from '../../components/ui/NotificationAlertBanner';
import DynamicContentLoader from '../../components/ui/DynamicContentLoader';
import AchievementSystem from '../../components/ui/AchievementSystem';
import { comprehensiveLessonsData } from '../../data/lessonsData';

// Import components
import LessonCard from './components/LessonCard';
import InteractiveLessonViewer from './components/InteractiveLessonViewer';
import ProgressTracker from './components/ProgressTracker';
import CategorySelector from './components/CategorySelector';
import VoiceInstructionPanel from './components/VoiceInstructionPanel';

const BasicLiteracyLearning = () => {
  const navigate = useNavigate();
  const { getText } = useLanguage();
  const { userProgress, completeLesson, checkAchievements } = useProgress();
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [completedLessonIds, setCompletedLessonIds] = useState(new Set());
  const [achievements, setAchievements] = useState([]);
  const [showAchievementNotification, setShowAchievementNotification] = useState(false);
  const [newAchievement, setNewAchievement] = useState(null);
  
  const [selectedCategory, setSelectedCategory] = useState('letters');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [showLessonViewer, setShowLessonViewer] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  // Organized learning categories with proper Telugu text
  const categories = [
    {
      id: 'letters',
      title: 'Letters & Sounds',
      titleTelugu: 'అక్షరాలు మరియు ధ్వనులు',
      description: 'Learn Telugu and English alphabets with proper pronunciation',
      descriptionTelugu: 'సరైన ఉచ్చారణతో తెలుగు మరియు ఆంగ్ల వర్ణమాలలను నేర్చుకోండి',
      icon: 'Type',
      lessonCount: 8,
      estimatedTime: '2-3 hours',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      isLocked: false
    },
    {
      id: 'numbers',
      title: 'Numbers & Counting',
      titleTelugu: 'సంఖ్యలు మరియు లెక్కింపు',
      description: 'Master basic numbers and counting in both languages',
      descriptionTelugu: 'రెండు భాషలలో ప్రాథమిక సంఖ్యలు మరియు లెక్కింపును నేర్చుకోండి',
      icon: 'Hash',
      lessonCount: 6,
      estimatedTime: '1-2 hours',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      isLocked: false
    },
    {
      id: 'words',
      title: 'Simple Words',
      titleTelugu: 'సాధారణ పదాలు',
      description: 'Build vocabulary with everyday words and phrases',
      descriptionTelugu: 'రోజువారీ పదాలు మరియు వాక్యాలతో పదజాలాన్ని పెంచుకోండి',
      icon: 'BookOpen',
      lessonCount: 10,
      estimatedTime: '3-4 hours',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      isLocked: false
    },
    {
      id: 'sentences',
      title: 'Sentence Formation',
      titleTelugu: 'వాక్య నిర్మాణం',
      description: 'Learn to form complete sentences and express ideas',
      descriptionTelugu: 'పూర్తి వాక్యాలను రూపొందించడం మరియు ఆలోచనలను వ్యక్తపరచడం నేర్చుకోండి',
      icon: 'FileText',
      lessonCount: 12,
      estimatedTime: '4-5 hours',
      difficulty: 'Advanced',
      progress: 0,
      isCompleted: false,
      isLocked: true
    }
    ,
    {
      id: 'colors',
      title: 'Colors',
      titleTelugu: 'రంగులు',
      description: 'Speak the color names in Telugu or English',
      descriptionTelugu: 'రంగుల పేర్లు తెలుగు లేదా ఆంగ్లంలో చెప్పండి',
      icon: 'Palette',
      lessonCount: 6,
      estimatedTime: '10-15 min',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      isLocked: false
    }
  ];

  // Use comprehensive lessons data
  const lessonsData = comprehensiveLessonsData;

  // Fetch user progress from backend and mark completed lessons
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        if (!token) return;
        const res = await fetch(`${API_BASE}/progress`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) return;
        const data = await res.json();
        const completed = new Set(
          (data?.lessons || [])
            .filter(l => l.completed)
            .map(l => l.lessonId)
        );
        setCompletedLessonIds(completed);
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    };
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Mock achievements data for display
  const mockAchievements = [
    {
      title: 'First Letter Mastered',
      titleTelugu: 'మొదటి అక్షరం నేర్చుకున్నారు',
      date: '2025-01-02'
    },
    {
      title: '5 Day Learning Streak',
      titleTelugu: '5 రోజుల నేర్చుకున్నారు',
      date: '2025-01-01'
    }
  ];

  // Voice instructions for current lesson
  const voiceInstructions = currentLesson ? [
    {
      text: `Welcome to the lesson: ${currentLesson?.title}`,
      textTelugu: `పాఠానికి స్వాగతం: ${currentLesson?.titleTelugu}`,
      visualCue: 'Look at the screen for visual guidance'
    },
    {
      text: 'Listen carefully and repeat after me',
      textTelugu: 'జాగ్రత్తగా వినండి మరియు నా తర్వాత చెప్పండి',
      visualCue: 'Use the microphone button to record your voice'
    }
  ] : [];

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson);
    setShowLessonViewer(true);
  };

  const handleLessonComplete = async () => {
    // Update progress using the new system
    completeLesson('basic-literacy', selectedCategory, 50);
    checkAchievements();

    // Persist to backend progress for this user
    try {
      if (token && currentLesson) {
        const lessonId = `${selectedCategory}:${currentLesson.id}`;
        await fetch(`${API_BASE}/progress/lesson`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ moduleKey: 'basic-literacy', lessonId, completed: true, score: 100 })
        });
        setCompletedLessonIds(prev => new Set(prev).add(lessonId));
      }
    } catch (e) {
      console.error('Failed to save lesson progress', e);
    }

    // Move to next lesson instead of closing
    const lessons = getCurrentLessons();
    const currentIndex = lessons?.findIndex(l => l?.id === currentLesson?.id);
    if (currentIndex < lessons?.length - 1) {
      setCurrentLesson(lessons?.[currentIndex + 1]);
    } else {
      // If this is the last lesson, close the viewer
      setShowLessonViewer(false);
      setCurrentLesson(null);
    }
  };

  const handleAchievementUnlocked = (achievement) => {
    setNewAchievement(achievement);
    setShowAchievementNotification(true);
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setShowAchievementNotification(false);
      setNewAchievement(null);
    }, 5000);
  };

  const handleContentSelect = (contentId) => {
    setSelectedContent(contentId);
  };

  const getCurrentLessons = () => {
    const list = lessonsData?.[selectedCategory] || [];
    // Mark completed based on server progress
    return list.map(lesson => {
      const lessonKey = `${selectedCategory}:${lesson.id}`;
      return { ...lesson, isCompleted: completedLessonIds.has(lessonKey), progress: completedLessonIds.has(lessonKey) ? 100 : 0 };
    });
  };

  const getModuleProgress = () => {
    const total = Object.values(lessonsData).reduce((sum, arr) => sum + arr.length, 0);
    const completed = Array.from(completedLessonIds).filter(id => id.startsWith('letters:') || id.startsWith('numbers:') || id.startsWith('words:')).length;
    return total > 0 ? (completed / total) * 100 : 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Notification Banner */}
        <NotificationAlertBanner 
          notifications={[
            ...(showAchievementNotification && newAchievement ? [{
              id: 'achievement-' + newAchievement.id,
              type: 'achievement',
              title: '🎉 Achievement Unlocked!',
              titleTelugu: '🎉 విజయం అన్‌లాక్ అయింది!',
              message: newAchievement.description,
              messageTelugu: newAchievement.descriptionTelugu,
              priority: 'high',
              actionText: 'View Achievements',
              actionTextTelugu: 'విజయాలను చూడండి'
            }] : []),
            {
              id: 1,
              type: 'info',
              title: 'Welcome to Learning!',
              titleTelugu: 'అభ్యాసానికి స్వాగతం!',
              message: 'Start with letters and sounds, then move to numbers and words.',
              messageTelugu: 'అక్షరాలు మరియు ధ్వనులతో మొదలుపెట్టి, తర్వాత సంఖ్యలు మరియు పదాలకు వెళ్లండి.',
              priority: 'low',
              actionText: 'Get Started',
              actionTextTelugu: 'మొదలుపెట్టండి'
            }
          ]}
          onDismiss={(id) => {
            if (id.startsWith('achievement-')) {
              setShowAchievementNotification(false);
              setNewAchievement(null);
            }
            console.log('Dismissed notification:', id);
          }}
        />

        {/* Offline Status */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              {getText('Basic Literacy Learning', 'ప్రాథమిక అక్షరాస్యత నేర్చుకోవడం')}
            </h1>
            <p className="text-sm font-caption text-muted-foreground">
              {getText('Master the fundamentals of reading and writing', 'చదవడం మరియు వ్రాయడం యొక్క ప్రాథమికాంశాలను నేర్చుకోండి')}
            </p>
          </div>
          <OfflineStatusIndicator />
        </div>

        {showLessonViewer && currentLesson ? (
          /* Lesson Viewer Mode */
          <div className="space-y-6">
            {/* Back Button */}
            <Button
              variant="outline"
              onClick={() => setShowLessonViewer(false)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              {getText('Back to Lessons', 'పాఠాలకు తిరిగి వెళ్లండి')}
            </Button>
            
            {/* Voice Instructions */}
            <VoiceInstructionPanel 
              instructions={voiceInstructions}
              currentInstruction={0}
              autoPlay
              onInstructionComplete={(index) => {
                console.log('Instruction completed:', index);
              }}
            />
            
            {/* Interactive Lesson */}
            <InteractiveLessonViewer
              lesson={currentLesson}
              onComplete={handleLessonComplete}
              onNext={() => {
                const lessons = getCurrentLessons();
                const currentIndex = lessons?.findIndex(l => l?.id === currentLesson?.id);
                if (currentIndex < lessons?.length - 1) {
                  setCurrentLesson(lessons?.[currentIndex + 1]);
                }
              }}
              onPrevious={() => {
                const lessons = getCurrentLessons();
                const currentIndex = lessons?.findIndex(l => l?.id === currentLesson?.id);
                if (currentIndex > 0) {
                  setCurrentLesson(lessons?.[currentIndex - 1]);
                }
              }}
            />
          </div>
        ) : selectedContent ? (
          /* Dynamic Content Mode */
          <div className="space-y-6">
            <Button
              variant="outline"
              onClick={() => setSelectedContent(null)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              {getText('Back to Categories', 'వర్గాలకు తిరిగి వెళ్లండి')}
            </Button>
            
            <DynamicContentLoader
              contentId={selectedContent}
              contentType="lesson"
              onLoad={(content) => {
                console.log('Content loaded:', content);
              }}
              onError={(error) => {
                console.error('Content error:', error);
              }}
            />
          </div>
        ) : (
          /* Main Learning Interface */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Categories and Lessons */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category Selector */}
              <CategorySelector
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />

              {/* Lessons Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-heading font-semibold text-foreground">
                    {getText('Available Lessons', 'అందుబాటులో ఉన్న పాఠాలు')}
                  </h2>
                  <span className="text-sm font-caption text-muted-foreground">
                    {getText('Interactive learning modules', 'ఇంటరాక్టివ్ అభ్యాస మాడ్యూల్స్')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getCurrentLessons()?.map((lesson) => (
                    <LessonCard
                      key={lesson?.id}
                      lesson={lesson}
                      isActive={false}
                      isCompleted={lesson?.isCompleted}
                      isLocked={false}
                      onClick={() => handleLessonSelect(lesson)}
                    />
                  ))}
                </div>

                {getCurrentLessons()?.length === 0 && (
                  <div className="text-center py-12 bg-muted/30 rounded-tribal">
                    <Icon name="BookOpen" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {getText('No Lessons Available', 'పాఠాలు అందుబాటులో లేవు')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {getText('Lessons for this category are coming soon!', 'ఈ వర్గానికి పాఠాలు త్వరలో వస్తాయి!')}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Progress Tracker and Achievements */}
            <div className="space-y-6">
              <ProgressTracker
                totalLessons={userProgress?.modules?.['basic-literacy']?.totalLessons || 20}
                completedLessons={userProgress?.modules?.['basic-literacy']?.completedLessons || 0}
                currentStreak={userProgress?.currentStreak || 0}
                totalStars={userProgress?.totalXP || 0}
                achievements={mockAchievements}
              />

              {/* Achievement System */}
              <AchievementSystem
                completedLessons={Array.from(completedLessonIds).length}
                totalLessons={Object.values(lessonsData).reduce((sum, arr) => sum + arr.length, 0)}
                currentStreak={userProgress?.currentStreak || 0}
                onAchievementUnlocked={handleAchievementUnlocked}
              />

              {/* Quick Actions */}
              <div className="bg-card border border-border rounded-tribal p-4 space-y-3">
                <h3 className="font-heading font-semibold text-foreground">
                  {getText('Quick Actions', 'త్వరిత చర్యలు')}
                </h3>
                
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/progress-tracking')}
                    iconName="TrendingUp"
                    iconPosition="left"
                    className="w-full justify-start"
                  >
                    {getText('View Detailed Progress', 'వివరమైన పురోగతిని చూడండి')}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => navigate('/traditional-knowledge')}
                    iconName="Heart"
                    iconPosition="left"
                    className="w-full justify-start"
                  >
                    {getText('Explore Culture', 'సంస్కృతిని అన్వేషించండి')}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => navigate('/government-schemes-hub')}
                    iconName="FileText"
                    iconPosition="left"
                    className="w-full justify-start"
                  >
                    {getText('Government Schemes', 'ప్రభుత్వ పథకాలు')}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => navigate('/stories-games')}
                    iconName="Gamepad2"
                    iconPosition="left"
                    className="w-full justify-start"
                  >
                    {getText('Stories', 'కథలు')}
                  </Button>
                </div>
              </div>

              {/* Learning Tips */}
              <div className="bg-primary/10 border border-primary/20 rounded-tribal p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Lightbulb" size={20} className="text-primary" />
                  <h3 className="font-heading font-semibold text-primary">
                    {getText('Learning Tips', 'అభ్యాస చిట్కాలు')}
                  </h3>
                </div>
                
                <div className="space-y-2 text-sm text-foreground">
                  <p>• {getText('Practice for 15-20 minutes daily', 'రోజూ 15-20 నిమిషాలు అభ్యసించండి')}</p>
                  <p>• {getText('Use voice features for better pronunciation', 'మెరుగైన ఉచ్చారణ కోసం వాయిస్ ఫీచర్లను ఉపయోగించండి')}</p>
                  <p>• {getText('Review completed lessons regularly', 'పూర్తి చేసిన పాఠాలను క్రమం తప్పకుండా సమీక్షించండి')}</p>
                  <p>• {getText('Learn with family and friends', 'కుటుంబం మరియు స్నేహితులతో నేర్చుకోండి')}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Voice Navigation */}
      <VoiceNavigationButton />
      
      {/* Cultural Pattern Background */}
      <div className="fixed inset-0 tribal-pattern opacity-5 pointer-events-none" />
    </div>
  );
};

export default BasicLiteracyLearning;
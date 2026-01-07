import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import VoiceNavigationButton from '../../components/ui/VoiceNavigationButton';
import OfflineStatusIndicator from '../../components/ui/OfflineStatusIndicator';
import NotificationAlertBanner from '../../components/ui/NotificationAlertBanner';
import { useProgress } from '../../contexts/ProgressContext';

// Import all components
import ProgressOverviewCard from './components/ProgressOverviewCard';
import ModuleProgressCard from './components/ModuleProgressCard';
import AchievementBadgeGrid from './components/AchievementBadgeGrid';
import CertificationStatusCard from './components/CertificationStatusCard';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import LearningGoalsCard from './components/LearningGoalsCard';

const ProgressTracking = () => {
  const navigate = useNavigate();
  const { achievements, goals } = useProgress();
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [activeView, setActiveView] = useState('overview');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  // Check for saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'english';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Voice synthesis for progress reports
  const speakProgressReport = () => {
    if ('speechSynthesis' in window) {
      const text = currentLanguage === 'telugu' 
        ? "మీ నేర్చుకోవడం పురోగతి: 0% పూర్తయింది. మీరు ఇంకా ఏ మాడ్యూల్స్ పూర్తి చేయలేదు మరియు ఏ విజయాలు సంపాదించలేదు." :"Your learning progress: 0% completed. You have finished 0 modules and earned 0 achievements.";
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLanguage === 'telugu' ? 'te-IN' : 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  // Mock module data
  const moduleData = [
    {
      title: "Basic Literacy",
      titleTelugu: "ప్రాథమిక అక్షరాస్యత",
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      icon: "BookOpen",
      color: "primary",
      lastActivity: null,
      nextLesson: "Introduction to Alphabets",
      isLocked: false
    },
    {
      title: "Skill Development",
      titleTelugu: "నైపుణ్య అభివృద్ధి",
      progress: 0,
      totalLessons: 15,
      completedLessons: 0,
      icon: "Wrench",
      color: "secondary",
      lastActivity: null,
      nextLesson: "Basic Loom Setup",
      isLocked: true
    },
    {
      title: "Traditional Knowledge",
      titleTelugu: "సాంప్రదాయ జ్ఞానం",
      progress: 0,
      totalLessons: 12,
      completedLessons: 0,
      icon: "Heart",
      color: "accent",
      lastActivity: null,
      nextLesson: "Introduction to Tribal Art",
      isLocked: true
    },
    {
      title: "Digital Literacy",
      titleTelugu: "డిజిటల్ అక్షరాస్యత",
      progress: 0,
      totalLessons: 18,
      completedLessons: 0,
      icon: "Smartphone",
      color: "primary",
      lastActivity: null,
      nextLesson: "Using a Smartphone",
      isLocked: true
    }
  ];

  const viewTabs = [
    { id: 'overview', label: 'Overview', labelTelugu: 'అవలోకన', icon: 'BarChart3' },
    { id: 'modules', label: 'Modules', labelTelugu: 'మాడ్యూల్స్', icon: 'BookOpen' },
    { id: 'achievements', label: 'Achievements', labelTelugu: 'అచీవ్‌మెంట్స్', icon: 'Award' },
    { id: 'certifications', label: 'Certificates', labelTelugu: 'సర్టిఫికేట్లు', icon: 'FileText' },
    { id: 'community', label: 'Community', labelTelugu: 'కమ్యూన', icon: 'Users' },
    { id: 'goals', label: 'Goals', labelTelugu: 'లక్ష్యాలు', icon: 'Target' }
  ];

  const notifications = [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Notifications */}
        <div className="mb-6">
          <NotificationAlertBanner 
            notifications={notifications} 
            onDismiss={(id) => console.log('Dismiss notification:', id)}
          />
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              {currentLanguage === 'telugu' ? 'పురోగతి ట్రాకింగ్' : 'Progress Tracking'}
            </h1>
            <p className="text-muted-foreground">
              {currentLanguage === 'telugu' ?'మీ నేర్చుకోవడం పురోగతి.' :'Track your learning journey and view your achievements'
              }
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <OfflineStatusIndicator />
            <Button
              variant="outline"
              onClick={speakProgressReport}
              iconName="Volume2"
              iconPosition="left"
              iconSize={16}
              className="hidden sm:flex"
            >
              {currentLanguage === 'telugu' ? 'పురోగతి వినండి' : 'Listen to Progress'}
            </Button>
            <Button
              variant="default"
              onClick={() => navigate('/dashboard-home')}
              iconName="Home"
              iconPosition="left"
              iconSize={16}
            >
              {currentLanguage === 'telugu' ? 'డ్యాష్‌బోర్డ్' : 'Dashboard'}
            </Button>
          </div>
        </div>

        {/* View Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {viewTabs?.map((tab) => (
              <Button
                key={tab?.id}
                variant={activeView === tab?.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView(tab?.id)}
                iconName={tab?.icon}
                iconPosition="left"
                iconSize={16}
                className="whitespace-nowrap"
              >
                <span className="hidden sm:inline">
                  {currentLanguage === 'telugu' ? tab?.labelTelugu : tab?.label}
                </span>
                <span className="sm:hidden">
                  {currentLanguage === 'telugu' ? tab?.labelTelugu : tab?.label}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          {/* Overview View */}
          {activeView === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <ProgressOverviewCard />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {moduleData?.slice(0, 4)?.map((module, index) => (
                    <ModuleProgressCard key={index} {...module} />
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <AchievementBadgeGrid achievements={achievements} />
                <LearningGoalsCard goals={goals} />
              </div>
            </div>
          )}

          {/* Modules View */}
          {activeView === 'modules' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {moduleData?.map((module, index) => (
                <ModuleProgressCard key={index} {...module} />
              ))}
            </div>
          )}

          {/* Achievements View */}
          {activeView === 'achievements' && (
            <AchievementBadgeGrid achievements={achievements} />
          )}

          {/* Certifications View */}
          {activeView === 'certifications' && (
            <CertificationStatusCard />
          )}

          {/* Community View */}
          {activeView === 'community' && (
            <CommunityLeaderboard />
          )}

          {/* Goals View */}
          {activeView === 'goals' && (
            <LearningGoalsCard goals={goals} />
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-card border border-border rounded-tribal p-6 shadow-tribal-md">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            {currentLanguage === 'telugu' ? 'త్వరిత చర్యలు' : 'Quick Actions'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/basic-literacy-learning')}
              iconName="BookOpen"
              iconPosition="left"
              className="justify-start h-auto p-4"
            >
              <div className="text-left">
                <div className="font-medium">
                  {currentLanguage === 'telugu' ? 'నేర్చుకోవడం కొనసాగించండి' : 'Continue Learning'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'telugu' ? 'మీ చివరి పాఠానికి తిరిగి వెళ్లండి' : 'Resume your last lesson'}
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('/traditional-knowledge')}
              iconName="Heart"
              iconPosition="left"
              className="justify-start h-auto p-4"
            >
              <div className="text-left">
                <div className="font-medium">
                  {currentLanguage === 'telugu' ? 'సంస్కృతిని అన్వ్‌మెంట్ నేర్చుకున్నారు.' : 'Explore Culture'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'telugu' ? 'సాంప్రదాయ జ్ఞానాన్ని కనుగొనండి' : 'Discover traditional knowledge'}
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate('/government-schemes-hub')}
              iconName="FileText"
              iconPosition="left"
              className="justify-start h-auto p-4"
            >
              <div className="text-left">
                <div className="font-medium">
                  {currentLanguage === 'telugu' ? 'పథకాలు చూడండి' : 'View Schemes'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'telugu' ? 'ప్రభుత్వ పథకాలను అన్వ్‌మెంట్' : 'Explore government schemes'}
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              onClick={() => setActiveView('goals')}
              iconName="Target"
              iconPosition="left"
              className="justify-start h-auto p-4"
            >
              <div className="text-left">
                <div className="font-medium">
                  {currentLanguage === 'telugu' ? 'లక్ష్యాలు సెట్ చేయండి' : 'Set Goals'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {currentLanguage === 'telugu' ? 'కొత్త నేర్చుకున్నారు.' : 'Add new learning goals'}
                </div>
              </div>
            </Button>
          </div>
        </div>
      </main>
      <VoiceNavigationButton />
      {/* Cultural Pattern Background */}
      <div className="fixed inset-0 tribal-pattern opacity-5 pointer-events-none z-0" />
    </div>
  );
};

export default ProgressTracking;
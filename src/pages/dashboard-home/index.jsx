import MotivationalQuote from './components/MotivationalQuote';
import LearningModuleCard from './components/LearningModuleCard';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import QuickAccessPanel from './components/QuickAccessPanel';
import VoiceNavigationButton from '../../components/ui/VoiceNavigationButton';
import NotificationAlertBanner from '../../components/ui/NotificationAlertBanner';
import OfflineStatusIndicator from '../../components/ui/OfflineStatusIndicator';
import WelcomeHeader from './components/WelcomeHeader';
import { useAuth } from '../../contexts/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();
  
  const learningModules = [
    {
      title: 'Basic Literacy',
      titleTelugu: 'ప్రాథమిక అక్షరాస్యత',
      description: 'Learn Telugu alphabets, numbers, and basic reading skills with interactive lessons.',
      descriptionTelugu: 'ఇంటరాక్టివ్ పాఠాలతో తెలుగు అక్షరాలు, సంఖ్యలు మరియు ప్రాథమిక పఠన నైపుణ్యాలను నేర్చుకోండి.',
      icon: 'BookOpen',
      progress: 65,
      totalLessons: 15,
      completedLessons: 10,
      route: '/basic-literacy-learning',
      bgGradient: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary',
      estimatedTime: '2-3 weeks'
    },
    {
      title: 'Government Schemes',
      titleTelugu: 'ప్రభుత్వ పథకాలు',
      description: 'Discover education scholarships, skill development programs, and financial assistance.',
      descriptionTelugu: 'విద్యా స్కాలర్‌షిప్‌లు, నైపుణ్య అభివృద్ధి కార్యక్రమాలు మరియు ఆర్థిక సహాయాన్ని కనుగొనండి.',
      icon: 'FileText',
      progress: 25,
      totalLessons: 12,
      completedLessons: 3,
      route: '/government-schemes-hub',
      bgGradient: 'from-success/20 to-success/10',
      iconColor: 'text-success',
      estimatedTime: '1-2 weeks'
    },
    {
      title: 'Traditional Knowledge',
      titleTelugu: 'సాంప్రదాయ జ్ఞానం',
      description: 'Preserve and learn tribal stories, songs, customs, and cultural practices.',
      descriptionTelugu: 'గిరిజన కథలు, పాటలు, ఆచారాలు మరియు సాంస్కృతిక అభ్యాసాలను సంరక్షించండి మరియు నేర్చుకోండి.',
      icon: 'Heart',
      progress: 80,
      totalLessons: 10,
      completedLessons: 8,
      route: '/traditional-knowledge',
      bgGradient: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent',
      estimatedTime: '2-3 weeks'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'scheme',
      title: 'New Scholarship Available',
      titleTelugu: 'కొత్త స్కాలర్‌షిప్ అందుబాటులో',
      message: 'PM-JANMAN Education Scholarship applications are now open. Apply before December 31st, 2025.',
      messageTelugu: 'PM-JANMAN విద్యా స్కాలర్‌షిప్ దరఖాస్తులు ఇప్పుడు తెరవబడ్డాయి. డిసెంబర్ 31, 2025కి ముందు దరఖాస్తు చేసుకోండి.',
      priority: 'high',
      deadline: '2025-12-31',
      actionText: 'Apply Now',
      actionTextTelugu: 'ఇప్పుడే దరఖాస్తు చేసుకోండి'
    }
  ];

  useEffect(() => {
    // Text-to-speech for page title on load
    const speakPageTitle = () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Welcome to your learning dashboard. గిరిజన విద్యా పోర్టల్‌కు స్వాగతం.');
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      }
    };

    // Speak title after a short delay
    const timer = setTimeout(speakPageTitle, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Tribal Education</title>
        <meta name="description" content="Your personal learning dashboard." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="p-4 sm:p-6">
          <OfflineStatusIndicator />
          <NotificationAlertBanner notifications={notifications} />
          <WelcomeHeader userName={user?.nameEnglish} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold font-heading mb-4">
                Your Learning Modules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningModules.map((module) => (
                  <LearningModuleCard key={module.title} {...module} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
              <QuickAccessPanel />
              <MotivationalQuote />
            </div>
          </div>
        </main>
        <VoiceNavigationButton />
      </div>
    </>
  );
};

export default DashboardHome;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useProgress } from '../../contexts/ProgressContext';
import Header from '../../components/ui/Header';
import VoiceNavigationButton from '../../components/ui/VoiceNavigationButton';
import OfflineStatusIndicator from '../../components/ui/OfflineStatusIndicator';
import LanguageToggle from '../../components/ui/LanguageToggle';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import { stories, getStoriesByCategory, searchStories } from '../../data/storiesData';

const StoriesGames = () => {
  const navigate = useNavigate();
  const { language, getText } = useLanguage();
  const { completeLesson, addAchievement } = useProgress();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const categories = [
    { id: 'all', name: 'All', nameTelugu: 'అన్నీ' },
    { id: 'nature', name: 'Nature', nameTelugu: 'ప్రకృతి' },
    { id: 'agriculture', name: 'Agriculture', nameTelugu: 'వ్యవసాయం' },
    { id: 'literacy', name: 'Literacy', nameTelugu: 'అక్షరాస్యత' },
    { id: 'mathematics', name: 'Mathematics', nameTelugu: 'గణితం' },
    { id: 'culture', name: 'Culture', nameTelugu: 'సంస్కృతి' }
  ];

  // Filter content based on category and search
  useEffect(() => {
    let filtered = stories;
    
    if (selectedCategory !== 'all') {
      filtered = getStoriesByCategory(selectedCategory);
    }
    
    if (searchQuery) {
      filtered = searchStories(searchQuery);
    }
    
    setFilteredStories(filtered);
  }, [selectedCategory, searchQuery]);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    setIsPlaying(true);
  };

  const handleStoryComplete = (story) => {
    // Award XP for completing story
    completeLesson('traditional-knowledge', `story-${story.id}`, story.xpReward);
    
    // Check for achievements
    if (story.xpReward >= 50) {
      addAchievement({
        type: 'story-reader',
        title: 'Story Reader',
        titleTelugu: 'కథా పఠకుడు',
        description: 'Completed your first story!',
        descriptionTelugu: 'మీ మొదటి కథను పూర్తి చేశారు!',
        icon: 'BookOpen',
        xp: 100
      });
    }
    
    setIsPlaying(false);
    setSelectedStory(null);
  };

  const renderStoryCard = (story) => (
    <div key={story.id} className="bg-card border border-border rounded-tribal p-6 hover:shadow-tribal-md transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary/10 rounded-tribal flex items-center justify-center">
            <Icon name="BookOpen" size={24} className="text-primary" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              {getText(story.title, story.titleTelugu)}
            </h3>
            <span className="text-xs font-caption text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {getText(story.difficulty, story.difficulty)}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {getText(story.description, story.descriptionTelugu)}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{getText(story.duration, story.durationTelugu)}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="Star" size={14} />
                <span>{story.xpReward} XP</span>
              </span>
            </div>
            
            <Button
              variant="default"
              size="sm"
              onClick={() => handleStorySelect(story)}
              iconName="Play"
              iconPosition="left"
            >
              {getText('See Story', 'కథ చూడండి')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isPlaying && selectedStory) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="outline"
                onClick={() => setIsPlaying(false)}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                {getText('Back to Stories', 'కథలకు తిరిగి వెళ్లండి')}
              </Button>
              <LanguageToggle />
            </div>
            
            <div className="bg-card border border-border rounded-tribal p-8">
              <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
                {getText(selectedStory.title, selectedStory.titleTelugu)}
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed">
                  {getText(selectedStory.content.english, selectedStory.content.telugu)}
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button
                  variant="default"
                  onClick={() => handleStoryComplete(selectedStory)}
                  iconName="Check"
                  iconPosition="left"
                >
                  {getText('Complete Story', 'కథను పూర్తి చేయండి')}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              {getText('Stories', 'కథలు')}
            </h1>
            <p className="text-muted-foreground">
              {getText('Explore interactive stories', 'ఇంటరాక్టివ్ కథలను అన్వేషించండి')}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <OfflineStatusIndicator />
            <LanguageToggle />
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard-home')}
              iconName="Home"
              iconPosition="left"
            >
              {getText('Dashboard', 'డ్యాష్‌బోర్డ్')}
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={getText('Search stories...', 'కథలను వేతకండి...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-tribal bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-tribal bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {getText(category.name, category.nameTelugu)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map(renderStoryCard)}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {getText('No content found', 'కంటెంట్ కనుగొనబడలేదు')}
              </h3>
              <p className="text-muted-foreground">
                {getText('Try adjusting your search or filter criteria', 'మీ శోధన లేదా ఫిల్టర్ ప్రమాణాలను సర్దుబాటు చేయండి')}
              </p>
            </div>
          )}
        </div>
      </main>
      <VoiceNavigationButton />
    </div>
  );
};

export default StoriesGames;

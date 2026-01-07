import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const AchievementSystem = ({ 
  completedLessons = 0, 
  totalLessons = 0, 
  currentStreak = 0,
  onAchievementUnlocked,
  className = '' 
}) => {
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState(null);

  // Define achievement criteria
  const achievementCriteria = [
    {
      id: 'first-lesson',
      title: 'First Steps',
      titleTelugu: 'మొదటి అడుగులు',
      description: 'Complete your first lesson',
      descriptionTelugu: 'మీ మొదటి పాఠాన్ని పూర్తి చేయండి',
      icon: 'Star',
      condition: (completed, streak) => completed >= 1,
      unlocked: false
    },
    {
      id: 'five-lessons',
      title: 'Learning Enthusiast',
      titleTelugu: 'అభ్యాస ఉత్సాహి',
      description: 'Complete 5 lessons',
      descriptionTelugu: '5 పాఠాలను పూర్తి చేయండి',
      icon: 'BookOpen',
      condition: (completed, streak) => completed >= 5,
      unlocked: false
    },
    {
      id: 'ten-lessons',
      title: 'Knowledge Seeker',
      titleTelugu: 'జ్ఞాన అన్వేషకుడు',
      description: 'Complete 10 lessons',
      descriptionTelugu: '10 పాఠాలను పూర్తి చేయండి',
      icon: 'GraduationCap',
      condition: (completed, streak) => completed >= 10,
      unlocked: false
    },
    {
      id: 'three-day-streak',
      title: 'Consistent Learner',
      titleTelugu: 'స్థిరమైన అభ్యాసకుడు',
      description: 'Maintain a 3-day learning streak',
      descriptionTelugu: '3 రోజుల అభ్యాస శ్రేణిని కొనసాగించండి',
      icon: 'Flame',
      condition: (completed, streak) => streak >= 3,
      unlocked: false
    },
    {
      id: 'week-streak',
      title: 'Dedicated Student',
      titleTelugu: 'అంకితభావంతో ఉన్న విద్యార్థి',
      description: 'Maintain a 7-day learning streak',
      descriptionTelugu: '7 రోజుల అభ్యాస శ్రేణిని కొనసాగించండి',
      icon: 'Trophy',
      condition: (completed, streak) => streak >= 7,
      unlocked: false
    },
    {
      id: 'alphabet-master',
      title: 'Alphabet Master',
      titleTelugu: 'వర్ణమాల మాస్టర్',
      description: 'Complete all letter lessons',
      descriptionTelugu: 'అన్ని అక్షర పాఠాలను పూర్తి చేయండి',
      icon: 'Type',
      condition: (completed, streak) => completed >= 15, // Assuming 15 letter lessons
      unlocked: false
    },
    {
      id: 'number-expert',
      title: 'Number Expert',
      titleTelugu: 'సంఖ్య నిపుణుడు',
      description: 'Complete all number lessons',
      descriptionTelugu: 'అన్ని సంఖ్య పాఠాలను పూర్తి చేయండి',
      icon: 'Hash',
      condition: (completed, streak) => completed >= 20, // Assuming 20 number lessons
      unlocked: false
    },
    {
      id: 'color-artist',
      title: 'Color Artist',
      titleTelugu: 'రంగు కళాకారుడు',
      description: 'Complete all color lessons',
      descriptionTelugu: 'అన్ని రంగు పాఠాలను పూర్తి చేయండి',
      icon: 'Palette',
      condition: (completed, streak) => completed >= 25, // Assuming 25 color lessons
      unlocked: false
    }
  ];

  // Check for new achievements
  useEffect(() => {
    const newAchievements = achievementCriteria.filter(achievement => {
      const isUnlocked = achievement.condition(completedLessons, currentStreak);
      const wasUnlocked = achievements.find(a => a.id === achievement.id)?.unlocked || false;
      
      if (isUnlocked && !wasUnlocked) {
        return true;
      }
      return false;
    });

    if (newAchievements.length > 0) {
      const latestAchievement = newAchievements[newAchievements.length - 1];
      setNewAchievement(latestAchievement);
      onAchievementUnlocked?.(latestAchievement);
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNewAchievement(null);
      }, 5000);
    }

    // Update achievements
    const updatedAchievements = achievementCriteria.map(achievement => ({
      ...achievement,
      unlocked: achievement.condition(completedLessons, currentStreak)
    }));

    setAchievements(updatedAchievements);
  }, [completedLessons, currentStreak, achievements, onAchievementUnlocked]);

  const getProgressPercentage = () => {
    if (totalLessons === 0) return 0;
    return Math.min((completedLessons / totalLessons) * 100, 100);
  };

  const getUnlockedAchievements = () => {
    return achievements.filter(a => a.unlocked);
  };

  const getLockedAchievements = () => {
    return achievements.filter(a => !a.unlocked);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Overview */}
      <div className="bg-card border border-border rounded-tribal p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Learning Progress
          </h3>
          <span className="text-sm text-muted-foreground">
            {completedLessons} / {totalLessons} lessons
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-3 mb-2">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {Math.round(getProgressPercentage())}% Complete
          </span>
          <div className="flex items-center space-x-1">
            <Icon name="Flame" size={16} className="text-orange-500" />
            <span className="text-orange-500 font-medium">
              {currentStreak} day streak
            </span>
          </div>
        </div>
      </div>

      {/* New Achievement Notification */}
      {newAchievement && (
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-tribal p-4 animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/20 rounded-full p-2">
              <Icon name={newAchievement.icon} size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-primary">
                🎉 Achievement Unlocked!
              </h4>
              <p className="text-sm text-foreground font-medium">
                {newAchievement.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {newAchievement.description}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNewAchievement(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Achievements Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Achievements
        </h3>
        
        {/* Unlocked Achievements */}
        {getUnlockedAchievements().length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-success">Unlocked ({getUnlockedAchievements().length})</h4>
            <div className="grid grid-cols-2 gap-2">
              {getUnlockedAchievements().map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-success/10 border border-success/20 rounded-tribal p-3"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={achievement.icon} size={16} className="text-success" />
                    <span className="text-xs font-medium text-success">
                      {achievement.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {getLockedAchievements().length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Locked ({getLockedAchievements().length})
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {getLockedAchievements().map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-muted/30 border border-border rounded-tribal p-3 opacity-60"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={achievement.icon} size={16} className="text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {achievement.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementSystem;

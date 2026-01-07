
import React from 'react';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../contexts/LanguageContext';

const AchievementsCard = ({ achievements = [] }) => {
  const { getText } = useLanguage();

  const defaultAchievements = [];

  const activeAchievements = achievements?.length > 0 ? achievements : defaultAchievements;

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'level':
        return <Icon name="Trophy" size={20} className="text-yellow-400" />;
      case 'activity':
        return <Icon name="Zap" size={20} className="text-green-500" />;
      case 'social':
        return <Icon name="Users" size={20} className="text-blue-500" />;
      case 'completion':
        return <Icon name="CheckCircle" size={20} className="text-purple-500" />;
      default:
        return <Icon name="Star" size={20} className="text-yellow-400" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-tribal p-6 shadow-tribal-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">
            {getText('achievements', 'Achievements')}
          </h2>
          <p className="text-sm font-caption text-muted-foreground">
            {getText('your_badges_and_milestones', 'Your badges and milestones')}
          </p>
        </div>
        <Icon name="Award" size={24} className="text-accent" />
      </div>

      <div className="space-y-4">
        {activeAchievements.length > 0 ? (
          activeAchievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-tribal border border-border">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-background rounded-full">
                {getCategoryIcon(achievement.type)}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-heading font-semibold text-foreground">{achievement.title}</h4>
                <p className="text-xs font-caption text-muted-foreground">{achievement.description}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-muted-foreground">{achievement.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 px-4 bg-muted/30 rounded-tribal border border-dashed border-border">
            <Icon name="ShieldOff" size={32} className="text-muted-foreground mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-foreground">
              {getText('no_achievements_yet', 'No Achievements Yet')}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {getText('start_learning_to_unlock', 'Start learning to unlock your first achievement!')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsCard;

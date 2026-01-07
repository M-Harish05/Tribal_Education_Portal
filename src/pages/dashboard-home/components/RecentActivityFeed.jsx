import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivityFeed = ({ recentActivities = [] }) => {
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInHours = Math.floor((now - new Date(timestamp)) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return { english: 'Just now', telugu: 'ఇప్పుడే' };
    } else if (diffInHours < 24) {
      return { 
        english: `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`, 
        telugu: `${diffInHours} గంట${diffInHours > 1 ? 'లు' : ''} క్రితం` 
      };
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return { 
        english: `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`, 
        telugu: `${diffInDays} రోజు${diffInDays > 1 ? 'లు' : ''} క్రితం` 
      };
    }
  };

  return (
    <div className="bg-background rounded-tribal border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">
            Recent Activity
          </h2>
          <p className="text-sm font-caption text-muted-foreground">
            ఇటీవలి కార్యకలాపాలు
          </p>
        </div>
        
        <Icon name="Activity" size={24} className="text-primary" />
      </div>
      <div className="space-y-4">
        {recentActivities.length > 0 ? (
          recentActivities.map((activity) => {
            const timeAgo = formatTimeAgo(activity?.timestamp);
            
            return (
              <div key={activity?.id} className="flex items-start space-x-4 p-3 rounded-tribal hover:bg-muted/50 smooth-transition">
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 ${activity?.bgColor} rounded-tribal flex items-center justify-center`}>
                  <Icon name={activity?.icon} size={20} className={activity?.iconColor} />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-heading font-semibold text-foreground">
                        {activity?.title}
                      </h3>
                      <p className="text-sm font-caption text-muted-foreground">
                        {activity?.titleTelugu}
                      </p>
                      
                      <div className="mt-1 space-y-0.5">
                        <p className="text-xs text-muted-foreground">
                          {activity?.description}
                        </p>
                        <p className="text-xs font-caption text-muted-foreground">
                          {activity?.descriptionTelugu}
                        </p>
                      </div>
                    </div>

                    {/* Timestamp */}
                    <div className="flex-shrink-0 mt-2 sm:mt-0 sm:ml-4 text-right">
                      <div className="text-xs text-muted-foreground">
                        {timeAgo?.english}
                      </div>
                      <div className="text-xs font-caption text-muted-foreground">
                        {timeAgo?.telugu}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8">
            <Icon name="Inbox" size={48} className="text-muted-foreground mx-auto" />
            <h3 className="mt-4 text-lg font-heading font-semibold text-foreground">No Recent Activity</h3>
            <p className="mt-1 text-sm font-caption text-muted-foreground">ఇటీవలి కార్యాచరణ ఏమీ లేదు</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Start a lesson to see your progress here.
            </p>
          </div>
        )}
      </div>
      {/* View All Button */}
      <div className="mt-4 pt-4 border-t border-border text-center">
        <button className="text-sm text-primary hover:text-primary/80 font-medium smooth-transition">
          <span className="sm:hidden">అన్నీ చూడండి</span>
          <span className="hidden sm:inline">View All Activities</span>
        </button>
      </div>
    </div>
  );
};

export default RecentActivityFeed;
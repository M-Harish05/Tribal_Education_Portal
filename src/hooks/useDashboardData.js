
import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../services/apiClient'; // Assuming you have an api client
import { learningModules } from '../data/learningModules'; // Assuming you have module definitions

// Helper to transform lesson progress into an activity feed item
const transformLessonToActivity = (lesson) => {
  const module = learningModules.find(m => m.key === lesson.moduleKey);
  const lessonData = module?.lessons.find(l => l.id === lesson.lessonId);

  if (!lessonData) return null;

  return {
    id: `${lesson.moduleKey}-${lesson.lessonId}-${lesson.lastAttemptAt}`,
    type: 'lesson_completed',
    title: `Completed ${lessonData.title}`,
    titleTelugu: `${lessonData.titleTelugu} పూర్తయింది`,
    description: module.title,
    descriptionTelugu: module.titleTelugu,
    timestamp: new Date(lesson.lastAttemptAt),
    icon: 'CheckCircle',
    iconColor: 'text-success',
    bgColor: 'bg-success/10'
  };
};

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState({
    userName: 'Learner', // You can fetch this from a user profile endpoint
    totalProgress: 0,
    currentStreak: 0,
    totalLessons: 0,
    completedLessons: 0,
    certificates: 0,
    points: 0,
    recentActivities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch progress data from your backend
      const { data: progress } = await apiClient.get('/progress');

      if (progress) {
        const completedLessons = progress.lessons?.filter(l => l.completed).length || 0;
        const totalLessonsInModules = learningModules.reduce((sum, module) => sum + module.lessons.length, 0);
        const totalProgress = totalLessonsInModules > 0 ? Math.round((completedLessons / totalLessonsInModules) * 100) : 0;
        const points = progress.lessons?.reduce((sum, l) => sum + (l.score || 0), 0) || 0;
        
        // Generate recent activities from lesson progress
        const activities = progress.lessons
          ?.map(transformLessonToActivity)
          .filter(Boolean) // Remove nulls if lesson/module not found
          .sort((a, b) => b.timestamp - a.timestamp) // Sort by most recent
          .slice(0, 5); // Get top 5 recent activities

        setDashboardData({
          ...dashboardData, // keeps userName
          totalProgress,
          completedLessons,
          totalLessons: totalLessonsInModules,
          points,
          certificates: progress.badges?.length || 0,
          // currentStreak needs to be calculated on the backend ideally
          currentStreak: progress.currentStreak || 0, 
          recentActivities: activities,
        });
      }
    } catch (err) {
      setError(err);
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  }, [dashboardData.userName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { dashboardData, loading, error, refetch: fetchData };
};

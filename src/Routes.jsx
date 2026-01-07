import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ProtectedRoute from "components/ProtectedRoute";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BasicLiteracyLearning from './pages/basic-literacy-learning';
import ProgressTracking from './pages/progress-tracking';
import GovernmentSchemesHub from './pages/government-schemes-hub';
import TraditionalKnowledge from './pages/traditional-knowledge';
import LoginAuthentication from './pages/login-authentication';
import DashboardHome from './pages/dashboard-home';
import StoriesGames from './pages/stories-games';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
        <Route path="/basic-literacy-learning" element={<ProtectedRoute><BasicLiteracyLearning /></ProtectedRoute>} />
        <Route path="/progress-tracking" element={<ProtectedRoute><ProgressTracking /></ProtectedRoute>} />
        <Route path="/government-schemes-hub" element={<ProtectedRoute><GovernmentSchemesHub /></ProtectedRoute>} />
        <Route path="/traditional-knowledge" element={<ProtectedRoute><TraditionalKnowledge /></ProtectedRoute>} />
        <Route path="/login-authentication" element={<LoginAuthentication />} />
        <Route path="/dashboard-home" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
        <Route path="/stories-games" element={<ProtectedRoute><StoriesGames /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

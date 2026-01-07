import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('user');
        const authStatus = localStorage.getItem('isAuthenticated');
        
        if (savedUser && authStatus === 'true') {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // Clear corrupted data
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (mobileNumber, otp) => {
    setIsLoading(true);
    
    try {
      const res = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile: mobileNumber, otp })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      const userData = data.user;
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', data.token);
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Email/password signup
  const signupWithEmail = async (email, password, name) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      const userData = data.user;
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', data.token);
      return { success: true, user: userData };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Email/password login
  const loginWithEmail = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      const userData = data.user;
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', data.token);
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userProgress');
    localStorage.removeItem('token');
  };

  // Update user data
  const updateUser = (updates) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Update user preferences
  const updatePreferences = (preferences) => {
    if (!user) return;
    
    const token = localStorage.getItem('token');
    const doUpdate = async () => {
      try {
        if (token) {
          await fetch(`${API_BASE}/user/me/preferences`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(preferences)
          });
        }
      } catch (e) {
        console.error('Failed to persist preferences', e);
      }
    };
    doUpdate();
    const updatedUser = { ...user, preferences: { ...user.preferences, ...preferences } };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Check if user has completed onboarding
  const hasCompletedOnboarding = () => {
    return user?.preferences?.onboardingCompleted || false;
  };

  // Mark onboarding as completed
  const completeOnboarding = () => {
    updateUser({
      preferences: {
        ...user.preferences,
        onboardingCompleted: true
      }
    });
  };

  // Get user display name
  const getDisplayName = () => {
    if (!user) return '';
    return user.name || user.nameEnglish || user.mobile;
  };

  // Get user initials
  const getInitials = () => {
    if (!user) return '';
    const name = getDisplayName();
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signupWithEmail,
    loginWithEmail,
    logout,
    updateUser,
    updatePreferences,
    hasCompletedOnboarding,
    completeOnboarding,
    getDisplayName,
    getInitials
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

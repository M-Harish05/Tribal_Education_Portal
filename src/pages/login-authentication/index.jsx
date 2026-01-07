import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import WelcomeHeader from './components/WelcomeHeader';
import LoginForm from './components/LoginForm';
import TribalPattern from './components/TribalPattern';
import { useAuth } from '../../contexts/AuthContext';

const LoginAuthentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signupWithEmail, loginWithEmail } = useAuth();

  useEffect(() => {}, []);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const trimmedEmail = String(email || '').trim();
      const trimmedPassword = String(password || '').trim();
      if (!trimmedEmail || !trimmedPassword) {
        throw new Error('Please enter email and password');
      }
      const result = await loginWithEmail(trimmedEmail, trimmedPassword);
      if (!result?.success) throw new Error(result?.error || 'Login failed');
      navigate('/dashboard-home');
    } catch (err) {
      setError(err?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    setError('');
    try {
      const trimmedEmail = String(email || '').trim();
      const trimmedPassword = String(password || '').trim();
      const trimmedName = String(name || '').trim();
      if (!trimmedEmail || !trimmedPassword || !trimmedName) {
        throw new Error('Please enter your name, email, and password to sign up');
      }
      const result = await signupWithEmail(trimmedEmail, trimmedPassword, trimmedName);
      if (!result?.success) throw new Error(result?.error || 'Signup failed');
      navigate('/dashboard-home');
    } catch (err) {
      setError(err?.message || 'Signup failed (email may be in use)');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = () => {};

  const handlePlayOTP = () => {};

  const handleBackToMobile = () => {};

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Tribal Pattern Background */}
      <TribalPattern />
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-card border border-border rounded-tribal shadow-tribal-lg p-6 sm:p-8">
            {/* Welcome Header */}
            <WelcomeHeader />

            {/* Email/Password Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name (for new sign-ups)</label>
                <input
                  className="w-full border border-border rounded-tribal px-3 py-2 bg-background text-foreground"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (error) setError(''); }}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  className="w-full border border-border rounded-tribal px-3 py-2 bg-background text-foreground"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  className="w-full border border-border rounded-tribal px-3 py-2 bg-background text-foreground"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (error) setError(''); }}
                  placeholder="••••••"
                />
              </div>
              {error && (
                <div className="flex items-center space-x-2 p-3 bg-error/10 border border-error/20 rounded-tribal">
                  <Icon name="AlertCircle" size={16} className="text-error flex-shrink-0" />
                  <p className="text-sm text-error">{error}</p>
                </div>
              )}
              <div className="flex gap-3">
                <Button onClick={handleLogin} disabled={isLoading} className="flex-1">Login</Button>
                <Button onClick={handleSignup} disabled={isLoading} variant="secondary" className="flex-1">Sign up</Button>
              </div>
            </div>

            {/* Info */}
            <div className="mt-8 p-4 bg-muted/30 rounded-tribal border border-border">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Info" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Use email and password to sign in or sign up</span>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="HelpCircle" size={16} />
                <span>సహాయం కావాలా? / Need help?</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                వాయిస్ నావిగేషన్ కోసం మైక్ బటన్ ఉపయోగించండి
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card border border-border rounded-tribal p-6 shadow-tribal-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin">
                <Icon name="Loader2" size={24} className="text-primary" />
              </div>
              <span className="text-foreground font-medium">Processing...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginAuthentication;
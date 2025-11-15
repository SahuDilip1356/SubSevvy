import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import StudentDashboard from './pages/StudentDashboard';
import StartupDashboard from './pages/StartupDashboard';
import HobbyistDashboard from './pages/HobbyistDashboard';
import Onboarding from './pages/Onboarding';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function ProtectedRoute({ children, requireOnboarding = false }: { children: React.ReactNode; requireOnboarding?: boolean }) {
  const { user, loading } = useAuth();
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      if (!user) {
        setCheckingOnboarding(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('completed')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error checking onboarding:', error);
        }

        setHasCompletedOnboarding(data?.completed || false);
      } catch (error) {
        console.error('Error checking onboarding:', error);
      } finally {
        setCheckingOnboarding(false);
      }
    };

    checkOnboarding();
  }, [user]);

  if (loading || checkingOnboarding) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requireOnboarding && !hasCompletedOnboarding) {
    return <Navigate to="/onboarding" />;
  }

  return <>{children}</>;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral"></div>
      </div>
    );
  }

  return !user ? <>{children}</> : <Navigate to="/dashboard" />;
}

function DashboardRouter() {
  const { user } = useAuth();
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserType = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_onboarding')
          .select('user_type')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user type:', error);
        }

        setUserType(data?.user_type || 'solopreneur');
      } catch (error) {
        console.error('Error fetching user type:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserType();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (userType === 'student') {
    return <StudentDashboard />;
  }

  if (userType === 'startup') {
    return <StartupDashboard />;
  }

  if (userType === 'hobbyist') {
    return <HobbyistDashboard />;
  }

  return <Dashboard />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen">
            <Navigation />
            <main>
              <Landing />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requireOnboarding={true}>
            <DashboardRouter />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;

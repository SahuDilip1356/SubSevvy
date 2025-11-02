import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-sm border-b border-gray-lightest">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-coral">
              SubSavvy
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray">
                <User className="w-4 h-4" />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-gray hover:text-dark transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-dark mb-2">
            Welcome to SubSavvy!
          </h2>
          <p className="text-gray">
            Your subscription management dashboard is ready to go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-card">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-dark mb-2">
              Scan Subscriptions
            </h3>
            <p className="text-gray text-sm mb-4">
              Connect your email or bank account to automatically discover all
              your subscriptions.
            </p>
            <button className="text-coral font-semibold text-sm hover:text-coral-dark transition-colors">
              Get Started →
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-dark mb-2">
              Total Spend
            </h3>
            <p className="text-gray text-sm mb-4">
              See your complete subscription spending across all services in one
              place.
            </p>
            <button className="text-coral font-semibold text-sm hover:text-coral-dark transition-colors">
              View Analytics →
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-dark mb-2">
              Smart Alerts
            </h3>
            <p className="text-gray text-sm mb-4">
              Get notified before renewals and never miss an opportunity to
              save.
            </p>
            <button className="text-coral font-semibold text-sm hover:text-coral-dark transition-colors">
              Set Alerts →
            </button>
          </div>
        </div>

        <div className="mt-12 bg-gradient-hero text-white p-8 rounded-3xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-serif font-bold mb-3">
              Ready to Take Control?
            </h3>
            <p className="text-white/90 mb-6">
              Start by connecting your accounts to discover hidden subscriptions
              and unlock AI-powered savings recommendations.
            </p>
            <button className="bg-white text-coral px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Connect Your First Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

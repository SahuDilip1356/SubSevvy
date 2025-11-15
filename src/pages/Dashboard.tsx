import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Search, Bell, Plus, User } from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import MetricCard from '../components/dashboard/MetricCard';
import SubscriptionCard from '../components/dashboard/SubscriptionCard';
import AlertCard from '../components/dashboard/AlertCard';
import {
  mockSubscriptions,
  mockSavingsAlerts,
  calculateMonthlySpend,
  getActiveSubscriptionsCount,
  getTotalSavings,
  getUpcomingRenewals,
} from '../lib/mockData';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const totalMonthlySpend = calculateMonthlySpend(mockSubscriptions);
  const activeSubscriptions = getActiveSubscriptionsCount(mockSubscriptions);
  const totalSavings = getTotalSavings(mockSavingsAlerts);
  const upcomingRenewals = getUpcomingRenewals(mockSubscriptions, 7);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSnooze = (subscriptionName: string) => {
    console.log('Snoozing reminder for:', subscriptionName);
  };

  const handleVisitSite = (subscriptionName: string) => {
    console.log('Visiting site for:', subscriptionName);
  };

  const handleAlertAction = (alertId: string) => {
    console.log('Alert action clicked:', alertId);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Subscriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Subscription
              </button>

              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Total Monthly Spend"
              value={`$${totalMonthlySpend.toFixed(2)}`}
              trend="up"
              trendValue="$15 vs last month"
            />
            <MetricCard
              title="Active Subscriptions"
              value={activeSubscriptions}
              subtitle="Subscriptions"
            />
            <MetricCard
              title="Potential Monthly Savings"
              value={`$${totalSavings.toFixed(2)}`}
              subtitle={`From ${mockSavingsAlerts.length} overlapping tool${mockSavingsAlerts.length !== 1 ? 's' : ''}`}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Renewals</h2>

                {upcomingRenewals.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingRenewals.slice(0, 2).map((subscription) => (
                      <SubscriptionCard
                        key={subscription.id}
                        name={subscription.name}
                        cost={subscription.cost}
                        billingCycle={subscription.billingCycle}
                        nextRenewalDate={subscription.nextRenewalDate}
                        logoUrl={subscription.logoUrl}
                        onSnooze={() => handleSnooze(subscription.name)}
                        onVisitSite={() => handleVisitSite(subscription.name)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                    <p className="text-gray-500">No upcoming renewals in the next 7 days</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Smart Savings
                <span className="text-2xl">💡</span>
              </h2>

              <div className="space-y-4">
                {mockSavingsAlerts.map((alert) => (
                  <AlertCard
                    key={alert.id}
                    type={alert.type}
                    title={alert.title}
                    description={alert.description}
                    savingsAmount={alert.savingsAmount}
                    actionLabel={alert.type === 'better_deal' ? 'See Plan' : 'Compare'}
                    onAction={() => handleAlertAction(alert.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

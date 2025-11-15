import { useAuth } from '../contexts/AuthContext';
import { Sparkles, User, MoreVertical, AlertCircle, Lightbulb } from 'lucide-react';
import HobbyistSidebar from '../components/dashboard/HobbyistSidebar';
import {
  hobbyistSubscriptions,
  activeHobbies,
  learningRecommendations,
  calculateHobbyistSpend,
  getUpcomingRenewals,
  getValueInsights,
  getActiveHobbiesCount,
  getUnusedSubscriptions,
} from '../lib/hobbyistMockData';

export default function HobbyistDashboard() {
  const { user } = useAuth();

  const hobbySpend = calculateHobbyistSpend(hobbyistSubscriptions);
  const upcomingRenewals = getUpcomingRenewals(hobbyistSubscriptions);
  const valueInsights = getValueInsights(hobbyistSubscriptions);
  const activeHobbiesCount = getActiveHobbiesCount(activeHobbies);
  const unusedSubs = getUnusedSubscriptions(hobbyistSubscriptions);

  const userName = user?.email?.split('@')[0] || 'Creator';

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const days = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  const getDaysAgo = (date: Date) => {
    const today = new Date();
    const days = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  const mostUsedSub = hobbyistSubscriptions.find(sub => sub.name === 'Patreon');

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <HobbyistSidebar userName={userName} userRole="Hobbyist" />

      <div className="flex-1">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Hobbyist Dashboard</span>
          </div>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <User className="w-5 h-5" />
          </button>
        </header>

        <main className="p-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Track your creative tools and hobbies without the clutter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200">
              <p className="text-sm font-medium text-orange-900 mb-2">Hobby Spend</p>
              <p className="text-4xl font-bold text-gray-900 mb-3">
                ${Math.round(hobbySpend)}
                <span className="text-lg font-normal text-gray-600">/mo</span>
              </p>
              <div className="text-xs text-orange-800">
                <span className="font-semibold">Most Used</span>
                <br />
                {mostUsedSub?.name} (${mostUsedSub?.cost})
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl border border-emerald-200 flex flex-col items-center justify-center">
              <Sparkles className="w-8 h-8 text-emerald-700 mb-2" />
              <p className="text-sm font-medium text-emerald-900 mb-2">Active Subscriptions</p>
              <p className="text-5xl font-bold text-gray-900">{hobbyistSubscriptions.length}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🎨</div>
                <p className="text-sm font-medium text-gray-600 mb-2">Active Hobbies</p>
                <p className="text-4xl font-bold text-gray-900">{activeHobbiesCount}</p>
                <p className="text-xs text-gray-500 mt-1">Excited about lifestyle</p>
              </div>
            </div>
          </div>

          {unusedSubs.length > 0 && (
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-orange-300 rounded-2xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-orange-900 mb-1">Heads up!</h3>
                <p className="text-sm text-orange-800">
                  You have {unusedSubs.length} subscriptions you haven't used in over 60 days.
                </p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Review & Pause
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-lg font-bold text-gray-900">📋 Upcoming Renewals</h2>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
                  {upcomingRenewals.map((sub) => {
                    const daysUntil = getDaysUntil(sub.nextRenewalDate);
                    const daysAgo = sub.lastUsed ? getDaysAgo(sub.lastUsed) : null;

                    return (
                      <div key={sub.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${sub.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">{sub.iconInitials}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm">{sub.name}</h3>
                            <p className="text-xs text-gray-500">
                              Renews in {daysUntil} days
                              {daysAgo !== null && ` - last used ${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`}
                            </p>
                          </div>
                          <div className="text-right flex items-center gap-2">
                            <span className="font-bold text-gray-900">${sub.cost}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-lg font-bold text-gray-900">✨ Discover & Learn</h2>
                </div>

                <div className="space-y-3">
                  {learningRecommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-semibold text-orange-600 uppercase">
                          {rec.type === 'new' ? 'New' : 'Trending'}
                        </span>
                        <span className="text-xs text-gray-500">{rec.platform}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{rec.course}</h3>
                      <p className="text-sm text-gray-600 mb-3">{rec.instructor}</p>
                      <button className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                        Start Learning →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-lg font-bold text-gray-900">🎯 Quick Add</h2>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="space-y-3">
                    {[
                      { name: 'MasterClass', icon: 'MC' },
                      { name: 'Skillshare', icon: 'SC' },
                      { name: 'Patreon', icon: 'P' },
                    ].map((item) => (
                      <button
                        key={item.name}
                        className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors text-left"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-gray-700 text-sm">{item.icon}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      </button>
                    ))}
                    <button className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
                      Add Manually
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                  <h2 className="text-lg font-bold text-gray-900">Your Return on Fun & Learning</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                    <p className="text-xs font-bold text-green-700 uppercase mb-2">Top Value</p>
                    <h3 className="font-bold text-gray-900 mb-2">{valueInsights[0].subscription}</h3>
                    <p className="text-sm text-gray-700">{valueInsights[0].reason}</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-5">
                    <p className="text-xs font-bold text-red-700 uppercase mb-2">Lowest Value</p>
                    <h3 className="font-bold text-gray-900 mb-2">{valueInsights[1].subscription}</h3>
                    <p className="text-sm text-gray-700 mb-3">{valueInsights[1].reason}</p>
                    {valueInsights[1].action && (
                      <button className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                        {valueInsights[1].action} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

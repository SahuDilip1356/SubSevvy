import { useAuth } from '../contexts/AuthContext';
import { TrendingUp, Users, MoreVertical, AlertCircle, FileUp, Mail, Plus } from 'lucide-react';
import StartupSidebar from '../components/dashboard/StartupSidebar';
import {
  startupSubscriptions,
  optimizationAlerts,
  upcomingRenewals,
  calculateTeamBurn,
  calculatePerEmployee,
  calculateTotalSavingsOpportunity,
  getTeamMemberCount,
} from '../lib/startupMockData';

export default function StartupDashboard() {
  const { user } = useAuth();

  const teamBurn = calculateTeamBurn(startupSubscriptions);
  const teamMembers = getTeamMemberCount(startupSubscriptions);
  const perEmployee = calculatePerEmployee(teamBurn, teamMembers);
  const totalSavings = calculateTotalSavingsOpportunity(optimizationAlerts);

  const userName = user?.email?.split('@')[0] || 'Jane';
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
  };

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const days = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StartupSidebar userName={`${displayName} Doe`} companyName="Acme Inc." />

      <div className="flex-1">
        <main className="p-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {displayName}!
            </h1>
            <p className="text-gray-600">
              Your startup's SaaS cockpit — see who's using what, and what it costs you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Team Burn</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                ${teamBurn.toLocaleString()}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>5% vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Per Employee</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                ${Math.round(perEmployee)}
              </p>
              <div className="flex items-center gap-1 text-xs text-orange-600">
                <span>Target: $500</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Team Members</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{teamMembers}</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>2 new this month</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-300">
              <p className="text-sm font-bold text-amber-900 mb-2">Top Savings Opportunity</p>
              <p className="text-sm text-amber-800 mb-3">
                Tool Overlap: Figma & Canva Pro are both used for design assets.
              </p>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                [ Review & Save $150/mo ]
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Active Subscriptions ({startupSubscriptions.length})
                  </h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                    View All
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                  {startupSubscriptions.slice(0, 3).map((sub) => (
                    <div key={sub.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${sub.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-xl font-bold">{sub.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div>
                              <h3 className="font-semibold text-gray-900">{sub.name}</h3>
                              <p className="text-sm text-gray-500">
                                {sub.department} -{' '}
                                <span
                                  className={
                                    sub.seatsActive === sub.seatsTotal
                                      ? 'text-green-600 font-medium'
                                      : 'text-orange-600 font-medium'
                                  }
                                >
                                  {sub.seatsActive} of {sub.seatsTotal} seats active
                                </span>
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">${sub.cost}/mo</p>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Optimization Alerts</h2>
                  <span className="text-xl">💡</span>
                </div>

                <div className="space-y-3">
                  {optimizationAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-sm mb-1">{alert.title}</h3>
                          <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
                          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                            Review Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Add</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                    <FileUp className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Bulk Upload (.csv)</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Connect Gmail</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                    <Plus className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Add Manually</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Renewals</h3>
                <div className="space-y-4">
                  {upcomingRenewals.slice(0, 2).map((renewal) => {
                    const [month, day] = formatDate(renewal.renewalDate).split(' ');
                    return (
                      <div key={renewal.id} className="flex gap-3">
                        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-2 w-16 flex-shrink-0">
                          <span className="text-xs font-semibold text-gray-500">{month}</span>
                          <span className="text-2xl font-bold text-gray-900">{day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{renewal.service}</h4>
                            {renewal.actionRequired && (
                              <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap">
                                [ Review Renewal ]
                              </button>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">${renewal.cost}/mo</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

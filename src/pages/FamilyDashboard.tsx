import { useAuth } from '../contexts/AuthContext';
import { Bell, Users, MoreVertical, Lightbulb, Plus, AlertCircle } from 'lucide-react';
import FamilySidebar from '../components/dashboard/FamilySidebar';
import {
  familyMembers,
  familySubscriptions,
  savingsOpportunities,
  calculateTotalHouseholdSpend,
  getIndividualSubscriptions,
  getSharedSubscriptions,
  getTotalMembers,
  getTopSavingsOpportunity,
  getMemberAvatars,
  getUpcomingRenewals,
} from '../lib/familyMockData';

export default function FamilyDashboard() {
  const { user } = useAuth();

  const totalSpend = calculateTotalHouseholdSpend(familySubscriptions);
  const individualSubs = getIndividualSubscriptions(familySubscriptions);
  const sharedSubs = getSharedSubscriptions(familySubscriptions);
  const totalMembers = getTotalMembers(familyMembers);
  const topSavings = getTopSavingsOpportunity(savingsOpportunities);
  const upcomingRenewals = getUpcomingRenewals(familySubscriptions);

  const familyName = 'Miller Family';

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const days = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <FamilySidebar familyName={familyName} />

      <div className="flex-1">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Group/Family Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
              M
            </div>
          </div>
        </header>

        <main className="p-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, {familyName}!</h1>
            <p className="text-gray-600">One shared view for your household subscriptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Individual Subs</p>
              <p className="text-4xl font-bold text-purple-600 mb-1">{individualSubs}</p>
              <p className="text-xs text-gray-500">Potential to share & save</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Members</p>
              <p className="text-4xl font-bold text-gray-900">{totalMembers}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <p className="text-sm font-medium text-gray-600 mb-2">Shared Services</p>
              <p className="text-4xl font-bold text-gray-900">{sharedSubs}</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
              <div className="flex items-start gap-3 mb-3">
                <Lightbulb className="w-6 h-6 text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-green-900 mb-1">
                    Switch to Family Plans
                  </p>
                  <p className="text-xs text-green-800">
                    Save ${topSavings?.potentialSavings}/mo by bundling
                  </p>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg w-full transition-colors">
                See Savings
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Active Subscriptions</h2>

                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                  {familySubscriptions.slice(0, 4).map((sub) => {
                    const owner = familyMembers.find((m) => m.id === sub.owner);
                    const sharedAvatars = sub.sharedWith
                      ? getMemberAvatars(sub.sharedWith, familyMembers)
                      : [];

                    return (
                      <div key={sub.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 ${sub.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white text-xl font-bold">
                              {sub.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-1">{sub.name}</h3>
                            <div className="flex items-center gap-2">
                              {sub.isShared && sharedAvatars.length > 0 && (
                                <div className="flex items-center -space-x-2">
                                  {sharedAvatars.slice(0, 3).map((avatar, idx) => (
                                    <div
                                      key={idx}
                                      className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                                    >
                                      {avatar}
                                    </div>
                                  ))}
                                  {sharedAvatars.length > 3 && (
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                                      +{sharedAvatars.length - 3}
                                    </div>
                                  )}
                                </div>
                              )}
                              <span className="text-xs text-gray-500">
                                {sub.isShared ? 'Shared' : `${owner?.name}'s Individual`}
                              </span>
                            </div>
                          </div>
                          <div className="text-right flex items-center gap-2">
                            <span className="font-bold text-gray-900">${sub.cost}/mo</span>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Renewals</h3>
                  <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                    {upcomingRenewals.map((renewal) => {
                      const daysUntil = getDaysUntil(renewal.nextRenewalDate);
                      return (
                        <div key={renewal.id} className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-900">
                              {renewal.name}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              ${renewal.cost}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Renews in {daysUntil} days</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Ledger</h3>
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Streaming</p>
                          <p className="text-xs text-gray-500">Paid by Dad</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">Settled</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Music Family</p>
                          <p className="text-xs text-gray-500">Paid by Mom</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">Settled</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Gaming Plus</p>
                          <p className="text-xs text-gray-500">Paid by Dad</p>
                        </div>
                        <span className="text-sm font-bold text-orange-600">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Duplicate Alert
                </h3>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">
                    {savingsOpportunities[1]?.title}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {savingsOpportunities[1]?.description}
                  </p>
                  <button className="text-sm font-semibold text-red-600 hover:text-red-700">
                    Review Duplicates →
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Quick Add Subscription
                </h3>
                <p className="text-sm text-purple-700 mb-4">
                  Use our wizard to add shared subscriptions easily.
                </p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Add Family Plan
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Total Monthly Spend</h3>
                <p className="text-4xl font-bold text-purple-600 mb-2">
                  ${totalSpend.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mb-4">Total Household</p>

                <div className="space-y-3">
                  {familyMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{member.name}</span>
                      <span className="text-sm font-bold text-gray-900">
                        ${member.totalSpend.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

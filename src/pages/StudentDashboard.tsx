import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { DollarSign, GraduationCap, Lightbulb, AlertCircle } from 'lucide-react';
import StudentSidebar from '../components/dashboard/StudentSidebar';
import SpendingChart from '../components/dashboard/SpendingChart';
import {
  studentSubscriptions,
  studentDiscountsAvailable,
  calculateStudentMonthlySpend,
  calculatePotentialSavings,
  getCategorySpending,
  getUpcomingActions,
} from '../lib/studentMockData';

export default function StudentDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const monthlySpend = calculateStudentMonthlySpend(studentSubscriptions);
  const potentialSavings = calculatePotentialSavings(studentSubscriptions);
  const spendingData = getCategorySpending(studentSubscriptions);
  const upcomingActions = getUpcomingActions(studentSubscriptions);

  const userName = user?.email?.split('@')[0] || 'Alex';
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StudentSidebar userName={`${displayName}`} savingsPercentage={73} />

      <div className="flex-1">
        <main className="p-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              Hey {displayName}! <span className="text-3xl">👋</span>
            </h1>
            <p className="text-gray-600">
              Stay on top of your study & streaming subs — without breaking your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">Monthly Spend</p>
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">
                ${monthlySpend.toFixed(0)}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">Student Discounts</p>
                <GraduationCap className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600">
                -${potentialSavings.toFixed(0)}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-2xl border-2 border-yellow-300">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 text-sm mb-1">Heads up!</h3>
                  <p className="text-xs text-amber-800 mb-3">
                    Your Streaming Service trial ends in 3 days. Plus, you're missing 3 other
                    student deals.
                  </p>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                    Take Action
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Your Subscriptions ({studentSubscriptions.length})
                  </h2>
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
                    + Quick Add
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    <button className="flex-1 px-4 py-3 text-sm font-semibold text-cyan-600 border-b-2 border-cyan-600">
                      Upcoming Actions
                    </button>
                    <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                      All Active
                    </button>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {upcomingActions.map((sub) => (
                      <div key={sub.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${sub.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <span className="text-xl">{sub.category === 'entertainment' ? '🎵' : '📝'}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div>
                                <h3 className="font-semibold text-gray-900">{sub.name}</h3>
                                {sub.status === 'trial' && (
                                  <p className="text-sm text-orange-600 font-medium">
                                    Ends in {sub.daysUntilAction} days
                                  </p>
                                )}
                                {sub.status === 'active' && (
                                  <p className="text-sm text-gray-500">
                                    Renews in {Math.ceil((sub.nextRenewalDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days - ${sub.cost.toFixed(2)}
                                  </p>
                                )}
                              </div>
                              {sub.hasStudentDiscount && (
                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                                  Student Plan
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2 mt-2">
                              {sub.status === 'trial' && (
                                <>
                                  <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors">
                                    CANCEL NOW
                                  </button>
                                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded transition-colors">
                                    Remind Me Later
                                  </button>
                                </>
                              )}
                              {sub.status === 'active' && (
                                <button className="text-cyan-600 hover:text-cyan-700 text-xs font-semibold">
                                  Manage Sub
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  Unlock More Savings <span className="text-xl">🎓</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  You're paying full price when you could be saving with student plans.
                </p>

                <div className="space-y-3">
                  {studentDiscountsAvailable.map((discount) => (
                    <div
                      key={discount.id}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{discount.service}</h3>
                          <p className="text-sm text-gray-600">{discount.description}</p>
                        </div>
                      </div>
                      <button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                        Get Discount
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <SpendingChart data={spendingData.percentages} />

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl text-white">
                <Lightbulb className="w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold mb-2">Savings Tip</h3>
                <p className="text-sm text-cyan-50">
                  Switch your yearly Cloud Storage to the student plan and save $48/year!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

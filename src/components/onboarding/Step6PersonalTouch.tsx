import { useState } from 'react';
import { OnboardingStepProps } from '../../types/onboarding';
import { Sparkles } from 'lucide-react';

export default function Step6PersonalTouch({ data, onUpdate, onNext, onBack }: OnboardingStepProps) {
  const [dashboardName, setDashboardName] = useState(data.dashboard_name || '');

  const handleSkip = () => {
    onUpdate({ dashboard_name: '' });
    onNext();
  };

  const handleContinue = () => {
    onUpdate({ dashboard_name: dashboardName });
    onNext();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl font-bold text-dark">Personal Touch</h2>
        </div>
        <p className="text-lg text-gray-600">What would you like to name your dashboard?</p>
        <p className="text-sm text-gray-500 mt-2">
          e.g., "Dilip's Sub Control Center" - Adds warmth and ownership.
        </p>
      </div>

      <div className="mb-12">
        <label htmlFor="dashboardName" className="block text-sm font-medium text-dark mb-2">
          Dashboard Name (optional)
        </label>
        <input
          id="dashboardName"
          type="text"
          value={dashboardName}
          onChange={(e) => setDashboardName(e.target.value)}
          placeholder="My Subscription Hub"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          maxLength={50}
        />
        {dashboardName && (
          <p className="text-sm text-gray-500 mt-2">
            Preview: "{dashboardName}"
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-base"
        >
          Back
        </button>
        <button
          onClick={handleSkip}
          className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-base"
        >
          Skip
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-base"
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
}

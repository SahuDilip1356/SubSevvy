import { OnboardingStepProps } from '../../types/onboarding';
import { Check } from 'lucide-react';

const features = [
  'Renewal reminders',
  'Cost analytics',
  'Smart cancellation suggestions',
  'Family sharing',
  'AI-powered expense prediction',
];

export default function Step5Features({ data, onUpdate, onNext, onBack }: OnboardingStepProps) {
  const toggleFeature = (feature: string) => {
    const currentFeatures = data.feature_interests || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];
    onUpdate({ feature_interests: newFeatures });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-dark mb-3">Feature Interest / Personalization</h2>
        <p className="text-lg text-gray-600">Which of these features sound most useful to you?</p>
        <p className="text-sm text-gray-500 mt-2 italic">
          We'll customize your dashboard and notifications based on your choices.
        </p>
      </div>

      <div className="space-y-3 mb-12">
        {features.map((feature) => {
          const isSelected = data.feature_interests.includes(feature);
          return (
            <button
              key={feature}
              onClick={() => toggleFeature(feature)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center ${
                    isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
                <p className="text-base text-dark">{feature}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-base"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={data.feature_interests.length === 0}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

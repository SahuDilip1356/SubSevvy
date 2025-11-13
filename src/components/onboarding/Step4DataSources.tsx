import { OnboardingStepProps } from '../../types/onboarding';

const trackingMethods = [
  { value: 'spreadsheet', label: 'Spreadsheet' },
  { value: 'email', label: 'Email receipts' },
  { value: 'bank', label: 'Bank or card transactions' },
  { value: 'none', label: "I don't track yet" },
];

export default function Step4DataSources({ data, onUpdate, onNext, onBack }: OnboardingStepProps) {
  const handleMethodSelect = (method: string) => {
    onUpdate({ tracking_method: method });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-dark mb-3">Data Sources & Integration Intent</h2>
        <p className="text-lg text-gray-600">How do you currently track your subscriptions?</p>
        {data.tracking_method === 'bank' && (
          <p className="text-sm text-blue-600 mt-3 bg-blue-50 p-3 rounded-lg">
            Great choice! We can suggest enabling integration later to make tracking even easier.
          </p>
        )}
      </div>

      <div className="space-y-3 mb-12">
        {trackingMethods.map((method) => (
          <button
            key={method.value}
            onClick={() => handleMethodSelect(method.value)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              data.tracking_method === method.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  data.tracking_method === method.value ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                {data.tracking_method === method.value && (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                )}
              </div>
              <p className="text-base text-dark">{method.label}</p>
            </div>
          </button>
        ))}
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
          disabled={!data.tracking_method}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

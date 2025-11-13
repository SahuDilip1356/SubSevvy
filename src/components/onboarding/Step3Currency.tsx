import { useState } from 'react';
import { OnboardingStepProps } from '../../types/onboarding';

const currencies = [
  { value: 'USD', label: 'USD (US Dollar)' },
  { value: 'EUR', label: 'EUR (Euro)' },
  { value: 'GBP', label: 'GBP (British Pound)' },
  { value: 'INR', label: 'INR (Indian Rupee)' },
  { value: 'AUD', label: 'AUD (Australian Dollar)' },
  { value: 'SGD', label: 'SGD (Singapore Dollar)' },
  { value: 'other', label: 'Other (custom input)' },
];

export default function Step3Currency({ data, onUpdate, onNext, onBack }: OnboardingStepProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customCurrency, setCustomCurrency] = useState('');

  const handleCurrencySelect = (currency: string) => {
    if (currency === 'other') {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
      onUpdate({ preferred_currency: currency });
    }
  };

  const handleCustomCurrency = () => {
    if (customCurrency.trim()) {
      onUpdate({ preferred_currency: customCurrency.toUpperCase() });
    }
  };

  const selectedCurrency = currencies.find((c) => c.value === data.preferred_currency)
    ? data.preferred_currency
    : showCustomInput || !currencies.find((c) => c.value === data.preferred_currency)
    ? 'other'
    : data.preferred_currency;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-dark mb-3">Preferred Currency</h2>
        <p className="text-lg text-gray-600">
          Which currency would you like your spending to be shown in?
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">
          We'll show all your subscriptions and analytics in this currency.
        </p>
      </div>

      <div className="space-y-3 mb-12">
        {currencies.map((currency) => (
          <button
            key={currency.value}
            onClick={() => handleCurrencySelect(currency.value)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selectedCurrency === currency.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  selectedCurrency === currency.value ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                {selectedCurrency === currency.value && (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                )}
              </div>
              <p className="text-base text-dark">{currency.label}</p>
            </div>
          </button>
        ))}
      </div>

      {showCustomInput && (
        <div className="mb-8">
          <label htmlFor="customCurrency" className="block text-sm font-medium text-dark mb-2">
            Enter your currency code (e.g., CAD, JPY)
          </label>
          <div className="flex gap-3">
            <input
              id="customCurrency"
              type="text"
              value={customCurrency}
              onChange={(e) => setCustomCurrency(e.target.value)}
              placeholder="e.g., CAD"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base uppercase"
              maxLength={3}
            />
            <button
              onClick={handleCustomCurrency}
              disabled={!customCurrency.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Set
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-base"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!data.preferred_currency}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

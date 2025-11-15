import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { OnboardingData } from '../types/onboarding';
import Step1Identity from '../components/onboarding/Step1Identity';
import Step2Objective from '../components/onboarding/Step2Objective';
import Step3Currency from '../components/onboarding/Step3Currency';
import Step4DataSources from '../components/onboarding/Step4DataSources';
import Step5Features from '../components/onboarding/Step5Features';
import Step6PersonalTouch from '../components/onboarding/Step6PersonalTouch';
import { Loader2 } from 'lucide-react';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState<OnboardingData>({
    objectives: [],
    preferred_currency: 'USD',
    feature_interests: [],
  });

  const totalSteps = 6;

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const { error } = await supabase.from('user_onboarding').upsert(
        {
          user_id: user.id,
          user_type: data.user_type,
          team_size: data.team_size,
          objectives: data.objectives,
          preferred_currency: data.preferred_currency,
          tracking_method: data.tracking_method,
          feature_interests: data.feature_interests,
          dashboard_name: data.dashboard_name,
          completed: true,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id',
        }
      );

      if (error) throw error;

      await new Promise((resolve) => setTimeout(resolve, 100));

      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      setSaving(false);
    }
  };

  const renderStep = () => {
    const props = {
      data,
      onUpdate: updateData,
      onNext: handleNext,
      onBack: handleBack,
    };

    switch (currentStep) {
      case 1:
        return <Step1Identity {...props} />;
      case 2:
        return <Step2Objective {...props} />;
      case 3:
        return <Step3Currency {...props} />;
      case 4:
        return <Step4DataSources {...props} />;
      case 5:
        return <Step5Features {...props} />;
      case 6:
        return <Step6PersonalTouch {...props} />;
      default:
        return null;
    }
  };

  if (saving) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Setting up your personalized experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-dark">Welcome to SubSavvy!</h1>
            <span className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">{renderStep()}</div>
      </div>
    </div>
  );
}

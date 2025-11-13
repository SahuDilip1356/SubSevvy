export interface OnboardingData {
  user_type?: string;
  team_size?: string;
  objectives: string[];
  preferred_currency: string;
  tracking_method?: string;
  feature_interests: string[];
  dashboard_name?: string;
}

export interface OnboardingStepProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

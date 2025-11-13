import { OnboardingStepProps } from '../../types/onboarding';

const userTypes = [
  { value: 'solopreneur', label: 'I manage my own business or freelance tools', subtitle: 'Solopreneur' },
  { value: 'student', label: "I'm a student managing study, streaming, or learning subscriptions", subtitle: 'Student' },
  { value: 'startup', label: "I'm managing subscriptions for a small company or startup", subtitle: 'Startup' },
  { value: 'hobbyist', label: "I'm tracking personal or creative subscriptions", subtitle: 'Hobbyist' },
  { value: 'group_family', label: 'I manage shared family or household subscriptions', subtitle: 'Group / Family' },
];

const teamSizes = [
  { value: 'solo', label: 'Solo' },
  { value: 'small_team', label: '2-5 people / Small Team' },
  { value: 'household', label: 'Household' },
];

export default function Step1Identity({ data, onUpdate, onNext }: OnboardingStepProps) {
  const handleUserTypeSelect = (userType: string) => {
    onUpdate({ user_type: userType });
  };

  const handleTeamSizeSelect = (teamSize: string) => {
    onUpdate({ team_size: teamSize });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-dark mb-3">Identity & Intent</h2>
        <p className="text-lg text-gray-600">How do you plan to use this platform?</p>
      </div>

      <div className="space-y-3 mb-8">
        {userTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => handleUserTypeSelect(type.value)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              data.user_type === type.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                  data.user_type === type.value ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                {data.user_type === type.value && (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                )}
              </div>
              <div>
                <p className="text-base text-dark font-medium">{type.label}</p>
                <p className="text-sm text-gray-500 mt-0.5">({type.subtitle})</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {data.user_type && (
        <div className="mb-12">
          <p className="text-base text-gray-700 font-medium mb-3">
            How many people's subscriptions do you usually manage?
          </p>
          <div className="space-y-2">
            {teamSizes.map((size) => (
              <button
                key={size.value}
                onClick={() => handleTeamSizeSelect(size.value)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                  data.team_size === size.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      data.team_size === size.value ? 'border-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {data.team_size === size.value && (
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  <p className="text-base text-dark">{size.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!data.user_type}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
      >
        Continue
      </button>
    </div>
  );
}

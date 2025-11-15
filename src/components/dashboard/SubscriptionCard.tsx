import { Clock, ExternalLink } from 'lucide-react';

interface SubscriptionCardProps {
  name: string;
  cost: number;
  billingCycle: 'monthly' | 'annual';
  nextRenewalDate: Date;
  logoUrl?: string;
  onSnooze?: () => void;
  onVisitSite?: () => void;
}

export default function SubscriptionCard({
  name,
  cost,
  billingCycle,
  nextRenewalDate,
  logoUrl,
  onSnooze,
  onVisitSite,
}: SubscriptionCardProps) {
  const daysUntilRenewal = Math.ceil(
    (nextRenewalDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-48 flex items-center justify-center relative">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="max-h-24 max-w-[200px] object-contain" />
        ) : (
          <div className="text-4xl font-bold text-gray-400">{name.charAt(0)}</div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-2xl font-bold text-gray-900">
            ${cost.toFixed(2)}
            <span className="text-sm font-normal text-gray-500 ml-1">
              /{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Clock className="w-4 h-4" />
          <span>
            {daysUntilRenewal > 0
              ? `Reminder in ${daysUntilRenewal} day${daysUntilRenewal !== 1 ? 's' : ''}`
              : 'Renews today'}
          </span>
        </div>

        <div className="flex gap-2">
          {onSnooze && (
            <button
              onClick={onSnooze}
              className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Snooze Reminder
            </button>
          )}
          {onVisitSite && (
            <button
              onClick={onVisitSite}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-1"
            >
              Visit Site
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

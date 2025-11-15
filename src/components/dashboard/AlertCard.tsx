import { AlertCircle, Lightbulb } from 'lucide-react';

interface AlertCardProps {
  type: 'overlap' | 'better_deal';
  title: string;
  description: string;
  savingsAmount: number;
  actionLabel?: string;
  onAction?: () => void;
}

export default function AlertCard({
  type,
  title,
  description,
  savingsAmount,
  actionLabel = 'Compare',
  onAction,
}: AlertCardProps) {
  const isOverlap = type === 'overlap';

  return (
    <div
      className={`p-5 rounded-xl border-2 ${
        isOverlap
          ? 'bg-amber-50 border-amber-200'
          : 'bg-green-50 border-green-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 ${
            isOverlap ? 'text-amber-600' : 'text-green-600'
          }`}
        >
          {isOverlap ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <Lightbulb className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h4
            className={`font-bold text-base mb-1 ${
              isOverlap ? 'text-amber-900' : 'text-green-900'
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-sm mb-3 ${
              isOverlap ? 'text-amber-800' : 'text-green-800'
            }`}
          >
            {description} You could save{' '}
            <span className="font-bold">${savingsAmount.toFixed(2)}/month</span> by
            choosing one.
          </p>
          {onAction && (
            <button
              onClick={onAction}
              className={`text-sm font-semibold underline ${
                isOverlap
                  ? 'text-amber-900 hover:text-amber-700'
                  : 'text-green-900 hover:text-green-700'
              }`}
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

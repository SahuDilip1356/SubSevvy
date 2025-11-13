import { LucideIcon } from 'lucide-react';

interface HexagonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  gradient: string;
}

export default function HexagonCard({
  icon: Icon,
  title,
  description,
  stat,
}: HexagonCardProps) {
  return (
    <div className="blob-card">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-full border-4 border-dark flex items-center justify-center flex-shrink-0">
          <Icon className="w-8 h-8 text-dark" />
        </div>
        <h3 className="text-2xl font-bold text-dark font-sans">
          {title}
        </h3>
      </div>

      <div className="bg-yellow-300 rounded-full px-6 py-3 mb-6 inline-block">
        <p className="text-dark font-bold text-sm whitespace-nowrap">
          {stat}
        </p>
      </div>

      <p className="text-dark text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

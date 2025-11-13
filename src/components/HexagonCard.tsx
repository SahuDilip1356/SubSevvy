import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

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
  gradient,
}: HexagonCardProps) {
  return (
    <div className="hexagon-card-wrapper">
      <div className="hexagon-card group">
        <div className="hexagon-border">
          <div className="hexagon-content">
            <div
              className={`w-16 h-16 rounded-full ${gradient} flex items-center justify-center mb-6 relative z-10`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-dark mb-4 relative z-10">
              {title}
            </h3>

            <p className="text-gray text-sm leading-relaxed mb-4 relative z-10">
              {description}
            </p>

            <div className="text-coral font-semibold text-sm mb-4 relative z-10">
              {stat}
            </div>

            <button className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all relative z-10 group-hover:text-teal-dark">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

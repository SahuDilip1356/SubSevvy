import {
  Search,
  PieChart,
  Bell,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Users,
  Gift,
  Shield,
} from 'lucide-react';
import HexagonCard from './HexagonCard';

const benefits = [
  {
    icon: Search,
    title: 'Ghost Subscription Scanner',
    description:
      "Scan your past 6 months of transactions to uncover forgotten subscriptions draining your wallet. Most users recover $500–$1,500 in minutes.",
    stat: 'Average savings: $847',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: PieChart,
    title: 'See Your True Spend',
    description:
      'One dashboard for every subscription. Real-time, multi-currency insights (USD, EUR, INR, GBP) so you always know your true total.',
    stat: 'Track unlimited subscriptions',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: Bell,
    title: 'Renewal Radar',
    description:
      'Never miss a renewal again. Get alerts 30, 7, and 1 day before charges. Review, downgrade, or cancel with full control before money leaves your account.',
    stat: '99% catch rate',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Savings',
    description:
      'Get personalized recommendations like "Consolidate 3 tools to save $420/year." Cut costs without cutting productivity using smart AI insights.',
    stat: 'Up to 40% cost reduction',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: RefreshCw,
    title: 'Auto-Sync Everything',
    description:
      'Set it and forget it. Connect your email once, never update manually. SubSavvy detects new subscriptions automatically as you sign up for them.',
    stat: 'Zero manual work',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: TrendingUp,
    title: 'Predict Future Costs',
    description:
      'Budget with confidence using AI-powered spend forecasting. See upcoming renewals and price changes before they happen so you can plan ahead.',
    stat: '6-month forecasting',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: Users,
    title: 'Team Transparency',
    description:
      'Shared clarity for startup teams. Give co-founders read-only access and eliminate "who bought this?" conversations forever.',
    stat: 'Perfect for teams of 2-10',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: Gift,
    title: 'Exclusive Deals',
    description:
      'Access community-sourced discounts and savings that pay for the subscription itself. Get lifetime deals and seasonal offers on popular tools.',
    stat: 'Save $200+ annually',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description:
      'SOC 2 Type II certified with 256-bit encryption. Fully GDPR and CCPA compliant. Your financial data is protected with enterprise-grade security.',
    stat: 'Trusted by 10,000+ users',
    gradient: 'bg-gradient-teal',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-navy-900 to-navy-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6">
            <span className="text-indigo-400 font-semibold">The SubSavvy Difference</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Your financial guardian on autopilot
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered intelligence that finds, tracks, and optimizes every subscription—so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="glass rounded-2xl p-8 group cursor-pointer hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-cta rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{benefit.description}</p>
              <div className="p-4 bg-navy-800 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>{benefit.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

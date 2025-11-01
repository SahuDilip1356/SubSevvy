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

const benefits = [
  {
    icon: Search,
    title: 'Ghost Subscription Scanner',
    description:
      "Automatically scan your last 12 months and discover subscriptions you're still paying for but never use. Most users find $500-1,500 in forgotten charges within 60 seconds.",
    stat: 'Average savings: $847',
    gradient: 'bg-gradient-teal',
  },
  {
    icon: PieChart,
    title: 'See Your True Spend',
    description:
      'All subscriptions, one dashboard. Multi-currency intelligence (USD, EUR, INR, GBP) with real-time exchange rates so you always know your total spend.',
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
    <section id="benefits" className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-teal mb-4 font-semibold">
            Why 10,000+ AI Professionals Trust SubSavvy
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6">
            Never track subscriptions manually
          </h2>
          <p className="text-lg md:text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            From solo AI engineers to startup teams, developers to digital creators,
            SubSavvy is the only subscription management platform and financial assistant you'll ever need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full ${benefit.gradient} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-dark mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="text-coral font-semibold">{benefit.stat}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

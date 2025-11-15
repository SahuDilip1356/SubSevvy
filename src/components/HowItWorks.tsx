import { Link2, Cpu, Eye, Sparkles, BellRing } from 'lucide-react';

const steps = [
  {
    number: '1',
    emoji: '🔗',
    title: 'Connect Your Accounts',
    time: '30 seconds',
    description:
      'Link your email (Gmail/Outlook) or bank account with one click. We use read-only access to scan for subscription receipts and recurring charges.',
    action: 'Click "Connect Gmail" → Authorize → Done',
    trust: 'We only read billing emails—never your personal messages',
    icon: Link2,
  },
  {
    number: '2',
    emoji: '🤖',
    title: 'AI Scans Your Subscriptions',
    time: '60 seconds',
    description:
      'AI analyzes 12 months of billing history, identifies services, extracts amounts, and detects renewal dates & usage patterns.',
    action: 'Watch as AI discovers your subscriptions in real-time',
    trust: 'Average user discovers $847 in hidden waste',
    icon: Cpu,
  },
  {
    number: '3',
    emoji: '👀',
    title: 'Review Your Dashboard',
    time: '5 minutes',
    description:
      'See all subscriptions in one view with usage indicators (Active 🟢, Idle 🔴, Ghost 👻). Quick actions to cancel, downgrade, or remind.',
    action: 'Review → Tag → Optimize',
    trust: 'Crystal clear visibility into every dollar spent',
    icon: Eye,
  },
  {
    number: '4',
    emoji: '💡',
    title: 'Get AI-Powered Insights',
    time: 'Ongoing',
    description:
      'Receive consolidation opportunities, downgrade suggestions, ghost subscription alerts, and better alternative recommendations.',
    action: 'Follow AI recommendations to maximize savings',
    trust: 'Users save 30% on average after optimization',
    icon: Sparkles,
  },
  {
    number: '5',
    emoji: '🔔',
    title: 'Set Smart Alerts & Relax',
    time: 'Set-it-and-forget-it',
    description:
      'Renewal alerts (30/7/1 days before), price change notifications, usage alerts (60 days idle), and deal alerts keep you in control.',
    action: 'Enable notifications → Never worry again',
    trust: 'Complete autopilot for subscription management',
    icon: BellRing,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6">
            From chaos to clarity in 5 simple steps
          </h2>
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto leading-relaxed mb-6">
            No spreadsheets. No manual tracking. Just connect once and let AI do the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm text-gray">
            <span className="flex items-center justify-center gap-2">
              ⏱️ Average setup: 2 minutes
            </span>
            <span className="flex items-center justify-center gap-2">
              🔒 Bank-level encryption
            </span>
            <span className="flex items-center justify-center gap-2">
              ✓ No credit card required
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl md:text-6xl">{step.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-wide text-teal mb-1 font-semibold">
                      Step {step.number} of 5 • {step.time}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal/10 to-coral/10 rounded-xl p-8 mb-6 aspect-video flex items-center justify-center">
                  <Icon className="w-20 h-20 text-teal opacity-40" />
                </div>

                <p className="text-gray leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="bg-coral/10 border-l-4 border-coral p-4 rounded mb-4">
                  <p className="text-sm font-semibold text-coral">
                    → {step.action}
                  </p>
                </div>

                <p className="text-xs text-gray italic">"{step.trust}"</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-coral text-white px-10 py-5 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Start Your Free Scan Now
          </button>
        </div>
      </div>
    </section>
  );
}

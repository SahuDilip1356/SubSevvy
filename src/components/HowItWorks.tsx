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
    <section id="how-it-works" className="py-24 bg-navy-950 relative overflow-hidden px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            3 minutes to financial clarity
          </h2>
          <p className="text-xl text-slate-300">
            No spreadsheets. No manual entry. Just connect and done.
          </p>
        </div>

        <div className="space-y-16">
          {steps.slice(0, 3).map((step, index) => {
            const Icon = step.icon;
            const gradients = [
              'bg-gradient-cta',
              'bg-gradient-to-br from-cyan-500 to-blue-600',
              'bg-gradient-to-br from-purple-500 to-pink-600'
            ];
            return (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${gradients[index]} rounded-full flex items-center justify-center font-mono text-2xl font-bold text-white`}>
                    0{step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="p-4 bg-navy-900 border border-white/10 rounded-lg inline-block">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-cyan-400" />
                      <span className="text-slate-300">{step.trust}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

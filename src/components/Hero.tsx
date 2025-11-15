import { Shield, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-200">Bank-level security • SOC 2 Type II</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Your subscription
              <span className="block gradient-text">
                command center
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Tech professionals waste <span className="font-mono font-semibold text-cyan-400">$2,400/year</span> on forgotten subscriptions.
              We find them, track them, and help you eliminate the waste—automatically.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <div>
                <div className="font-mono text-3xl font-bold text-white">$2.4M</div>
                <div className="text-sm text-slate-400">Total saved by users</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="font-mono text-3xl font-bold text-white">1,247</div>
                <div className="text-sm text-slate-400">Active professionals</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-cta text-white text-lg px-8 py-4 rounded-xl font-semibold hover:shadow-glow-lg transition-all hover:-translate-y-1"
              >
                Scan My Subscriptions →
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white text-lg px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
                View Demo
              </button>
            </div>

            <p className="text-sm text-slate-400 mt-6">
              No credit card required • 3-minute setup • Cancel anytime
            </p>
          </div>

          <div className="relative">
            <div className="glass p-6 rounded-2xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-semibold">Monthly Overview</span>
                  <span className="font-mono text-cyan-400 text-2xl font-bold">$347.82</span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'ChatGPT Plus', amount: '$20.00' },
                    { name: 'GitHub Copilot', amount: '$10.00' },
                    { name: 'Midjourney', amount: '$30.00' },
                    { name: 'Claude Pro', amount: '$20.00' }
                  ].map(sub => (
                    <div key={sub.name} className="flex justify-between items-center p-3 bg-navy-900 rounded-lg">
                      <span className="text-slate-200">{sub.name}</span>
                      <span className="font-mono text-sm text-slate-400">{sub.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-amber-200">2 unused subscriptions detected</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

import { Check, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-6xl mx-auto w-full text-center py-24">
        <p className="text-sm uppercase tracking-wide text-white/80 mb-4 font-medium">
          For solopreneurs, students, startups, hobbyists & families
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Your subscription chaos into
          <span className="block mt-2">financial clarity using AI</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Stop losing money to forgotten subscriptions. SubSavvy shows you exactly
          what you're paying for and helps you cut the waste.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-coral px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Find My Hidden Costs (Free)
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Play size={20} fill="white" />
            Watch Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center text-white/80 text-sm">
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
            <span>Scan 12 months in 60 seconds</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
            <span>Find $500+ in savings</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Martinez',
    role: 'Freelance AI Consultant',
    avatar: 'AM',
    quote:
      'This platform is a lifesaver! I was juggling a dozen AI tool subscriptions and losing track of costs. Now I have complete financial clarity and have already saved over $500 in the first month by cutting redundant services.',
    rating: 5,
  },
  {
    name: 'Jasmine Lee',
    role: 'Indie Developer',
    avatar: 'JL',
    quote:
      "As a developer, I need access to multiple APIs and platforms. This dashboard gives me perfect control over my tech stack spending. The cost-efficiency is incredible. I've optimized my subscriptions and cut my monthly bills by 30%.",
    rating: 5,
  },
  {
    name: 'Kenji Tanaka',
    role: 'Solopreneur, AI Automations',
    avatar: 'KT',
    quote:
      'Finally, a single place to see all my tech subscriptions! The financial clarity it provides is unmatched. I can now make informed decisions and allocate my budget way more effectively. A must-have for any solopreneur.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-dark py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Real Stories, Real Savings
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Hear from AI professionals who have transformed their subscription
            management with our platform, gaining financial clarity and control.
          </p>
          <button className="bg-white text-dark px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Get Started Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-teal flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-white/60 text-sm mb-6">
            Featured in leading tech publications
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center opacity-40">
            <div className="w-32 h-12 bg-white/20 rounded flex items-center justify-center text-white/60 text-xs font-semibold">
              TechCrunch
            </div>
            <div className="w-32 h-12 bg-white/20 rounded flex items-center justify-center text-white/60 text-xs font-semibold">
              Product Hunt
            </div>
            <div className="w-32 h-12 bg-white/20 rounded flex items-center justify-center text-white/60 text-xs font-semibold">
              Hacker News
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center border border-white/20">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready for Financial Clarity and Control?
          </h3>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Centralize, optimize, and automate all your tech and AI subscriptions.
            Gain full control over your spending.
          </p>
          <button className="bg-teal text-white px-10 py-5 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Sign Up for the AI-Powered Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}

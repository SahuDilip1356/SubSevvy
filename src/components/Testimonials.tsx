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
    <section className="py-24 bg-navy-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Loved by tech professionals
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real people, real savings, real clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-8 flex flex-col hover:border-indigo-500/30 transition-all">
              <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                <Star className="w-4 h-4 text-green-400 fill-green-400" />
                <span className="text-sm font-mono font-semibold text-green-400">$2,160/year saved</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does this platform secure my data?',
    answer:
      'We use bank-level encryption and are fully GDPR and CCPA compliant to ensure your data is safe. We also undergo regular third-party security audits to maintain the highest security standards for your AI and tech subscriptions. Our SOC 2 Type II certification demonstrates our commitment to data security.',
  },
  {
    question: 'What kind of savings can I expect?',
    answer:
      'The average user finds $847 in forgotten subscriptions and achieves a 30% reduction in their monthly spend. Typical savings range from $500-1,500 per year, depending on the number of subscriptions and optimization opportunities identified by our AI.',
  },
  {
    question: 'How do you integrate with so many tools?',
    answer:
      'We use email parsing through Gmail/Outlook APIs, bank integration via Plaid, and manual entry options. Our platform supports over 10,000+ SaaS tools and automatically recognizes subscription patterns from billing emails and bank transactions.',
  },
  {
    question: 'Is this platform difficult to set up?',
    answer:
      'Not at all! The average setup time is just 2 minutes. You connect via one-click OAuth, and our AI auto-scans your subscriptions in 60 seconds. Zero manual data entry is required, making it the easiest subscription management solution available.',
  },
  {
    question: 'Can I share access with my team?',
    answer:
      'Yes! Our team plan includes multi-user access with role-based permissions (admin/read-only). This is perfect for startup co-founders who want shared visibility into company subscriptions without compromising security.',
  },
  {
    question: "What if I don't use email for subscriptions?",
    answer:
      'No problem! You can integrate your bank account via Plaid, manually enter subscriptions, or import from spreadsheets. Our platform is flexible and works with whatever method you prefer for tracking your subscriptions.',
  },
  {
    question: 'Do you support international currencies?',
    answer:
      'Absolutely! We auto-convert USD, EUR, INR, GBP, and 50+ other currencies using real-time exchange rates. You can choose your preferred display currency and see all your subscriptions normalized to a single currency for easy tracking.',
  },
  {
    question: 'How does the AI find savings opportunities?',
    answer:
      'Our AI uses pattern recognition across 2.5M+ subscriptions, tracks usage (idle vs. active tools), detects overlap (redundant tools), and monitors price changes. This comprehensive analysis allows us to provide personalized recommendations that maximize your savings.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-900 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Common questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

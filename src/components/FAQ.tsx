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
    <section id="faq" className="bg-white py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto">
            Everything you need to know about SubSavvy
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-lightest">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-coral transition-colors group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-dark pr-8 group-hover:text-coral transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray mb-6">Still have questions?</p>
          <button className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

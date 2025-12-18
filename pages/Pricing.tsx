import React from 'react';
import Section from '../components/shared/Section';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "£29",
      period: "/month",
      desc: "For solopreneurs and small trades.",
      features: [
        "Up to 50 leads/month",
        "Instant AI replies",
        "Email notifications",
        "Standard support"
      ],
      cta: "Start free trial",
      highlight: false
    },
    {
      name: "Pro",
      price: "£79",
      period: "/month",
      desc: "For growing clinics and agencies.",
      features: [
        "Up to 250 leads/month",
        "Custom knowledge base",
        "Draft & review mode",
        "Priority support",
        "Analytics dashboard"
      ],
      cta: "Start free trial",
      highlight: true
    },
    {
      name: "Scale",
      price: "£199",
      period: "/month",
      desc: "High volume lead processing.",
      features: [
        "Unlimited leads",
        "Multiple inboxes",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options"
      ],
      cta: "Contact sales",
      highlight: false
    }
  ];

  return (
    <>
      <Section className="pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h1>
        <p className="text-xl text-gray-600">Start for free. No credit card required.</p>
      </Section>

      <Section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight 
                  ? 'bg-black text-white shadow-2xl scale-105 border-none z-10' 
                  : 'bg-white border border-gray-200 text-black'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-medium mb-2 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <p className={`mt-4 text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-600'}`}>{plan.desc}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={18} className={plan.highlight ? 'text-white' : 'text-black'} />
                    <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.highlight 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-500">Need a custom enterprise plan? <a href="#" className="underline text-black">Contact us</a></p>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
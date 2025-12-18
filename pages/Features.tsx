import React from 'react';
import Section from '../components/shared/Section';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Settings, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const featureGroups = [
    {
      title: "Lead Handling",
      icon: Zap,
      features: [
        { name: "Instant Webhooks", desc: "Connect with WordPress, Webflow, Squarespace, and more." },
        { name: "Smart Parsing", desc: "We extract names, emails, and intents even from messy forms." },
        { name: "Duplicate Detection", desc: "We won't reply twice to the same person in a short window." }
      ]
    },
    {
      title: "AI & Content",
      icon: Settings,
      features: [
        { name: "Custom Knowledge Base", desc: "Upload your FAQs so the AI knows your pricing and services." },
        { name: "Tone Matching", desc: "Choose from professional, friendly, or urgent tones." },
        { name: "Multi-Language", desc: "Detects the lead's language and replies in the same one." }
      ]
    },
    {
      title: "Safety & Control",
      icon: ShieldCheck,
      features: [
        { name: "Draft Mode", desc: "Review AI responses before they are sent if you prefer control." },
        { name: "Office Hours", desc: "Only auto-reply during specific times, or only 'out of office'." },
        { name: "Blacklists", desc: "Block specific domains or keywords from triggering replies." }
      ]
    },
    {
      title: "Analytics",
      icon: BarChart3,
      features: [
        { name: "Response Time", desc: "Track how fast you are getting back to potential clients." },
        { name: "Conversion Tracking", desc: "See which auto-replies lead to real conversations." },
        { name: "Volume Stats", desc: "Understand your peak times for inbound leads." }
      ]
    }
  ];

  return (
    <>
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Everything you need</h1>
          <p className="text-xl text-gray-600">Powerful features designed to help you close more deals without the manual work.</p>
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featureGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-black text-white p-2 rounded-lg">
                  <group.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold">{group.title}</h2>
              </div>
              <div className="space-y-6">
                {group.features.map((feature, j) => (
                  <div key={j} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
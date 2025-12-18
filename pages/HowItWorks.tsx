import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/shared/Section';
import { Mail, BrainCircuit, PenTool, Send, User } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Mail,
      title: "1. Capture",
      desc: "Connect your website contact form to LeadPing via a simple webhook or email forward. We detect new enquiries instantly."
    },
    {
      icon: BrainCircuit,
      title: "2. Understand",
      desc: "Our AI analyzes the content of the message. It identifies the service required, the urgency, and the customer's sentiment."
    },
    {
      icon: PenTool,
      title: "3. Draft",
      desc: "LeadPing writes a personalized, context-aware response based on your business rules and tone of voice settings."
    },
    {
      icon: Send,
      title: "4. Send (or Approve)",
      desc: "In autopilot mode, we send the reply immediately. In review mode, we notify you to approve the draft first."
    },
    {
      icon: User,
      title: "5. Handoff",
      desc: "Once the customer replies to the automated message, the conversation lands in your normal inbox for you to take over."
    }
  ];

  return (
    <>
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How LeadPing works</h1>
          <p className="text-xl text-gray-600">From form submission to conversation started, completely automated.</p>
        </div>
      </Section>

      <Section className="py-0 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[59px] top-0 bg-white border-4 border-gray-100 rounded-full p-2">
                   <div className="bg-black rounded-full p-1.5 text-white">
                      <step.icon size={16} />
                   </div>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to automate your follow-up?</h2>
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
          Create your account
        </button>
      </Section>
    </>
  );
};

export default HowItWorks;
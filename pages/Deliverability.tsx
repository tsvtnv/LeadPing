import React from 'react';
import Section from '../components/shared/Section';
import { ShieldCheck, MailCheck, Lock, AlertTriangle } from 'lucide-react';

const Deliverability: React.FC = () => {
  return (
    <>
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full mb-6">
            <ShieldCheck size={16} />
            <span className="text-sm font-medium">Safety First</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We protect your email reputation</h1>
          <p className="text-xl text-gray-600">LeadPing is strictly for inbound lead response. We utilize industry best practices to ensure your emails land in the primary inbox, not spam.</p>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
             <h2 className="text-2xl font-bold mb-4">Why we are different</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Most AI email tools are designed for "Cold Outreach" (spam). These tools burn through domains and get blocked by Google and Microsoft.
             </p>
             <p className="text-gray-600 mb-6 leading-relaxed">
               LeadPing is different. We only send emails to people who <strong>explicitly asked you to contact them</strong> via your website form. This high-intent signal means near 100% deliverability.
             </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" size={20} />
                What we DO NOT do
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span> We do not scrape emails from the web.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span> We do not send bulk marketing blasts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span> We do not "warm up" inboxes with fake traffic.
                </li>
              </ul>
           </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Safeguards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-xl">
              <MailCheck className="mb-4" size={24} />
              <h3 className="font-bold mb-2">1-to-1 Sending</h3>
              <p className="text-sm text-gray-600">Every email is sent individually via your own SMTP or Gmail API connection, just like you typed it manually.</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl">
              <Lock className="mb-4" size={24} />
              <h3 className="font-bold mb-2">Reply-To Headers</h3>
              <p className="text-sm text-gray-600">We configure headers correctly so when a lead replies, it goes straight to your real inbox, not our system.</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl">
              <ShieldCheck className="mb-4" size={24} />
              <h3 className="font-bold mb-2">Rate Limiting</h3>
              <p className="text-sm text-gray-600">Built-in safety brakes ensure you never exceed your email provider's daily sending limits.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Deliverability;
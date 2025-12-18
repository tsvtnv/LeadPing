import React from 'react';
import Section from '../components/shared/Section';

const Privacy: React.FC = () => {
  return (
    <Section className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">Last updated: December 16, 2025</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4 text-gray-600">
          LeadPing respects your privacy. We process personal data only for the purpose of providing our automated response service. We do not sell your data or your leads' data to third parties.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Data We Collect</h2>
        <p className="mb-4 text-gray-600">
          We collect information you explicitly provide, such as your email address and billing details. Additionally, we process the content of inbound leads (name, email, message) solely to generate responses.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Data Retention</h2>
        <p className="mb-4 text-gray-600">
          Lead data is retained for 30 days to allow for the "Follow-up" history feature, after which it is anonymized or deleted, unless you request otherwise.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. AI Processing</h2>
        <p className="mb-4 text-gray-600">
          We use third-party LLMs (Large Language Models) to generate email drafts. Data sent to these providers is not used to train their models.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4 text-gray-600">
          For any privacy concerns, please contact privacy@leadping.com.
        </p>
      </div>
    </Section>
  );
};

export default Privacy;
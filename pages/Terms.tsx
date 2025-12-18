import React from 'react';
import Section from '../components/shared/Section';

const Terms: React.FC = () => {
  return (
    <Section className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">Last updated: December 16, 2025</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-600">
          By using LeadPing, you agree to these terms. If you do not agree, you must not use our service.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Acceptable Use</h2>
        <p className="mb-4 text-gray-600">
          You agree to use LeadPing only for replying to inbound enquiries. You must not use the service for cold outreach, spam, or harassment. Violation of this policy will result in immediate account termination.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Liability</h2>
        <p className="mb-4 text-gray-600">
          LeadPing is provided "as is". While we strive for accuracy, we are not liable for the content of AI-generated emails or any lost business resulting from their use. You are responsible for reviewing drafts if necessary.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. Subscriptions</h2>
        <p className="mb-4 text-gray-600">
          Subscriptions are billed monthly. You may cancel at any time. Refunds are provided at our discretion for technical failures only.
        </p>
      </div>
    </Section>
  );
};

export default Terms;
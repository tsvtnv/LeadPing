import React, { useState } from 'react';
import { Check, Loader2, Zap, CreditCard, Download, Calendar, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const INVOICES = [
  { id: 'inv_001', date: 'Dec 01, 2025', amount: '£29.00', status: 'Paid', plan: 'Starter Monthly' },
  { id: 'inv_002', date: 'Nov 01, 2025', amount: '£29.00', status: 'Paid', plan: 'Starter Monthly' },
  { id: 'inv_003', date: 'Oct 01, 2025', amount: '£29.00', status: 'Paid', plan: 'Starter Monthly' },
];

const BillingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [currentPlan, setCurrentPlan] = useState('starter');
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    { 
      id: 'starter', 
      name: 'Starter', 
      monthlyPrice: 29, 
      yearlyPrice: 290, 
      limit: '300 leads/mo', 
      features: ['Instant AI Replies', 'Email Support', 'Basic Analytics'] 
    },
    { 
      id: 'pro', 
      name: 'Pro', 
      monthlyPrice: 79, 
      yearlyPrice: 790, 
      limit: '1,500 leads/mo', 
      popular: true,
      features: ['Everything in Starter', 'Custom Knowledge Base', 'Draft Mode', 'Priority Support', 'Zapier Integration'] 
    },
    { 
      id: 'scale', 
      name: 'Scale', 
      monthlyPrice: 199, 
      yearlyPrice: 1990, 
      limit: 'Unlimited leads', 
      features: ['Everything in Pro', 'Multiple Inboxes', 'White-labeling', 'Dedicated Manager', 'SSO & Audit Logs'] 
    },
  ];

  const handleUpgrade = (planId: string) => {
    setLoadingPlan(planId);
    setTimeout(() => {
      setLoadingPlan(null);
      setCurrentPlan(planId);
    }, 1500);
  };

  // Usage stats
  const usage = 42;
  const limit = currentPlan === 'starter' ? 300 : currentPlan === 'pro' ? 1500 : 99999;
  const percentage = Math.min((usage / limit) * 100, 100);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
        <p className="text-sm text-gray-500">Manage your plan, payment details, and invoices.</p>
      </div>

      {/* Top Section: Usage & Payment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Usage Card */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h2 className="font-semibold text-gray-900 flex items-center gap-2">
               <Zap size={18} className="text-gray-400"/> Current Usage
             </h2>
             <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded capitalize">
               {currentPlan} Plan Active
             </span>
           </div>
           
           <div className="space-y-6">
             <div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-gray-600">Monthly Leads</span>
                 <span className="font-medium">{usage} / {currentPlan === 'scale' ? '∞' : limit}</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-3">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${percentage}%` }}
                   className="bg-black h-3 rounded-full"
                 />
               </div>
               <p className="text-xs text-gray-400 mt-2">Resets on Jan 1st, 2026</p>
             </div>
           </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
           <div>
             <h2 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
               <CreditCard size={18} className="text-gray-400"/> Payment Method
             </h2>
             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 mb-4">
                <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-blue-800">VISA</span>
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-900">•••• 4242</p>
                   <p className="text-xs text-gray-500">Expires 12/28</p>
                </div>
             </div>
           </div>
           <button className="text-sm font-medium text-black underline hover:text-gray-600 text-left">
             Update card
           </button>
        </div>
      </div>

      {/* Plans Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 gap-4">
           <div>
             <h2 className="text-xl font-bold text-gray-900">Available Plans</h2>
             <p className="text-sm text-gray-500">Upgrade or downgrade at any time.</p>
           </div>
           
           {/* Period Toggle */}
           <div className="bg-gray-100 p-1 rounded-lg flex items-center">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${billingPeriod === 'monthly' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${billingPeriod === 'yearly' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
              >
                Yearly <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {plans.map((plan) => {
             const isCurrent = currentPlan === plan.id;
             const price = billingPeriod === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12);
             
             return (
               <motion.div 
                 key={plan.id}
                 layout
                 className={`relative bg-white border rounded-xl p-6 shadow-sm flex flex-col ${
                   isCurrent ? 'border-black ring-1 ring-black' : 'border-gray-200'
                 } ${plan.popular && !isCurrent ? 'border-blue-200 shadow-md' : ''}`}
               >
                 {plan.popular && !isCurrent && (
                   <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                     Recommended
                   </div>
                 )}
                 {isCurrent && (
                   <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                     Current Plan
                   </div>
                 )}

                 <div className="mb-6">
                   <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
                   <div className="flex items-baseline gap-1 mt-2">
                     <span className="text-3xl font-bold">£{price}</span>
                     <span className="text-gray-500 text-sm">/mo</span>
                   </div>
                   {billingPeriod === 'yearly' && (
                     <p className="text-xs text-green-600 mt-1 font-medium">Billed £{plan.yearlyPrice} yearly</p>
                   )}
                   <p className="text-sm text-gray-500 mt-4 pb-4 border-b border-gray-100">{plan.limit}</p>
                 </div>

                 <ul className="space-y-3 mb-8 flex-grow">
                   {plan.features.map((feat, i) => (
                     <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                       <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                       <span className="leading-tight">{feat}</span>
                     </li>
                   ))}
                 </ul>

                 <button
                   onClick={() => handleUpgrade(plan.id)}
                   disabled={isCurrent || loadingPlan !== null}
                   className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                     isCurrent 
                       ? 'bg-gray-100 text-gray-400 cursor-default' 
                       : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-0.5'
                   }`}
                 >
                    {loadingPlan === plan.id ? <Loader2 className="animate-spin" size={16} /> : isCurrent ? 'Active' : 'Upgrade'}
                 </button>
               </motion.div>
             );
           })}
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
           <h2 className="font-bold text-gray-900">Invoice History</h2>
           <button className="text-sm text-gray-500 hover:text-black">Download All</button>
         </div>
         <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Invoice</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {INVOICES.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inv.date}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inv.plan}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{inv.amount}</td>
                   <td className="px-6 py-4 whitespace-nowrap">
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                       {inv.status}
                     </span>
                   </td>
                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     <button className="text-gray-400 hover:text-black">
                       <Download size={16} />
                     </button>
                   </td>
                </tr>
              ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default BillingPage;
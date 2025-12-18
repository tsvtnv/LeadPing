import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, Check, ShieldCheck, ArrowRight, HelpCircle, 
  Sparkles, ChevronRight, MessageSquare, Globe, 
  Cpu, Activity, Lock, Server, BarChart3, Star,
  Info, Clock, Minus, Plus
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "£29" : "£24",
      desc: "For solopreneurs and local trades.",
      features: [
        "Up to 50 intelligence loops",
        "Direct Instagram & WhatsApp DMs",
        "Standard brand voice matching",
        "Email support",
        "Basic ROI dashboard"
      ],
      cta: "Start 14-day trial",
      highlight: false
    },
    {
      name: "Pro",
      price: billingCycle === 'monthly' ? "£79" : "£64",
      desc: "For high-performance clinics & agencies.",
      features: [
        "Up to 250 intelligence loops",
        "Custom knowledge base (Advanced)",
        "Review & Draft mode active",
        "Priority neural processing",
        "Zapier & CRM integrations",
        "Advanced site health analysis"
      ],
      cta: "Go Pro",
      highlight: true
    },
    {
      name: "Scale",
      price: billingCycle === 'monthly' ? "£199" : "£159",
      desc: "For high-volume enterprise operations.",
      features: [
        "Unlimited intelligence loops",
        "Dedicated account strategist",
        "White-label outbound engine",
        "Custom neural tone training",
        "SSO & Enterprise security suite",
        "99.9% Latency SLA"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- CINEMATIC HERO --- */}
      <section className="relative pt-40 pb-52 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-black/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] active:scale-95 transition-all cursor-pointer group"
            >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 group-hover:text-black transition-colors">
                 LeadPing Pricing: <span className="text-black italic">Transparent Intelligence</span>
               </span>
               <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              The price of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">absolute speed.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Start for free. Pay as you scale. No hidden fees, just pure neural velocity for your sales team.
            </motion.p>

            {/* Billing Toggle */}
            <div className="flex flex-col items-center gap-6 mt-16">
               <div className="bg-gray-100 p-1.5 rounded-[1.5rem] flex items-center shadow-inner border border-gray-100">
                  <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-white shadow-xl text-black' : 'text-gray-400 hover:text-black'}`}
                  >
                    Monthly
                  </button>
                  <button 
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white shadow-xl text-black' : 'text-gray-400 hover:text-black'}`}
                  >
                    Yearly <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-[9px]">-20%</span>
                  </button>
               </div>
               <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] italic">No credit card required for 14-day trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING GRID --- */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-12 rounded-[4rem] flex flex-col justify-between transition-all group ${
                    plan.highlight 
                      ? 'bg-black text-white shadow-[0_50px_100px_rgba(0,0,0,0.2)] scale-105 z-10' 
                      : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
                  }`}
                >
                   {plan.highlight && (
                     <div className="absolute top-8 right-12">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                           <Star size={12} className="text-blue-400 fill-blue-400" />
                           <span className="text-[9px] font-black uppercase tracking-widest">Most Popular</span>
                        </div>
                     </div>
                   )}

                   <div>
                      <h3 className={`text-2xl font-black italic tracking-tight mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mb-8">
                         <span className="text-6xl font-black tracking-tighter italic">{plan.price}</span>
                         <span className={`text-sm font-black uppercase tracking-widest ${plan.highlight ? 'text-gray-500' : 'text-gray-300'}`}>/mo</span>
                      </div>
                      <p className={`text-sm font-medium leading-relaxed mb-10 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                      
                      <div className="h-px w-full bg-current opacity-[0.05] mb-10" />

                      <ul className="space-y-5 mb-12">
                         {plan.features.map((feat, j) => (
                           <li key={j} className="flex items-start gap-4">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                                 <Check size={12} strokeWidth={4} />
                              </div>
                              <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{feat}</span>
                           </li>
                         ))}
                      </ul>
                   </div>

                   <Link 
                     to="/signup" 
                     className={`w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 ${
                       plan.highlight 
                         ? 'bg-white text-black hover:bg-gray-100 shadow-xl' 
                         : 'bg-black text-white hover:bg-gray-800'
                     }`}
                   >
                      {plan.cta} <ArrowRight size={16} />
                   </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- NEURAL COMPARISON --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-8">Neural <span className="text-gray-300">Comparison.</span></h2>
              <p className="text-gray-500 text-xl font-medium">Why LeadPing is the #1 intelligence loop in the world.</p>
           </div>

           <div className="bg-white rounded-[3.5rem] shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-gray-50/50">
                       <th className="p-10 text-[10px] font-black text-gray-400 uppercase tracking-widest">Platform Feature</th>
                       <th className="p-10 text-center text-sm font-black italic tracking-tight border-x border-gray-50">Traditional Bot</th>
                       <th className="p-10 text-center text-lg font-black italic tracking-tight bg-black text-white">LeadPing AI</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm font-medium">
                    {[
                      { f: 'Response Latency', old: '2 - 6 Hours', new: '< 30 Seconds' },
                      { f: 'Neural Tone Matching', old: 'Template Based', new: 'Adaptive v2.0' },
                      { f: 'Site Health Research', old: 'None', new: 'Automated' },
                      { f: 'Instagram/WA Hooks', old: 'Zapier Bridge', new: 'Native API' },
                      { f: 'Inlet Security', old: 'None', new: 'PII Redaction' }
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-gray-50">
                         <td className="p-10 font-black italic tracking-tight text-gray-900">{row.f}</td>
                         <td className="p-10 text-center text-gray-400 border-x border-gray-50">{row.old}</td>
                         <td className="p-10 text-center font-black bg-black text-blue-400">{row.new}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-40 bg-white">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">Frequently <span className="text-gray-200">Asked.</span></h2>
               <p className="text-gray-500 font-medium">Everything you need to know about the LeadPing ecosystem.</p>
            </div>

            <div className="space-y-6">
               {[
                 { q: "Is there really a 14-day free trial?", a: "Yes. You get full access to the Pro features for 14 days. No credit card required. We want you to see the ROI before you spend a penny." },
                 { q: "Can I cancel my subscription anytime?", a: "LeadPing is a month-to-month service. You can cancel, upgrade, or downgrade from your billing dashboard with 1 click." },
                 { q: "Do you integrate with my CRM?", a: "Absolutely. We have native hooks for HubSpot, Salesforce, and Pipedrive. Plus, our Webhook loop works with 2,000+ apps via Zapier or Make." },
                 { q: "What happens if I exceed my monthly limit?", a: "We never hard-stop your loops. We'll simply notify you and offer a one-time overage pack or a seamless upgrade to the next tier." }
               ].map((item, i) => (
                 <div key={i} className="group bg-gray-50/50 border border-gray-100 rounded-[2.5rem] p-10 hover:bg-white hover:border-black transition-all">
                    <h4 className="text-xl font-black italic tracking-tight mb-4 flex items-center justify-between">
                       {item.q}
                       <Plus size={20} className="text-gray-300 group-hover:rotate-45 group-hover:text-black transition-all" />
                    </h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{item.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FINAL CINEMATIC CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Start the Velocity Movement</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16 px-2">
            Invest in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Growth.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Join the elite teams who close leads in 30 seconds. No credit card required to start your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <Link to="/signup" className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-6 shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden">
                <div className="relative z-10 flex items-center gap-6">
                  Get Started <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             </Link>
          </div>
          
          <div className="mt-24 flex justify-center items-center gap-16 opacity-30">
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">£0.00</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Setup Friction</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">14 Days</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Elite Trial</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">100%</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Cloud Native</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
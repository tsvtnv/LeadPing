
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Zap, Book, MessageSquare, ShieldCheck, 
  HelpCircle, ArrowRight, ChevronRight, Cpu, 
  Globe, Clock, Mail, Info, Smartphone, FileText, 
  Settings, Key, Layers, Sparkles
} from 'lucide-react';

const categories = [
  {
    icon: Zap,
    title: "Neural Setup",
    desc: "Connect your first inlet and tune the brain in under 120 seconds.",
    links: ["Quick Start Guide", "Brain Tone Tuning", "Inlet Activation", "System Memory"]
  },
  {
    icon: Layers,
    title: "Omni-Channel Hooks",
    desc: "Natively integrate WhatsApp, Instagram, and custom Webhooks.",
    links: ["WhatsApp API Setup", "Meta DM Inflow", "Shadow Email Relay", "Custom Webhooks"]
  },
  {
    icon: ShieldCheck,
    title: "Reputation & Safety",
    desc: "Ensuring 99.9% primary inbox delivery and PII security.",
    links: ["SPF & DKIM Config", "PII Redaction Engine", "Bounce Protection", "GDPR Native Rules"]
  },
  {
    icon: Key,
    title: "Account & Billing",
    desc: "Manage subscriptions, SSO, and enterprise workspace settings.",
    links: ["SSO Integration", "Plan Limits", "Invoice Retrieval", "Seat Management"]
  }
];

const HelpCenter: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- CINEMATIC HERO --- */}
      <section className="relative pt-48 pb-52 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-black/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
               <HelpCircle size={14} className="text-blue-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 LeadPing Intelligence: <span className="text-black italic">Support Terminal</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,10vw,7rem)] font-black tracking-tighter leading-[0.95] mb-16 italic px-2"
            >
              How can we <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4 leading-[1.2]">accelerate you?</span>
            </motion.h1>

            {/* SEARCH BAR */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto group"
            >
               <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
               <div className="relative">
                  <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={24} />
                  <input 
                    type="text"
                    placeholder="Search the intelligence library..."
                    className="w-full bg-white border border-gray-100 rounded-[2.5rem] py-8 pl-20 pr-10 text-xl font-medium focus:ring-1 focus:ring-black outline-none shadow-2xl shadow-black/5 placeholder:text-gray-300 transition-all italic"
                  />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CATEGORY GRID --- */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-gray-100 rounded-[4rem] p-12 lg:p-16 shadow-sm hover:shadow-2xl hover:border-black transition-all overflow-hidden flex flex-col lg:flex-row gap-12"
                >
                   <div className="lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner mb-10">
                           <cat.icon size={32} />
                        </div>
                        <h3 className="text-3xl font-black italic tracking-tight mb-6">{cat.title}</h3>
                        <p className="text-gray-500 font-medium leading-relaxed text-lg">{cat.desc}</p>
                      </div>
                      <div className="mt-12 lg:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-black transition-colors">
                        Explore Category <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                   <div className="lg:w-1/2 bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100/50 shadow-inner group-hover:bg-white group-hover:border-gray-100 transition-all">
                      <div className="space-y-4">
                         {cat.links.map((link, j) => (
                           <Link to="#" key={j} className="flex items-center justify-between group/link py-2 border-b border-black/5 last:border-0">
                              <span className="text-sm font-bold text-gray-500 group-hover/link:text-black transition-colors">{link}</span>
                              <ArrowRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                           </Link>
                         ))}
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- POPULAR ARTICLES SECTION --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
           <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-black italic tracking-tighter">Popular Guides.</h2>
              <Link to="/blog" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">View Documentation</Link>
           </div>

           <div className="space-y-4">
              {[
                { title: "Achieving Sub-30s Response Latency", type: "Technical Guide", readTime: "8 min" },
                { title: "Tone Matching for High-Ticket Agencies", type: "Strategy", readTime: "5 min" },
                { title: "Resolving Webhook Connectivity Issues", type: "Troubleshooting", readTime: "3 min" },
                { title: "Mastering the 'Approval Required' Flow", type: "Workflow", readTime: "6 min" }
              ].map((article, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between"
                >
                   <div className="flex items-center gap-6">
                      <div className="p-3 bg-gray-50 rounded-xl text-gray-300 group-hover:text-black group-hover:bg-gray-100 transition-all">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black italic tracking-tight mb-1">{article.title}</h4>
                        <div className="flex items-center gap-4">
                           <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{article.type}</span>
                           <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-1"><Clock size={10}/> {article.readTime}</span>
                        </div>
                      </div>
                   </div>
                   <ChevronRight size={20} className="text-gray-200 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- ELITE SUPPORT BLOCK --- */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-20">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <MessageSquare size={400} fill="white" />
              </div>
              
              <div className="lg:w-1/2 relative z-10">
                 <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-10 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Support Active</span>
                 </div>
                 <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] mb-10">
                   Still need <br/> a human?
                 </h2>
                 <p className="text-gray-400 text-xl font-medium leading-relaxed mb-12">
                   Sometimes the neural engine isn't enough. Our team of elite strategists and engineers is available 24/7 for Scale clients.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6">
                    <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                       <MessageSquare size={18} /> Chat with Support
                    </button>
                    <button className="bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                       <Mail size={18} /> Open a Ticket
                    </button>
                 </div>
              </div>

              <div className="lg:w-1/3 relative z-10">
                 <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-white/10 pb-6">Response Times</h4>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-300 italic">Starter</span>
                          <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase italic">24 Hours</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-300 italic">Professional</span>
                          <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase italic">4 Hours</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-blue-400 italic">Enterprise</span>
                          <span className="text-[10px] font-black bg-blue-500 text-white px-3 py-1 rounded-full uppercase italic">15 Minutes</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">The Loop is Waiting</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Get back to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">winning.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Documentation is the bridge. Execution is the result. Start your free trial today.
          </p>

          <Link to="/signup" className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Start Free Trial <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;

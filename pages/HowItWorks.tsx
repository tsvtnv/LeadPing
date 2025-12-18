import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, MessageSquare, Mail, Smartphone, Globe, 
  Cpu, Target, Layers, Radio, Activity, Sparkles, 
  CheckCircle2, MousePointer2, Timer, ShieldCheck,
  ChevronRight, Play, BarChart3, Database, Search
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

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
                 The 30-Second <span className="text-black italic">Conversion Blueprint</span>
               </span>
               <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              How we beat the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">human limit.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              We've engineered a neural processing loop that acts as your fastest salesperson. 24/7. Across every inlet.
            </motion.p>

            <motion.div 
              style={{ y: yHero }}
              className="relative max-w-4xl mx-auto mt-20"
            >
               <div className="bg-white border border-gray-100 p-10 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center text-gray-300 shadow-inner group-hover:scale-110 transition-transform">
                           <Radio size={32} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Capture</span>
                     </div>
                     <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent relative hidden md:block">
                        <motion.div 
                          animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-black" 
                        />
                     </div>
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center shadow-2xl group-hover:rotate-180 transition-transform duration-1000">
                           <Zap size={40} fill="currentColor" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-black italic">Intelligence</span>
                     </div>
                     <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent relative hidden md:block">
                        <motion.div 
                          animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                          className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-black" 
                        />
                     </div>
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center text-gray-300 shadow-inner group-hover:scale-110 transition-transform">
                           <CheckCircle2 size={32} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Closure</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BLOCK 1: UNIVERSAL CAPTURE --- */}
      <section className="bg-black py-40 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className="bg-white/10 backdrop-blur-md border border-white/10 w-fit px-4 py-1.5 rounded-full mb-10">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                     <Globe size={12} className="text-blue-400" /> Phase 01: Universal Inflow
                  </span>
               </div>
               <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-[0.85] mb-12">
                  Every signal, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Zero latency.</span>
               </h2>
               <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 max-w-lg">
                  We don't just wait for forms. We ingest signals from WhatsApp, Instagram, Messenger, and Webhooks the microsecond they trigger.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: MessageSquare, name: "Direct DMs", desc: "Native API hooks into Meta Business Suite." },
                    { icon: Zap, name: "Webhooks", desc: "Instant sync with 2,000+ form builders." },
                    { icon: Mail, name: "Email Relay", desc: "Shadow-forwarding with 0.1s overhead." },
                    { icon: Smartphone, name: "Twilio SMS", desc: "Dedicated numbers for local outreach." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all">
                          <item.icon size={20} />
                       </div>
                       <h4 className="text-white font-black italic tracking-tight mb-2 uppercase text-xs tracking-widest">{item.name}</h4>
                       <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </motion.div>

            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full scale-125 opacity-40" />
               <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-14 relative z-10 shadow-2xl overflow-hidden group">
                  <div className="space-y-6 relative z-10">
                     <div className="flex items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-widest italic border-b border-white/5 pb-6">
                        <Activity size={14} className="text-blue-400 animate-pulse" /> Live Ingestion Stream
                     </div>
                     {[1, 2, 3].map(i => (
                       <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
                             <div className="space-y-1">
                                <div className="w-32 h-2 bg-white/10 rounded-full" />
                                <div className="w-20 h-1.5 bg-white/5 rounded-full" />
                             </div>
                          </div>
                          <div className="text-[8px] font-black text-blue-400 uppercase tracking-widest">Active</div>
                       </div>
                     ))}
                  </div>
                  {/* Decorative Neural Grid */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent -rotate-12 translate-x-1/2 translate-y-1/2" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOCK 2: NEURAL ANALYSIS --- */}
      <section className="bg-white py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-gray-50 blur-[120px] rounded-full scale-110 -z-10" />
               <div className="bg-white border border-gray-100 p-12 lg:p-16 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-14 pb-10 border-b border-gray-50">
                    <div className="p-4 bg-black text-white rounded-2xl shadow-xl"><Cpu size={24}/></div>
                    <h4 className="text-2xl font-black italic tracking-tighter">Brain Processing</h4>
                  </div>
                  
                  <div className="space-y-10 relative">
                    <div className="absolute left-[31px] top-12 bottom-12 w-px bg-gray-100" />
                    {[
                      { icon: Search, title: 'Contextual Research', desc: 'Analyzing lead website & social health.', status: '0.4s' },
                      { icon: Target, title: 'Intent Scoring', desc: 'Detecting urgency and purchase signal.', status: '0.2s' },
                      { icon: Layers, title: 'Tone Matching', desc: 'Syncing draft with your brand voice.', status: '0.8s' },
                      { icon: ShieldCheck, title: 'Safety Filter', desc: 'PII redaction and GDPR scrub.', status: '0.1s' }
                    ].map((step, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-10 group relative z-10"
                      >
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-50 bg-white group-hover:border-black transition-all group-hover:scale-110`}>
                           <step.icon size={24} className="text-gray-300 group-hover:text-black transition-colors" />
                         </div>
                         <div className="flex-grow">
                           <div className="flex items-center justify-between mb-1">
                              <h5 className="text-lg font-black italic tracking-tight text-gray-900 leading-none">{step.title}</h5>
                              <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded italic">{step.status}</span>
                           </div>
                           <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{step.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-black text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-10 italic">Intelligence Layer</div>
              <h2 className="text-6xl md:text-[7rem] font-black italic tracking-tighter leading-[0.85] mb-14 pr-4">
                Deep-Focus <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Neural LeadPing.</span>
              </h2>
              <p className="text-gray-500 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                We don't just "bot-reply". Our AI does a 3-point health check on every lead, researching their company size and site speed before drafting a word.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                   <h5 className="font-black text-4xl italic tracking-tight mb-2">99.8%</h5>
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Contextual Accuracy</p>
                </div>
                <div>
                   <h5 className="font-black text-4xl italic tracking-tight mb-2">&lt;1.5s</h5>
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Total Processing Time</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BLOCK 3: AUTOMATED RESPONSE LOOP --- */}
      <section className="bg-black py-52 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
             <div className="bg-white/10 backdrop-blur-md border border-white/10 w-fit px-6 py-2 rounded-full mb-10 mx-auto">
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                   <Activity size={16} className="text-emerald-400" /> Phase 03: The 30s Window
                </span>
             </div>
             <h2 className="text-6xl md:text-[9rem] font-black text-white italic tracking-tighter leading-none mb-12">
                Close at <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">lightspeed.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { 
                 title: "Auto-Send Mode", 
                 desc: "The fastest way to grow. 100% automated replies for verified high-intent leads.",
                 icon: Zap,
                 stats: "Zero Latency"
               },
               { 
                 title: "Review Loop", 
                 desc: "Keep control. The AI drafts the reply and waits for your thumb-up in the Omni-Inbox.",
                 icon: MousePointer2,
                 stats: "1-Click Approve"
               },
               { 
                 title: "Nurture Bridge", 
                 desc: "If they don't reply, we auto-follow up across a different channel after 24 hours.",
                 icon: Timer,
                 stats: "3.2x Booking Lift"
               }
             ].map((card, i) => (
               <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition-all group flex flex-col justify-between h-[450px]">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black mb-10 shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
                       <card.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white italic tracking-tight mb-4 pr-2">{card.title}</h3>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{card.stats}</span>
                     <ArrowRight size={20} className="text-white/20 group-hover:text-white transition-all group-hover:translate-x-2" />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- BLOCK 4: THE DATA LOOP (INTEGRATION) --- */}
      <section className="bg-white py-40 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div>
                <div className="bg-black text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-10 italic">Intelligence Feedback</div>
                <h2 className="text-5xl md:text-[7rem] font-black italic tracking-tighter leading-[0.85] mb-14 pr-4">
                  Permanent <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Memory.</span>
                </h2>
                <div className="space-y-12">
                   {[
                     { icon: Database, title: "Dynamic CRM Sync", desc: "Every interaction is logged to HubSpot, Salesforce, or your custom CRM." },
                     { icon: BarChart3, title: "Signal ROI Tracking", desc: "See exactly which ad or form is driving the highest-intent replies." },
                     { icon: ShieldCheck, title: "Global Exclusion", desc: "Competitors and blacklist domains are auto-filtered out of the loop." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-all h-fit shadow-sm">
                           <item.icon size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-black italic tracking-tight mb-2 underline decoration-black/5 underline-offset-8 transition-all group-hover:decoration-black/40">{item.title}</h4>
                           <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="relative">
                <div className="absolute inset-0 bg-gray-100 blur-[120px] rounded-full scale-110 -z-10" />
                <div className="bg-white border border-gray-100 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-2.5">
                         <div className="w-3.5 h-3.5 rounded-full bg-red-400/20" />
                         <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/20" />
                         <div className="w-3.5 h-3.5 rounded-full bg-green-400/20" />
                      </div>
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">Signal Attribution</span>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="flex justify-between items-end border-b border-gray-50 pb-6">
                         <div>
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Source</p>
                            <p className="font-black italic text-xl">Instagram Ad #4</p>
                         </div>
                         <div className="text-right">
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">ROAS</p>
                            <p className="font-black italic text-xl text-emerald-500">4.2x</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Processing Node History</p>
                         <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between text-[11px] font-black italic">
                            <span>Ingested</span>
                            <span className="text-gray-400">0.02s</span>
                         </div>
                         <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between text-[11px] font-black italic border-l-4 border-black">
                            <span>Intelligence Drafted</span>
                            <span className="text-gray-400">1.2s</span>
                         </div>
                         <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between text-[11px] font-black italic">
                            <span>Reply Sent</span>
                            <span className="text-gray-400">12s</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
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
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Join the LeadPing Movement</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Think <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4">faster.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Ready to deploy your first intelligence loop? No credit card required to start your free 14-day trial.
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
                <p className="text-white font-black text-4xl tracking-tighter italic">Zero</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Setup Friction</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">30s</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Response Limit</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">24/7</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Active Ingestion</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
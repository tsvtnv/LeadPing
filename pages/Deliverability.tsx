
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, MailCheck, Lock, AlertTriangle, Zap, 
  ArrowRight, Activity, Cpu, Globe, Server, Check,
  ChevronRight, Sparkles, Database, Mail, Info, BarChart3
} from 'lucide-react';

const Deliverability: React.FC = () => {
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
                 Trust Infrastructure: <span className="text-black italic">Primary Inbox Logic</span>
               </span>
               <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              Primary inbox. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">Zero spam.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              We protect your domain reputation like a sovereign asset. LeadPing is engineered for response, not cold-reach spam.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- BLOCK 1: THE REPUTATION ENGINE --- */}
      <section className="py-40 bg-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className="bg-white/10 backdrop-blur-md border border-white/10 w-fit px-4 py-1.5 rounded-full mb-10">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                     <ShieldCheck size={12} className="text-blue-400" /> Reputation Protocol 1.0
                  </span>
               </div>
               <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-[0.85] mb-12">
                  Response, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">not Spam.</span>
               </h2>
               <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 max-w-lg">
                  LeadPing is strictly for inbound lead response. By focusing on micro-targeted, high-intent signals, we maintain near-perfect sender scores.
               </p>
               
               <div className="space-y-8">
                  {[
                    { icon: MailCheck, title: "1-to-1 Shadow Ingest", desc: "Replies are routed through your own secure SMTP, behaving exactly like a manual email." },
                    { icon: Lock, title: "PII Shield", desc: "Automated redaction of sensitive lead data before processing at the neural edge." },
                    { icon: Activity, title: "Humanized Pace", desc: "AI variance in send times mimics real human behavior to bypass spam filters." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                          <item.icon size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-black italic tracking-tight mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                          <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full scale-125 opacity-40" />
               <div className="bg-white/5 border border-white/10 rounded-[4rem] p-10 lg:p-16 relative z-10 shadow-2xl overflow-hidden group backdrop-blur-3xl">
                  <div className="space-y-10">
                     <div className="flex items-center justify-between border-b border-white/5 pb-8">
                        <div>
                           <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Sender Identity</p>
                           <p className="text-2xl font-black italic text-white tracking-tighter">Domain Reputation</p>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Optimal</p>
                           <p className="text-4xl font-black text-white italic tracking-tighter">99.4</p>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'SPF', status: 'PASS' },
                          { label: 'DKIM', status: 'PASS' },
                          { label: 'DMARC', status: 'PASS' },
                          { label: 'rDNS', status: 'PASS' }
                        ].map((rec, i) => (
                          <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 flex items-center justify-between">
                             <span className="text-xs font-black text-gray-400 tracking-widest">{rec.label}</span>
                             <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="text-[10px] font-black text-emerald-500 italic">{rec.status}</span>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOCK 2: TECHNICAL SAFEGUARDS --- */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
             <h2 className="text-6xl md:text-9xl font-black text-gray-900 italic tracking-tighter leading-none mb-12">
                Engineered <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Security.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { 
                 title: "Primary Ingest", 
                 desc: "We only process inbound enquiries. This zero-spam footprint ensures your domain stays healthy forever.",
                 icon: MailCheck,
                 label: "Trust Score: 100"
               },
               { 
                 title: "Neural Braking", 
                 desc: "Our AI detects potential bounce-traps and pauses outgoing loops before reputation is impacted.",
                 icon: Cpu,
                 label: "Predictive Safety"
               },
               { 
                 title: "SMTP Rotation", 
                 desc: "Cycle through reputable IPs to ensure consistent deliverability across all global ESPs.",
                 icon: Server,
                 label: "Enterprise Ready"
               }
             ].map((card, i) => (
               <div key={i} className="bg-gray-50 border border-gray-100 p-12 rounded-[3.5rem] hover:bg-white hover:shadow-2xl transition-all group flex flex-col justify-between h-[450px]">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black mb-10 shadow-inner group-hover:bg-black group-hover:text-white transition-all">
                       <card.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 italic tracking-tight mb-4">{card.title}</h3>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{card.label}</span>
                     <Check className="text-emerald-500" size={20} />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- BLOCK 3: ANTI-SPAM PHILOSOPHY --- */}
      <section className="bg-black py-52 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div>
                <div className="bg-white/10 text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-10 italic">Philosophical Drift</div>
                <h2 className="text-5xl md:text-[7rem] font-black text-white italic tracking-tighter leading-[0.85] mb-14 pr-4">
                  Why we <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">win.</span>
                </h2>
                <div className="space-y-12">
                   {[
                     { icon: AlertTriangle, title: "Zero Scraping", desc: "We never hunt for emails. We only ever reply to people who explicitly sought you out first." },
                     { icon: Info, title: "Contextual Accuracy", desc: "Templates kill reputation. Our AI writes every single reply from scratch based on the lead's unique data." },
                     { icon: BarChart3, title: "SLA Guaranteed", desc: "We maintain 99.9% inbox placement or we stop the loop automatically. Your reputation is our priority." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white group-hover:text-black transition-all h-fit shadow-sm">
                           <item.icon size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-black text-white italic tracking-tight mb-2 underline decoration-white/5 underline-offset-8 transition-all group-hover:decoration-white/40">{item.title}</h4>
                           <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="relative">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-110 -z-10" />
                <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group backdrop-blur-3xl">
                   <div className="space-y-8">
                      <div className="flex justify-between items-center mb-10">
                         <div className="flex gap-2">
                           <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black font-black italic">!</div>
                         </div>
                         <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Safety Notice</span>
                      </div>
                      
                      <div className="p-10 bg-black/50 border border-white/10 rounded-[3rem] text-center">
                         <p className="text-lg font-medium italic text-gray-400 mb-8 leading-relaxed">
                           "LeadPing does not support cold outreach. Attempting to upload scraped lists will result in immediate account termination. We are a response tool only."
                         </p>
                         <div className="flex justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white opacity-20" />
                            <div className="w-2 h-2 rounded-full bg-white opacity-40" />
                            <div className="w-2 h-2 rounded-full bg-white opacity-20" />
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
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Secure Your Identity</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Trusted <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Delivery.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Ready to deploy an intelligence loop that respects your inbox? No credit card required to start.
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
                <p className="text-white font-black text-4xl tracking-tighter italic">99.9%</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Primary Placement</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">£0.00</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Reputation Risk</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">24/7</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Monitoring</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deliverability;

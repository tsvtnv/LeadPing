import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added Activity and Lock to the imports from lucide-react
import { 
  Zap, ShieldCheck, Settings, BarChart3, ArrowRight, 
  Cpu, Target, Layers, Radio, Globe, MessageSquare, 
  Smartphone, MousePointer2, Sparkles, ChevronRight,
  Database, Fingerprint, Languages, Search, Sliders,
  CheckCircle2, Play, Activity, Lock
} from 'lucide-react';

const Features: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  const featureSections = [
    {
      id: "ingestion",
      label: "Capture Intelligence",
      title: "Omnichannel Inflow.",
      desc: "Stop manually checking tabs. LeadPing synchronizes every inbound signal into a single high-performance neural stream.",
      features: [
        { name: "Direct WhatsApp Hooks", desc: "Native API integration for business accounts. No middle-man latency.", icon: MessageSquare },
        { name: "Instagram DM Capture", desc: "Instantly ingest high-intent social signals from DMs and stories.", icon: InstagramIcon },
        { name: "Smart Webhooks", desc: "Connect any form (Webflow, Framer, WordPress) in under 60 seconds.", icon: Zap },
        { name: "Email Relay 2.0", desc: "Shadow-forwarding that extracts lead intent before you even open the mail.", icon: MailIcon }
      ]
    },
    {
      id: "brain",
      label: "Processing Engine",
      title: "Neural Velocity.",
      desc: "Our AI doesn't just 'reply'. it researches, scores, and matches your brand voice with absolute precision.",
      features: [
        { name: "Contextual Research", desc: "AI automatically analyzes lead website health and SEO profiles.", icon: Search },
        { name: "Tone Matching", desc: "Select from Professional, Witty, or Direct brand voices in one click.", icon: Fingerprint },
        { name: "Multi-Language Neural", desc: "Detect and reply in 40+ languages with native-level fluency.", icon: Languages },
        { name: "PII Redaction", desc: "Enterprise-grade masking of sensitive data before it hits the brain.", icon: ShieldCheck }
      ]
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
                 Platform Capabilities: <span className="text-black italic">v2.0 Logic</span>
               </span>
               <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              The architecture of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">high-speed sales.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Engineered for teams that refuse to let a single lead grow cold. One centralized brain, unlimited inlets.
            </motion.p>
            
            <div className="flex justify-center gap-6">
               <button className="bg-black text-white px-12 py-6 rounded-[2rem] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3">
                 Explore the API <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE BLOCK 1: CAPTURE --- */}
      <section className="py-40 bg-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-white/10 w-fit px-4 py-1.5 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest mb-10 italic">01 // Universal Ingestion</div>
                <h2 className="text-6xl md:text-[7rem] font-black text-white italic tracking-tighter leading-[0.85] mb-14">
                  Capture <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Anything.</span>
                </h2>
                <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 max-w-xl">
                  LeadPing connects natively to the world's most high-intent platforms. We don't just bridge apps; we ingest signals directly into our neural loop.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   {featureSections[0].features.map((f, i) => (
                     <div key={i} className="group">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all shadow-inner">
                           <f.icon size={20} />
                        </div>
                        <h4 className="text-white font-black italic tracking-tight mb-2 uppercase text-xs tracking-widest">{f.name}</h4>
                        <p className="text-gray-500 text-xs font-medium leading-relaxed">{f.desc}</p>
                     </div>
                   ))}
                </div>
              </motion.div>

              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full scale-125 opacity-40" />
                 <div className="bg-white/5 border border-white/10 rounded-[4rem] p-10 lg:p-16 relative z-10 shadow-2xl overflow-hidden group backdrop-blur-3xl">
                    <div className="space-y-6">
                       <div className="flex items-center justify-between border-b border-white/5 pb-8">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-white/10 rounded-2xl text-blue-400 animate-pulse"><Radio size={24}/></div>
                             <div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Active Terminal</p>
                                <p className="text-xl font-black italic text-white tracking-tighter">London Hub Node</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Streaming</p>
                             <p className="text-xs text-gray-500 font-bold">Latency: 12ms</p>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          {[
                            { label: 'Webhook Ingest', status: 'OK', val: '24.2kb/s' },
                            { label: 'Instagram Sync', status: 'OK', val: 'Active' },
                            { label: 'Neural Matching', status: 'OK', val: '0.8s' }
                          ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-5 rounded-2xl flex items-center justify-between border border-white/5 group-hover:border-white/10 transition-colors">
                               <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                  <span className="text-xs font-black text-gray-300 italic">{item.label}</span>
                               </div>
                               <span className="text-[10px] font-mono text-gray-500 uppercase">{item.val}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    {/* Decorative Grid */}
                    <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 border border-white/5 rounded-full rotate-45" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FEATURE BLOCK 2: PROCESSING (BRAIN) --- */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="absolute inset-0 bg-gray-50 blur-[120px] rounded-full scale-110 -z-10" />
                 <div className="bg-white border border-gray-100 p-12 lg:p-16 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                    <div className="flex items-center gap-6 mb-14 pb-10 border-b border-gray-50">
                       <div className="p-4 bg-black text-white rounded-2xl shadow-xl group-hover:rotate-12 transition-transform"><Cpu size={32}/></div>
                       <div>
                          <h3 className="text-3xl font-black italic tracking-tighter text-gray-900 leading-tight">Neural Core</h3>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Processing v2.0</p>
                       </div>
                    </div>
                    
                    <div className="space-y-8 relative">
                       <div className="absolute left-[31px] top-12 bottom-12 w-px bg-gray-100" />
                       {[
                         { title: "Dynamic Logic", desc: "Qualify based on custom triggers.", icon: Sliders },
                         { title: "Global Sync", desc: "Shared memory across every inlet.", icon: Database },
                         { title: "Secure Loop", desc: "Full data encryption at the edge.", icon: Lock }
                       ].map((item, i) => (
                         <motion.div 
                           key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                           className="flex items-center gap-8 group/item relative z-10"
                         >
                            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-50 shadow-sm flex items-center justify-center group-hover/item:border-black transition-all">
                               <item.icon size={24} className="text-gray-300 group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                               <h5 className="text-lg font-black italic text-gray-900 mb-1">{item.title}</h5>
                               <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                 <div className="bg-black text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-10 italic">02 // The Processing Brain</div>
                 <h2 className="text-6xl md:text-[7rem] font-black text-gray-900 italic tracking-tighter leading-[0.85] mb-14 pr-4">
                    Think like <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100">an Elite.</span>
                 </h2>
                 <p className="text-gray-500 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                    Our processing engine goes beyond keywords. It understands intent, urgency, and brand nuance to draft replies that close deals.
                 </p>
                 <div className="grid grid-cols-2 gap-12">
                    <div>
                       <h5 className="font-black text-4xl italic tracking-tight mb-2">99.2%</h5>
                       <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Contextual Match</p>
                    </div>
                    <div>
                       <h5 className="font-black text-4xl italic tracking-tight mb-2">0.4s</h5>
                       <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Avg Insight Generation</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- ANALYTICS / VISIBILITY --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-10">Absolute <span className="text-gray-300">Visibility.</span></h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">Track every ROI signal, conversion rate, and reply velocity in a high-fidelity dashboard.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Response Analytics', val: '30s avg', desc: 'Real-time monitoring of your speed loop.', icon: BarChart3 },
                { title: 'Lead Health', val: '14.2% lift', desc: 'Deep insights into intent scoring trends.', icon: Activity },
                { title: 'Global Coverage', val: '40+ Langs', desc: 'Connect with leads in their native tongue.', icon: Globe }
              ].map((card, i) => (
                <div key={i} className="bg-white border border-gray-100 p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all group">
                   <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner">
                         <card.icon size={24} />
                      </div>
                      <div className="text-right">
                         <p className="text-2xl font-black italic text-gray-900 tracking-tighter">{card.val}</p>
                         <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Active Signal</p>
                      </div>
                   </div>
                   <h4 className="text-xl font-black text-gray-900 italic tracking-tight mb-4">{card.title}</h4>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Experience the Platform</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Ready for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4">Velocity?</span>
          </h2>
          
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
                <p className="text-white font-black text-4xl tracking-tighter italic">2 mins</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Setup Time</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">£0.00</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Setup Fee</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">14 Days</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Free Trial</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icons (Meta/Instagram specific)
const InstagramIcon = ({ size }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MailIcon = ({ size }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export default Features;
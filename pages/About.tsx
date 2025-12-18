
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, ShieldCheck, Sparkles, 
  Users, Target, Cpu, Globe, Rocket, ChevronRight,
  Clock, Quote, Brain, Activity, Lock
} from 'lucide-react';

const About: React.FC = () => {
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
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
               <Brain size={14} className="text-blue-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 The Genesis: <span className="text-black italic">Bypassing Human Delay</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] mb-12 italic px-2"
            >
              Intelligence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">at the edge.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              LeadPing was born from a singular obsession: <span className="text-black font-bold">Why does lead response still take hours?</span> We built a machine to answer that question in 30 seconds.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- ELITE VISION BLOCK --- */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10 leading-[0.9]">
                   The Human <br/> Gap.
                 </h2>
                 <p className="text-gray-500 text-xl font-medium leading-relaxed mb-8">
                   Traditional sales development is broken. In a world of instant gratification, waiting for a human to finish their lunch before replying to an enquiry is a recipe for 0% conversion.
                 </p>
                 <p className="text-gray-500 text-xl font-medium leading-relaxed">
                   LeadPing doesn't sleep. It doesn't pause. It is a neural extension of your best closer, operating at the speed of light, ensuring that every high-intent signal is met with immediate, elite-level intelligence.
                 </p>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-110" />
                 <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-white relative z-10 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none -rotate-12">
                      <Cpu size={400} fill="white" />
                    </div>
                    <Quote size={48} className="text-blue-400 mb-10" />
                    <p className="text-4xl font-black italic tracking-tight leading-tight mb-10">
                      "We didn't just build a tool. We engineered a sovereign asset for your sales pipeline."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-px bg-white/20" />
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">The LeadPing Architecture Team</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-6">Our DNA.</h2>
              <p className="text-gray-500 font-medium max-w-2xl mx-auto text-xl">The non-negotiable principles powering every intelligence loop.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: "Absolute Speed.", 
                  desc: "Delayed response is a lost opportunity. We maintain a strict sub-30s latency protocol across all global inlets.",
                  icon: Activity
                },
                { 
                  title: "Neural Accuracy.", 
                  desc: "Generic bots damage trust. Our engine researches leads and identifies brand nuance before drafting a single word.",
                  icon: Target
                },
                { 
                  title: "Total Security.", 
                  desc: "Data privacy is our default. We employ edge-redaction of PII to ensure your intelligence loop is always safe and compliant.",
                  icon: Lock
                }
              ].map((value, i) => (
                <div key={i} className="bg-white border border-gray-100 p-16 rounded-[4rem] shadow-sm hover:shadow-2xl hover:border-black transition-all group relative overflow-hidden">
                   <div className="absolute top-[-10%] right-[-10%] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700">
                      <value.icon size={200} />
                   </div>
                   <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all mb-12 shadow-inner">
                      <value.icon size={36} />
                   </div>
                   <h3 className="text-3xl font-black text-gray-900 italic tracking-tight mb-6">{value.title}</h3>
                   <p className="text-gray-500 text-lg font-medium leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- TEAM / GLOBAL --- */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="grid grid-cols-2 gap-6 relative">
                  <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
                  {[
                    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                  ].map((url, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                      className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
                    >
                       <img src={url} alt="LeadPing Office Culture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                  ))}
               </div>
               <div>
                  <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-2 rounded-full mb-10 shadow-sm">
                     <Globe size={16} className="text-blue-500" />
                     <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">London Hub • Silicon Alley • Distributed</span>
                  </div>
                  <h2 className="text-6xl font-black italic tracking-tighter mb-12 leading-[0.85]">
                    The team behind <br/> the loop.
                  </h2>
                  <p className="text-gray-500 text-2xl font-medium leading-relaxed mb-12">
                    We are a collective of machine learning specialists, sales strategists, and performance engineers who believe that <span className="text-black font-bold">latency is the enemy of growth.</span>
                  </p>
                  <Link to="/signup" className="group relative bg-black text-white px-12 py-6 rounded-[2.5rem] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl inline-flex items-center gap-4 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-4">Join the Movement <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Experience the Future of Response</span>
          </motion.div>
          
          <h2 className="text-8xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Accelerate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Everything.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Stop losing leads to delay. Connect your inlets and start closing deals in 30 seconds with LeadPing.
          </p>

          <Link to="/signup" className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Get Started Now <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

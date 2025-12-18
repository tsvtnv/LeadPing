
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowRight, Mail, MessageSquare, 
  Globe, Sparkles, ChevronRight, Phone,
  Send, Twitter, Linkedin, Instagram, MapPin,
  Clock, Target, Brain, Rocket
} from 'lucide-react';

const Contact: React.FC = () => {
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
               <Rocket size={14} className="text-blue-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 Human Connection: <span className="text-black italic">The Command Terminal</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] mb-12 italic px-2"
            >
              Connect with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4 leading-[1.2]">the brain.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Have a high-volume request or need technical intelligence? Our elite team is ready to <span className="text-black font-bold">accelerate your pipeline.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- CORE CONTACT GRID --- */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              
              {/* LEFT: INFORMATION */}
              <div className="lg:col-span-5 space-y-16">
                 <div>
                    <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10 italic">Strategic Hubs</h3>
                    <div className="space-y-8">
                       <div className="flex items-start gap-6 group">
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner">
                             <MapPin size={20} />
                          </div>
                          <div>
                             <p className="text-xl font-black italic text-gray-900 tracking-tight">London Hub</p>
                             <p className="text-gray-500 font-medium mt-1">Silicon Alley • EC1V, UK</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-6 group">
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner">
                             <Clock size={20} />
                          </div>
                          <div>
                             <p className="text-xl font-black italic text-gray-900 tracking-tight">Global Inflow</p>
                             <p className="text-gray-500 font-medium mt-1">Support Active: 24/7 (SLA clients)</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10 italic">Intelligence Channels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {[
                         { label: "Sales", value: "sales@leadping.com", icon: Target },
                         { label: "Engineering", value: "dev@leadping.com", icon: Brain },
                         { label: "Partners", value: "join@leadping.com", icon: Globe },
                         { label: "General", value: "hello@leadping.com", icon: MessageSquare }
                       ].map((channel, i) => (
                         <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:border-black transition-all group">
                            <channel.icon size={16} className="text-blue-500 mb-4" />
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{channel.label}</p>
                            <p className="text-xs font-black italic text-gray-900 break-all">{channel.value}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="pt-10 border-t border-gray-50">
                    <div className="flex gap-4">
                       {[Twitter, Linkedin, Instagram].map((Social, i) => (
                         <button key={i} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all shadow-inner">
                            <Social size={18} />
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              {/* RIGHT: CONTACT FORM */}
              <div className="lg:col-span-7">
                 <div className="bg-[#fafafa] border border-gray-100 p-8 lg:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                       <Mail size={400} />
                    </div>
                    
                    <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Full Name</label>
                             <input 
                               type="text" 
                               placeholder="Alex Riviera"
                               className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 font-bold text-sm outline-none focus:ring-1 focus:ring-black shadow-inner transition-all placeholder:text-gray-300"
                             />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Work Email</label>
                             <input 
                               type="email" 
                               placeholder="alex@company.com"
                               className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 font-bold text-sm outline-none focus:ring-1 focus:ring-black shadow-inner transition-all placeholder:text-gray-300"
                             />
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Company Domain</label>
                          <div className="relative">
                             <Globe size={14} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                             <input 
                               type="text" 
                               placeholder="https://yourcompany.com"
                               className="w-full bg-white border border-gray-100 rounded-2xl pl-14 pr-6 py-4 font-bold text-sm outline-none focus:ring-1 focus:ring-black shadow-inner transition-all placeholder:text-gray-300"
                             />
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Monthly Lead Volume</label>
                          <select className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 font-bold text-sm outline-none focus:ring-1 focus:ring-black shadow-inner transition-all appearance-none italic cursor-pointer">
                             <option>10 - 100 leads /mo</option>
                             <option>100 - 500 leads /mo</option>
                             <option>500 - 2,500 leads /mo</option>
                             <option>2,500+ leads /mo</option>
                          </select>
                       </div>

                       <div className="space-y-3">
                          <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Brief Intelligence Request</label>
                          <textarea 
                             rows={5}
                             placeholder="How can we help you scale your response speed?"
                             className="w-full bg-white border border-gray-100 rounded-[2rem] px-6 py-6 font-bold text-sm outline-none focus:ring-1 focus:ring-black shadow-inner transition-all resize-none placeholder:text-gray-300"
                          />
                       </div>

                       <button 
                         type="submit"
                         className="w-full bg-black text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl active:scale-95 group/btn overflow-hidden relative"
                       >
                          <span className="relative z-10 flex items-center gap-3">Deploy Message <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                       </button>
                    </form>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* --- GLOBAL ROI MARQUEE --- */}
      <section className="py-24 bg-black overflow-hidden border-y border-white/5 relative">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         <div className="flex items-center gap-24 whitespace-nowrap animate-marquee relative z-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center gap-6 text-3xl font-black italic text-white/40 tracking-tighter uppercase">
                 <Zap size={24} className="text-blue-500 fill-blue-500" /> Average 30s Response Time 
                 <div className="w-2 h-2 rounded-full bg-white/20" />
                 99% Delivery Rate 
                 <div className="w-2 h-2 rounded-full bg-white/20" />
                 12.4% Revenue Lift
              </div>
            ))}
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
            Grow at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">lightspeed.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Documentation is the bridge. Execution is the result. Start your free trial today.
          </p>

          <button onClick={() => window.location.href='/signup'} className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Start Free Trial <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;

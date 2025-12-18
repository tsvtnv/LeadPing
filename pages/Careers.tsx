
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, Sparkles, Globe, Cpu, 
  Rocket, Briefcase, Users, Heart, Star,
  ChevronRight, Brain, FastForward, Coffee,
  Target, ShieldCheck
} from 'lucide-react';

const roles = [
  {
    title: "Senior Machine Learning Engineer",
    team: "Neural Engine",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "£120k - £160k + Equity"
  },
  {
    title: "Head of Growth Strategy",
    team: "Operations",
    location: "London / Hybrid",
    type: "Full-time",
    salary: "£90k - £130k + Bonus"
  },
  {
    title: "Lead Frontend Architect",
    team: "Product",
    location: "New York / Hybrid",
    type: "Full-time",
    salary: "$140k - $180k + Equity"
  },
  {
    title: "Customer Intelligence Lead",
    team: "Success",
    location: "Remote (GMT +/- 3h)",
    type: "Full-time",
    salary: "£65k - £85k"
  }
];

const perks = [
  { icon: FastForward, title: "Velocity Culture", desc: "We move fast, ship daily, and iterate at lightspeed." },
  { icon: Globe, title: "Sovereign Work", desc: "Work from anywhere in the world. High-speed internet is our only office requirement." },
  { icon: Target, title: "High Impact", desc: "You aren't a cog. You're building the future of sales intelligence." },
  { icon: Star, title: "Elite Equity", desc: "Every early team member becomes a literal owner of LeadPing." }
];

const Careers: React.FC = () => {
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
                 The Opportunity: <span className="text-black italic">Building the Core</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] mb-12 italic px-2"
            >
              Kill the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">human delay.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              We're hiring the world's most aggressive engineers and strategists to build the next generation of <span className="text-black font-bold">real-time intelligence.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- ELITE CULTURE BLOCK --- */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-110" />
                 <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-white relative z-10 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none -rotate-12">
                      <Zap size={400} fill="white" />
                    </div>
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                          <Brain size={24} className="text-blue-400" />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Our Philosophy</span>
                    </div>
                    <p className="text-4xl font-black italic tracking-tight leading-tight mb-10">
                      "We don't hire employees. We hire founders who want to solve the latency of the internet."
                    </p>
                    <div className="flex items-center gap-6">
                       <div className="flex -space-x-4">
                          {[1,2,3].map(i => (
                             <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-gray-800 overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?auto=format&fit=crop&w=100&q=80`} alt="Team member" className="w-full h-full object-cover" />
                             </div>
                          ))}
                       </div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Join the loop</p>
                    </div>
                 </div>
              </div>
              <div>
                 <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10 leading-[0.9]">
                   Why build <br/> with us.
                 </h2>
                 <p className="text-gray-500 text-xl font-medium leading-relaxed mb-8">
                   At LeadPing, we are tackling one of the most complex problems in modern commerce: <strong>Contextual Speed.</strong>
                 </p>
                 <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                   Most businesses lose 70% of their pipeline to a single variable: The Lag. We are building the neural bridges that ensure interest is captured and qualified the moment it happens.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    {perks.map((perk, i) => (
                       <div key={i} className="space-y-4 group">
                          <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner">
                             <perk.icon size={20} />
                          </div>
                          <h4 className="font-black italic text-lg">{perk.title}</h4>
                          <p className="text-sm text-gray-400 leading-relaxed font-medium">{perk.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- OPEN ROLES GRID --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-6">Open <span className="text-gray-300">Positions.</span></h2>
              <p className="text-gray-500 font-medium max-w-2xl mx-auto text-xl">Find your seat in the highest-velocity sales engine on earth.</p>
           </div>

           <div className="space-y-6">
              {roles.map((role, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white border border-gray-100 p-8 md:p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:border-black transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer overflow-hidden relative"
                >
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      <Briefcase size={200} />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{role.team}</span>
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{role.type}</span>
                      </div>
                      <h3 className="text-3xl font-black italic tracking-tighter text-gray-900 group-hover:underline underline-offset-8 decoration-2">{role.title}</h3>
                      <div className="flex items-center gap-6 mt-6">
                         <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <Globe size={14} /> {role.location}
                         </div>
                         <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                            <Zap size={14} fill="currentColor" /> {role.salary}
                         </div>
                      </div>
                   </div>

                   <div className="relative z-10 flex items-center gap-4">
                      <button className="bg-black text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">Apply Now</button>
                      <button className="p-4 border border-gray-100 rounded-2xl text-gray-400 hover:text-black transition-all"><Sparkles size={18}/></button>
                   </div>
                </motion.div>
              ))}
           </div>

           <div className="mt-20 text-center">
              <p className="text-gray-400 font-medium italic">Don't see your role? We're always looking for geniuses.</p>
              <button className="text-[10px] font-black text-black uppercase tracking-widest border-b-2 border-black mt-4 hover:opacity-50 transition-opacity">Send an open application</button>
           </div>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-7 grid grid-cols-3 gap-6">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80"
                  ].map((url, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10, rotate: i % 2 === 0 ? 3 : -3 }}
                      className="aspect-[3/4] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl relative z-10 group"
                    >
                       <img src={url} alt="LeadPing Core Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <p className="text-white text-[9px] font-black uppercase tracking-widest italic">Core Team member</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
               <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-2 rounded-full mb-10 shadow-sm">
                     <ShieldCheck size={16} className="text-blue-500" />
                     <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">99% Retention Rate</span>
                  </div>
                  <h2 className="text-6xl font-black italic tracking-tighter mb-12 leading-[0.85]">
                    Build your <br/> legacy.
                  </h2>
                  <p className="text-gray-500 text-2xl font-medium leading-relaxed mb-12">
                    LeadPing isn't a 9-to-5. It's a high-stakes arena where we build the software that defines the future of speed-to-lead.
                  </p>
                  <div className="space-y-6">
                     {[
                       "Distributed global nodes",
                       "Radical transparency",
                       "Results > Hours",
                       "Direct line to founders"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-gray-900 font-black italic text-lg">
                          <CheckCircle2 size={24} className="text-emerald-500" /> {item}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Find Your Loop</span>
          </motion.div>
          
          <h2 className="text-8xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16 px-2">
            Build the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Incredible.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Ready to deploy your intelligence at scale? We're waiting for you.
          </p>

          <button onClick={() => window.scrollTo({ top: document.getElementById('positions')?.offsetTop || 2000, behavior: 'smooth' })} className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               See All Roles <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </section>

      {/* Global Checkmark helper */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const CheckCircle2 = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export default Careers;

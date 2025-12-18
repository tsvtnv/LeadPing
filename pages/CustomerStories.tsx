
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, Quote, Sparkles, TrendingUp, 
  ChevronRight, BarChart3, UserCheck, Play, Star,
  Globe, MessageSquare, Instagram
} from 'lucide-react';

const stories = [
  {
    company: "Lux Real Estate",
    logo: "bg-black text-white",
    icon: Globe,
    stat: "+42%",
    statLabel: "Lead-to-Call Conversion",
    quote: "LeadPing turned our Instagram from a 'black hole' of lost leads into our #1 sales channel. The 30-second response is game changing.",
    author: "James K., CEO",
    color: "from-blue-600/20 to-transparent",
    tags: ["Real Estate", "Instagram Loop"]
  },
  {
    company: "GrowthOps Agency",
    logo: "bg-gray-100 text-black",
    icon: BarChart3,
    stat: "12min",
    statLabel: "Average Saved Per Lead",
    quote: "The 30-second loop is no joke. We've booked meetings while literally out at lunch. Our clients are stunned by the speed.",
    author: "Sarah M., Founder",
    color: "from-purple-600/20 to-transparent",
    tags: ["Agency", "Webhook Loop"]
  },
  {
    company: "Dental Pro UK",
    logo: "bg-blue-600 text-white",
    icon: UserCheck,
    stat: "3.2x",
    statLabel: "Booking Volume Lift",
    quote: "Finally, an AI that actually sounds like our front desk. The tone-matching is world-class and patients love the instant help.",
    author: "Dr. David P., Lead Surgeon",
    color: "from-emerald-600/20 to-transparent",
    tags: ["Healthcare", "WhatsApp Loop"]
  }
];

const CustomerStories: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- CINEMATIC HERO --- */}
      <section className="relative pt-48 pb-52 overflow-hidden bg-[#fafafa]">
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
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
               <Star size={14} className="text-yellow-400 fill-yellow-400" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 Elite Results: <span className="text-black italic">The Evidence</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              Proven <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">Intelligence.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              See how the world's most aggressive teams use LeadPing to <span className="text-black font-bold">dominate their niche</span> through absolute speed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- STORY GRID --- */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {stories.map((story, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-gray-100 rounded-[4rem] p-12 shadow-sm hover:shadow-2xl hover:border-black transition-all flex flex-col justify-between overflow-hidden"
                >
                   <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                   
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                         <div className={`w-16 h-16 rounded-3xl ${story.logo} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                            <story.icon size={28} />
                         </div>
                         <div className="text-right">
                            <p className="text-4xl font-black italic tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">{story.stat}</p>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mt-1">{story.statLabel}</p>
                         </div>
                      </div>

                      <div className="flex gap-2 mb-10">
                         {story.tags.map(tag => (
                           <span key={tag} className="text-[8px] font-black uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100 text-gray-400 group-hover:bg-white/50 group-hover:text-black transition-colors">{tag}</span>
                         ))}
                      </div>

                      <Quote size={40} className="text-gray-100 mb-6 group-hover:text-black/5 transition-colors" />
                      <p className="text-xl font-medium italic text-gray-800 leading-relaxed mb-10 group-hover:text-black transition-colors">
                        "{story.quote}"
                      </p>
                   </div>

                   <div className="relative z-10 pt-8 border-t border-gray-50 flex justify-between items-center group-hover:border-black/10 transition-colors">
                      <div>
                         <p className="font-black text-sm italic">{story.author}</p>
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{story.company}</p>
                      </div>
                      <ChevronRight size={20} className="text-gray-200 group-hover:text-black group-hover:translate-x-1 transition-all" />
                   </div>
                </motion.div>
              ))}
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

      {/* --- VIDEO PROOF SECTION --- */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gray-50 border border-gray-100 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full mb-8">
                     <TrendingUp size={14} />
                     <span className="text-[10px] font-black uppercase tracking-widest">Growth Deep Dive</span>
                  </div>
                  <h2 className="text-5xl font-black italic tracking-tighter mb-10 leading-[0.9]">
                    Scaling to <br/> 1,000+ leads.
                  </h2>
                  <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                    How "The Clinic Group" used LeadPing to manage 1,200 website enquiries per month without hiring a single new sales development representative.
                  </p>
                  <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center gap-3 active:scale-95 shadow-xl">
                    <Play size={18} fill="white" /> Watch Case Study
                  </button>
               </div>
               <div className="lg:w-1/2 w-full aspect-video bg-black rounded-[3rem] shadow-2xl relative overflow-hidden group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Success Story" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                        <Play size={32} className="text-black ml-1" fill="currentColor" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Start Your Own Story</span>
          </motion.div>
          
          <h2 className="text-8xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Join the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Movement.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Ready to be our next success case? Connect your inlets and start closing deals in 30 seconds.
          </p>

          <Link to="/signup" className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Start Free Trial <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
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

export default CustomerStories;

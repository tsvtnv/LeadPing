
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ShieldCheck, Activity, Globe, Cpu, 
  Server, Mail, MessageSquare, Instagram, 
  CheckCircle2, Clock, Info, ChevronRight,
  Sparkles, Radio, Database
} from 'lucide-react';

const systemComponents = [
  { name: "Neural Ingestion Gateway", status: "Operational", latency: "12ms", icon: Radio },
  { name: "Brain Processing Node (v2.0)", status: "Operational", latency: "420ms", icon: Cpu },
  { name: "Omnichannel Message Relay", status: "Operational", latency: "150ms", icon: MessageSquare },
  { name: "Secure PII Redaction Layer", status: "Operational", latency: "0.1s", icon: ShieldCheck },
  { name: "Global SMTP Cluster", status: "Operational", latency: "99.4% Health", icon: Mail },
  { name: "Inlet Persistence Bus", status: "Operational", latency: "2ms", icon: Database }
];

const nodes = [
  { region: "London (LON-01)", status: "Operational", load: "14%" },
  { region: "New York (NYC-02)", status: "Operational", load: "22%" },
  { region: "Frankfurt (FRA-01)", status: "Operational", load: "18%" },
  { region: "Singapore (SIN-01)", status: "Operational", load: "9%" }
];

const Status: React.FC = () => {
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
               <Activity size={14} className="text-emerald-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 Platform Health: <span className="text-black italic">Systems Operational</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] mb-12 italic px-2"
            >
              System <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">Integrity.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Real-time monitoring of our <span className="text-black font-bold">global neural fabric</span> and high-speed ingestion nodes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- LIVE COMPONENTS GRID --- */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemComponents.map((comp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between"
                >
                   <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all shadow-inner">
                         <comp.icon size={24} />
                      </div>
                      <div className="text-right">
                         <div className="flex items-center gap-2 justify-end">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{comp.status}</span>
                         </div>
                         <p className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter mt-1">LATENCY: {comp.latency}</p>
                      </div>
                   </div>
                   <h3 className="text-xl font-black italic tracking-tight text-gray-900 group-hover:underline underline-offset-4">{comp.name}</h3>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* --- GLOBAL NODES PANEL --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100 overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <div className="lg:col-span-5">
                  <h2 className="text-5xl font-black italic tracking-tighter mb-10 leading-[0.9]">
                    Global Node <br/> Distribution.
                  </h2>
                  <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                    Our infrastructure is deployed across multiple geographic zones to ensure <span className="text-black font-bold">zero-latency ingestion</span> and sub-30s response times globally.
                  </p>
                  <div className="space-y-4">
                     {nodes.map((node, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-4">
                             <Globe size={16} className="text-blue-500" />
                             <span className="text-sm font-black italic text-gray-900">{node.region}</span>
                          </div>
                          <div className="flex items-center gap-6">
                             <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Load: {node.load}</span>
                             <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{node.status}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="lg:col-span-7">
                  <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12">
                        <Zap size={400} fill="white" />
                     </div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10">
                           <ShieldCheck size={24} className="text-blue-400" />
                           <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Security Certificate: ACTIVE</span>
                        </div>
                        <h3 className="text-5xl font-black italic tracking-tighter leading-none mb-12">99.98% Uptime SLA.</h3>
                        <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12">
                           We guarantee near-perfect system availability. Our neural processing is monitored by independent sentinel nodes 24/7.
                        </p>
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-px bg-white/20" />
                           <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Last 90 Days Performance</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- INCIDENT LOG --- */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-4xl font-black italic tracking-tighter mb-4">Past Incidents.</h2>
              <p className="text-gray-400 font-medium italic">Transparency is our default setting.</p>
           </div>
           
           <div className="space-y-6">
              {[
                { date: "Dec 12, 2025", title: "Minor Neural Latency - NYC-02", status: "Resolved", desc: "A brief network degradation in the New York node caused a 2s increase in processing. Auto-failed over to LON-01." },
                { date: "Nov 28, 2025", title: "Meta API Version Update", status: "Completed", desc: "Scheduled maintenance to upgrade to Instagram Messaging API v18.0. Zero downtime recorded." },
                { date: "Oct 14, 2025", title: "All Systems Operational", status: "100%", desc: "No system issues recorded for the 30-day period." }
              ].map((log, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] group hover:bg-white hover:border-black transition-all">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{log.date}</span>
                      <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${log.status === 'Resolved' || log.status === '100%' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                         {log.status}
                      </span>
                   </div>
                   <h4 className="text-xl font-black italic tracking-tight mb-4 text-gray-900">{log.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed font-medium">{log.desc}</p>
                </div>
              ))}
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
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Experience Elite Availability</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Build with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Confidence.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Our systems never sleep, so you can. Join the teams who trust LeadPing for high-stakes response.
          </p>

          <button onClick={() => window.location.href='/signup'} className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Start Free Trial <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Status;

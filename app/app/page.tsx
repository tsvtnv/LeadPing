
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Clock, Zap, ArrowRight, TrendingUp, 
  CheckCircle, ExternalLink, Plus, Settings, Target, 
  DollarSign, Sparkles, AlertCircle, ShieldCheck, 
  Activity, Radio, Cpu, Globe, ChevronRight, BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MetricCard = ({ title, value, change, trend, label, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-56 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
      <Icon size={120} />
    </div>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1 italic">{title}</h3>
        <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">{label}</p>
      </div>
      <div className={`text-[10px] font-black px-3 py-1 rounded-full italic ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
        {change}
      </div>
    </div>
    <div className="relative z-10">
      <span className="text-5xl font-black text-gray-900 tracking-tighter italic leading-none">{value}</span>
      <p className="text-[10px] text-gray-300 mt-3 font-bold uppercase tracking-widest italic">Neural Precision: 99.8%</p>
    </div>
  </motion.div>
);

const DashboardOverview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-32 px-4 selection:bg-black selection:text-white">
      
      {/* --- ELITE HEADER --- */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-4">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-4 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
              System Core: <span className="text-black">LON-01 ACTIVE</span>
            </span>
          </motion.div>
          <h1 className="text-6xl font-black text-gray-900 tracking-tighter italic leading-none">
            Intelligence <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 pr-4">Runtime.</span>
          </h1>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto">
           <button 
             onClick={() => navigate('/app/funnel')}
             className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black hover:border-black transition-all shadow-sm active:scale-95 italic"
           >
             <Settings size={16} /> Tuning
           </button>
           <button 
             onClick={() => navigate('/app/outreach')}
             className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-10 py-4 bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] active:scale-95 italic overflow-hidden relative group"
           >
             <span className="relative z-10 flex items-center gap-2">New Inlet <Plus size={16} /></span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
           </button>
        </div>
      </div>

      {/* --- GROWTH PROJECTION: BLACK BOX THEME --- */}
      <div className="bg-black rounded-[3.5rem] p-12 lg:p-16 text-white shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
           <TrendingUp size={400} />
         </div>
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="bg-white/10 w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-blue-400 border border-white/5 italic">
                  Performance Projection v2
               </div>
               <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter italic leading-[1.1]">
                 Scale output to 500/day <br/>
                 to unlock £12,400+ pipeline.
               </h2>
               <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-xl">
                 Based on current conversion yield of <span className="text-white font-black underline decoration-blue-500 decoration-2 underline-offset-8">14.2%</span>. Your neural engine is currently operating at <span className="text-white italic">22% capacity.</span>
               </p>
            </div>
            <div className="lg:col-span-5">
               <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-4">Inbox Health Index</p>
                  <div className="text-7xl font-black mb-6 tracking-tighter italic">99.4%</div>
                  <p className="text-sm text-gray-400 mb-10 font-medium leading-relaxed italic">Primary placement confirmed across all UK nodes.</p>
                  <button 
                    onClick={() => navigate('/app/outreach')}
                    className="w-full bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl active:scale-95 group/btn overflow-hidden relative"
                  >
                     <span className="relative z-10 flex items-center justify-center gap-2">Initiate Scale Protocol <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" /></span>
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* --- NEURAL METRICS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Intelligence Loops" value="1,248" change="+24.2%" trend="up" label="Active Response" icon={Zap} />
        <MetricCard title="Avg. Response Velocity" value="28s" change="-4s" trend="up" label="Speed to Lead" icon={Clock} />
        <MetricCard title="Capture Efficiency" value="88.2%" change="+2.1%" trend="up" label="Omni-Inflow" icon={Target} />
        <MetricCard title="System Sovereignty" value="100%" change="99.9%" trend="up" label="Uptime SLA" icon={ShieldCheck} />
      </div>

      {/* --- BOTTOM SECTION: LIVE STREAM & NICHE LOOP --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Live Signal Stream */}
        <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[3.5rem] p-12 shadow-sm relative overflow-hidden group">
           <div className="flex justify-between items-center mb-12">
              <div>
                 <h2 className="text-3xl font-black text-gray-900 tracking-tighter italic underline decoration-gray-100 underline-offset-8 group-hover:decoration-black transition-all">Live Signals.</h2>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-3 italic">Active Ingestion Inflow</p>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 shadow-inner group-hover:text-black transition-colors"><Radio size={18}/></div>
                 <div className="text-right">
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Streaming</p>
                    <p className="text-[8px] font-bold text-gray-300">LATENCY: 12ms</p>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              {[
                { channel: 'Instagram', name: '@lux_living', status: 'Drafting...', time: '0.8s', color: 'text-pink-500', icon: InstagramIcon },
                { channel: 'WhatsApp', name: '+44 792...', status: 'Personalizing', time: '1.2s', color: 'text-emerald-500', icon: MessageSquare },
                { channel: 'Webhook', name: 'Website Form', status: 'Enriching', time: '0.2s', color: 'text-blue-600', icon: Globe }
              ].map((signal, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50/50 border border-gray-100/50 rounded-3xl group/signal hover:bg-white hover:border-black hover:shadow-xl transition-all">
                   <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center ${signal.color} shadow-sm group-hover/signal:scale-110 transition-transform`}>
                         <signal.icon size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-black text-gray-900 italic tracking-tight">{signal.name}</p>
                         <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{signal.channel}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-black uppercase tracking-tighter italic">{signal.status}</p>
                      <p className="text-[9px] font-black text-gray-300 mt-1">{signal.time}</p>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-12 pt-8 border-t border-gray-50 flex justify-center">
              <button 
                onClick={() => navigate('/app/leads')}
                className="text-[10px] font-black text-gray-400 hover:text-black uppercase tracking-[0.4em] transition-all flex items-center gap-2 italic"
              >
                 Enter Omni-Inbox <ChevronRight size={14} />
              </button>
           </div>
        </div>

        {/* Intelligence Guardrails */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-black text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden border border-white/5 flex flex-col justify-between h-[340px] group">
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none group-hover:scale-105 transition-transform duration-700">
                <Cpu size={200} />
              </div>
              <div>
                 <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-10 flex items-center gap-3 text-gray-500 italic">
                    <ShieldCheck size={16} className="text-blue-500"/> Guardrails
                 </h3>
                 <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-black italic text-gray-400">UK Business Window</span>
                       <span className="text-[9px] font-black bg-emerald-500 text-white px-3 py-1 rounded-full uppercase italic shadow-[0_0_15px_rgba(16,185,129,0.3)]">ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-black italic text-gray-400">Neural Buffer</span>
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black italic">LOW</span>
                          <div className="w-16 bg-white/10 h-1 rounded-full overflow-hidden">
                             <div className="bg-blue-500 h-full w-[30%]" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <button 
                onClick={() => navigate('/app/settings')}
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 italic relative z-10"
              >
                 Tune Safety parameters
              </button>
           </div>

           <div className="bg-white border border-gray-100 rounded-[3rem] p-10 shadow-sm flex flex-col justify-between h-[280px] group">
              <div>
                 <h3 className="font-black text-xs mb-8 flex items-center gap-3 italic text-gray-900 uppercase tracking-widest">
                    <BarChart3 size={18} className="text-black"/> Segment ROI
                 </h3>
                 <div className="space-y-6">
                    {[
                      { niche: 'Creative Agencies', yield: '18.4%', status: 'HIGH' },
                      { niche: 'Dental Clinics', yield: '4.2%', status: 'LOW' }
                    ].map((n, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{n.niche}</span>
                            <span className="text-[10px] font-black italic">{n.yield} Yield</span>
                         </div>
                         <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden shadow-inner">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: n.yield }} 
                              className={`h-full ${n.status === 'HIGH' ? 'bg-black' : 'bg-gray-200'} rounded-full`} 
                            />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

const InstagramIcon = ({ size }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default DashboardOverview;

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Zap, ArrowRight, TrendingUp, CheckCircle, ExternalLink, Plus, Settings, Target, DollarSign, Sparkles, AlertCircle, ShieldCheck as ShieldIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MetricCard = ({ title, value, change, trend, subtitle, status }: any) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between h-44 relative overflow-hidden group"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{title}</h3>
        {subtitle && <p className="text-[10px] text-gray-400 font-medium">{subtitle}</p>}
      </div>
      <div className="flex flex-col items-end">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend === 'up' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
          {change}
        </span>
        {status && <span className="text-[9px] font-black text-black mt-1 uppercase tracking-tighter">{status}</span>}
      </div>
    </div>
    <div>
      <span className="text-3xl font-black text-gray-900 tracking-tighter">{value}</span>
      <p className="text-[10px] text-gray-400 mt-1 font-medium italic">Comparison: Week-over-week</p>
    </div>
  </motion.div>
);

const DashboardOverview: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadReport = () => {
    alert("Generating your Performance Report PDF... Check your downloads folder in a few seconds.");
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight italic">Performance</h1>
          <p className="text-gray-500 mt-1 font-medium">Real-time intelligence and growth projections.</p>
        </div>
        <div className="flex gap-3">
           <button 
             onClick={() => navigate('/app/funnel')}
             className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
           >
             <Settings size={18} /> Ingestion Rules
           </button>
           <button 
             onClick={() => navigate('/app/outreach')}
             className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95"
           >
             <Plus size={18} /> New Campaign
           </button>
        </div>
      </div>

      {/* Projection Box - BLACK & WHITE THEME */}
      <div className="bg-black rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden border border-gray-800">
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-400 border border-white/10">Growth Projection</div>
               <h2 className="text-3xl font-black mb-4 tracking-tight leading-tight italic">If you increase output by 200 emails...</h2>
               <p className="text-gray-400 text-lg leading-relaxed font-medium">
                 Based on your <span className="text-white font-black underline decoration-white/30 decoration-2 underline-offset-8">12.4% conversion rate</span>, you'll likely generate <span className="text-white font-black">24 new discovery calls</span> worth approx. <span className="text-white font-black">£8,400</span> in pipeline value.
               </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
               <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Platform Efficiency</p>
               <div className="text-5xl font-black mb-4 tracking-tighter">98.2%</div>
               <p className="text-sm opacity-80 mb-6 font-medium">Your inbox health is optimal. Safe to scale up.</p>
               <button 
                 onClick={() => navigate('/app/outreach')}
                 className="w-full bg-white text-black px-8 py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95"
               >
                  Scale Outreach Volume
               </button>
            </div>
         </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Replies" value="142" change="+18%" trend="up" subtitle="All Channels" status="Active" />
        <MetricCard title="Reply Rate" value="38.5%" change="+4%" trend="up" subtitle="Global Avg: 22%" status="Above Avg" />
        <MetricCard title="Cost per Reply" value="£2.12" change="-12%" trend="up" subtitle="Platform ROI" status="Optimal" />
        <MetricCard title="Inbox Health" value="99.4%" change="98.2%" trend="up" subtitle="Primary Placement" status="Perfect" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Niche Performance Loop - BW Theme */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-200 shadow-sm p-12">
           <div className="flex justify-between items-center mb-10">
              <div>
                 <h2 className="font-black text-2xl text-gray-900 tracking-tight italic underline decoration-black underline-offset-8">Intelligence Loop</h2>
                 <p className="text-sm text-gray-400 mt-4 font-medium">Which copy converts best per niche? AI is learning.</p>
              </div>
              <button 
                onClick={handleDownloadReport}
                className="text-[10px] font-black text-black flex items-center gap-2 hover:underline uppercase tracking-widest"
              >
                 Download PDF Report <ExternalLink size={12}/>
              </button>
           </div>
           
           <div className="space-y-8">
              {[
                { niche: 'Web Agencies', replies: 52, trend: '+12%', conversion: '14.2%', rec: 'Scale Volume', color: 'bg-black' },
                { niche: 'SaaS Founders', replies: 38, trend: '+5%', conversion: '9.8%', rec: 'Optimize Follow-up #2', color: 'bg-gray-600' },
                { niche: 'Dental Clinics', replies: 12, trend: '-2%', conversion: '4.1%', rec: 'Deprioritize / Test Tone', color: 'bg-gray-300' }
              ].map((n) => (
                <div key={n.niche} className="group cursor-pointer">
                   <div className="flex justify-between items-end mb-3">
                      <div>
                         <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{n.niche}</span>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="text-lg font-black tracking-tight">{n.replies} Replies</span>
                            <span className="text-[10px] font-bold text-black">{n.trend}</span>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">AI Recommendation</span>
                         <span className="text-[10px] font-black text-white bg-black px-2 py-1 rounded-lg transition-all">{n.rec}</span>
                      </div>
                   </div>
                   <div className="w-full bg-gray-50 h-2 rounded-full overflow-hidden border border-gray-100 p-0">
                      <motion.div 
                        initial={{ width: 0 }} animate={{ width: n.conversion }} 
                        className={`h-full ${n.color} rounded-full`} 
                      />
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           {/* UK Business Hours Check - BW Theme */}
           <div className="bg-black text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden border border-gray-800">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-gray-400">
                 <Zap size={14} fill="currentColor"/> Sending Guardrails
              </h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-400">UK Business Hours</span>
                    <span className="text-[10px] font-black bg-white text-black px-2 py-1 rounded-full uppercase">Active</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-400">Daily Limit (50/500)</span>
                    <div className="w-24 bg-white/10 h-1 rounded-full overflow-hidden">
                       <div className="bg-white h-full w-[10%]" />
                    </div>
                 </div>
                 <button 
                   onClick={() => navigate('/app/settings')}
                   className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                 >
                    Adjust Safety Settings
                 </button>
              </div>
           </div>

           {/* Quick Optimization Prompts */}
           <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm p-8">
              <h3 className="font-black text-sm mb-6 flex items-center gap-2 italic">
                 <AlertCircle size={16} className="text-black"/> Signal Intelligence
              </h3>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-[11px] leading-relaxed text-gray-600 italic font-medium">
                "Personalized first-line mentioning 'Bristol Site Health' increased click rates by 22% in your last campaign."
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
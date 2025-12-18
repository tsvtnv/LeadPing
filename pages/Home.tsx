import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Clock, MessageSquare, Mail, Zap, 
  Instagram, Facebook, Smartphone, Play, Sparkles, 
  ShieldCheck, Globe, GitMerge, ChevronRight, Activity,
  Target, Cpu, Layers, Radio, MousePointer2, BarChart3,
  Search, Lock, Shield, Server, ZapOff, TrendingUp,
  Quote, Zap as ZapIcon, Timer, CheckCircle2
} from 'lucide-react';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleVisual = useTransform(scrollY, [300, 1000], [0.9, 1]);

  // Trusted By Logo Data
  const companies = ["Instagram", "WhatsApp", "Webflow", "Stripe", "Framer", "Meta", "Shopify", "Slack"];

  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative pt-40 pb-52 overflow-hidden bg-[#fafafa]">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-black/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Status Badge */}
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
                 Live Intelligence: <span className="text-black italic">Version 2.0</span> Now Global
               </span>
               <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            {/* Typography Overhaul - Fixed Clipping */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,10rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              Lead response <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-100 pr-4">on autopilot.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              The world's first <span className="text-black font-bold">30-second sales loop</span>. We capture, qualify, and close leads across every channel before your competition wakes up.
            </motion.p>

            {/* Elite CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32"
            >
              <Link 
                to="/signup" 
                className="group relative bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex items-center gap-4 overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-4">
                  Start free trial <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              <button className="bg-white/60 backdrop-blur-md text-black border border-gray-200 px-16 py-8 rounded-[2.5rem] font-black text-xl hover:bg-white hover:border-black transition-all flex items-center gap-4 active:scale-95 shadow-sm">
                <Play size={24} fill="currentColor" /> Watch the 60s Demo
              </button>
            </motion.div>

            {/* Dashboard Visualizer */}
            <motion.div 
              style={{ y: heroY }}
              className="relative max-w-6xl mx-auto"
            >
               <div className="absolute inset-0 bg-blue-500/10 blur-[160px] rounded-full scale-90 -z-10 animate-pulse" />
               <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[4rem] p-4 lg:p-10 shadow-[0_40px_140px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-10 px-6">
                     <div className="flex gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-400/30" />
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/30" />
                        <div className="w-3.5 h-3.5 rounded-full bg-green-400/30" />
                     </div>
                     <div className="bg-black/5 px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 italic">
                        Real-time Intelligence Loop
                     </div>
                     <div className="w-16" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                     <div className="lg:col-span-3 space-y-5 hidden lg:block">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="h-14 bg-black/5 rounded-2xl w-full border border-black/5 shadow-inner" />
                        ))}
                     </div>
                     <div className="lg:col-span-9 bg-white border border-gray-100 rounded-[3rem] p-10 lg:p-14 shadow-inner relative min-h-[500px]">
                        <div className="flex justify-between items-center mb-12 pb-8 border-b border-gray-50">
                           <div>
                              <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest mb-2 italic">Active Signal: WhatsApp</p>
                              <h3 className="text-3xl font-black italic tracking-tighter text-gray-900 leading-tight">London Aesthetics Ltd.</h3>
                           </div>
                           <div className="bg-emerald-50 text-emerald-600 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-3">
                              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                              Processed in 12s
                           </div>
                        </div>

                        <div className="space-y-8">
                           <div className="bg-gray-50/70 border border-gray-100 p-8 rounded-[2rem] rounded-tl-none max-w-[85%] text-lg font-medium text-gray-600 leading-relaxed italic">
                              "Hi LeadPing, we've noticed a drop in our contact form conversions. Can your AI handle multi-step qualification for clinical treatments?"
                           </div>
                           <motion.div 
                             initial={{ opacity: 0, x: 20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             className="bg-black text-white p-10 rounded-[2rem] rounded-tr-none max-w-[90%] ml-auto shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative overflow-hidden group/draft"
                           >
                              <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-4 flex items-center gap-2 italic">
                                 <Zap size={12} fill="currentColor" className="text-blue-400" /> Intelligence Brain Draft
                              </div>
                              <p className="text-xl font-medium leading-[1.6] italic">
                                "Hi Team! Absolutely. We've actually analyzed your current landing page health and found a 4.2s delay in your JS bundle. Our AI can bypass that and qualify leads in under 30s. Want to see the exact flow?"
                              </p>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/draft:translate-x-full transition-transform duration-1000" />
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INFINITE TRUST MARQUEE --- */}
      <div className="py-24 bg-white border-y border-gray-50 relative overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center gap-4 text-3xl md:text-5xl font-black italic text-gray-200 hover:text-black transition-colors px-12 tracking-tighter">
              <ZapIcon size={32} className="opacity-20" /> {company}
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: THE RESPONSE GAP (NEW COMPONENT) --- */}
      <section className="py-40 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-8">
              The response <span className="text-gray-300">gap.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Leads go cold in 5 minutes. Most businesses take 5 hours. We take 30 seconds.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* The Old Way */}
            <div className="bg-white p-12 lg:p-20 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="bg-red-50 text-red-600 w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">Traditional Response</div>
              <h3 className="text-4xl font-black italic tracking-tighter mb-10">Manual & Slow</h3>
              <div className="space-y-8">
                {[
                  { time: '0m', action: 'Lead fills out form', status: 'Cold Start' },
                  { time: '2h', action: 'Rep checks email inbox', status: 'Lagging' },
                  { time: '5h', action: 'Manual reply sent', status: 'Dead Lead' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 opacity-40">
                    <div className="text-xl font-black italic text-gray-300 w-16">{item.time}</div>
                    <div className="h-px bg-gray-200 flex-grow" />
                    <div className="text-sm font-bold text-gray-400 italic">{item.action}</div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-10 right-10 opacity-[0.05]"><ZapOff size={200} /></div>
            </div>

            {/* The LeadPing Way */}
            <div className="bg-black p-12 lg:p-20 rounded-[4rem] text-white shadow-[0_50px_120px_rgba(0,0,0,0.2)] relative overflow-hidden">
              <div className="bg-blue-600 text-white w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">LeadPing Intelligence</div>
              <h3 className="text-4xl font-black italic tracking-tighter mb-10">Neural Velocity</h3>
              <div className="space-y-8">
                {[
                  { time: '0s', action: 'Lead hits submit', status: 'Captured' },
                  { time: '4s', action: 'AI analyzes intent & context', status: 'Qualifying' },
                  { time: '12s', action: 'Elite reply sent automatically', status: 'Converted' }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} className="flex items-center gap-6"
                  >
                    <div className="text-xl font-black italic text-blue-400 w-16">{item.time}</div>
                    <div className="h-px bg-white/20 flex-grow" />
                    <div className="text-sm font-bold text-gray-300 italic">{item.action}</div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-10 right-10 opacity-[0.1] animate-pulse"><Zap size={200} fill="currentColor" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MULTI-INLET ENGINE --- */}
      <section className="bg-black py-52 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-10">
                <Radio size={16} className="text-blue-400 animate-pulse" />
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest italic">Signal Intelligence Loop</span>
              </div>
              
              <h2 className="text-6xl md:text-[7rem] font-black text-white italic tracking-tighter leading-[0.85] mb-14">
                One Brain. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Every Inlet.</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: MessageSquare, title: "WhatsApp Intelligence", desc: "Native API integration for business accounts. Qualified replies in seconds." },
                  { icon: Instagram, title: "Social DM Capture", desc: "Capture high-intent signals from Instagram and Facebook Messenger." },
                  { icon: Globe, title: "Visual Webhook Loop", desc: "Integrate with any form builder, custom site, or landing page engine." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="mt-1">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <feature.icon size={32} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white italic tracking-tight mb-2 underline decoration-white/0 group-hover:decoration-white transition-all underline-offset-8">{feature.title}</h3>
                      <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inlet Visualization */}
            <motion.div style={{ scale: scaleVisual }} className="relative grid grid-cols-2 gap-6 p-4">
               {[
                 { name: 'Instagram', icon: Instagram, user: '@lux_realestate', status: 'LIVE', color: 'bg-pink-500' },
                 { name: 'WhatsApp', icon: MessageSquare, user: '+44 792...', status: 'ACTIVE', color: 'bg-emerald-500' },
                 { name: 'Website', icon: Globe, user: 'manchester.ai', status: 'STREAMING', color: 'bg-blue-600' },
                 { name: 'Messenger', icon: Facebook, user: 'John Smith', status: 'CAPTURED', color: 'bg-blue-800' }
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
                   className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group/card"
                 >
                    <div className="flex justify-between items-start mb-12">
                       <div className={`p-4 rounded-2xl ${card.color} text-white shadow-xl group-hover/card:scale-110 transition-transform`}>
                          <card.icon size={28} />
                       </div>
                       <div className="bg-white/10 px-3 py-1 rounded-full text-[8px] font-black text-gray-500 uppercase tracking-widest">{card.status}</div>
                    </div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">{card.name}</p>
                    <h4 className="text-2xl font-black text-white italic tracking-tighter mb-4 truncate">{card.user}</h4>
                    <div className="h-px w-full bg-white/10 mb-6" />
                    <div className="flex gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400/20" />
                    </div>
                 </motion.div>
               ))}
               {/* Central Core */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                    transition={{ scale: { repeat: Infinity, duration: 4 }, rotate: { repeat: Infinity, duration: 40, ease: 'linear' } }}
                    className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.4)] border-4 border-black"
                  >
                    <Zap size={48} fill="black" />
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: VELOCITY WORKFLOW --- */}
      <section className="bg-white py-52 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <div className="relative order-2 lg:order-1">
               <div className="absolute inset-0 bg-gray-100 blur-[120px] rounded-full scale-110 -z-10" />
               <div className="bg-white border border-gray-100 p-12 lg:p-16 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                  <div className="flex items-center gap-4 mb-14 pb-10 border-b border-gray-50">
                    <div className="p-4 bg-black text-white rounded-2xl shadow-xl group-hover:rotate-12 transition-transform"><GitMerge size={24}/></div>
                    <h4 className="text-2xl font-black italic tracking-tighter">Velocity Builder</h4>
                  </div>
                  
                  <div className="space-y-10 relative">
                    <div className="absolute left-[31px] top-12 bottom-12 w-px bg-gray-100" />
                    {[
                      { icon: Smartphone, title: 'Inbound SMS', status: 'Trigger', color: 'text-blue-600 bg-blue-50' },
                      { icon: Clock, title: 'Wait 30 Seconds', status: 'Delay', color: 'text-gray-400 bg-gray-50' },
                      { icon: Cpu, title: 'AI Logic Processing', status: 'Action', color: 'text-purple-600 bg-purple-50' },
                      { icon: Target, title: 'High Intent Detected', status: 'Branch', color: 'text-emerald-600 bg-emerald-50' },
                      { icon: CheckCircle2, title: 'Approve & Send Draft', status: 'Endpoint', color: 'text-white bg-black' }
                    ].map((step, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-10 group/step relative z-10"
                      >
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-transparent group-hover/step:border-black/5 transition-all group-hover/step:scale-110 ${step.color}`}>
                           <step.icon size={24} />
                         </div>
                         <div className="flex-grow">
                           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">{step.status}</p>
                           <h5 className="text-lg font-black italic tracking-tight text-gray-900 leading-none">{step.title}</h5>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-black text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-10 italic">Intelligence Mapping</div>
              <h2 className="text-6xl md:text-[7rem] font-black italic tracking-tighter leading-[0.85] mb-14">
                Think Like <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Your Best Closer.</span>
              </h2>
              <p className="text-gray-500 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                Configure visual logic that handles qualification, booking, and objection handling on autopilot.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                   <h5 className="font-black text-4xl italic tracking-tight mb-2">94.8%</h5>
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Response Accuracy</p>
                </div>
                <div>
                   <h5 className="font-black text-4xl italic tracking-tight mb-2">3.2x</h5>
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Booking Velocity</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5: ELITE SOCIAL PROOF (NEW) --- */}
      <section className="bg-[#fafafa] py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-5xl font-black italic tracking-tighter">Performance results.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {[
            { quote: "LeadPing turned our Instagram from a 'black hole' of lost leads into our #1 sales channel.", author: "James K.", role: "CEO, Lux Living", stats: "42% Lift" },
            { quote: "The 30-second loop is no joke. We've booked meetings while literally out at lunch.", author: "Sarah M.", role: "Founder, GrowthOps", stats: "Instant ROI" },
            { quote: "Finally, an AI that actually sounds like me. The tone-matching is world-class.", author: "David P.", role: "Sales Lead, Nebula", stats: "85% Auto-Send" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm flex flex-col justify-between hover:shadow-2xl transition-all h-[400px]">
              <div>
                <Quote size={40} className="text-black/5 mb-8" />
                <p className="text-xl font-medium italic text-gray-800 leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="flex justify-between items-end border-t border-gray-50 pt-8">
                <div>
                  <p className="font-black text-sm italic">{item.author}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.role}</p>
                </div>
                <div className="bg-black text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest italic">{item.stats}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: ENTERPRISE SCALE --- */}
      <section className="bg-white py-40 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <h3 className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em] mb-14">The Infrastructure for Scale</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex flex-col items-center gap-3">
                   <Lock size={32}/>
                   <span className="font-black italic text-sm tracking-tighter">SOC2 TYPE II</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <Shield size={32}/>
                   <span className="font-black italic text-sm tracking-tighter">GDPR NATIVE</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <Server size={32}/>
                   <span className="font-black italic text-sm tracking-tighter">UK HOSTED</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <Activity size={32}/>
                   <span className="font-black italic text-sm tracking-tighter">99.9% UPTIME</span>
                </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-black text-white p-12 lg:p-20 rounded-[4rem] relative overflow-hidden group">
                 <h4 className="text-4xl font-black italic tracking-tighter mb-6 underline decoration-white/20 underline-offset-8">Global Delivery.</h4>
                 <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10 max-w-sm">
                   Our routing logic ensures primary inbox placement and zero latency across 4 continents.
                 </p>
                 <ArrowRight size={40} className="text-white/20 group-hover:text-white group-hover:translate-x-4 transition-all" />
              </div>
              <div className="bg-gray-50 p-12 lg:p-20 rounded-[4rem] relative overflow-hidden group">
                 <h4 className="text-4xl font-black italic tracking-tighter mb-6 underline decoration-black/5 underline-offset-8">Signal Logic.</h4>
                 <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 max-w-sm">
                   We redact PII and mask sensitive data at the edge, before it even reaches our neural engine.
                 </p>
                 <ArrowRight size={40} className="text-black/5 group-hover:text-black group-hover:translate-x-4 transition-all" />
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
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">Start the Intelligence Loop</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Grow at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4">lightspeed.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Stop losing 70% of your leads to delay. Connect your inlets and start closing deals in 30 seconds.
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
                <p className="text-white font-black text-4xl tracking-tighter italic">14 Days</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Free Trial</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">2 mins</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Setup Time</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-white font-black text-4xl tracking-tighter italic">Zero</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">Contract</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Scroll Marquee Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Simplified Send icon
const Send = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export default Home;
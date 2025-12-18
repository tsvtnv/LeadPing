
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added CheckCircle2 to imports
import { 
  Terminal, Zap, Code, ShieldCheck, Key, 
  ArrowRight, ChevronRight, Cpu, Globe, 
  Copy, Check, Search, Book, Cpu as CpuIcon, 
  Layers, Sparkles, Activity, Lock, Database,
  CheckCircle2
} from 'lucide-react';

const endpoints = [
  {
    method: "POST",
    path: "/v1/leads",
    title: "Ingest Lead",
    desc: "Programmatically push a lead into the 30-second intelligence loop.",
    request: `{
  "name": "Alex Riviera",
  "email": "alex@startup.io",
  "company": "Riviera Ventures",
  "message": "Interested in scaling our outreach.",
  "metadata": {
    "source": "Custom API",
    "priority": "high"
  }
}`,
    response: `{
  "id": "lead_9823k82",
  "status": "INGESTED",
  "loop_eta": "24s",
  "enrichment_status": "PENDING"
}`
  },
  {
    method: "GET",
    path: "/v1/inlets",
    title: "List Inlets",
    desc: "Retrieve a list of all active capture nodes (WhatsApp, Meta, Webhooks).",
    request: `curl -X GET "https://api.leadping.com/v1/inlets" \\
     -H "Authorization: Bearer YOUR_API_KEY"`,
    response: `{
  "inlets": [
    { "id": "in_234", "type": "INSTAGRAM", "status": "LIVE" },
    { "id": "in_882", "type": "WEBHOOK", "status": "ACTIVE" }
  ]
}`
  },
  {
    method: "POST",
    path: "/v1/campaigns/{id}/enroll",
    title: "Enroll in Campaign",
    desc: "Manually trigger a sequence flow for a specific lead ID.",
    request: `{
  "lead_id": "lead_9823k82",
  "start_step": "initial_outreach"
}`,
    response: `{
  "enrollment_id": "en_12093k",
  "current_step": "initial_outreach",
  "next_step_at": "2025-12-16T14:30:00Z"
}`
  }
];

const ApiDocs: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
               <Terminal size={14} className="text-blue-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 LeadPing Intelligence: <span className="text-black italic">API Runtime</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,10vw,7.5rem)] font-black tracking-tighter leading-[0.9] mb-16 italic px-2"
            >
              Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4 leading-[1.2]">impossible.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              The LeadPing API allows you to programmatically manage your <span className="text-black font-bold">intelligence loops</span> and scale your outbound response globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- CORE CONCEPTS GRID --- */}
      <section className="py-40 bg-white border-y border-gray-100 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: "Authentication", 
                  desc: "All requests are authenticated using Bearer tokens issued in your LeadPing dashboard.",
                  icon: Key,
                  color: "blue"
                },
                { 
                  title: "Rate Limiting", 
                  desc: "We support up to 500 requests per second for Enterprise nodes. Low latency is our default.",
                  icon: Activity,
                  color: "emerald"
                },
                { 
                  title: "Webhooks", 
                  desc: "Subscribe to real-time events like 'lead.qualified' or 'reply.sent' via our event bus.",
                  icon: Database,
                  color: "purple"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white border border-gray-100 p-12 rounded-[4rem] shadow-sm hover:shadow-2xl transition-all">
                   <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all mb-10 shadow-inner">
                      <item.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 italic tracking-tight mb-6">{item.title}</h3>
                   <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- ENDPOINT SECTION --- */}
      <section className="py-40 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-32 max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-8 leading-[0.9]">Endpoints.</h2>
              <p className="text-gray-500 text-xl font-medium">Standardized RESTful interfaces for all LeadPing resources.</p>
           </div>

           <div className="space-y-40">
              {endpoints.map((ep, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                   {/* Description Column */}
                   <div className="lg:col-span-5">
                      <div className="flex items-center gap-4 mb-10">
                         <div className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                           ep.method === 'POST' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
                         }`}>
                            {ep.method}
                         </div>
                         <code className="text-sm font-mono font-bold text-gray-400">{ep.path}</code>
                      </div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-8">{ep.title}</h3>
                      <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">{ep.desc}</p>
                      
                      <div className="space-y-6">
                         <div className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Response Code: 201 Created</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">JSON Body Native</span>
                         </div>
                      </div>
                   </div>

                   {/* Code Preview Column */}
                   <div className="lg:col-span-7 space-y-6">
                      {/* Request Panel */}
                      <div className="bg-black rounded-[3rem] p-8 shadow-2xl relative group/code overflow-hidden border border-white/5">
                         <div className="flex items-center justify-between mb-6">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                               <Code size={12} /> Payload
                            </span>
                            <button 
                              onClick={() => handleCopy(ep.request, `req-${i}`)}
                              className="text-gray-500 hover:text-white transition-colors"
                            >
                               {copiedId === `req-${i}` ? <Check size={16}/> : <Copy size={16}/>}
                            </button>
                         </div>
                         <pre className="text-sm font-mono text-gray-300 overflow-x-auto whitespace-pre leading-relaxed no-scrollbar p-2">
                            {ep.request}
                         </pre>
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/code:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Response Panel */}
                      <div className="bg-white border border-gray-100 rounded-[3rem] p-8 shadow-sm group/resp overflow-hidden">
                         <div className="flex items-center justify-between mb-6">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                               <Sparkles size={12} className="text-blue-500" /> Response JSON
                            </span>
                         </div>
                         <pre className="text-sm font-mono text-gray-400 overflow-x-auto whitespace-pre leading-relaxed no-scrollbar p-2 italic">
                            {ep.response}
                         </pre>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SDK MARQUEE --- */}
      <section className="py-24 bg-black overflow-hidden border-y border-white/5 relative">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         <div className="flex items-center gap-24 whitespace-nowrap animate-marquee relative z-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center gap-8 text-4xl font-black italic text-white/30 tracking-tighter uppercase">
                 <CpuIcon size={32} className="text-blue-400" /> LeadPing Node.js SDK 
                 <div className="w-2 h-2 rounded-full bg-white/20" />
                 Python Runtime v3.0 
                 <div className="w-2 h-2 rounded-full bg-white/20" />
                 Go-Inflow Package
              </div>
            ))}
         </div>
      </section>

      {/* --- ELITE SECURITY BLOCK --- */}
      <section className="py-40 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <ShieldCheck size={400} fill="white" />
               </div>
               
               <div className="lg:w-1/2 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-10 border border-white/10">
                     <Lock size={14} className="text-blue-400" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Enterprise Security Native</span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] mb-10">
                    Sovereign <br/> Architecture.
                  </h2>
                  <p className="text-gray-400 text-xl font-medium leading-relaxed mb-12">
                    Our API is built on a distributed mesh network. Every request is scrubbed of PII and encrypted at the edge before hitting our neural core.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-3xl font-black italic text-white mb-2">99.99%</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Uptime SLA</p>
                     </div>
                     <div>
                        <p className="text-3xl font-black italic text-white mb-2">TLS 1.3</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Default</p>
                     </div>
                  </div>
               </div>

               <div className="lg:w-1/2 relative z-10 w-full">
                  <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl">
                     <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
                        <div className="p-3 bg-white/10 rounded-2xl"><Layers size={24} className="text-blue-400"/></div>
                        <h4 className="font-black italic text-lg">System Integrity</h4>
                     </div>
                     <div className="space-y-6">
                        {[
                          "DDoS Shield Active",
                          "JWT Secret Rotation",
                          "RBAC Policy Enforcement",
                          "Audit Log Streaming"
                        ].map((s, i) => (
                          <div key={i} className="flex items-center justify-between text-xs font-black italic">
                             <span className="text-gray-400">{s}</span>
                             <span className="text-blue-500">ONLINE</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Code size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">The Intelligence SDK</span>
          </motion.div>
          
          <h2 className="text-8xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-16">
            Extend the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">Engine.</span>
          </h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            Ready to integrate LeadPing into your core tech stack? Generate an API key and start building today.
          </p>

          <Link to="/signup" className="group relative bg-white text-black px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(255,255,255,0.1)] overflow-hidden inline-flex items-center gap-6">
             <div className="relative z-10 flex items-center gap-6">
               Generate API Key <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
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

export default ApiDocs;

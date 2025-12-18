import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, ChevronRight, X, Loader2, Save, Trash2, 
  ArrowRight, Zap, Database, Globe, FileSpreadsheet, 
  FileUp, Instagram, Facebook, MessageSquare, Mail, 
  Smartphone, Copy, Check, Settings2
} from 'lucide-react';

// --- TYPES ---

interface RoutingRule {
  id: string;
  condition: string;
  persona: string;
}

interface Funnel {
  id: number;
  name: string;
  sourceType: 'Webhook' | 'Instagram' | 'Facebook' | 'WhatsApp' | 'Form' | 'Email' | 'CSV' | 'Scraper' | 'Google Sheets';
  sourceConfig: string;
  leads: number;
  convRate: string;
  active: boolean;
  routingRules: RoutingRule[];
}

const INITIAL_FUNNELS: Funnel[] = [
  { 
    id: 1, 
    name: 'Instagram High-Ticket Leads', 
    sourceType: 'Instagram', 
    sourceConfig: '@leadping_business',
    leads: 124, 
    convRate: '62%', 
    active: true,
    routingRules: [{ id: 'r1', condition: 'Message contains "Pricing"', persona: 'Sales Closer' }]
  },
  { 
    id: 2, 
    name: 'Website Webhooks', 
    sourceType: 'Webhook', 
    sourceConfig: 'https://hooks.leadping.com/v1/wk_9283_ab',
    leads: 342, 
    convRate: '45%', 
    active: true,
    routingRules: []
  },
];

const SourceIcon = ({ type, size = 18 }: { type: Funnel['sourceType'], size?: number }) => {
  switch (type) {
    case 'Instagram': return <Instagram size={size} className="text-pink-600" />;
    case 'Facebook': return <Facebook size={size} className="text-blue-700" />;
    case 'WhatsApp': return <MessageSquare size={size} className="text-emerald-500" />;
    case 'Email': return <Mail size={size} className="text-blue-500" />;
    case 'CSV': return <FileUp size={size} className="text-orange-500" />;
    case 'Google Sheets': return <FileSpreadsheet size={size} className="text-green-600" />;
    case 'Scraper': return <Globe size={size} className="text-indigo-600" />;
    default: return <Zap size={size} className="text-purple-500" />;
  }
};

const FunnelPage: React.FC = () => {
  const [view, setView] = useState<'LIST' | 'CREATE' | 'CONFIG'>('LIST');
  const [funnels, setFunnels] = useState<Funnel[]>(INITIAL_FUNNELS);
  const [selectedSource, setSelectedSource] = useState<Funnel['sourceType'] | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [newFunnelName, setNewFunnelName] = useState('');

  const handleCreateFunnel = (type: Funnel['sourceType']) => {
    setSelectedSource(type);
    setNewFunnelName(`${type} Lead Stream`);
    setView('CONFIG');
  };

  const handleFinalizeConnection = () => {
    setIsConnecting(true);
    setTimeout(() => {
      const newFunnel: Funnel = {
        id: Date.now(),
        name: newFunnelName,
        sourceType: selectedSource!,
        sourceConfig: 'active-connection-stream',
        leads: 0,
        convRate: '0%',
        active: true,
        routingRules: []
      };
      setFunnels([newFunnel, ...funnels]);
      setIsConnecting(false);
      setView('LIST');
    }, 1500);
  };

  const toggleFunnelStatus = (id: number) => {
    setFunnels(funnels.map(f => f.id === id ? { ...f, active: !f.active } : f));
  };

  const deleteFunnel = (id: number) => {
    setFunnels(funnels.filter(f => f.id !== id));
  };

  const IngestionCard = ({ icon: Icon, title, desc, type }: any) => (
    <div 
      onClick={() => handleCreateFunnel(type)}
      className="bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:border-black transition-all cursor-pointer group shadow-sm flex flex-col justify-between h-64 active:scale-95"
    >
       <div>
          <div className="p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors mb-6 shadow-inner"><Icon size={24}/></div>
          <h3 className="font-black text-lg italic tracking-tight mb-2">{title}</h3>
          <p className="text-xs text-gray-400 font-medium leading-relaxed">{desc}</p>
       </div>
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black opacity-0 group-hover:opacity-100 transition-opacity">
          Configure <ArrowRight size={14}/>
       </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter italic">Lead Funnels</h1>
          <p className="text-gray-500 mt-3 font-medium">Capture from any platform. Process with one brain.</p>
        </div>
        {view === 'LIST' ? (
          <button 
            onClick={() => setView('CREATE')}
            className="bg-black text-white px-10 py-4 rounded-[1.5rem] text-sm font-black hover:bg-gray-800 transition-all shadow-2xl flex items-center gap-2 active:scale-95 w-full md:w-auto justify-center"
          >
            <Plus size={20} /> Create Funnel
          </button>
        ) : (
          <button 
            onClick={() => setView('LIST')}
            className="bg-white text-black border border-gray-200 px-8 py-4 rounded-[1.5rem] text-sm font-black hover:bg-gray-50 transition-all flex items-center gap-2 active:scale-95 w-full md:w-auto justify-center shadow-sm"
          >
            <ChevronRight size={20} className="rotate-180"/> Cancel
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {view === 'LIST' && (
          <motion.div key="list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 gap-6">
             {funnels.map(f => (
                <div key={f.id} className={`bg-white border p-8 md:p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center justify-between group ${f.active ? 'border-gray-200' : 'border-gray-100 opacity-60'}`}>
                   <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                      <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
                         <SourceIcon type={f.sourceType} size={32} />
                      </div>
                      <div className="min-w-0 flex-grow">
                         <div className="flex items-center gap-3">
                           <h3 className="font-black text-2xl text-gray-900 italic tracking-tight truncate leading-none">{f.name}</h3>
                           {!f.active && <span className="text-[8px] font-black bg-gray-100 px-2 py-0.5 rounded text-gray-400 uppercase tracking-widest">Paused</span>}
                         </div>
                         <div className="flex items-center gap-4 mt-2">
                            <span className="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-full text-gray-500 uppercase tracking-widest">{f.sourceType}</span>
                            <span className="text-xs font-black text-gray-400">{f.leads.toLocaleString()} Total</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                         <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Conv. Rate</p>
                         <p className="font-black text-2xl text-gray-900 leading-none">{f.convRate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                         <button onClick={() => toggleFunnelStatus(f.id)} className={`p-3 rounded-2xl transition-all ${f.active ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {f.active ? <Check size={20}/> : <Plus size={20} className="rotate-45"/>}
                         </button>
                         <button onClick={() => deleteFunnel(f.id)} className="p-3 text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={20} />
                         </button>
                      </div>
                   </div>
                </div>
             ))}
             {funnels.length === 0 && (
               <div className="py-20 text-center text-gray-400 font-bold italic">No active funnels. Create one to start capturing leads.</div>
             )}
          </motion.div>
        )}

        {view === 'CREATE' && (
          <motion.div key="create" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="mb-12">
                <h2 className="text-2xl font-black italic mb-2 tracking-tight">Select Ingestion Method</h2>
                <p className="text-gray-400 font-medium">How are we getting your leads?</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <IngestionCard type="Email" icon={Mail} title="Email Forward" desc="Forward lead notifications to your unique LeadPing address." />
                <IngestionCard type="Webhook" icon={Zap} title="Instant Webhook" desc="Direct integration for Webflow, Framer and custom apps." />
                <IngestionCard type="Scraper" icon={Globe} title="Web Scraper" desc="Our AI monitors contact forms and pulls recent lead data." />
                <IngestionCard type="Google Sheets" icon={FileSpreadsheet} title="Google Sheets" desc="Any new row added to your sheet triggers the AI follow-up." />
                <IngestionCard type="CSV" icon={FileUp} title="CSV Upload" desc="Bulk import lists for agency-style warm follow-ups." />
                <IngestionCard type="Instagram" icon={Instagram} title="Instagram DMs" desc="Connect Meta Business to capture Instagram DMs." />
                <IngestionCard type="WhatsApp" icon={MessageSquare} title="WhatsApp Cloud" desc="Process incoming WhatsApp Business queries instantly." />
                <IngestionCard type="Smartphone" icon={Smartphone} title="Twilio SMS" desc="Capture and reply to leads via dedicated UK numbers." />
             </div>
          </motion.div>
        )}

        {view === 'CONFIG' && (
          <motion.div key="config" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-[3rem] p-12 shadow-2xl">
            <div className="flex items-center gap-6 mb-10 pb-10 border-b border-gray-100">
               <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center shadow-inner">
                  <SourceIcon type={selectedSource!} size={32}/>
               </div>
               <div>
                  <h2 className="text-2xl font-black italic tracking-tight">Configure {selectedSource}</h2>
                  <p className="text-gray-400 text-sm font-medium">Almost ready to start capturing.</p>
               </div>
            </div>

            <div className="space-y-8">
               <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Funnel Name</label>
                  <input 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 text-sm font-black focus:ring-1 focus:ring-black outline-none shadow-inner" 
                    value={newFunnelName}
                    onChange={(e) => setNewFunnelName(e.target.value)}
                  />
               </div>

               {selectedSource === 'Webhook' && (
                 <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden group">
                    <div className="relative z-10">
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 italic">Your Inbound Endpoint</p>
                       <div className="flex items-center justify-between gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                          <code className="text-xs font-mono opacity-80 truncate">https://hooks.leadping.com/v1/wk_{Math.random().toString(36).slice(2, 7)}</code>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Copy size={16}/></button>
                       </div>
                    </div>
                 </div>
               )}

               {selectedSource === 'Instagram' && (
                 <button className="w-full py-5 bg-[#E1306C] text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl active:scale-95">
                    <Instagram size={20}/> Connect Meta Account
                 </button>
               )}

               <div className="pt-8 border-t border-gray-100 flex gap-4">
                  <button 
                    onClick={handleFinalizeConnection}
                    disabled={isConnecting}
                    className="flex-grow bg-black text-white py-5 rounded-3xl font-black text-sm hover:bg-gray-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                     {isConnecting ? <Loader2 size={20} className="animate-spin"/> : <Save size={20}/>}
                     {isConnecting ? 'Verifying Stream...' : 'Create Stream'}
                  </button>
                  <button 
                    onClick={() => setView('CREATE')}
                    className="px-8 border border-gray-200 rounded-3xl font-black text-[10px] uppercase tracking-widest text-gray-400 hover:text-black hover:bg-gray-50 transition-all"
                  >
                     Cancel
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FunnelPage;
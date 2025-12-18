
import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Mail, Clock, Send, Trash2, Edit3, X, 
  Paperclip, Smartphone, Globe, MessageSquare, 
  Instagram, Zap, Briefcase, MapPin, Activity, 
  Target, Sparkles, Radio, Cpu, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES & DATA ---

interface Message {
  id: string;
  sender: 'lead' | 'user' | 'ai';
  content: string;
  timestamp: string;
  rawTime: number;
}

interface SiteSignals {
  loadSpeed: string;
  isBroken: boolean;
  isOutdated: boolean;
  platform: string;
}

interface LeadEnrichment {
  niche: string;
  employeeCount: string;
  location: string;
  siteSignals: SiteSignals;
}

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source: string;
  channel: 'EMAIL' | 'WHATSAPP' | 'INSTAGRAM' | 'SMS' | 'FACEBOOK';
  status: 'Interested' | 'Not Now' | 'Not Interested' | 'OOO' | 'Action Needed';
  receivedAt: string;
  history: Message[];
  aiDraft?: string; 
  lastActivity: number;
  enrichment?: LeadEnrichment;
  intentScore: 'High' | 'Medium' | 'Low';
  processedIn: string;
}

const INITIAL_LEADS: Lead[] = [
  { 
    id: 1, 
    name: 'Robert Brown', 
    email: 'robert@brownconstructions.co.uk', 
    company: 'Brown Constructions',
    source: 'Website Form', 
    channel: 'EMAIL',
    status: 'Action Needed', 
    receivedAt: '25m ago', 
    intentScore: 'High',
    processedIn: '12.4s',
    lastActivity: Date.now() - 1500000,
    history: [{ id: 'm1', sender: 'lead', content: 'Hi, I need a new website for my construction firm. Our current one is slow. Can you help?', timestamp: '2:15 PM', rawTime: Date.now() - 1500000 }],
    aiDraft: "Hi Robert,\n\nThanks for reaching out! I had a quick look at brownconstructions.co.uk — you're right, the 4.8s load speed is definitely costing you leads.\n\nWe specialize in high-performance sites for construction firms. Are you free for a 10-min call tomorrow morning?",
    enrichment: {
      niche: 'Construction & Trades',
      employeeCount: '25-50',
      location: 'Manchester, UK',
      siteSignals: {
        loadSpeed: '4.8s (Slow)',
        isBroken: false,
        isOutdated: true,
        platform: 'WordPress 5.2'
      }
    }
  },
  { 
    id: 2, 
    name: 'Emily Davis', 
    email: 'emily@boutique-seo.com', 
    source: 'Instagram DM', 
    channel: 'INSTAGRAM',
    status: 'Interested', 
    intentScore: 'Medium',
    processedIn: '0.8s',
    receivedAt: '2h ago',
    lastActivity: Date.now() - 7200000,
    history: [{ id: 'm1', sender: 'lead', content: 'Hey! Curious about your agency pricing packages?', timestamp: 'Yesterday', rawTime: Date.now() - 86400000 }],
    enrichment: {
      niche: 'Marketing / SEO',
      employeeCount: '1-5',
      location: 'London, UK',
      siteSignals: {
        loadSpeed: '1.2s (Fast)',
        isBroken: false,
        isOutdated: false,
        platform: 'Webflow'
      }
    }
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    'Interested': 'bg-emerald-50 text-emerald-600',
    'Not Now': 'bg-gray-100 text-gray-500',
    'Not Interested': 'bg-red-50 text-red-600',
    'OOO': 'bg-blue-50 text-blue-600',
    'Action Needed': 'bg-black text-white shadow-sm',
  };
  // @ts-ignore
  const style = styles[status] || 'bg-gray-100 text-gray-800';
  return <span className={`px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic ${style}`}>{status}</span>;
};

const LeadsInbox: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(1); // Default to first for preview
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditingDraft, setIsEditingDraft] = useState(false);
  const [draftContent, setDraftContent] = useState('');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeLead = leads.find(l => l.id === selectedLeadId);

  useEffect(() => {
    if (activeLead?.aiDraft) {
      setDraftContent(activeLead.aiDraft);
    } else {
      setDraftContent('');
    }
    setIsEditingDraft(false);
    setReplyText('');
  }, [selectedLeadId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeLead?.history, activeLead?.aiDraft, isEditingDraft]);

  const handleStatusChange = (newStatus: Lead['status']) => {
    if (!selectedLeadId) return;
    setLeads(leads.map(l => l.id === selectedLeadId ? { ...l, status: newStatus } : l));
  };

  const handleDeleteLead = () => {
    if (!selectedLeadId) return;
    setLeads(leads.filter(l => l.id !== selectedLeadId));
    setSelectedLeadId(null);
  };

  const handleSendReply = (content: string, isAi: boolean = false) => {
    if (!content.trim() || !selectedLeadId) return;
    
    const newMessage: Message = {
      id: `m_${Date.now()}`,
      sender: isAi ? 'ai' : 'user',
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      rawTime: Date.now()
    };

    setLeads(prev => prev.map(l => {
      if (l.id === selectedLeadId) {
        return {
          ...l,
          history: [...l.history, newMessage],
          aiDraft: undefined, 
          lastActivity: Date.now(),
          status: 'Interested'
        };
      }
      return l;
    }));
    
    setReplyText('');
    setIsEditingDraft(false);
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-6rem)] flex bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl overflow-hidden selection:bg-black selection:text-white">
      
      {/* --- LEFT: SIGNAL STREAM (LIST) --- */}
      <div className="flex flex-col border-r border-gray-100 w-[320px] lg:w-[360px] flex-shrink-0 bg-white">
        <div className="p-6 border-b border-gray-50 flex-shrink-0">
           <div className="flex items-center gap-3 mb-6">
              <div className="bg-black text-white p-2 rounded-xl shadow-lg">
                 <Radio size={18} className="animate-pulse" />
              </div>
              <div>
                <h2 className="font-black text-lg tracking-tighter italic">Omni-Signals.</h2>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">Runtime: LON-01-ACTIVE</p>
              </div>
           </div>
           
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={14} />
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-transparent rounded-2xl pl-11 pr-4 py-3 text-[10px] font-black focus:ring-1 focus:ring-black focus:bg-white shadow-inner outline-none transition-all placeholder:text-gray-300 uppercase tracking-widest italic" 
                placeholder="Find Intelligence..." 
              />
           </div>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar pb-10">
           {filteredLeads.map(lead => (
             <div 
               key={lead.id} onClick={() => setSelectedLeadId(lead.id)}
               className={`p-5 border-b border-gray-50 cursor-pointer transition-all relative overflow-hidden group ${selectedLeadId === lead.id ? 'bg-black' : 'hover:bg-gray-50'}`}
             >
                {selectedLeadId === lead.id && (
                  <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                )}
                
                <div className="flex justify-between items-start mb-2">
                   <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg flex-shrink-0 ${selectedLeadId === lead.id ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-400'}`}>
                        {lead.channel === 'INSTAGRAM' ? <Instagram size={14} /> : <Mail size={14} />}
                      </div>
                      <h3 className={`text-xs font-black italic tracking-tight truncate ${selectedLeadId === lead.id ? 'text-white' : 'text-gray-900'}`}>{lead.name}</h3>
                   </div>
                   <span className={`text-[8px] font-black uppercase tracking-widest ml-2 whitespace-nowrap ${selectedLeadId === lead.id ? 'text-gray-500' : 'text-gray-300'}`}>{lead.receivedAt}</span>
                </div>
                
                <p className={`text-[10px] font-medium line-clamp-1 mb-3 leading-tight italic ${selectedLeadId === lead.id ? 'text-gray-400' : 'text-gray-500'}`}>
                  "{lead.history[lead.history.length-1].content}"
                </p>
                
                <div className="flex items-center justify-between">
                   <StatusBadge status={lead.status} />
                   {lead.aiDraft && (
                      <div className="flex items-center gap-1">
                         <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                         </span>
                         <span className={`text-[7px] font-black uppercase tracking-widest ${selectedLeadId === lead.id ? 'text-blue-400' : 'text-blue-500'}`}>Draft Loop</span>
                      </div>
                   )}
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* --- CENTER: INTELLIGENCE ENGINE (CHAT) --- */}
      <div className="flex-grow flex flex-col bg-[#fafafa] relative min-w-0 h-full">
        {activeLead ? (
          <>
            <div className="h-20 bg-white border-b border-gray-100 px-8 flex justify-between items-center z-10 flex-shrink-0">
               <div className="flex items-center gap-4 truncate">
                  <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-black flex-shrink-0 text-sm italic shadow-lg">{activeLead.name.charAt(0)}</div>
                  <div className="truncate">
                     <h2 className="font-black text-lg text-gray-900 tracking-tighter italic leading-none truncate mb-1">{activeLead.name}</h2>
                     <div className="flex items-center gap-2">
                        <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.2em]">{activeLead.channel}</p>
                        <div className="w-1 h-1 rounded-full bg-gray-200" />
                        <p className="text-[8px] text-emerald-500 font-black uppercase tracking-widest italic flex items-center gap-1">
                          <Activity size={10}/> Processed: {activeLead.processedIn}
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="flex items-center gap-3">
                  <div className="hidden lg:flex gap-1 bg-gray-50 border border-gray-100 p-1 rounded-xl shadow-inner">
                     {(['Interested', 'Not Now', 'Not Interested'] as const).map(s => (
                        <button 
                          key={s} onClick={() => handleStatusChange(s)}
                          className={`px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all ${activeLead.status === s ? 'bg-black text-white shadow-lg italic' : 'text-gray-400 hover:text-black'}`}
                        >
                           {s}
                        </button>
                     ))}
                  </div>
                  <button onClick={handleDeleteLead} className="p-2.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    <Trash2 size={18}/>
                  </button>
               </div>
            </div>
            
            {/* Conversation Flow */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 lg:p-10 space-y-8 no-scrollbar scroll-smooth">
               <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm">
                     <Clock size={10} className="text-blue-500" />
                     <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] italic">Intelligence Ingestion <span className="text-black">{activeLead.receivedAt}</span></span>
                  </div>
               </div>

               {activeLead.history.map(msg => (
                 <div key={msg.id} className={`flex ${msg.sender === 'lead' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] lg:max-w-[70%] p-5 lg:p-7 rounded-[2rem] text-sm shadow-sm relative group transition-all hover:shadow-lg ${
                      msg.sender === 'lead' ? 'bg-white rounded-tl-none border border-gray-100 text-gray-800' : 
                      msg.sender === 'ai' ? 'bg-black text-white rounded-tr-none shadow-xl' :
                      'bg-gray-200 text-gray-900 rounded-tr-none'
                    }`}>
                       {msg.sender === 'ai' && (
                         <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 flex items-center gap-2 italic">
                               <Zap size={12} fill="currentColor"/> Neural Response
                            </div>
                            <Sparkles size={12} className="text-white/20" />
                         </div>
                       )}
                       <p className="whitespace-pre-wrap text-[14px] font-medium leading-relaxed italic">{msg.content}</p>
                       <div className={`text-[8px] mt-3 font-black uppercase tracking-widest opacity-30 text-right ${msg.sender === 'lead' ? 'text-gray-500' : 'text-white'}`}>{msg.timestamp}</div>
                    </div>
                 </div>
               ))}
               
               {/* THE CINEMATIC AI DRAFT */}
               {activeLead.aiDraft && (
                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-xl py-6">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full scale-110 pointer-events-none" />
                    <div className="bg-white border-2 border-black rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group/draft">
                       <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none -rotate-12">
                          <Cpu size={140} />
                       </div>
                       
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-black text-white rounded-xl shadow-lg italic font-black">
                                <Zap size={16} fill="currentColor"/>
                             </div>
                             <div>
                                <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] block italic">Neural Proposal v2.0</span>
                                <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-1">
                                   <Target size={10}/> Precision: 99.8%
                                </span>
                             </div>
                          </div>
                          <button onClick={() => setIsEditingDraft(!isEditingDraft)} className="p-2.5 bg-gray-50 hover:bg-black hover:text-white rounded-xl transition-all shadow-inner">
                             {isEditingDraft ? <X size={16}/> : <Edit3 size={16}/>}
                          </button>
                       </div>
                       
                       <div className="relative mb-8">
                         <div className="absolute left-[-15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-50" />
                         {isEditingDraft ? (
                           <textarea 
                             value={draftContent}
                             onChange={(e) => setDraftContent(e.target.value)}
                             className="w-full bg-gray-50 p-6 rounded-2xl text-[14px] text-gray-700 leading-relaxed font-medium whitespace-pre-wrap border border-gray-100 shadow-inner focus:ring-1 focus:ring-black outline-none min-h-[140px] italic no-scrollbar"
                           />
                         ) : (
                           <div className="bg-gray-50/30 p-6 rounded-2xl text-[14px] text-gray-700 leading-relaxed font-medium whitespace-pre-wrap border border-gray-50 shadow-inner italic">
                             {activeLead.aiDraft}
                           </div>
                         )}
                       </div>
                       
                       <button 
                         onClick={() => handleSendReply(isEditingDraft ? draftContent : (activeLead.aiDraft || ''), true)}
                         className="w-full group/btn relative bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-[0.98] overflow-hidden italic"
                       >
                          <span className="relative z-10 flex items-center gap-2">
                            Initiate Send <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                       </button>
                       
                       <p className="text-center text-[7px] text-gray-400 font-black uppercase tracking-[0.3em] mt-6 italic">Loop active: Approval Required</p>
                    </div>
                 </motion.div>
               )}
            </div>

            {/* Elite Input Bar */}
            <div className="p-6 bg-white border-t border-gray-50 z-20 flex-shrink-0">
               <div className="relative max-w-4xl mx-auto flex items-end gap-3">
                  <div className="flex-grow relative group">
                    <div className="absolute inset-0 bg-black/5 blur-xl rounded-3xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                    <textarea 
                      value={replyText} 
                      onChange={e => setReplyText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendReply(replyText);
                        }
                      }}
                      placeholder={`Type a high-fidelity reply...`}
                      className="relative w-full bg-gray-50 border border-transparent rounded-[1.75rem] pl-6 pr-14 py-5 text-[13px] font-medium focus:ring-1 focus:ring-black focus:bg-white outline-none resize-none shadow-inner min-h-[60px] max-h-32 transition-all italic placeholder:text-gray-300 no-scrollbar"
                    />
                    <div className="absolute right-3 bottom-3 flex items-center gap-1">
                       <button className="p-2 text-gray-300 hover:text-black transition-colors rounded-xl hover:bg-gray-50"><Paperclip size={18}/></button>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleSendReply(replyText)}
                    disabled={!replyText.trim()}
                    className="bg-black text-white p-5 rounded-full hover:bg-gray-800 transition-all shadow-xl disabled:opacity-10 active:scale-90 flex-shrink-0"
                  >
                    <Send size={20}/>
                  </button>
               </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center pointer-events-none">
             <div className="relative mb-6">
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full scale-150 animate-pulse" />
               <Radio size={100} className="text-gray-100 relative z-10" />
             </div>
             <p className="font-black uppercase tracking-[0.4em] text-[10px] text-gray-300 italic">Awaiting Signal Selection</p>
          </div>
        )}
      </div>

      {/* --- RIGHT: INTELLIGENCE PANEL --- */}
      <AnimatePresence>
        {activeLead?.enrichment && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }} animate={{ width: 320, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
            className="hidden xl:flex flex-col border-l border-gray-100 bg-white overflow-hidden flex-shrink-0 h-full"
          >
             <div className="p-8 space-y-10 overflow-y-auto no-scrollbar h-full pb-24">
                <div>
                   <h3 className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] mb-6 italic">Signal Insights</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-all shadow-inner"><Briefcase size={16}/></div>
                         <div><p className="text-[8px] text-gray-400 uppercase font-black tracking-widest">Industry</p><p className="text-[11px] font-black italic tracking-tight text-gray-900 leading-none">{activeLead.enrichment.niche}</p></div>
                      </div>
                      <div className="flex items-center gap-4 group">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-all shadow-inner"><MapPin size={16}/></div>
                         <div><p className="text-[8px] text-gray-400 uppercase font-black tracking-widest">Geography</p><p className="text-[11px] font-black italic tracking-tight text-gray-900 leading-none">{activeLead.enrichment.location}</p></div>
                      </div>
                      <div className="flex items-center gap-4 group">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-all shadow-inner"><Target size={16}/></div>
                         <div>
                            <p className="text-[8px] text-gray-400 uppercase font-black tracking-widest">Intent Score</p>
                            <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-full mt-1 inline-block italic ${activeLead.intentScore === 'High' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                               {activeLead.intentScore} Confidence
                            </span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-gray-50">
                   <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] mb-5 flex items-center gap-2 italic">
                      <Activity size={12} className="text-blue-500"/> Health Signals
                   </h4>
                   <div className="space-y-3.5 bg-gray-50 p-5 rounded-3xl border border-gray-100 shadow-inner">
                      <div className="flex justify-between items-center text-[10px] font-black italic">
                         <span className="text-gray-400">Response ETA</span>
                         <span className="text-emerald-500 underline decoration-emerald-200 underline-offset-4 tracking-tight">&lt; 30s</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black italic">
                         <span className="text-gray-400">Site Speed</span>
                         <span className={activeLead.enrichment.siteSignals.loadSpeed.includes('Slow') ? 'text-red-500' : 'text-emerald-500'}>
                            {activeLead.enrichment.siteSignals.loadSpeed}
                         </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font
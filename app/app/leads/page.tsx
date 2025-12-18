import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, MoreHorizontal, Mail, CheckCircle, Clock, 
  ChevronLeft, Send, User, Calendar, Trash2, Edit3, X, 
  Paperclip, Smartphone, Globe, MessageSquare, Archive,
  AlertCircle, Shield, FileText, Download, Check, Instagram, Facebook, Zap,
  Briefcase, MapPin, Activity, Info, BarChart, Target, AlertTriangle
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
    'Interested': 'bg-green-100 text-green-800',
    'Not Now': 'bg-orange-100 text-orange-800',
    'Not Interested': 'bg-red-100 text-red-800',
    'OOO': 'bg-blue-100 text-blue-800',
    'Action Needed': 'bg-purple-100 text-purple-800',
  };
  // @ts-ignore
  const style = styles[status] || 'bg-gray-100 text-gray-800';
  return <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${style}`}>{status}</span>;
};

const LeadsInbox: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditingDraft, setIsEditingDraft] = useState(false);
  const [draftContent, setDraftContent] = useState('');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeLead = leads.find(l => l.id === selectedLeadId);

  useEffect(() => {
    if (activeLead?.aiDraft) {
      setDraftContent(activeLead.aiDraft);
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
    <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row bg-white border border-gray-200 rounded-[2.5rem] shadow-sm overflow-hidden min-h-0">
      
      {/* LEFT: LIST - NO OUTER SCROLL */}
      <div className="flex flex-col border-r border-gray-200 w-full md:w-[280px] lg:w-[320px] flex-shrink-0 bg-white">
        <div className="p-6 border-b border-gray-100 bg-gray-50/20 flex-shrink-0">
           <h2 className="font-black text-xl mb-4 tracking-tight italic">Omni-Inbox</h2>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:ring-1 focus:ring-black shadow-sm outline-none" 
                placeholder="Search leads..." 
              />
           </div>
        </div>
        <div className="flex-grow overflow-y-auto overflow-x-hidden no-scrollbar">
           {filteredLeads.map(lead => (
             <div 
               key={lead.id} onClick={() => setSelectedLeadId(lead.id)}
               className={`p-4 border-b border-gray-50 cursor-pointer transition-all ${selectedLeadId === lead.id ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
             >
                <div className="flex justify-between items-start mb-1">
                   <div className="flex items-center gap-2 min-w-0">
                      {lead.channel === 'INSTAGRAM' ? <Instagram size={12} className={selectedLeadId === lead.id ? 'text-white' : 'text-pink-500'} /> : <Mail size={12} className={selectedLeadId === lead.id ? 'text-white' : 'text-black'} />}
                      <h3 className={`text-sm font-bold truncate ${selectedLeadId === lead.id ? 'text-white' : 'text-gray-900'}`}>{lead.name}</h3>
                   </div>
                   <span className={`text-[9px] font-bold whitespace-nowrap ml-2 ${selectedLeadId === lead.id ? 'text-white/60' : 'text-gray-400'}`}>{lead.receivedAt}</span>
                </div>
                <p className={`text-[11px] line-clamp-1 mb-2 leading-tight ${selectedLeadId === lead.id ? 'text-white/70' : 'text-gray-500'}`}>{lead.history[lead.history.length-1].content}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                   <StatusBadge status={lead.status} />
                </div>
             </div>
           ))}
           {filteredLeads.length === 0 && (
             <div className="p-8 text-center text-gray-400 text-xs italic">No leads found</div>
           )}
        </div>
      </div>

      {/* CENTER: CHAT - NO OUTER SCROLL */}
      <div className="flex-grow flex flex-col bg-slate-50 relative min-w-0 h-full">
        {activeLead ? (
          <>
            <div className="h-16 bg-white border-b border-gray-100 px-6 flex justify-between items-center shadow-sm z-10 flex-shrink-0">
               <div className="flex items-center gap-3 truncate">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black flex-shrink-0 text-xs">{activeLead.name.charAt(0)}</div>
                  <div className="truncate">
                     <h2 className="font-bold text-sm text-gray-900 leading-tight truncate">{activeLead.name}</h2>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black truncate">{activeLead.channel}</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="hidden lg:flex gap-1 bg-gray-100 p-1 rounded-xl shadow-inner border border-gray-200">
                     {(['Interested', 'Not Now', 'Not Interested'] as const).map(s => (
                        <button 
                          key={s} onClick={() => handleStatusChange(s)}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase transition-all ${activeLead.status === s ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-black'}`}
                        >
                           {s}
                        </button>
                     ))}
                  </div>
                  <button onClick={handleDeleteLead} className="p-2 text-gray-400 hover:text-black rounded-xl hover:bg-gray-100 transition-colors">
                    <Trash2 size={16}/>
                  </button>
               </div>
            </div>
            
            {/* THIS SECTION SCROLLS INTERNALLY */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 lg:p-8 space-y-6 scrollbar-hide">
               <div className="flex justify-center mb-4">
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">Conversation started {activeLead.receivedAt}</span>
               </div>

               {activeLead.history.map(msg => (
                 <div key={msg.id} className={`flex ${msg.sender === 'lead' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[90%] lg:max-w-[75%] p-4 lg:p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'lead' ? 'bg-white rounded-tl-none border border-gray-100 text-gray-800' : 
                      msg.sender === 'ai' ? 'bg-black text-white rounded-tr-none shadow-lg' :
                      'bg-gray-200 text-gray-900 rounded-tr-none'
                    }`}>
                       {msg.sender === 'ai' && <div className="text-[8px] font-black uppercase tracking-widest opacity-60 mb-2 flex items-center gap-1"><Zap size={10} fill="currentColor"/> AI Signal Reply</div>}
                       <p className="whitespace-pre-wrap text-[13px] font-medium">{msg.content}</p>
                       <div className={`text-[9px] mt-2 opacity-40 font-black text-right ${msg.sender === 'lead' ? 'text-gray-500' : 'text-white'}`}>{msg.timestamp}</div>
                    </div>
                 </div>
               ))}
               
               {activeLead.aiDraft && (
                 <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white border-2 border-black rounded-[2.5rem] p-6 lg:p-8 shadow-2xl relative overflow-hidden mx-2 lg:mx-8">
                    <div className="flex items-center gap-2 mb-4">
                       <div className="p-1.5 bg-black text-white rounded-xl"><Zap size={12} fill="currentColor"/></div>
                       <div>
                          <span className="text-[9px] font-black text-black uppercase tracking-[0.1em] block">Smart Draft Proposal</span>
                          <span className="text-[8px] text-gray-400 font-bold uppercase tracking-tight">Signal: Site Speed + Context</span>
                       </div>
                    </div>
                    
                    {isEditingDraft ? (
                      <textarea 
                        value={draftContent}
                        onChange={(e) => setDraftContent(e.target.value)}
                        className="w-full bg-gray-50 p-5 rounded-2xl text-[13px] text-gray-700 leading-relaxed font-medium whitespace-pre-wrap mb-6 border border-gray-200 shadow-inner focus:ring-1 focus:ring-black outline-none min-h-[120px]"
                      />
                    ) : (
                      <div className="bg-gray-50 p-5 rounded-2xl text-[13px] text-gray-700 leading-relaxed font-medium whitespace-pre-wrap mb-6 border border-gray-100 shadow-inner">
                        {activeLead.aiDraft}
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                       <button 
                         onClick={() => handleSendReply(isEditingDraft ? draftContent : (activeLead.aiDraft || ''), true)}
                         className="flex-grow bg-black text-white py-3.5 rounded-2xl font-black text-xs hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
                       >
                          <Send size={14}/> Approve & Send
                       </button>
                       <button 
                         onClick={() => setIsEditingDraft(!isEditingDraft)}
                         className="px-5 border border-gray-200 rounded-2xl text-gray-400 hover:text-black transition-all font-black text-[10px] bg-white hover:bg-gray-50 shadow-sm"
                       >
                         {isEditingDraft ? 'Cancel' : 'Edit Draft'}
                       </button>
                    </div>
                 </motion.div>
               )}
            </div>

            {/* FIXED FOOTER */}
            <div className="p-4 lg:p-6 bg-white border-t border-gray-100 flex-shrink-0 z-20">
               <div className="relative max-w-4xl mx-auto flex items-end gap-2">
                  <div className="flex-grow relative">
                    <textarea 
                      value={replyText} 
                      onChange={e => setReplyText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendReply(replyText);
                        }
                      }}
                      placeholder={`Type a personal reply...`}
                      className="w-full bg-gray-50 border-none rounded-[1.5rem] pl-6 pr-12 py-4 text-sm focus:ring-1 focus:ring-black outline-none resize-none shadow-inner min-h-[56px] max-h-32 font-medium"
                    />
                    <div className="absolute right-3 bottom-3 flex items-center">
                       <button className="p-2 text-gray-300 hover:text-black transition-colors hidden sm:block"><Paperclip size={18}/></button>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleSendReply(replyText)}
                    disabled={!replyText.trim()}
                    className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-all shadow-lg disabled:opacity-10 active:scale-90 flex-shrink-0"
                  >
                    <Send size={18}/>
                  </button>
               </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center opacity-10 p-12 text-center pointer-events-none">
             <MessageSquare size={100} />
             <p className="mt-4 font-black uppercase tracking-[0.4em] text-sm">Select a Lead</p>
          </div>
        )}
      </div>

      {/* RIGHT: INTELLIGENCE PANEL - SCROLLS INTERNALLY */}
      <AnimatePresence>
        {activeLead?.enrichment && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }} animate={{ width: 280, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
            className="hidden xl:flex flex-col border-l border-gray-200 bg-white overflow-hidden flex-shrink-0 h-full"
          >
             <div className="p-8 space-y-10 overflow-y-auto no-scrollbar h-full pb-20">
                <div>
                   <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 italic">Intelligence Signals</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100"><Briefcase size={16} className="text-black"/></div>
                         <div><p className="text-[9px] text-gray-400 uppercase font-black">Niche</p><p className="text-xs font-black leading-tight text-gray-900">{activeLead.enrichment.niche}</p></div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100"><MapPin size={16} className="text-black"/></div>
                         <div><p className="text-[9px] text-gray-400 uppercase font-black">Location</p><p className="text-xs font-black leading-tight text-gray-900">{activeLead.enrichment.location}</p></div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100"><Target size={16} className="text-black"/></div>
                         <div>
                            <p className="text-[9px] text-gray-400 uppercase font-black">Intent</p>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full mt-0.5 inline-block ${activeLead.intentScore === 'High' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
                               {activeLead.intentScore} Conf.
                            </span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                   <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Activity size={12}/> Health Signals
                   </h4>
                   <div className="space-y-3 bg-gray-50 p-5 rounded-3xl border border-gray-100 shadow-inner">
                      <div className="flex justify-between text-[11px] font-black">
                         <span className="text-gray-400">Speed</span>
                         <span className={activeLead.enrichment.siteSignals.loadSpeed.includes('Slow') ? 'text-black underline decoration-black/20' : 'text-black'}>
                            {activeLead.enrichment.siteSignals.loadSpeed.split(' ')[0]}
                         </span>
                      </div>
                      <div className="flex justify-between text-[11px] font-black">
                         <span className="text-gray-400">Stack</span>
                         <span className="text-black truncate ml-2">{activeLead.enrichment.siteSignals.platform}</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-black">
                         <span className="text-gray-400">Status</span>
                         <span className="flex items-center gap-1 text-black italic">
                            Outdated
                         </span>
                      </div>
                   </div>
                   <p className="text-[9px] text-gray-400 mt-4 leading-relaxed font-bold italic opacity-80">
                      "Hook: Slow load speed (4.8s). Pitch modern framework."
                   </p>
                </div>

                <div className="pt-8 border-t border-gray-100">
                   <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Flow Status</h4>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase ${activeLead.aiDraft ? 'text-black bg-gray-100' : 'text-gray-400 bg-gray-50'}`}>
                        {activeLead.aiDraft ? 'Blocked' : 'Paused'}
                      </span>
                   </div>
                   <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] text-gray-500 leading-normal font-black">
                      {activeLead.aiDraft 
                        ? 'System is waiting for your approval.' 
                        : 'Reply detected. Automations cleared.'
                      }
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadsInbox;
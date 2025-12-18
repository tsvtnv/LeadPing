import React, { useState } from 'react';
import { 
  Save, User, Clock, Bell, Check, Loader2, Info, Shield, 
  Mail, Key, BrainCircuit, Sliders, Globe, AlertTriangle, 
  Plus, Trash2, Smartphone, Lock, MessageSquare, Instagram, Facebook,
  Link as LinkIcon, Share2, ShieldCheck, Zap, MailCheck, Globe2, Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SHARED COMPONENTS ---

const Toggle = ({ checked, onChange, label, desc }: { checked: boolean; onChange: (val: boolean) => void; label: string; desc?: string }) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0">
    <div className="pr-8">
      <span className="text-sm font-black text-gray-900 block tracking-tight">{label}</span>
      {desc && <span className="text-xs text-gray-400 block mt-1 leading-relaxed font-medium">{desc}</span>}
    </div>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 focus:outline-none shadow-inner ${
        checked ? 'bg-black' : 'bg-gray-200'
      }`}
    >
      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xl ring-0 transition duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  </div>
);

const SectionHeader = ({ icon: Icon, title, desc }: any) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2.5 bg-gray-100 rounded-2xl text-gray-900 shadow-sm border border-gray-200"><Icon size={20}/></div>
      <h2 className="text-xl font-black text-gray-900 tracking-tight italic underline decoration-black underline-offset-4">{title}</h2>
    </div>
    <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const InputGroup = ({ label, children, desc }: { label: string, children?: React.ReactNode, desc?: string }) => (
  <div className="mb-8">
    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{label}</label>
    <div className="bg-white">
       {children}
    </div>
    {desc && <p className="text-[10px] text-gray-400 mt-2 leading-relaxed font-bold uppercase italic">{desc}</p>}
  </div>
);

// --- MAIN PAGE ---

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'GENERAL' | 'AI' | 'DELIVERABILITY' | 'INTEGRATIONS' | 'LEGAL'>('GENERAL');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // --- STATE ---
  const [profile, setProfile] = useState({ 
    name: 'John Doe', 
    company: 'Acme Agency', 
    email: 'john@acme.com',
    tone: 'Direct & Results-Oriented'
  });

  const [aiConfig, setAiConfig] = useState({
    delay: 'Medium (15-45 mins)',
    depth: 'Advanced (Full Site Analysis)',
    snippets: ['PRICING: Starting at £49/mo', 'HOURS: Mon-Fri 9am-6pm']
  });

  const [safety, setSafety] = useState({ 
    warmUp: true, 
    businessHours: true, 
    bouncePause: true, 
    spamDetection: true 
  });

  const [legal, setLegal] = useState({
    optOutWording: "If you'd rather not hear from me again, just reply 'Stop' or click here.",
    suppressionList: "competitor.co.uk\nspam-bot.io"
  });

  const [connections, setConnections] = useState<Record<string, boolean>>({
    'Instagram DMs': false,
    'WhatsApp Business': true,
    'FB Messenger': false,
    'Email (Resend/SMTP)': true,
    'SMS (Twilio)': false,
    'Google Sheets Sync': false
  });

  // --- HANDLERS ---

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API persistence
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  const addSnippet = () => {
    setAiConfig({ ...aiConfig, snippets: [...aiConfig.snippets, 'NEW FACT: Value here'] });
  };

  const removeSnippet = (index: number) => {
    setAiConfig({ ...aiConfig, snippets: aiConfig.snippets.filter((_, i) => i !== index) });
  };

  const updateSnippet = (index: number, val: string) => {
    const next = [...aiConfig.snippets];
    next[index] = val;
    setAiConfig({ ...aiConfig, snippets: next });
  };

  const toggleConnection = (id: string) => {
    setConnections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs = [
    { id: 'GENERAL', label: 'Identity', icon: User },
    { id: 'AI', label: 'Brain Tuning', icon: BrainCircuit },
    { id: 'DELIVERABILITY', label: 'Inbox Health', icon: ShieldCheck },
    { id: 'INTEGRATIONS', label: 'Connections', icon: Share2 },
    { id: 'LEGAL', label: 'GDPR & Safety', icon: Scale },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter italic">Settings</h1>
          <p className="text-gray-500 mt-3 font-medium">Control the core engine and platform safety.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
           <AnimatePresence>
             {showSuccess && (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white text-[10px] font-black bg-black px-5 py-3 rounded-2xl border border-gray-800 shadow-xl uppercase tracking-widest">
                  <Check size={14}/> Settings Saved
               </motion.div>
             )}
           </AnimatePresence>
           <button 
             onClick={handleSave} disabled={isSaving}
             className="bg-black text-white px-10 py-5 rounded-[1.5rem] text-sm font-black hover:bg-gray-800 flex-grow md:flex-grow-0 flex items-center justify-center gap-3 shadow-2xl transition-all disabled:opacity-50 group active:scale-95"
           >
              {isSaving ? <Loader2 className="animate-spin" size={20}/> : <Save size={20} className="group-hover:rotate-12 transition-transform"/>}
              Commit Changes
           </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
           {tabs.map(tab => (
             <button
               key={tab.id} onClick={() => setActiveTab(tab.id as any)}
               className={`flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-[1.5rem] text-xs font-black transition-all text-left border ${activeTab === tab.id ? 'bg-white shadow-lg text-black border-gray-100 translate-x-1 lg:translate-x-2' : 'text-gray-400 border-transparent hover:text-black'}`}
             >
                <tab.icon size={18} className={activeTab === tab.id ? 'text-black' : 'text-gray-300'} />
                {tab.label}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow bg-white border border-gray-200 rounded-[3rem] shadow-sm p-8 lg:p-16 min-h-[600px]">
          
          {activeTab === 'GENERAL' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <SectionHeader icon={User} title="Workspace Identity" desc="Configure how your brand appears across all outreach channels." />
              <div className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="Display Name" desc="Used in greeting lines like 'Hi, I'm John'">
                       <input className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                    </InputGroup>
                    <InputGroup label="Agency / Company Name" desc="Used for brand and context building">
                       <input className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner" value={profile.company} onChange={e => setProfile({...profile, company: e.target.value})} />
                    </InputGroup>
                 </div>
                 <InputGroup label="Lead Communication Tone" desc="Master setting for all AI-generated drafts">
                    <select 
                      value={profile.tone}
                      onChange={e => setProfile({...profile, tone: e.target.value})}
                      className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner cursor-pointer"
                    >
                       <option>Direct & Results-Oriented</option>
                       <option>Friendly & Community-Focused</option>
                       <option>Professional & Academic</option>
                       <option>Witty & Sales-Driven</option>
                    </select>
                 </InputGroup>
              </div>
            </motion.div>
          )}

          {activeTab === 'AI' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <SectionHeader icon={BrainCircuit} title="AI Persona Tuning" desc="Customize the intelligence and delay patterns of your virtual agent." />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <InputGroup label="Humanized Delay" desc="Adds variance to send times to seem human">
                     <select 
                        value={aiConfig.delay}
                        onChange={e => setAiConfig({...aiConfig, delay: e.target.value})}
                        className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black shadow-inner"
                      >
                        <option>Instant (Speed First)</option>
                        <option>Medium (15-45 mins)</option>
                        <option>High (2-6 hours)</option>
                     </select>
                  </InputGroup>
                  <InputGroup label="Intelligence Depth" desc="Higher depth analyzes site health">
                     <select 
                        value={aiConfig.depth}
                        onChange={e => setAiConfig({...aiConfig, depth: e.target.value})}
                        className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black shadow-inner"
                      >
                        <option>Lite (Template First Line)</option>
                        <option>Standard (Niche + Name)</option>
                        <option>Advanced (Full Site Analysis)</option>
                     </select>
                  </InputGroup>
               </div>
               
               <InputGroup label="Global Knowledge Snippets" desc="Hard facts the AI must always know about you">
                  <div className="space-y-3">
                     {aiConfig.snippets.map((snippet, idx) => (
                        <div key={idx} className="flex gap-2 group items-center">
                           <input 
                              className="flex-grow border border-gray-100 bg-gray-50 rounded-xl p-3 text-xs font-bold uppercase tracking-tight shadow-sm" 
                              value={snippet}
                              onChange={(e) => updateSnippet(idx, e.target.value)}
                           />
                           <button 
                             onClick={() => removeSnippet(idx)}
                             className="p-2 text-gray-300 hover:text-black transition-colors"
                           >
                             <Trash2 size={16}/>
                           </button>
                        </div>
                     ))}
                     <button 
                       onClick={addSnippet}
                       className="text-[10px] font-black text-black flex items-center gap-2 hover:underline uppercase tracking-widest mt-2"
                     >
                        <Plus size={14}/> Add Knowledge Snippet
                     </button>
                  </div>
               </InputGroup>
            </motion.div>
          )}

          {activeTab === 'DELIVERABILITY' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <SectionHeader icon={ShieldCheck} title="Inbox Reputation" desc="Monitor domain health and IP sending reputation." />
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {['SPF', 'DKIM', 'DMARC'].map(record => (
                    <div key={record} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex flex-col items-center gap-3 shadow-inner relative group">
                       <span className="font-black text-[9px] text-gray-400 uppercase tracking-widest">{record} Record</span>
                       <div className="flex items-center gap-2 text-black font-black text-sm">
                          <Check size={14} /> Active
                       </div>
                    </div>
                  ))}
               </div>

               <div className="bg-white border border-gray-100 rounded-[2.5rem] p-4 shadow-sm">
                  <Toggle 
                    label="Automatic Domain Warm-up" 
                    desc="Maintain a high sender score by cycling reputable traffic." 
                    checked={safety.warmUp} 
                    onChange={v => setSafety({...safety, warmUp: v})} 
                  />
                  <Toggle 
                    label="Strict UK Business Hours" 
                    desc="Only send auto-replies Mon-Fri, 08:30 - 17:30 GMT." 
                    checked={safety.businessHours} 
                    onChange={v => setSafety({...safety, businessHours: v})} 
                  />
                  <Toggle 
                    label="Bounce Protection" 
                    desc="Pause sequences automatically if lead email bounces." 
                    checked={safety.bouncePause} 
                    onChange={v => setSafety({...safety, bouncePause: v})} 
                  />
               </div>
            </motion.div>
          )}

          {activeTab === 'INTEGRATIONS' && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <SectionHeader icon={Share2} title="Lead Sources" desc="Sync lead intake from your existing platforms." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {Object.keys(connections).map(source => (
                     <div key={source} className={`p-6 border rounded-[2rem] bg-white flex items-center justify-between transition-all group ${connections[source] ? 'border-black' : 'border-gray-100 hover:border-gray-300'}`}>
                        <div className="flex items-center gap-3 min-w-0">
                           <div className={`p-2.5 rounded-xl ${connections[source] ? 'bg-black text-white' : 'bg-gray-50 text-gray-400'}`}><Globe2 size={18}/></div>
                           <span className="font-black text-xs text-gray-900 italic tracking-tight truncate">{source}</span>
                        </div>
                        <button 
                          onClick={() => toggleConnection(source)}
                          className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all ${connections[source] ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:text-black'}`}
                        >
                           {connections[source] ? 'Connected' : 'Connect'}
                        </button>
                     </div>
                   ))}
                </div>
             </motion.div>
          )}

          {activeTab === 'LEGAL' && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <SectionHeader icon={Scale} title="GDPR Compliance" desc="Manage opt-outs and data protection rules." />
                
                <div className="space-y-8">
                   <div className="bg-gray-50 border border-gray-100 p-6 rounded-3xl text-[11px] text-gray-600 leading-relaxed font-medium">
                      <h4 className="font-black mb-2 text-black uppercase tracking-widest flex items-center gap-2 italic">Legal Advisory</h4>
                      We automatically attach a Legitimate Interest notice to initial outreach. Ensure your privacy policy is linked.
                   </div>

                   <InputGroup label="Opt-out Text (Footer)" desc="Appears in small text at the bottom of all automated outreach">
                      <input 
                        className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner" 
                        value={legal.optOutWording}
                        onChange={e => setLegal({...legal, optOutWording: e.target.value})}
                      />
                   </InputGroup>

                   <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[10px] font-black text-black uppercase tracking-widest">Global Suppression List</h4>
                         <span className="text-[8px] font-bold text-gray-400">One per line</span>
                      </div>
                      <textarea 
                        className="w-full border border-gray-50 bg-gray-50 rounded-2xl p-4 text-xs font-mono min-h-[140px] focus:ring-1 focus:ring-black outline-none resize-none shadow-inner" 
                        value={legal.suppressionList}
                        onChange={e => setLegal({...legal, suppressionList: e.target.value})}
                      />
                   </div>
                </div>
             </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
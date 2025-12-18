import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, Play, Clock, Mail, ChevronLeft, Save, 
  X, Loader2, Smartphone, Zap, Trash2, Send,
  Pause, GitFork, ThumbsUp, ThumbsDown, 
  ZoomIn, ZoomOut, Maximize, MessageSquare, Instagram, 
  Copy, Settings2, ShieldCheck, Sparkles, PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPES ---

type StepType = 'DELAY' | 'EMAIL' | 'SMS' | 'TASK' | 'BRANCH' | 'WHATSAPP' | 'INSTAGRAM';

interface SequenceStep {
  id: string;
  type: StepType;
  content: string; 
  subject?: string; 
  delayDays?: number;
  delayHours?: number;
  taskType?: string;
  conditionType?: 'REPLIED' | 'OPENED' | 'CLICKED';
  branches?: {
    true: SequenceStep[];
    false: SequenceStep[];
  };
}

interface Sequence {
  id: number;
  name: string;
  status: 'Active' | 'Paused' | 'Draft';
  stats: {
    enrolled: number;
    opened: string;
    replied: string;
    clicked: string;
  };
  steps: SequenceStep[];
}

// --- HELPERS ---

const StepIcon = ({ type }: { type: StepType }) => {
  switch (type) {
    case 'EMAIL': return <Mail size={16} />;
    case 'SMS': return <Smartphone size={16} />;
    case 'WHATSAPP': return <MessageSquare size={16} />;
    case 'INSTAGRAM': return <Instagram size={16} />;
    case 'DELAY': return <Clock size={16} />;
    case 'TASK': return <ShieldCheck size={16} />;
    case 'BRANCH': return <GitFork size={16} />;
    default: return <Zap size={16} />;
  }
};

const StepColor = (type: StepType) => {
  switch (type) {
    case 'BRANCH': return 'bg-black text-white border-black';
    case 'DELAY': return 'bg-gray-100 text-gray-500 border-gray-200';
    default: return 'bg-white text-black border-gray-200';
  }
};

const StepLabel = (type: StepType) => {
  switch (type) {
    case 'EMAIL': return 'Send Email';
    case 'SMS': return 'Send SMS';
    case 'WHATSAPP': return 'WhatsApp';
    case 'INSTAGRAM': return 'Instagram DM';
    case 'DELAY': return 'Wait';
    case 'TASK': return 'Task';
    case 'BRANCH': return 'Condition';
    default: return 'Action';
  }
};

const OutreachPage: React.FC = () => {
  const [view, setView] = useState<'LIST' | 'EDITOR'>('LIST');
  const [sequences, setSequences] = useState<Sequence[]>([
    { 
      id: 1, 
      name: 'Omnichannel Lead Nurture', 
      status: 'Active', 
      stats: { enrolled: 450, opened: '72%', replied: '38%', clicked: '18%' },
      steps: [
        { id: 's1', type: 'EMAIL', subject: 'Thanks for reaching out!', content: 'Hi {{name}}, ...', delayHours: 0, delayDays: 0 },
        { id: 's2', type: 'DELAY', content: '', delayDays: 1, delayHours: 0 },
        { 
          id: 's3', 
          type: 'BRANCH', 
          content: '', 
          conditionType: 'REPLIED',
          branches: {
            true: [
               { id: 's3_t1', type: 'TASK', content: 'Book Discovery Call', taskType: 'Call', delayDays: 0, delayHours: 0 }
            ],
            false: [
               { id: 's3_f1', type: 'SMS', content: 'Hi {{name}}, just a quick text to ensure you saw our email...', delayDays: 0, delayHours: 0 }
            ]
          }
        }
      ] 
    }
  ]);
  const [editingSeq, setEditingSeq] = useState<Sequence | null>(null);
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
  const [isTesting, setIsTesting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // --- CANVAS STATE ---
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 50 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const startPanning = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.step-node') || (e.target as HTMLElement).closest('.btn-control')) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const pan = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPosition({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
  };

  const stopPanning = () => setIsPanning(false);

  // --- TREE LOGIC ---

  const findStep = (steps: SequenceStep[], id: string): SequenceStep | null => {
    for (const step of steps) {
      if (step.id === id) return step;
      if (step.branches) {
        const foundTrue = findStep(step.branches.true, id);
        if (foundTrue) return foundTrue;
        const foundFalse = findStep(step.branches.false, id);
        if (foundFalse) return foundFalse;
      }
    }
    return null;
  };

  const updateStepInTree = (steps: SequenceStep[], id: string, updater: (s: SequenceStep) => SequenceStep): SequenceStep[] => {
    return steps.map(step => {
      if (step.id === id) return updater(step);
      if (step.branches) {
        return {
          ...step,
          branches: {
            true: updateStepInTree(step.branches.true, id, updater),
            false: updateStepInTree(step.branches.false, id, updater)
          }
        };
      }
      return step;
    });
  };

  const removeStepFromTree = (steps: SequenceStep[], id: string): SequenceStep[] => {
    return steps.filter(step => step.id !== id).map(step => {
      if (step.branches) {
        return {
          ...step,
          branches: {
            true: removeStepFromTree(step.branches.true, id),
            false: removeStepFromTree(step.branches.false, id)
          }
        };
      }
      return step;
    });
  };

  const addStepToTree = (steps: SequenceStep[], parentId: string | null, branchSide: 'true' | 'false' | null, newStep: SequenceStep, afterStepId?: string): SequenceStep[] => {
    if (!parentId) {
      if (afterStepId) {
        const idx = steps.findIndex(s => s.id === afterStepId);
        if (idx !== -1) {
          const newSteps = [...steps];
          newSteps.splice(idx + 1, 0, newStep);
          return newSteps;
        }
      }
      return [...steps, newStep];
    }
    return steps.map(step => {
      if (step.id === parentId && step.branches && branchSide) {
        return {
          ...step,
          branches: {
            ...step.branches,
            [branchSide]: afterStepId 
              ? (() => {
                  const list = step.branches[branchSide];
                  const idx = list.findIndex(s => s.id === afterStepId);
                  const newL = [...list];
                  newL.splice(idx + 1, 0, newStep);
                  return newL;
                })()
              : [...step.branches[branchSide], newStep]
          }
        };
      }
      if (step.branches) {
        return {
          ...step,
          branches: {
            true: addStepToTree(step.branches.true, parentId, branchSide, newStep, afterStepId),
            false: addStepToTree(step.branches.false, parentId, branchSide, newStep, afterStepId)
          }
        };
      }
      return step;
    });
  };

  const handleEdit = (seq: Sequence) => {
    setEditingSeq(JSON.parse(JSON.stringify(seq))); 
    setSelectedStepId(null);
    setView('EDITOR');
  };

  const handleSave = () => {
    if (!editingSeq) return;
    setSequences(prev => {
      const exists = prev.find(s => s.id === editingSeq.id);
      return exists ? prev.map(s => s.id === editingSeq.id ? editingSeq : s) : [...prev, editingSeq];
    });
    setView('LIST');
  };

  const runTestFlow = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      alert("Test simulation complete. 1 mock lead enrolled successfully.");
    }, 2000);
  };

  const SequenceEditor = () => {
    if (!editingSeq) return null;
    const activeStep = selectedStepId ? findStep(editingSeq.steps, selectedStepId) : null;

    const addStep = (type: StepType, parentId?: string, branchSide?: 'true'|'false', afterStepId?: string) => {
      const newStep: SequenceStep = {
        id: `step_${Math.random().toString(36).substr(2, 9)}`,
        type,
        content: '',
        delayDays: type === 'DELAY' ? 1 : 0,
        delayHours: 0,
        subject: type === 'EMAIL' ? 'New Message' : undefined,
        conditionType: type === 'BRANCH' ? 'REPLIED' : undefined,
        branches: type === 'BRANCH' ? { true: [], false: [] } : undefined
      };
      const updatedSteps = addStepToTree(editingSeq.steps, parentId || null, branchSide || null, newStep, afterStepId);
      setEditingSeq({ ...editingSeq, steps: updatedSteps });
      setSelectedStepId(newStep.id);
    };

    const updateActiveStep = (field: keyof SequenceStep, value: any) => {
      if (!selectedStepId) return;
      const updatedSteps = updateStepInTree(editingSeq.steps, selectedStepId, (step) => ({ ...step, [field]: value }));
      setEditingSeq({ ...editingSeq, steps: updatedSteps });
    };

    const removeStep = (id: string) => {
      const updatedSteps = removeStepFromTree(editingSeq.steps, id);
      setEditingSeq({ ...editingSeq, steps: updatedSteps });
      if (selectedStepId === id) setSelectedStepId(null);
    };

    const RenderSteps = ({ steps, parentId, branchSide }: { steps: SequenceStep[], parentId?: string, branchSide?: 'true'|'false' }) => (
      <div className="flex flex-col items-center w-full">
        {steps.map((step) => {
          const isSelected = step.id === selectedStepId;
          return (
            <div key={step.id} className="relative flex flex-col items-center w-full">
              <div 
                onClick={(e) => { e.stopPropagation(); setSelectedStepId(step.id); }}
                className={`
                  step-node relative rounded-[1.5rem] border-2 p-5 cursor-pointer transition-all shadow-sm w-[320px] z-10 select-none
                  ${isSelected ? 'bg-white border-black ring-4 ring-black/5 shadow-xl scale-105' : 'bg-white border-gray-100 hover:border-gray-300'}
                  ${step.type === 'BRANCH' ? 'bg-black text-white border-black' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shadow-sm flex-shrink-0 ${StepColor(step.type)}`}>
                       <StepIcon type={step.type} />
                    </div>
                    <div className="min-w-0">
                       <h4 className="font-black text-xs truncate italic">{step.type === 'BRANCH' ? `IF Lead ${step.conditionType}` : StepLabel(step.type)}</h4>
                       <p className={`text-[10px] truncate font-bold uppercase tracking-tight ${step.type === 'BRANCH' ? 'text-gray-400' : 'text-gray-400'}`}>
                          {step.type === 'EMAIL' ? step.subject : step.type === 'DELAY' ? `${step.delayDays}d ${step.delayHours}h` : 'Custom Content'}
                       </p>
                    </div>
                  </div>
                  {isSelected && (
                    <button onClick={(e) => { e.stopPropagation(); removeStep(step.id); }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                       <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>

              {step.type === 'BRANCH' && step.branches && (
                <div className="w-full mt-10 flex justify-center relative">
                   <div className="flex w-full max-w-5xl gap-12">
                      <div className="flex-1 flex flex-col items-center relative">
                        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-10 w-px bg-gray-200" />
                        <div className="bg-white border border-gray-100 text-[8px] font-black px-2 py-0.5 rounded text-gray-400 uppercase mb-6 z-10 shadow-sm">YES / ENGAGED</div>
                        <RenderSteps steps={step.branches.true} parentId={step.id} branchSide="true" />
                        {step.branches.true.length === 0 && <AddStepButton onClick={(t) => addStep(t, step.id, 'true')} empty />}
                      </div>
                      <div className="flex-1 flex flex-col items-center relative">
                        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-10 w-px bg-gray-200" />
                        <div className="bg-white border border-gray-100 text-[8px] font-black px-2 py-0.5 rounded text-gray-400 uppercase mb-6 z-10 shadow-sm">NO REPLY</div>
                        <RenderSteps steps={step.branches.false} parentId={step.id} branchSide="false" />
                        {step.branches.false.length === 0 && <AddStepButton onClick={(t) => addStep(t, step.id, 'false')} empty />}
                      </div>
                   </div>
                </div>
              )}

              <div className="h-10 w-px bg-gray-200 relative group z-0 flex items-center justify-center">
                 <div className="absolute top-1/2 -translate-y-1/2 z-20">
                    <AddStepButton onClick={(t) => addStep(t, parentId, branchSide, step.id)} />
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    );

    const AddStepButton = ({ onClick, empty }: { onClick: (type: StepType) => void, empty?: boolean }) => (
      <div className={`btn-control relative group ${empty ? 'py-4' : ''}`}>
         <div className={`w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-300 shadow-sm cursor-pointer transition-all hover:border-black hover:text-black hover:scale-110 ${empty ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <Plus size={12} />
         </div>
         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-2xl rounded-2xl p-2 flex gap-1 transform scale-0 group-hover:scale-100 transition-transform origin-top z-50">
            {['EMAIL', 'SMS', 'DELAY', 'BRANCH', 'WHATSAPP', 'INSTAGRAM'].map(t => (
               <button key={t} onClick={() => onClick(t as StepType)} className="p-3 hover:bg-gray-50 text-gray-400 hover:text-black rounded-xl flex flex-col items-center gap-1 transition-colors min-w-[50px]">
                  <StepIcon type={t as StepType}/>
                  <span className="text-[7px] font-black uppercase tracking-tight">{t.slice(0,5)}</span>
               </button>
            ))}
         </div>
      </div>
    );

    return (
      <div className="fixed inset-0 bg-slate-50 z-50 flex flex-col overflow-hidden select-none">
        <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm z-[100]">
          <div className="flex items-center gap-4">
            <button onClick={() => setView('LIST')} className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <input 
              type="text" 
              value={editingSeq.name}
              onChange={(e) => setEditingSeq({...editingSeq, name: e.target.value})}
              className="font-black text-gray-900 border-none bg-transparent focus:ring-0 p-0 text-base w-64 select-auto italic"
            />
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => setShowSettings(true)} className="p-2 text-gray-400 hover:text-black"><Settings2 size={20}/></button>
             <button onClick={runTestFlow} disabled={isTesting} className="bg-white border border-gray-200 text-black px-4 py-2 rounded-xl text-xs font-black hover:bg-gray-50 flex items-center gap-2 active:scale-95 disabled:opacity-50">
                {isTesting ? <Loader2 size={16} className="animate-spin"/> : <PlayCircle size={16} />} 
                Test Run
             </button>
             <button onClick={handleSave} className="bg-black text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-gray-800 flex items-center gap-2 shadow-xl active:scale-95">
                <Save size={16} /> Save Campaign
             </button>
          </div>
        </div>

        <div 
          className="flex-grow relative overflow-hidden bg-slate-50 cursor-grab active:cursor-grabbing"
          onMouseDown={startPanning} onMouseMove={pan} onMouseUp={stopPanning} onMouseLeave={stopPanning}
          ref={canvasRef}
        >
           <div 
             className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', transform: `translate(${position.x % 24}px, ${position.y % 24}px)` }}
           />

           <div 
             style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, transformOrigin: 'top center', transition: isPanning ? 'none' : 'transform 0.1s ease-out' }}
             className="w-full flex flex-col items-center pt-24 pb-[400px]"
           >
              <div className="bg-black text-white px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-3 italic">
                 <Sparkles size={14} fill="currentColor"/> Campaign Root
              </div>
              <div className="h-10 w-px bg-gray-200 relative group flex items-center justify-center">
                 <AddStepButton onClick={(t) => addStep(t)} />
              </div>
              <RenderSteps steps={editingSeq.steps} />
              <div className="bg-gray-100 text-gray-300 px-4 py-1.5 rounded-full text-[8px] font-black uppercase mt-4 tracking-widest border border-gray-200">Terminal Point</div>
           </div>

           <div className="absolute bottom-8 left-8 flex flex-col gap-2 z-[100]">
              <div className="bg-white border border-gray-200 p-1.5 rounded-2xl shadow-2xl flex flex-col gap-1">
                 <button onClick={() => setScale(s => Math.min(s + 0.1, 1.5))} className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-black"><ZoomIn size={18}/></button>
                 <button onClick={() => setScale(s => Math.max(s - 0.1, 0.4))} className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-black"><ZoomOut size={18}/></button>
                 <button onClick={() => { setScale(1); setPosition({x:0, y:50}); }} className="p-2 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-black"><Maximize size={18}/></button>
              </div>
           </div>

           <AnimatePresence>
             {selectedStepId && activeStep && (
               <motion.div 
                 initial={{ x: 420 }} animate={{ x: 0 }} exit={{ x: 420 }}
                 className="absolute top-4 right-4 bottom-4 w-[380px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 z-[100] flex flex-col overflow-hidden select-auto"
               >
                  <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                     <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${StepColor(activeStep.type)} shadow-inner`}>
                           <StepIcon type={activeStep.type} />
                        </div>
                        <div>
                           <h3 className="font-black text-sm italic">{StepLabel(activeStep.type)}</h3>
                           <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">ID: {activeStep.id.slice(0,6)}</p>
                        </div>
                     </div>
                     <button onClick={() => setSelectedStepId(null)} className="text-gray-400 hover:text-black p-2 hover:bg-gray-100 rounded-full"><X size={20}/></button>
                  </div>

                  <div className="p-8 overflow-y-auto flex-grow space-y-8 no-scrollbar pb-24">
                     {activeStep.type === 'BRANCH' && (
                        <div className="space-y-4">
                           <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest">Wait for Action</label>
                           <select value={activeStep.conditionType} onChange={e => updateActiveStep('conditionType', e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-xs font-black focus:ring-1 focus:ring-black outline-none shadow-inner cursor-pointer italic">
                              <option value="REPLIED">If Lead Replied</option>
                              <option value="OPENED">If Lead Opened Email</option>
                              <option value="CLICKED">If Lead Clicked Link</option>
                           </select>
                        </div>
                     )}
                     {activeStep.type === 'DELAY' && (
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Days</label>
                              <input type="number" min="0" value={activeStep.delayDays || 0} onChange={e => updateActiveStep('delayDays', parseInt(e.target.value))} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-black focus:ring-1 focus:ring-black outline-none shadow-inner" />
                           </div>
                           <div>
                              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Hours</label>
                              <input type="number" min="0" value={activeStep.delayHours || 0} onChange={e => updateActiveStep('delayHours', parseInt(e.target.value))} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-black focus:ring-1 focus:ring-black outline-none shadow-inner" />
                           </div>
                        </div>
                     )}
                     {(activeStep.type !== 'DELAY' && activeStep.type !== 'BRANCH') && (
                        <>
                           {activeStep.type === 'EMAIL' && (
                             <div>
                                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Subject Line</label>
                                <input type="text" value={activeStep.subject || ''} onChange={e => updateActiveStep('subject', e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-black focus:ring-1 focus:ring-black outline-none shadow-inner italic" />
                             </div>
                           )}
                           <div>
                              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Message Body</label>
                              <textarea rows={10} value={activeStep.content || ''} onChange={e => updateActiveStep('content', e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-[1.5rem] p-5 text-sm font-bold focus:ring-1 focus:ring-black outline-none resize-none leading-relaxed shadow-inner no-scrollbar" placeholder="Type message... Use {{name}} for AI personalization." />
                           </div>
                        </>
                     )}
                  </div>
               </motion.div>
             )}
           </AnimatePresence>

           <AnimatePresence>
              {showSettings && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-6" onClick={() => setShowSettings(false)}>
                   <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-[3rem] p-12 max-w-lg w-full shadow-2xl border border-gray-200" onClick={e => e.stopPropagation()}>
                      <h2 className="text-3xl font-black italic mb-2 tracking-tight">Campaign Settings</h2>
                      <p className="text-gray-400 text-sm font-medium mb-10">Manage delivery behavior and window.</p>
                      
                      <div className="space-y-8">
                         <div className="flex items-center justify-between">
                            <div>
                               <p className="text-xs font-black uppercase tracking-widest">Auto-Stop on Reply</p>
                               <p className="text-[10px] text-gray-400 font-medium">Protect your reputation by clearing follow-ups.</p>
                            </div>
                            <div className="w-12 h-6 bg-black rounded-full p-1"><div className="w-4 h-4 bg-white rounded-full translate-x-6"/></div>
                         </div>
                         <div className="flex items-center justify-between">
                            <div>
                               <p className="text-xs font-black uppercase tracking-widest">Tracking Pixels</p>
                               <p className="text-[10px] text-gray-400 font-medium">Capture opens and link clicks.</p>
                            </div>
                            <div className="w-12 h-6 bg-black rounded-full p-1"><div className="w-4 h-4 bg-white rounded-full translate-x-6"/></div>
                         </div>
                      </div>
                      
                      <button onClick={() => setShowSettings(false)} className="w-full py-5 bg-black text-white rounded-3xl font-black text-sm mt-12 hover:bg-gray-800 transition-all shadow-xl active:scale-95">Save Global Settings</button>
                   </motion.div>
                </div>
              )}
           </AnimatePresence>
        </div>
      </div>
    );
  };

  return view === 'LIST' ? (
    <div className="max-w-7xl mx-auto pb-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight italic">Campaigns</h1>
          <p className="text-gray-500 mt-1 font-medium">Scale your follow-ups across every channel.</p>
        </div>
        <button onClick={() => handleEdit({ id: Date.now(), name: 'New Outreach Flow', status: 'Draft', stats: { enrolled: 0, opened: '0%', replied: '0%', clicked: '0%' }, steps: [] })} className="bg-black text-white px-8 py-4 rounded-[1.5rem] text-sm font-black hover:bg-gray-800 transition-all shadow-xl flex items-center gap-2 active:scale-95 justify-center w-full md:w-auto">
          <Plus size={20} /> Create Flow
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sequences.map(seq => (
          <div key={seq.id} onClick={() => handleEdit(seq)} className="bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:border-black transition-all cursor-pointer group relative overflow-hidden">
             <div className="flex justify-between items-start mb-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${seq.status === 'Active' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                   {seq.status === 'Active' ? <Play size={24} fill="currentColor"/> : <Pause size={24} fill="currentColor"/>}
                </div>
                <div className="flex gap-2">
                   <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-300 hover:text-black"><Copy size={16}/></button>
                   <button className="p-2 hover:bg-red-50 text-red-400"><Trash2 size={16}/></button>
                </div>
             </div>
             <h3 className="font-black text-2xl mb-2 text-gray-900 italic tracking-tight">{seq.name}</h3>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-10">{seq.steps.length} Touchpoints</p>
             <div className="flex justify-between border-t border-gray-100 pt-8 gap-4">
                <div className="flex-1">
                   <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Replies</p>
                   <p className="font-black text-lg text-gray-900 leading-tight">{seq.stats.replied}</p>
                </div>
                <div className="flex-1">
                   <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Open</p>
                   <p className="font-black text-lg text-gray-900 leading-tight">{seq.stats.opened}</p>
                </div>
                <div className="flex-1">
                   <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Active</p>
                   <p className="font-black text-lg text-gray-900 leading-tight">{seq.stats.enrolled}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  ) : <SequenceEditor />;
};

export default OutreachPage;
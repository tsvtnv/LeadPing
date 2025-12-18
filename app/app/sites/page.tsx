import React, { useState } from 'react';
import { motion, AnimatePresence, Reorder, useDragControls } from 'framer-motion';
import { 
  Plus, Layout, Globe, ChevronLeft, MoreHorizontal, 
  ExternalLink, Trash2, Edit3, Image as ImageIcon, 
  Type, AlignLeft, MousePointerClick, Save, Smartphone, 
  Monitor, Eye, CheckCircle2, GripVertical, X,
  Tablet, Palette, CreditCard, MessageSquare, Menu,
  Move, ArrowUp, Link as LinkIcon
} from 'lucide-react';

// --- TYPES ---

type BlockType = 'HERO' | 'TEXT' | 'IMAGE' | 'FORM' | 'FEATURES' | 'TESTIMONIALS' | 'PRICING' | 'FOOTER';

interface BlockStyle {
  backgroundColor: string; // tailwind class
  textColor: 'text-gray-900' | 'text-white' | 'text-blue-600';
  textAlign: 'text-left' | 'text-center' | 'text-right';
  padding: 'py-8' | 'py-16' | 'py-24';
}

interface SiteBlock {
  id: string;
  type: BlockType;
  content: any;
  style: BlockStyle;
}

interface Site {
  id: number;
  name: string;
  subdomain: string;
  status: 'Published' | 'Draft';
  views: number;
  conversions: number;
  blocks: SiteBlock[];
  thumbnail?: string;
}

// --- MOCK DATA ---

const DEFAULT_STYLE: BlockStyle = {
  backgroundColor: 'bg-white',
  textColor: 'text-gray-900',
  textAlign: 'text-left',
  padding: 'py-16'
};

const INITIAL_SITES: Site[] = [
  {
    id: 1,
    name: 'Main Landing Page',
    subdomain: 'get-quote',
    status: 'Published',
    views: 1240,
    conversions: 85,
    thumbnail: 'bg-gradient-to-br from-blue-600 to-blue-800',
    blocks: [
      { 
        id: 'b1', 
        type: 'HERO', 
        style: { ...DEFAULT_STYLE, textAlign: 'text-center', backgroundColor: 'bg-gray-50' },
        content: { 
          title: 'Emergency Plumbing Services', 
          subtitle: 'Available 24/7 in Greater London. 30 min response time.', 
          cta: 'Call Now' 
        } 
      },
      {
        id: 'b2',
        type: 'FEATURES',
        style: { ...DEFAULT_STYLE, backgroundColor: 'bg-white' },
        content: {
          items: [
            { title: 'Rapid Response', desc: 'Our average arrival time is 45 minutes.' },
            { title: 'Fixed Pricing', desc: 'No hidden fees or hourly rate surprises.' },
            { title: 'Guaranteed Work', desc: '12-month guarantee on all repairs.' }
          ]
        }
      },
      {
        id: 'b3',
        type: 'FORM',
        style: { ...DEFAULT_STYLE, backgroundColor: 'bg-blue-50' },
        content: {
          title: 'Request a Free Quote',
          fields: ['Name', 'Phone', 'Issue Description'],
          buttonText: 'Get Quote'
        }
      },
      {
        id: 'b4',
        type: 'FOOTER',
        style: { ...DEFAULT_STYLE, backgroundColor: 'bg-black', textColor: 'text-white', padding: 'py-8' },
        content: {
          copyright: '© 2024 Plumbing Co. All rights reserved.',
          links: ['Privacy Policy', 'Terms of Service', 'Contact']
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Digital Agency Portfolio',
    subdomain: 'nebula-design',
    status: 'Published',
    views: 8540,
    conversions: 145,
    thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-600',
    blocks: [
       {
         id: 'b1',
         type: 'HERO',
         style: { ...DEFAULT_STYLE, textAlign: 'text-left', backgroundColor: 'bg-black', textColor: 'text-white' },
         content: {
           title: 'We Build Digital Experiences',
           subtitle: 'Nebula is a creative agency focused on UI/UX design and modern web development.',
           cta: 'View Our Work'
         }
       }
    ]
  },
  {
    id: 3,
    name: 'Webinar Registration',
    subdomain: 'marketing-masterclass',
    status: 'Draft',
    views: 0,
    conversions: 0,
    thumbnail: 'bg-gray-200',
    blocks: []
  }
];

// --- COMPONENT: CANVAS BLOCK (Individual Draggable Item) ---

const CanvasBlock: React.FC<{ 
  block: SiteBlock, 
  isSelected: boolean, 
  onSelect: () => void, 
  onDelete: () => void 
}> = ({ 
  block, 
  isSelected, 
  onSelect, 
  onDelete 
}) => {
  const controls = useDragControls();
  const { style, content } = block;
  
  const containerClasses = `${style.backgroundColor} ${style.padding}`;
  const textClasses = `${style.textColor} ${style.textAlign}`;

  return (
    <Reorder.Item 
      value={block}
      dragListener={false} // Important: Disable default drag to use handle
      dragControls={controls}
      className="relative group mb-4" // Added margin bottom for separation
    >
      <div 
        onClick={(e) => { e.stopPropagation(); onSelect(); }}
        className={`relative transition-all border-2 rounded-sm ${isSelected ? 'border-blue-500 z-10 shadow-xl' : 'border-transparent hover:border-blue-300'}`}
      >
          {/* Block Content Render */}
          <div className={`${containerClasses} ${textClasses} transition-all duration-300 pointer-events-none`}>
            {/* HERO */}
            {block.type === 'HERO' && (
              <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{content.title}</h1>
                <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">{content.subtitle}</p>
                <button className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg ${style.backgroundColor === 'bg-black' ? 'bg-white text-black' : 'bg-black text-white'}`}>{content.cta}</button>
              </div>
            )}

            {/* TEXT */}
            {block.type === 'TEXT' && (
              <div className="max-w-2xl mx-auto px-6 leading-relaxed whitespace-pre-wrap text-lg">
                {content.text}
              </div>
            )}

            {/* IMAGE */}
            {block.type === 'IMAGE' && (
              <div className="max-w-5xl mx-auto px-6">
                  <img src={content.src} alt="Block" className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[600px]" />
                  {content.caption && <p className="text-sm opacity-60 mt-2 text-center">{content.caption}</p>}
              </div>
            )}

            {/* FORM */}
            {block.type === 'FORM' && (
              <div className="max-w-md mx-auto px-6">
                 <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl text-left">
                    <h3 className="font-bold text-2xl mb-6 text-gray-900">{content.title}</h3>
                    <div className="space-y-4">
                      {(content.fields || []).map((f: string, i: number) => (
                        <div key={i}>
                           <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">{f}</label>
                           <div className="h-11 bg-gray-50 border border-gray-200 rounded-lg w-full px-3" />
                        </div>
                      ))}
                      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-2 shadow-md">{content.buttonText}</button>
                    </div>
                 </div>
              </div>
            )}

            {/* FEATURES */}
            {block.type === 'FEATURES' && (
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {(content.items || []).map((item: any, i: number) => (
                    <div key={i} className={`p-6 rounded-xl backdrop-blur-sm ${style.backgroundColor === 'bg-black' ? 'bg-white/10 border border-white/10' : 'bg-white/50 border border-black/5'}`}>
                       <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                       <p className="text-sm opacity-70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TESTIMONIALS */}
            {block.type === 'TESTIMONIALS' && (
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(content.items || []).map((item: any, i: number) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left text-gray-900">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                                </div>
                                <p className="text-gray-700 italic mb-4 text-lg">"{item.text}"</p>
                                <p className="font-bold text-gray-900">— {item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* PRICING */}
            {block.type === 'PRICING' && (
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {(content.items || []).map((item: any, i: number) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden text-gray-900">
                                <h3 className="text-gray-500 font-bold uppercase tracking-wide text-sm mb-2">{item.name}</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-6">{item.price}</div>
                                <ul className="space-y-3 mb-8 text-left max-w-[200px] mx-auto">
                                    {(item.features || []).map((f: string, j: number) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl">Choose {item.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FOOTER */}
            {block.type === 'FOOTER' && (
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="opacity-60 text-sm">{content.copyright}</p>
                    <div className="flex gap-6 opacity-60 text-sm">
                        {(content.links || []).map((l: string, i: number) => (
                            <span key={i} className="underline">{l}</span>
                        ))}
                    </div>
                </div>
            )}
          </div>

          {/* Controls Overlay - Visible on Selection OR Hover */}
          <div className={`absolute top-2 right-2 flex gap-1 z-50 transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <div 
              onPointerDown={(e) => controls.start(e)}
              className="bg-black text-white text-xs px-2 py-1.5 rounded-md font-bold uppercase tracking-wider flex items-center gap-2 cursor-grab active:cursor-grabbing hover:bg-gray-800 shadow-lg"
            >
               <GripVertical size={14} />
               {block.type}
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              className="bg-white text-red-500 border border-red-100 p-1.5 rounded-md hover:bg-red-50 transition-colors shadow-lg"
            >
               <Trash2 size={14} />
            </button>
          </div>
      </div>
    </Reorder.Item>
  );
};

// --- COMPONENT: LIVE SITE PREVIEW (FULL SCREEN) ---

const LiveSiteView: React.FC<{ site: Site, onClose: () => void }> = ({ site, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      {/* Fake Browser Header */}
      <div className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
         </div>
         <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-500 flex items-center gap-2 w-96 justify-center shadow-sm">
            <Globe size={12} />
            {site.subdomain}.leadping.site
         </div>
         <button onClick={onClose} className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-800">
            Close Preview
         </button>
      </div>

      {/* Rendered Site Content */}
      <div className="min-h-screen">
         {site.blocks.map((block) => {
            const containerClasses = `${block.style.backgroundColor} ${block.style.padding}`;
            const textClasses = `${block.style.textColor} ${block.style.textAlign}`;
            const { content } = block;

            return (
              <div key={block.id} className={`${containerClasses} ${textClasses}`}>
                {block.type === 'HERO' && (
                  <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{content.title}</h1>
                    <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">{content.subtitle}</p>
                    <button className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg ${block.style.backgroundColor === 'bg-black' ? 'bg-white text-black' : 'bg-black text-white'}`}>{content.cta}</button>
                  </div>
                )}
                {block.type === 'TEXT' && (
                  <div className="max-w-2xl mx-auto px-6 leading-relaxed whitespace-pre-wrap text-lg">
                    {content.text}
                  </div>
                )}
                {block.type === 'IMAGE' && (
                  <div className="max-w-5xl mx-auto px-6">
                      <img src={content.src} alt="Block" className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[800px]" />
                      {content.caption && <p className="text-sm opacity-60 mt-2 text-center">{content.caption}</p>}
                  </div>
                )}
                {block.type === 'FORM' && (
                  <div className="max-w-md mx-auto px-6">
                     <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl text-left">
                        <h3 className="font-bold text-2xl mb-6 text-gray-900">{content.title}</h3>
                        <div className="space-y-4">
                          {(content.fields || []).map((f: string, i: number) => (
                            <div key={i}>
                               <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">{f}</label>
                               <input className="h-11 bg-gray-50 border border-gray-200 rounded-lg w-full px-3 text-black" placeholder={`Your ${f}`} />
                            </div>
                          ))}
                          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-2 shadow-md hover:bg-blue-700">{content.buttonText}</button>
                        </div>
                     </div>
                  </div>
                )}
                {block.type === 'FEATURES' && (
                  <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {(content.items || []).map((item: any, i: number) => (
                        <div key={i} className={`p-6 rounded-xl backdrop-blur-sm ${block.style.backgroundColor === 'bg-black' ? 'bg-white/10 border border-white/10' : 'bg-white/50 border border-black/5'}`}>
                           <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                           <p className="text-sm opacity-70">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {block.type === 'TESTIMONIALS' && (
                  <div className="max-w-6xl mx-auto px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {(content.items || []).map((item: any, i: number) => (
                              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left text-gray-900">
                                  <div className="flex gap-1 text-yellow-400 mb-4">
                                      {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                                  </div>
                                  <p className="text-gray-700 italic mb-4 text-lg">"{item.text}"</p>
                                  <p className="font-bold text-gray-900">— {item.name}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                )}
                {block.type === 'PRICING' && (
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {(content.items || []).map((item: any, i: number) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden text-gray-900">
                                    <h3 className="text-gray-500 font-bold uppercase tracking-wide text-sm mb-2">{item.name}</h3>
                                    <div className="text-4xl font-bold text-gray-900 mb-6">{item.price}</div>
                                    <ul className="space-y-3 mb-8 text-left max-w-[200px] mx-auto">
                                        {(item.features || []).map((f: string, j: number) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-colors">Choose {item.name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {block.type === 'FOOTER' && (
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="opacity-60 text-sm">{content.copyright}</p>
                        <div className="flex gap-6 opacity-60 text-sm">
                            {(content.links || []).map((l: string, i: number) => (
                                <span key={i} className="cursor-pointer hover:underline">{l}</span>
                            ))}
                        </div>
                    </div>
                )}
              </div>
            );
         })}
      </div>
    </div>
  );
};

// --- COMPONENT: SITE BUILDER ---

const SiteBuilder: React.FC<{ site: Site; onSave: (site: Site) => void; onExit: () => void }> = ({ site, onSave, onExit }) => {
  const [blocks, setBlocks] = useState<SiteBlock[]>(site.blocks);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [siteName, setSiteName] = useState(site.name);
  const [subdomain, setSubdomain] = useState(site.subdomain);
  const [previewMode, setPreviewMode] = useState<'DESKTOP' | 'TABLET' | 'MOBILE'>('DESKTOP');
  const [rightPanelTab, setRightPanelTab] = useState<'CONTENT' | 'STYLE'>('CONTENT');
  
  const selectedBlock = blocks.find(b => b.id === selectedBlockId);

  const addBlock = (type: BlockType) => {
    const newBlock: SiteBlock = {
      id: `blk_${Date.now()}`,
      type,
      style: DEFAULT_STYLE,
      content: getDefaultContent(type)
    };
    // Insert after selection or at end
    if (selectedBlockId) {
       const index = blocks.findIndex(b => b.id === selectedBlockId);
       const newBlocks = [...blocks];
       newBlocks.splice(index + 1, 0, newBlock);
       setBlocks(newBlocks);
    } else {
       setBlocks([...blocks, newBlock]);
    }
    setSelectedBlockId(newBlock.id);
  };

  const updateBlockContent = (id: string, newContent: any) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: { ...b.content, ...newContent } } : b));
  };

  const updateBlockStyle = (id: string, newStyle: Partial<BlockStyle>) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, style: { ...b.style, ...newStyle } } : b));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    if (selectedBlockId === id) setSelectedBlockId(null);
  };

  const getDefaultContent = (type: BlockType) => {
    switch (type) {
      case 'HERO': return { title: 'Your Headline Here', subtitle: 'Explain your value proposition clearly.', cta: 'Get Started' };
      case 'TEXT': return { text: 'Write your main content here. Use this section to elaborate on your services.' };
      case 'IMAGE': return { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', caption: '' };
      case 'FORM': return { title: 'Contact Us', fields: ['Name', 'Email'], buttonText: 'Submit' };
      case 'FEATURES': return { items: [{ title: 'Feature 1', desc: 'Description' }, { title: 'Feature 2', desc: 'Description' }, { title: 'Feature 3', desc: 'Description' }] };
      case 'TESTIMONIALS': return { items: [{ name: 'John Doe', text: 'Great service! Highly recommended.' }, { name: 'Jane Smith', text: 'Fast and reliable.' }] };
      case 'PRICING': return { items: [{ name: 'Basic', price: '$49', features: ['Feature A', 'Feature B'] }, { name: 'Pro', price: '$99', features: ['Everything in Basic', 'Feature C'] }] };
      case 'FOOTER': return { copyright: `© ${new Date().getFullYear()} Company Name`, links: ['Privacy', 'Terms'] };
      default: return {};
    }
  };

  const handleSave = () => {
    onSave({ ...site, name: siteName, subdomain, blocks });
  };

  // Helper to render dynamic list editors in sidebar
  const renderArrayEditor = (items: any[], fieldName: string, fields: {key: string, label: string}[]) => {
    // Fix: Changed val type to string | string[] to support both single values and feature arrays
    const handleItemChange = (idx: number, key: string, val: string | string[]) => {
      const newItems = [...items];
      newItems[idx] = { ...newItems[idx], [key]: val };
      if (selectedBlockId) updateBlockContent(selectedBlockId, { [fieldName]: newItems });
    };

    const handleDeleteItem = (idx: number) => {
      const newItems = items.filter((_, i) => i !== idx);
      if (selectedBlockId) updateBlockContent(selectedBlockId, { [fieldName]: newItems });
    };

    const handleAddItem = () => {
      const newItem = fields.reduce((acc, f) => ({...acc, [f.key]: 'New Item'}), {});
      if (selectedBlockId) updateBlockContent(selectedBlockId, { [fieldName]: [...items, newItem] });
    };

    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-200 relative group">
             <button 
               onClick={() => handleDeleteItem(idx)}
               className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
             >
               <Trash2 size={14} />
             </button>
             <div className="space-y-3 pr-6">
               <div className="text-[10px] font-bold text-gray-400 uppercase">Item {idx + 1}</div>
               {fields.map(f => (
                 <div key={f.key}>
                   {fields.length > 1 && <label className="block text-[10px] font-bold text-gray-500 mb-1">{f.label}</label>}
                   {f.key === 'desc' || f.key === 'text' ? (
                     <textarea 
                        className="w-full bg-white text-black border border-gray-300 rounded p-1.5 text-xs focus:ring-1 focus:ring-black outline-none"
                        rows={2}
                        value={item[f.key] || ''}
                        onChange={(e) => handleItemChange(idx, f.key, e.target.value)}
                        placeholder={f.label}
                     />
                   ) : (
                     <input 
                       className="w-full bg-white text-black border border-gray-300 rounded p-1.5 text-xs focus:ring-1 focus:ring-black outline-none" 
                       value={item[f.key] || ''}
                       onChange={(e) => handleItemChange(idx, f.key, e.target.value)}
                       placeholder={f.label}
                     />
                   )}
                 </div>
               ))}
               {/* Handle array within item (like pricing features) */}
               {item.features && Array.isArray(item.features) && (
                 <div>
                   <label className="block text-[10px] font-bold text-gray-500 mb-1">Features (comma separated)</label>
                   <input 
                      className="w-full bg-white text-black border border-gray-300 rounded p-1.5 text-xs focus:ring-1 focus:ring-black outline-none" 
                      value={item.features.join(', ')}
                      onChange={(e) => handleItemChange(idx, 'features', e.target.value.split(',').map((s: string) => s.trim()))}
                   />
                 </div>
               )}
             </div>
          </div>
        ))}
        <button 
          onClick={handleAddItem}
          className="w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-xs font-bold text-gray-400 hover:text-black hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={14} /> Add Item
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col h-screen">
      
      {/* Top Bar */}
      <div className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-6 flex-shrink-0 z-50">
         <div className="flex items-center gap-4">
            <button onClick={onExit} className="text-gray-500 hover:text-black hover:bg-gray-100 p-2 rounded-full transition-colors">
               <ChevronLeft size={24} />
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <div>
               <input 
                 className="font-bold text-gray-900 bg-transparent outline-none focus:underline"
                 value={siteName}
                 onChange={(e) => setSiteName(e.target.value)}
               />
               <div className="text-xs text-gray-500 flex items-center gap-1">
                 {subdomain}.leadping.site <Edit3 size={10} className="cursor-pointer"/>
               </div>
            </div>
         </div>

         <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
            <button 
              onClick={() => setPreviewMode('DESKTOP')}
              className={`p-1.5 rounded ${previewMode === 'DESKTOP' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
              title="Desktop View"
            >
              <Monitor size={18} />
            </button>
            <button 
              onClick={() => setPreviewMode('TABLET')}
              className={`p-1.5 rounded ${previewMode === 'TABLET' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
              title="Tablet View"
            >
              <Tablet size={18} />
            </button>
            <button 
              onClick={() => setPreviewMode('MOBILE')}
              className={`p-1.5 rounded ${previewMode === 'MOBILE' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
              title="Mobile View"
            >
              <Smartphone size={18} />
            </button>
         </div>

         <button 
           onClick={handleSave}
           className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 flex items-center gap-2 shadow-sm hover:shadow transition-all"
         >
            <Save size={16} /> Publish
         </button>
      </div>

      {/* Main Workspace */}
      <div className="flex-grow flex overflow-hidden">
        
        {/* Left Sidebar: Components */}
        <div className="w-72 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col z-40">
           <div className="p-4 border-b border-gray-100">
             <h3 className="font-bold text-sm text-gray-900">Add Block</h3>
             <p className="text-xs text-gray-500">Drag items below to add to canvas</p>
           </div>
           
           <div className="flex-grow overflow-y-auto p-4 space-y-6">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Layout & Media</span>
                <div className="grid grid-cols-2 gap-3">
                   <button onClick={() => addBlock('HERO')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <Layout size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Hero</span>
                   </button>
                   <button onClick={() => addBlock('TEXT')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <AlignLeft size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Text</span>
                   </button>
                   <button onClick={() => addBlock('IMAGE')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <ImageIcon size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Image</span>
                   </button>
                   <button onClick={() => addBlock('FOOTER')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <Menu size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Footer</span>
                   </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Commerce & Leads</span>
                <div className="grid grid-cols-2 gap-3">
                   <button onClick={() => addBlock('FORM')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <MousePointerClick size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Form</span>
                   </button>
                   <button onClick={() => addBlock('PRICING')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <CreditCard size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Pricing</span>
                   </button>
                   <button onClick={() => addBlock('FEATURES')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <Layout size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Grid</span>
                   </button>
                   <button onClick={() => addBlock('TESTIMONIALS')} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                      <MessageSquare size={20} className="text-gray-500 group-hover:text-blue-600"/>
                      <span className="text-xs font-medium">Reviews</span>
                   </button>
                </div>
              </div>
           </div>
        </div>

        {/* Center: Canvas */}
        <div className="flex-grow bg-gray-200 overflow-y-auto p-8 flex justify-center perspective-1000" onClick={() => setSelectedBlockId(null)}>
           <motion.div 
             layout
             className={`bg-white shadow-2xl transition-all duration-300 h-fit origin-top flex-shrink-0
               ${previewMode === 'MOBILE' ? 'w-[375px] rounded-[3rem] border-[12px] border-gray-800 my-4 shadow-xl overflow-hidden min-h-[667px]' : 
                 previewMode === 'TABLET' ? 'w-[768px] rounded-xl border-[12px] border-gray-800 my-4 shadow-xl overflow-hidden min-h-[1024px]' : 
                 'w-full max-w-6xl rounded-none shadow-lg my-0 border-x border-dashed border-gray-300 min-h-screen'}
             `}
           >
              {blocks.length === 0 ? (
                <div className="h-[600px] flex flex-col items-center justify-center text-gray-400 p-12 text-center bg-gray-50/50">
                   <Layout size={48} className="mb-4 text-gray-200" />
                   <h3 className="text-lg font-bold text-gray-300">Start Building</h3>
                   <p className="max-w-xs mx-auto mt-2 text-sm">Select a block from the left sidebar to add it to your page.</p>
                </div>
              ) : (
                <Reorder.Group axis="y" values={blocks} onReorder={setBlocks}>
                   {blocks.map((block) => (
                     <CanvasBlock 
                       key={block.id} 
                       block={block} 
                       isSelected={selectedBlockId === block.id}
                       onSelect={() => setSelectedBlockId(block.id)}
                       onDelete={() => deleteBlock(block.id)}
                     />
                   ))}
                </Reorder.Group>
              )}
           </motion.div>
        </div>

        {/* Right Sidebar: Properties */}
        <div className="w-80 bg-white border-l border-gray-200 flex-shrink-0 flex flex-col z-40 shadow-lg">
           {selectedBlock ? (
             <>
               <div className="border-b border-gray-200">
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <span className="font-bold text-sm text-gray-900 uppercase tracking-wide flex items-center gap-2">
                       <Edit3 size={14}/> Edit {selectedBlock.type}
                    </span>
                    <button onClick={() => setSelectedBlockId(null)}><X size={16} className="text-gray-400 hover:text-black"/></button>
                  </div>
                  <div className="flex">
                     <button 
                       onClick={() => setRightPanelTab('CONTENT')}
                       className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors ${rightPanelTab === 'CONTENT' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                     >
                        CONTENT
                     </button>
                     <button 
                       onClick={() => setRightPanelTab('STYLE')}
                       className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors ${rightPanelTab === 'STYLE' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                     >
                        STYLE
                     </button>
                  </div>
               </div>

               <div className="p-4 space-y-6 overflow-y-auto flex-grow pb-20">
                  {rightPanelTab === 'CONTENT' ? (
                    /* DYNAMIC CONTENT FIELDS */
                    <>
                      {selectedBlock.type === 'HERO' && (
                        <>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1.5">Headline</label>
                            <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.title} onChange={(e) => updateBlockContent(selectedBlock.id, {title: e.target.value})} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1.5">Subtitle</label>
                            <textarea className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" rows={3} value={selectedBlock.content.subtitle} onChange={(e) => updateBlockContent(selectedBlock.id, {subtitle: e.target.value})} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1.5">Button Label</label>
                            <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.cta} onChange={(e) => updateBlockContent(selectedBlock.id, {cta: e.target.value})} />
                          </div>
                        </>
                      )}
                      {selectedBlock.type === 'TEXT' && (
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5">Body Text</label>
                          <textarea className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none font-mono" rows={12} value={selectedBlock.content.text} onChange={(e) => updateBlockContent(selectedBlock.id, {text: e.target.value})} />
                        </div>
                      )}
                      {selectedBlock.type === 'IMAGE' && (
                        <>
                           <div>
                              <label className="block text-xs font-bold text-gray-500 mb-1.5">Image URL</label>
                              <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.src} onChange={(e) => updateBlockContent(selectedBlock.id, {src: e.target.value})} />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-500 mb-1.5">Caption</label>
                              <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.caption} onChange={(e) => updateBlockContent(selectedBlock.id, {caption: e.target.value})} />
                           </div>
                        </>
                      )}
                      {selectedBlock.type === 'FORM' && (
                         <>
                            <div>
                               <label className="block text-xs font-bold text-gray-500 mb-1.5">Form Title</label>
                               <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.title} onChange={(e) => updateBlockContent(selectedBlock.id, {title: e.target.value})} />
                            </div>
                            <div>
                               <label className="block text-xs font-bold text-gray-500 mb-1.5">Button Text</label>
                               <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.buttonText} onChange={(e) => updateBlockContent(selectedBlock.id, {buttonText: e.target.value})} />
                            </div>
                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700">
                               Fields are automatically connected to your LeadPing Inbox.
                            </div>
                         </>
                      )}
                      {selectedBlock.type === 'FEATURES' && (
                        renderArrayEditor(selectedBlock.content.items, 'items', [{key: 'title', label: 'Title'}, {key: 'desc', label: 'Description'}])
                      )}
                      {selectedBlock.type === 'TESTIMONIALS' && (
                        renderArrayEditor(selectedBlock.content.items, 'items', [{key: 'name', label: 'Name'}, {key: 'text', label: 'Review'}])
                      )}
                      {selectedBlock.type === 'PRICING' && (
                        renderArrayEditor(selectedBlock.content.items, 'items', [{key: 'name', label: 'Plan Name'}, {key: 'price', label: 'Price'}])
                      )}
                      {selectedBlock.type === 'FOOTER' && (
                         <>
                           <div>
                              <label className="block text-xs font-bold text-gray-500 mb-1.5">Copyright Text</label>
                              <input className="w-full bg-white text-black border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" value={selectedBlock.content.copyright} onChange={(e) => updateBlockContent(selectedBlock.id, {copyright: e.target.value})} />
                           </div>
                         </>
                      )}
                    </>
                  ) : (
                    /* STYLE CONTROLS */
                    <div className="space-y-6">
                        <div>
                           <label className="block text-xs font-bold text-gray-500 mb-2 flex items-center gap-2"><Palette size={14}/> Background</label>
                           <div className="grid grid-cols-5 gap-2">
                              {['bg-white', 'bg-gray-50', 'bg-blue-50', 'bg-black', 'bg-blue-600'].map(c => (
                                 <button 
                                   key={c}
                                   onClick={() => updateBlockStyle(selectedBlock.id, { backgroundColor: c })}
                                   className={`w-8 h-8 rounded-full border border-gray-200 shadow-sm ${c} ${selectedBlock.style.backgroundColor === c ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                                 />
                              ))}
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs font-bold text-gray-500 mb-2 flex items-center gap-2"><Type size={14}/> Text Color</label>
                           <div className="flex gap-2">
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textColor: 'text-gray-900' })} className={`px-3 py-1 text-xs border rounded ${selectedBlock.style.textColor === 'text-gray-900' ? 'bg-black text-white' : 'bg-white text-black border-gray-200'}`}>Dark</button>
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textColor: 'text-white' })} className={`px-3 py-1 text-xs border rounded ${selectedBlock.style.textColor === 'text-white' ? 'bg-black text-white' : 'bg-white text-black border-gray-200'}`}>Light</button>
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textColor: 'text-blue-600' })} className={`px-3 py-1 text-xs border rounded ${selectedBlock.style.textColor === 'text-blue-600' ? 'bg-black text-white' : 'bg-white text-black border-gray-200'}`}>Blue</button>
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs font-bold text-gray-500 mb-2 flex items-center gap-2"><AlignLeft size={14}/> Alignment</label>
                           <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textAlign: 'text-left' })} className={`flex-1 py-1 rounded text-xs font-medium ${selectedBlock.style.textAlign === 'text-left' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}>Left</button>
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textAlign: 'text-center' })} className={`flex-1 py-1 rounded text-xs font-medium ${selectedBlock.style.textAlign === 'text-center' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}>Center</button>
                              <button onClick={() => updateBlockStyle(selectedBlock.id, { textAlign: 'text-right' })} className={`flex-1 py-1 rounded text-xs font-medium ${selectedBlock.style.textAlign === 'text-right' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}>Right</button>
                           </div>
                        </div>

                        <div>
                           <label className="block text-xs font-bold text-gray-500 mb-2 flex items-center gap-2"><ArrowUp size={14}/> Vertical Padding</label>
                           <div className="space-y-2">
                             <input 
                               type="range" 
                               min="0" max="2" 
                               step="1"
                               value={selectedBlock.style.padding === 'py-8' ? 0 : selectedBlock.style.padding === 'py-16' ? 1 : 2}
                               onChange={(e) => {
                                 const val = parseInt(e.target.value);
                                 updateBlockStyle(selectedBlock.id, { padding: val === 0 ? 'py-8' : val === 1 ? 'py-16' : 'py-24' });
                               }}
                               className="w-full accent-black"
                             />
                             <div className="flex justify-between text-[10px] text-gray-400">
                                <span>Compact</span>
                                <span>Normal</span>
                                <span>Spacious</span>
                             </div>
                           </div>
                        </div>
                    </div>
                  )}
               </div>
             </>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 text-sm p-8 text-center bg-gray-50/50">
                <MousePointerClick size={32} className="mb-4 opacity-20" />
                <p>Select an element on the canvas to edit its properties.</p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

// --- COMPONENT: SITES LIST (DASHBOARD) ---

const SitesList: React.FC<{ sites: Site[]; onEdit: (id: number) => void; onView: (site: Site) => void }> = ({ sites, onEdit, onView }) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sites & Landing Pages</h1>
          <p className="text-gray-500 mt-1">Build simple, high-converting pages to capture leads.</p>
        </div>
        <button 
           onClick={() => onEdit(0)} // 0 indicates new
           className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-800 flex items-center gap-2 shadow-sm"
        >
          <Plus size={18} /> Create New Site
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sites.map((site) => (
          <div key={site.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
             {/* Thumbnail */}
             <div className={`h-40 w-full ${site.thumbnail} flex items-center justify-center relative`}>
                <div className="bg-white/90 rounded-lg px-3 py-1 text-xs font-bold shadow-sm flex items-center gap-1">
                   <Globe size={12} /> {site.subdomain}.leadping.site
                </div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                   <button onClick={() => onEdit(site.id)} className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-gray-100">
                      <Edit3 size={16} /> Edit
                   </button>
                   <button onClick={() => onView(site)} className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 backdrop-blur">
                      <ExternalLink size={16} />
                   </button>
                </div>
             </div>
             
             {/* Details */}
             <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-lg text-gray-900">{site.name}</h3>
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${site.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                     {site.status}
                   </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Views</p>
                      <p className="font-mono font-medium">{site.views.toLocaleString()}</p>
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Leads</p>
                      <p className="font-mono font-medium">{site.conversions.toLocaleString()}</p>
                   </div>
                </div>
             </div>
          </div>
        ))}

        {/* Empty State / Create New Card */}
        <button onClick={() => onEdit(0)} className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center h-full min-h-[300px] hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-400 hover:text-gray-600">
           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus size={32} />
           </div>
           <span className="font-bold text-lg">Create New Site</span>
        </button>
      </div>
    </div>
  );
};

// --- MAIN PAGE CONTROLLER ---

const SitesPage: React.FC = () => {
  const [view, setView] = useState<'LIST' | 'BUILDER'>('LIST');
  const [sites, setSites] = useState<Site[]>(INITIAL_SITES);
  const [currentSite, setCurrentSite] = useState<Site | null>(null);
  const [previewSite, setPreviewSite] = useState<Site | null>(null);

  const handleEdit = (id: number) => {
    if (id === 0) {
      // Create New
      const newSite: Site = {
        id: Date.now(),
        name: 'Untitled Site',
        subdomain: `site-${Date.now().toString().slice(-4)}`,
        status: 'Draft',
        views: 0,
        conversions: 0,
        blocks: [],
        thumbnail: 'bg-gray-100'
      };
      setCurrentSite(newSite);
    } else {
      const site = sites.find(s => s.id === id);
      if (site) setCurrentSite(site);
    }
    setView('BUILDER');
  };

  const handleSave = (updatedSite: Site) => {
    // Check if exists
    const exists = sites.find(s => s.id === updatedSite.id);
    if (exists) {
      setSites(sites.map(s => s.id === updatedSite.id ? updatedSite : s));
    } else {
      setSites([...sites, updatedSite]);
    }
    setView('LIST');
    setCurrentSite(null);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {view === 'LIST' ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <SitesList 
              sites={sites} 
              onEdit={handleEdit} 
              onView={(site) => setPreviewSite(site)}
            />
          </motion.div>
        ) : (
          currentSite && (
            <motion.div 
               key="builder"
               className="fixed inset-0 z-50 bg-white"
               initial={{ opacity: 0, scale: 0.95 }} 
               animate={{ opacity: 1, scale: 1 }}
            >
               <SiteBuilder 
                 site={currentSite} 
                 onSave={handleSave} 
                 onExit={() => setView('LIST')} 
               />
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Full Screen Live Preview Overlay */}
      {previewSite && (
        <LiveSiteView site={previewSite} onClose={() => setPreviewSite(null)} />
      )}
    </>
  );
};

export default SitesPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, Clock, Sparkles, 
  MessageSquare, ShieldCheck, ChevronRight,
  TrendingUp, BookOpen, User, Calendar
} from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: "the-architecture-of-a-30s-reply",
      title: "The 30-Second Rule: Why Most Leads Go Cold in 5 Minutes.",
      excerpt: "The science of speed-to-lead and why traditional response times are killing your conversion rates.",
      category: "LEADPING",
      author: "LeadPing Intelligence",
      date: "Dec 12, 2025",
      readTime: "4 min read"
    },
    {
      id: "deliverability-as-a-sovereign-asset",
      title: "Deliverability as a Sovereign Asset.",
      excerpt: "How to protect your domain reputation while scaling omnichannel inbound response.",
      category: "TRUST",
      author: "Infrastructure Team",
      date: "Dec 08, 2025",
      readTime: "6 min read"
    },
    {
      id: "neural-tone-matching-brand-voice",
      title: "Neural Tone Matching: Writing Like a Human, Only Faster.",
      excerpt: "Deep dive into our version 2.0 brand voice engine and how it crafts precision replies.",
      category: "ENGINEERING",
      author: "LeadPing Intelligence",
      date: "Nov 30, 2025",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- CINEMATIC HERO --- */}
      <section className="relative pt-40 pb-52 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-black/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-2.5 rounded-full mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
               <BookOpen size={14} className="text-blue-500" />
               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                 The Neural Log: <span className="text-black italic">Information Flow</span>
               </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[1.05] mb-12 italic px-2"
            >
              Intelligence <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-100 pr-4">for the Elite.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Explore the logic behind the loop. Deep insights into sales LeadPing, AI engineering, and the future of lead response.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- FEATURED ARTICLE --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <Link to="/blog/the-architecture-of-a-30s-reply">
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative bg-black rounded-[4rem] overflow-hidden group cursor-pointer"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                   <div className="p-12 lg:p-24 flex flex-col justify-center">
                      <div className="bg-white/10 w-fit px-4 py-1 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Featured Insight</div>
                      <h2 className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter leading-tight mb-8">
                         The architecture <br/> of a 30s reply.
                      </h2>
                      <p className="text-gray-400 text-lg lg:text-xl font-medium mb-12 leading-relaxed max-w-md">
                         Discover how we synchronized our neural engine with global inlets to achieve sub-minute response times.
                      </p>
                      <div className="flex items-center gap-6">
                         <div className="flex items-center gap-2 text-white">
                            <User size={16} className="text-blue-400" />
                            <span className="text-xs font-black uppercase tracking-widest italic">Dev Team</span>
                         </div>
                         <div className="w-px h-4 bg-white/10" />
                         <div className="text-xs font-black text-gray-500 uppercase tracking-widest">12 Min Read</div>
                      </div>
                   </div>
                   <div className="bg-gray-900 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="w-[120%] aspect-square border border-white/5 rounded-full flex items-center justify-center"
                      >
                         <div className="w-[60%] aspect-square border border-white/10 rounded-full flex items-center justify-center">
                            <Zap size={80} className="text-white opacity-20" />
                         </div>
                      </motion.div>
                   </div>
                </div>
             </motion.div>
           </Link>
        </div>
      </section>

      {/* --- ARTICLE GRID --- */}
      <section className="py-40 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-100 p-12 rounded-[3.5rem] flex flex-col justify-between hover:shadow-2xl hover:border-black transition-all group h-[550px]"
                  >
                     <div>
                        <div className="flex justify-between items-center mb-10">
                           <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{post.category}</span>
                           <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{post.date}</span>
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 italic tracking-tighter leading-tight mb-6 underline decoration-gray-100 underline-offset-8 group-hover:decoration-black transition-all">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                          {post.excerpt}
                        </p>
                     </div>
                     
                     <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Read Article</span>
                          <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 group-hover:text-black transition-all" />
                        </div>
                        <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{post.readTime}</span>
                     </div>
                  </motion.div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* --- NEWSLETTER / CTA --- */}
      <section className="bg-black py-52 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[200px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-16">
             <Sparkles size={18} className="text-blue-400 animate-pulse" />
             <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">The Intelligence Stream</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-12">
            Weekly <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-700 pr-4 leading-[1.2]">LeadPing.</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Get elite lead strategies and engine updates directly in your inbox. No fluff. Just growth.
          </p>

          <div className="max-w-md mx-auto">
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="flex-grow bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 text-white font-bold outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white/10 transition-all"
                />
                <button className="bg-white text-black px-10 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-gray-100 active:scale-95 transition-all shadow-xl">
                   Join
                </button>
             </div>
             <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.4em] mt-8 italic">Privacy first. Zero spam.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  Zap, ArrowRight, Clock, User, Calendar, 
  ChevronLeft, ChevronRight, Sparkles, Cpu, Globe, Share2,
  CheckCircle2, Quote, Activity, Target, ShieldCheck, MailCheck, Eye
} from 'lucide-react';

const BLOG_DATA: Record<string, any> = {
  "the-architecture-of-a-30s-reply": {
    title: "The 30-Second Rule: Why Most Leads Go Cold in 5 Minutes.",
    subtitle: "The science of speed-to-lead and why traditional response times are killing your conversion rates.",
    category: "LEADPING",
    date: "Dec 12, 2025",
    readTime: "12 Min Read",
    author: "LeadPing Dev Team",
    topic: "Neural Velocity",
    content: (
      <>
        <p className="text-2xl md:text-3xl text-gray-500 font-medium leading-relaxed italic mb-16">
          In high-performance sales, speed isn't a metric. It's a binary state: you are either the first to reply, or you are invisible.
        </p>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          The 5-Minute Death Window
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The data across 4 million inbound signals is undeniable: If a lead isn't contacted within <strong>5 minutes</strong>, the likelihood of qualifying that lead drops by 400%. Most businesses today take an average of 4.2 hours to respond to a website enquiry. By then, the lead has already opened four other tabs and booked a meeting with your fastest competitor.
        </p>

        <div className="bg-black rounded-[3rem] p-12 text-white my-20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
             <Zap size={300} fill="white" />
           </div>
           <h3 className="text-3xl font-black italic tracking-tight mb-8 relative z-10">The LeadPing Solution</h3>
           <p className="text-gray-400 text-lg mb-10 relative z-10 font-medium">
             We built our architecture to operate within a 30-second window. This isn't just about speed; it's about <strong>relevance</strong>. Our brain ingests the lead, researches their company, and drafts a human-grade reply before the lead has even left your landing page.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                "Zero-latency Inflow",
                "Concurrent Lead Enrichment",
                "Instant Intent Scoring",
                "Automated Elite Response"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                   <CheckCircle2 size={18} className="text-blue-400" />
                   <span className="text-sm font-black italic">{item}</span>
                </div>
              ))}
           </div>
        </div>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          Mail-Merge is Dead
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Traditional auto-responders fail because leads can spot a template a mile away. LeadPing uses a <strong>Neural Logic Layer</strong>. While our engine is moving at lightspeed, it's also thinking. It checks the lead's URL, identifies their industry, and uses that context to write a reply that actually sounds like it came from your best sales rep.
        </p>

        <div className="border-l-4 border-black pl-10 my-16 py-4">
           <Quote size={40} className="text-gray-100 mb-6" />
           <p className="text-3xl font-black italic tracking-tighter leading-tight mb-6">
             "LeadPing isn't a chatbot. It's a digital twin of your highest-performing closer, running on a 24/7 infinite loop."
           </p>
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">— LeadPing Intelligence</p>
        </div>
      </>
    )
  },
  "deliverability-as-a-sovereign-asset": {
    title: "Deliverability as a Sovereign Asset.",
    subtitle: "How to protect your domain reputation while scaling omnichannel inbound response.",
    category: "TRUST",
    date: "Dec 08, 2025",
    readTime: "8 Min Read",
    author: "Infrastructure Team",
    topic: "Inbox Health",
    content: (
      <>
        <p className="text-2xl md:text-3xl text-gray-500 font-medium leading-relaxed italic mb-16">
          In 2025, your domain reputation is your most valuable sales asset. If you hit the spam folder once, you're fighting an uphill battle for life.
        </p>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          The Danger of Scraped Lists
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The industry is pivoting. Gmail and Outlook are aggressively filtering "cold" outreach. The only way to ensure 99.9% primary inbox placement is to focus on <strong>Inbound Response</strong>. LeadPing is designed exclusively for this. By only replying to people who have sought you out, your "Spam Complaint" rate stays at absolute zero.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
           <div className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem]">
              <MailCheck size={32} className="text-black mb-6" />
              <h4 className="text-xl font-black italic mb-4">Sovereign Protocol</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                We handle the technical heavy lifting: SPF, DKIM, DMARC, and custom SMTP rotation. You just handle the leads.
              </p>
           </div>
           <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl">
              <ShieldCheck size={32} className="text-blue-400 mb-6" />
              <h4 className="text-xl font-black italic mb-4">The PII Shield</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Sensitive lead data is redacted and masked before it even reaches the AI processing layer. Security is non-negotiable.
              </p>
           </div>
        </div>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          No More Templates
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Spam filters look for repetitive patterns. If you send the same "Hi [Name], thanks for your enquiry" 500 times a day, you're going to get flagged. Because LeadPing writes a <strong>unique, contextual reply</strong> for every single lead, no two emails are ever the same. To the filters, it looks like a genuine, high-value 1-to-1 conversation.
        </p>
      </>
    )
  },
  "neural-tone-matching-brand-voice": {
    title: "Neural Tone Matching: Writing Like a Human, Only Faster.",
    subtitle: "Deep dive into our version 2.0 brand voice engine and how it crafts precision replies.",
    category: "ENGINEERING",
    date: "Nov 30, 2025",
    readTime: "10 Min Read",
    author: "LeadPing Intelligence",
    topic: "AI Engineering",
    content: (
      <>
        <p className="text-2xl md:text-3xl text-gray-500 font-medium leading-relaxed italic mb-16">
          AI doesn't have to sound like a robot. It just needs a better set of instructions.
        </p>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          Bridging the Uncanny Valley
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The "Uncanny Valley" in AI is that moment a lead realizes they are talking to a bot. It breaks trust instantly. We solved this with <strong>LeadPing Neural v2.0</strong>. Our engine doesn't just process text; it analyzes the <em>vibe</em> of your existing emails and matches it.
        </p>

        <div className="bg-[#fafafa] border border-gray-100 rounded-[3rem] p-12 my-20 flex flex-col items-center text-center">
           <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner mb-8">
              <Cpu size={32} className="text-blue-500 animate-pulse" />
           </div>
           <h3 className="text-3xl font-black italic tracking-tight mb-4">Neural Tuning Map</h3>
           <p className="text-gray-500 mb-10 max-w-lg font-medium">We map your brand across four core axes to ensure the AI speaks your language.</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { label: "Confidence", val: "High" },
                { label: "Formality", val: "Neutral" },
                { label: "Humor", val: "Subtle" },
                { label: "Urgency", val: "Sales-First" }
              ].map((axis, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                   <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{axis.label}</p>
                   <p className="font-black italic text-gray-900">{axis.val}</p>
                </div>
              ))}
           </div>
        </div>

        <h2 className="text-4xl font-black italic tracking-tighter text-gray-900 mb-8 mt-16">
          Contextual Empathy
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          When a lead tells you their "website is slow and costing them money," a bot says "I can fix your website." LeadPing says "I totally understand the frustration of losing leads to site speed—I've actually analyzed your current stack and noticed a 4.2s delay that we can fix." That's <strong>Contextual Empathy</strong>. That's how you close deals.
        </p>
      </>
    )
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = id ? BLOG_DATA[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-12">
         <div className="text-center">
            <h1 className="text-9xl font-black italic text-gray-100 mb-8">404</h1>
            <p className="text-xl font-bold mb-8">Intelligence Log Entry Not Found.</p>
            <Link to="/blog" className="bg-black text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Return to Blog</Link>
         </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* --- ARTICLE HEADER / HERO --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-12 hover:text-black transition-colors group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Log
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="bg-black text-white px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest italic">{post.category}</div>
               <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{post.date}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.95] mb-12">
              {post.title.split(':').length > 1 ? (
                <>
                  {post.title.split(':')[0]}: <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">{post.title.split(':')[1]}</span>
                </>
              ) : post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-10 py-10 border-y border-gray-100">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Authored by</p>
                    <p className="text-sm font-black italic">{post.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Reading time</p>
                    <p className="text-sm font-black italic">{post.readTime}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <Activity size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Topic</p>
                    <p className="text-sm font-black italic">{post.topic}</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-xl prose-gray max-w-none">
            {post.content}

            <div className="bg-gray-50 border border-gray-100 rounded-[3rem] p-12 text-center my-16 shadow-inner">
               <Sparkles size={32} className="text-blue-500 mx-auto mb-6" />
               <h3 className="text-2xl font-black italic tracking-tight mb-4">Want to see the LeadPing loop in action?</h3>
               <p className="text-gray-500 mb-10 max-w-sm mx-auto font-medium">Join the elite teams closing deals in 30 seconds. Start your free trial today.</p>
               <Link to="/signup" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-800 active:scale-95 transition-all shadow-xl shadow-black/10">
                 Claim Your LeadPing <ArrowRight size={16} />
               </Link>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Share LeadPing Insight</span>
                <div className="flex gap-2">
                   <button className="p-3 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all"><Share2 size={16}/></button>
                </div>
             </div>
             <div className="flex gap-4">
                <Link to="/blog" className="text-[10px] font-black text-gray-900 uppercase tracking-widest border-b-2 border-black pb-1">View All Articles</Link>
             </div>
          </div>
        </div>
      </section>

      {/* --- RELATED ARTICLES --- */}
      <section className="py-24 bg-[#fafafa]">
         <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-10">Next Intelligence Loop</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {Object.entries(BLOG_DATA)
                 .filter(([key]) => key !== id)
                 .slice(0, 2)
                 .map(([key, item], i) => (
                 <Link to={`/blog/${key}`} key={key}>
                   <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all cursor-pointer group h-full flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4 block">{item.category}</span>
                        <h5 className="text-xl font-black italic tracking-tight mb-4 group-hover:underline underline-offset-4">{item.title}</h5>
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                   </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default BlogPost;
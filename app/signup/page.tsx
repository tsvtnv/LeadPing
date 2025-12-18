import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap, ArrowRight, Loader2, CheckCircle2, User, Mail, 
  Lock, Sparkles, ShieldCheck, Globe, ChevronRight,
  Target, Zap as ZapIcon, Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate world-class provisioning delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 2000);
  };

  const trustSignals = [
    { title: "Zero Setup Friction", desc: "Connect your first inlet in under 120 seconds." },
    { title: "Elite Neural Logic", desc: "AI that researches leads before drafting a single word." },
    { title: "Sovereign Delivery", desc: "99.9% primary inbox placement guaranteed by SLA." }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row-reverse overflow-hidden selection:bg-black selection:text-white">
      {/* --- RIGHT: CINEMATIC VISUAL PANEL --- */}
      <div className="hidden md:flex md:w-1/2 bg-black p-16 lg:p-24 flex-col justify-between relative overflow-hidden border-l border-white/5">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <Link to="/" className="flex items-center gap-3 group z-10 w-fit relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-white text-black p-2 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <ZapIcon size={24} fill="currentColor" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black text-2xl text-white tracking-tighter italic leading-none">LeadPing</span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500 leading-none mt-1">Intelligence</span>
          </div>
        </Link>

        <div className="z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 w-fit px-4 py-1.5 rounded-full mb-8">
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                  <Sparkles size={12} className="text-blue-400" /> Claim Your 14-Day LeadPing
               </span>
            </div>
            <h2 className="text-6xl lg:text-9xl font-black text-white italic tracking-tighter leading-[0.85] mb-12">
              Start <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Scaling.</span>
            </h2>
            
            <div className="space-y-10 mb-16">
              {trustSignals.map((signal, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-6 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-black italic tracking-tight text-sm uppercase mb-1">{signal.title}</h4>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-xs">{signal.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="z-10 relative">
           <div className="flex items-center gap-10 opacity-30">
              <div className="text-center">
                 <p className="text-white font-black text-3xl tracking-tighter italic">£0.00</p>
                 <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">Trial Fee</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                 <p className="text-white font-black text-3xl tracking-tighter italic">30s</p>
                 <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">Setup Time</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                 <p className="text-white font-black text-3xl tracking-tighter italic">24/7</p>
                 <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">Uptime</p>
              </div>
           </div>
        </div>
      </div>

      {/* --- LEFT: THE SIGNUP CORE --- */}
      <div className="flex-grow flex flex-col justify-center p-8 lg:p-24 bg-white relative">
        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="md:hidden flex justify-center mb-12">
             <Link to="/" className="bg-black text-white p-3 rounded-2xl shadow-2xl scale-110">
               <ZapIcon size={28} fill="currentColor" />
             </Link>
          </div>

          <div className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black italic tracking-tighter mb-3 text-gray-900"
            >
              Create Account
            </motion.h1>
            <p className="text-gray-400 font-medium text-sm">
              Already a member? <Link to="/login" className="text-black font-black underline underline-offset-4 hover:opacity-70 transition-opacity">Sign in here</Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 group-focus-within:text-black transition-colors">Full Name</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none group-focus-within:text-black transition-colors">
                  <User size={18} />
                </div>
                <input
                  required 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold focus:ring-1 focus:ring-black focus:bg-white outline-none shadow-inner transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 group-focus-within:text-black transition-colors">Email Address</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none group-focus-within:text-black transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold focus:ring-1 focus:ring-black focus:bg-white outline-none shadow-inner transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 group-focus-within:text-black transition-colors">Choose Password</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none group-focus-within:text-black transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold focus:ring-1 focus:ring-black focus:bg-white outline-none shadow-inner transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-7 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 group mt-10 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isLoading ? (
                  <><Loader2 className="animate-spin" size={20} /> Provisioning Brain...</>
                ) : (
                  <>Start Free 14-Day LeadPing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <p className="text-[10px] text-center text-gray-400 font-bold leading-relaxed mt-6">
              By joining the movement, you agree to our <Link to="/terms" className="text-black underline underline-offset-2">Terms</Link> and <Link to="/privacy" className="text-black underline underline-offset-2">Privacy Policy</Link>.
            </p>
          </form>

          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center gap-8">
            <div className="flex gap-10 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all">
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck size={24}/>
                  <span className="text-[8px] font-black uppercase">GDPR Ready</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Fingerprint size={24}/>
                  <span className="text-[8px] font-black uppercase">Secure PII</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Globe size={24}/>
                  <span className="text-[8px] font-black uppercase">Edge Hosted</span>
               </div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Element */}
        <div className="absolute top-0 left-0 p-12 opacity-[0.01] pointer-events-none -rotate-12">
          <Target size={400} fill="black" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap, ArrowRight, Loader2, ShieldCheck, Mail, Lock, 
  Eye, EyeOff, ChevronRight, Sparkles, Globe 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate high-fidelity authentication delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden selection:bg-black selection:text-white">
      {/* --- LEFT: CINEMATIC VISUAL PANEL --- */}
      <div className="hidden md:flex md:w-1/2 bg-black p-16 lg:p-24 flex-col justify-between relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        
        <Link to="/" className="flex items-center gap-3 group z-10 w-fit relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-white text-black p-2 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Zap size={24} fill="currentColor" />
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
                  <Globe size={12} className="text-blue-400" /> Secure Node: LON-01
               </span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black text-white italic tracking-tighter leading-[0.85] mb-10 pr-10">
              Think <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">faster.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-w-sm leading-relaxed mb-12">
              Log in to access your 30-second intelligence loop and manage global inbound streams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Uptime SLA</span>
              <p className="text-white font-black text-2xl tracking-tighter italic">99.98%</p>
            </div>
            <div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Neural Latency</span>
              <p className="text-white font-black text-2xl tracking-tighter italic">&lt; 0.4s</p>
            </div>
          </div>
        </div>

        <div className="z-10 relative opacity-40">
           <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] italic">
             <Sparkles size={12} /> Powered by LeadPing AI
           </div>
        </div>
      </div>

      {/* --- RIGHT: THE LOGIN CORE --- */}
      <div className="flex-grow flex flex-col justify-center p-8 lg:p-24 bg-white relative">
        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="md:hidden flex justify-center mb-12">
             <Link to="/" className="bg-black text-white p-3 rounded-2xl shadow-2xl scale-110">
               <Zap size={28} fill="currentColor" />
             </Link>
          </div>

          <div className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black italic tracking-tighter mb-3 text-gray-900"
            >
              Sign In
            </motion.h1>
            <p className="text-gray-400 font-medium text-sm">
              New to the movement? <Link to="/signup" className="text-black font-black underline underline-offset-4 hover:opacity-70 transition-opacity">Request an account</Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
              <div className="flex justify-between items-center mb-3">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within:text-black transition-colors">Password</label>
                <a href="#" className="text-[10px] font-black uppercase text-gray-400 hover:text-black transition-colors tracking-widest">Forgot Access?</a>
              </div>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none group-focus-within:text-black transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  required 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-2xl pl-14 pr-14 py-5 text-sm font-bold focus:ring-1 focus:ring-black focus:bg-white outline-none shadow-inner transition-all placeholder:text-gray-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 group mt-10 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                  <>Access Intelligence <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <div className="relative flex justify-center text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10">
              <span className="bg-white px-6 italic">Secure Single Sign-On</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate('/app')}
                className="w-full border border-gray-100 bg-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-black transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95 group"
              >
                <div className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">G</div>
                Google
              </button>
              <button
                onClick={() => navigate('/app')}
                className="w-full border border-gray-100 bg-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-black transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95 group"
              >
                <div className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">M</div>
                Microsoft
              </button>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-center text-[9px] text-gray-300 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500/50"/> AES-256 Bit Encryption Active
            </p>
            <div className="flex gap-4 opacity-20">
               <div className="w-8 h-8 rounded-lg bg-gray-200" />
               <div className="w-8 h-8 rounded-lg bg-gray-200" />
               <div className="w-8 h-8 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Subtle Decorative Element */}
        <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] pointer-events-none rotate-12">
          <Zap size={300} fill="black" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
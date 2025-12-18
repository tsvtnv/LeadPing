import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Loader2, ShieldCheck, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* LEFT: CONTENT & LOGO (Visual Panel) */}
      <div className="hidden md:flex md:w-1/2 bg-black p-12 lg:p-24 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none rotate-12">
          <Zap size={400} fill="white" />
        </div>
        
        <Link to="/" className="flex items-center gap-2 group z-10 w-fit">
          <div className="bg-white text-black p-1.5 rounded-sm">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="font-black text-xl text-white tracking-tighter">LeadPing</span>
        </Link>

        <div className="z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-[0.9] mb-8"
          >
            Welcome <br/>Back.
          </motion.h2>
          <p className="text-gray-400 font-medium max-w-sm leading-relaxed">
            Your intelligence loop is waiting. Log in to manage your high-intent lead streams and automated outreach.
          </p>
        </div>

        <div className="z-10 flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-white font-black text-2xl tracking-tight">30s</span>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Avg Response</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-2xl tracking-tight">2k+</span>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Active Users</span>
          </div>
        </div>
      </div>

      {/* RIGHT: LOGIN FORM */}
      <div className="flex-grow flex flex-col justify-center p-8 lg:p-24 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="md:hidden flex justify-center mb-12">
             <Link to="/" className="bg-black text-white p-2 rounded-lg shadow-xl">
               <Zap size={28} fill="currentColor" />
             </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black italic tracking-tighter mb-2">Sign In</h1>
            <p className="text-gray-400 font-medium text-sm">
              New here? <Link to="/signup" className="text-black font-black underline underline-offset-4 hover:opacity-70 transition-opacity">Create your account</Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                  <Mail size={18} />
                </div>
                <input
                  required type="email"
                  placeholder="name@company.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-black uppercase text-gray-400 hover:text-black transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                  <Lock size={18} />
                </div>
                <input
                  required type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-5 rounded-2xl font-black text-sm hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                <>Enter Workspace <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-50">
            <div className="relative flex justify-center text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-8">
              <span className="bg-white px-4">Or Quick Access</span>
            </div>

            <button
              onClick={() => navigate('/app')}
              className="w-full border border-gray-100 bg-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
            >
              Sign in with Google
            </button>
          </div>
          
          <p className="mt-12 text-center text-[10px] text-gray-400 font-bold flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-gray-300"/> SECURE SSL ENCRYPTED CONNECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
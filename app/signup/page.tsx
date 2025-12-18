import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Loader2, CheckCircle, User, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row-reverse overflow-hidden">
      {/* LEFT (Visual Panel) */}
      <div className="hidden md:flex md:w-1/2 bg-black p-12 lg:p-24 flex-col justify-between relative overflow-hidden">
        <div className="absolute bottom-0 left-0 p-24 opacity-10 pointer-events-none -rotate-12 translate-y-1/2">
          <Zap size={500} fill="white" />
        </div>
        
        <Link to="/" className="flex items-center gap-2 group z-10 w-fit">
          <div className="bg-white text-black p-1.5 rounded-sm">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="font-black text-xl text-white tracking-tighter">LeadPing</span>
        </Link>

        <div className="z-10">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-[0.9] mb-10"
          >
            Start <br/>Growing.
          </motion.h2>
          
          <div className="space-y-6">
            {[
              "14-Day Free Trial included",
              "Connect Instagram, WhatsApp & SMS",
              "AI drafts in your unique brand tone",
              "GDPR & Safety Guardrails active"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm italic">
                <CheckCircle size={18} className="text-white flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="z-10 pt-12 border-t border-white/10">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-loose">
            No credit card required to start.<br/>
            Instant access to all features.
          </p>
        </div>
      </div>

      {/* RIGHT: SIGNUP FORM */}
      <div className="flex-grow flex flex-col justify-center p-8 lg:p-24 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="md:hidden flex justify-center mb-12">
             <Link to="/" className="bg-black text-white p-2 rounded-lg shadow-xl">
               <Zap size={28} fill="currentColor" />
             </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black italic tracking-tighter mb-2">Create Account</h1>
            <p className="text-gray-400 font-medium text-sm">
              Already using LeadPing? <Link to="/login" className="text-black font-black underline underline-offset-4 hover:opacity-70 transition-opacity">Sign in here</Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                  <User size={18} />
                </div>
                <input
                  required type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner transition-all"
                />
              </div>
            </div>

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
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Secure Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                  <Lock size={18} />
                </div>
                <input
                  required type="password"
                  placeholder="Minimum 8 characters"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold focus:ring-1 focus:ring-black outline-none shadow-inner transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-sm hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                  <>Claim Free 14-Days <ArrowRight size={18} /></>
                )}
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-400 font-bold leading-relaxed">
              By joining, you agree to our <Link to="/terms" className="text-black underline">Terms</Link> and <Link to="/privacy" className="text-black underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
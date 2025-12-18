import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Zap, ChevronRight, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll for adaptive styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Deliverability', path: '/deliverability' },
    { name: 'Blog', path: '/blog' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 md:px-8 pt-4 pointer-events-none`}
    >
      {/* Precision Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-[110]"
        style={{ scaleX }}
      />

      <nav className={`
        mx-auto max-w-7xl h-16 md:h-20 rounded-[1.25rem] md:rounded-[2rem] flex items-center justify-between px-6 pointer-events-auto
        transition-all duration-500 border
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[0.98]' 
          : 'bg-transparent border-transparent'
        }
      `}>
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.2)]' : 'bg-black text-white'}`}
          >
            <Zap size={20} fill="currentColor" className="group-hover:animate-pulse" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter italic leading-none">LeadPing</span>
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 leading-none mt-1">Intelligence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2 group"
              >
                <span className={`text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="header-nav-indicator"
                    className="absolute bottom-0 left-5 right-5 h-0.5 bg-black rounded-full"
                  />
                )}
                <div className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300 scale-90 group-hover:scale-100" />
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-[13px] font-black uppercase tracking-widest text-gray-400 hover:text-black px-4 py-2 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="group relative bg-black text-white px-8 py-3.5 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 active:scale-95 transition-all duration-300"
          >
            <div className="relative z-10 flex items-center gap-2 text-[13px] font-black uppercase tracking-widest italic">
              Start Free <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-black hover:bg-gray-50 rounded-2xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 lg:hidden pointer-events-auto"
          >
            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="open"
              className="space-y-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] block mb-4">Platform</span>
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className="flex items-center justify-between group py-2"
                    >
                      <span className="text-2xl font-black text-gray-900 italic tracking-tighter transition-all group-hover:translate-x-2">
                        {item.name}
                      </span>
                      <ChevronRight className="text-gray-200 group-hover:text-black transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-100 flex flex-col gap-4">
                <Link
                  to="/login"
                  className="w-full text-center py-4 text-[13px] font-black uppercase tracking-widest text-gray-400 hover:text-black"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="w-full bg-black text-white text-center py-5 rounded-[1.5rem] text-[13px] font-black uppercase tracking-widest italic shadow-xl shadow-black/20"
                >
                  Start Your 14-Day Free Trial
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative Pulse */}
            <div className="absolute bottom-8 right-8 pointer-events-none opacity-5">
              <Sparkles size={120} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
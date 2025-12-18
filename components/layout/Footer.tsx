import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Instagram, Twitter, Linkedin, Mail, ArrowUpRight, Github, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'How it works', path: '/how-it-works' },
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Deliverability', path: '/deliverability' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About LeadPing', path: '#' },
        { name: 'Our Mission', path: '#' },
        { name: 'Customer Stories', path: '#' },
        { name: 'Careers', path: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '#' },
        { name: 'API Docs', path: '#' },
        { name: 'Status', path: '#' },
        { name: 'Contact Us', path: 'mailto:support@leadping.com' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none">
        <Zap size={600} fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="bg-black text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="font-black text-2xl tracking-tighter italic italic">LeadPing</span>
            </Link>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm mb-10">
              The world's fastest lead intelligence loop. We help high-performance teams close deals in seconds, not hours.
            </p>
            
            {/* Live Signal Indicator */}
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-5 py-3 rounded-2xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span className="text-black">2,492</span> Leads processed last hour
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12"
          >
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-8 italic">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <motion.li key={link.name} variants={itemVariants}>
                      <Link 
                        to={link.path}
                        className="text-sm font-bold text-gray-500 hover:text-black flex items-center gap-1 group transition-colors"
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
              © {currentYear} LeadPing Intelligence
            </span>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-[11px] font-black text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Privacy</Link>
              <Link to="/terms" className="text-[11px] font-black text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Terms</Link>
              <Link to="/security" className="text-[11px] font-black text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Security</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Github, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:shadow-xl transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] italic">
            <Sparkles size={12} /> Built for speed <Sparkles size={12} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
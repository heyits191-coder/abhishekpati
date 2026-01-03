
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { BUTTON_TAP, EASE_PREMIUM } from '../animations/variants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE_PREMIUM }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="flex items-center gap-3 group"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-11 h-11 bg-dental-blue rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-6 transition-transform shadow-lg shadow-dental-blue/20">S</div>
          <div>
            <span className="block font-heading font-bold text-xl leading-none text-dental-dark">Sai Dental</span>
            <span className="block text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5">Premium Clinic</span>
          </div>
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <motion.a 
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-dental-blue transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-dental-blue transition-all duration-500 group-hover:w-full rounded-full"></span>
            </motion.a>
          ))}
          <motion.a 
            whileTap={BUTTON_TAP}
            whileHover={{ scale: 1.05, y: -2 }}
            href="#contact"
            className="bg-dental-blue text-white px-7 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-dental-blue/20"
          >
            <Phone size={16} />
            Book Now
          </motion.a>
        </div>

        <button 
          className="md:hidden text-dental-dark p-2 bg-white rounded-xl shadow-sm border border-gray-100" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-[32px] shadow-2xl border border-gray-100 md:hidden overflow-hidden z-50 p-8"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold text-gray-800 hover:text-dental-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                className="w-full bg-dental-blue text-white py-5 rounded-2xl text-center font-bold text-lg shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

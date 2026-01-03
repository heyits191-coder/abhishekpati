
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Phone, MessageCircle, MapPin, ArrowRight, Heart } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, DOCTOR_NAME } from '../constants';
import { FADE_UP, STAGGER_CONTAINER, BUTTON_TAP } from '../animations/variants';

const Footer: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hi Sai Dental Clinic, I have a question about my dental health.");
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={STAGGER_CONTAINER}
      className="bg-dental-blue text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Location */}
          <motion.div variants={FADE_UP} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dental-blue font-bold text-2xl shadow-lg shadow-black/10">S</div>
              <div>
                <span className="block font-heading font-bold text-xl leading-none">Sai Dental Clinic</span>
                <span className="block text-xs font-medium text-blue-100/70 tracking-widest uppercase mt-1">Bhubaneswar, Odisha</span>
              </div>
            </div>
            <p className="text-blue-50 leading-relaxed max-w-sm">
              Premium oral healthcare led by {DOCTOR_NAME}. We combine advanced technology with a compassionate, patient-first approach.
            </p>
            <div className="flex items-start gap-3 text-blue-100/80">
              <MapPin size={20} className="shrink-0 mt-1" />
              <p className="text-sm">{CONTACT_INFO.address}</p>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={FADE_UP}>
            <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-dental-teal rounded-full"></span>
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-blue-100/80 hover:text-white transition-all"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Social */}
          <motion.div variants={FADE_UP} className="space-y-8">
            <div>
              <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-dental-teal rounded-full"></span>
              </h4>
              <div className="space-y-4">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                  <motion.div whileHover={BUTTON_TAP} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-dental-blue transition-all">
                    <Phone size={20} />
                  </motion.div>
                  <span className="font-bold">{CONTACT_INFO.phone}</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <motion.div whileHover={BUTTON_TAP} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </motion.div>
                  <span className="font-bold">WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-blue-100/50 uppercase tracking-[0.2em] mb-4">Follow Dr. Abhishek</p>
              <div className="flex gap-4">
                <motion.a whileHover={BUTTON_TAP} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-dental-blue transition-all">
                  <Youtube size={20} />
                </motion.a>
                <motion.a whileHover={BUTTON_TAP} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-dental-blue transition-all">
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div variants={FADE_UP} className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-blue-100/40 text-sm font-medium">
            © {new Date().getFullYear()} Sai Dental Clinic. ISO 9001:2015 Certified.
          </p>
          <div className="flex items-center gap-2 text-blue-100/40 text-sm">
            Made with <Heart size={14} className="text-pink-400 fill-current" /> for healthy smiles in Bhubaneswar
          </div>
        </motion.div>
      </div>
      <div className="h-20 md:hidden"></div>
    </motion.footer>
  );
};

export default Footer;

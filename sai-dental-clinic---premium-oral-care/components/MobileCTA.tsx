
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const MobileCTA: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hi Sai Dental Clinic, I want to book an appointment.");
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center gap-2 bg-dental-blue text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default MobileCTA;

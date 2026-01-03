
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Youtube, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { DOCTOR_NAME, SUBSCRIBER_COUNT } from '../constants';
import { 
  FADE_UP, 
  STAGGER_CONTAINER, 
  SLIDE_IN_RIGHT, 
  WORD_REVEAL, 
  PARALLAX_FLOAT 
} from '../animations/variants';

const Hero: React.FC = () => {
  const title = `Expert Dental Care by ${DOCTOR_NAME}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F9FC]">
      {/* Interactive Parallax Blobs */}
      <motion.div 
        {...PARALLAX_FLOAT}
        className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-40 pointer-events-none"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px]" />
      </motion.div>
      {/* Fixed: separated transition from animate prop to satisfy Framer Motion types */}
      <motion.div 
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 left-0 -z-10 w-1/3 h-full opacity-30 pointer-events-none"
      >
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal-100 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-2xl shadow-sm mb-8">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white ring-2 ring-white">
                <Youtube size={12} fill="currentColor" />
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Trusted by <span className="text-dental-blue">{SUBSCRIBER_COUNT}</span> YouTube Subscribers
            </span>
          </motion.div>

          <motion.h1 className="font-heading text-5xl md:text-7xl font-bold text-dental-dark leading-[1.1] mb-6 overflow-hidden">
            {title.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={WORD_REVEAL}
                className="inline-block mr-3"
              >
                {word === DOCTOR_NAME ? <span className="text-dental-blue">{word}</span> : word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={FADE_UP} className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
            Advanced, ethical and patient-focused dental treatments at Sai Dental Clinic, Bhubaneswar.
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-5">
            <Button 
              className="w-full sm:w-auto text-lg px-10 py-4 shadow-2xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
              <ArrowRight size={20} />
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-lg px-10 py-4 group bg-white/50 backdrop-blur-sm"
              onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch on YouTube
            </Button>
          </motion.div>

          <motion.div variants={FADE_UP} className="mt-16 flex items-center gap-8 border-t border-gray-200 pt-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-dental-dark">4.9/5 Rating</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Google Reviews</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-dental-teal mb-1">
                <ShieldCheck size={18} />
                <span className="text-sm font-bold text-dental-dark">ISO Certified</span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Quality Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={SLIDE_IN_RIGHT}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,136,229,0.15)] border-[12px] border-white bg-white">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt={DOCTOR_NAME} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/30 via-transparent to-transparent opacity-60" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/40"
            >
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-[10px] font-bold text-dental-blue uppercase tracking-[3px] mb-1">Medical Director</p>
                   <h3 className="text-2xl font-bold text-dental-dark">{DOCTOR_NAME}</h3>
                 </div>
                 <div className="w-12 h-12 bg-dental-blue/10 rounded-2xl flex items-center justify-center text-dental-blue">
                   <Star size={24} fill="currentColor" />
                 </div>
               </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-white p-5 rounded-[24px] shadow-2xl border border-blue-50 hidden xl:block z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-dental-teal">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trust</p>
                <p className="text-base font-bold text-dental-dark">ISO Certified Care</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Youtube, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { DOCTOR_NAME, SUBSCRIBER_COUNT } from '../constants';
import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT, FADE_UP, STAGGER_CONTAINER, SCALE_IN } from '../animations/variants';

const AboutDoctor: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Column: Image with sophisticated reveal */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={SLIDE_IN_LEFT}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-dental-blue/5 rounded-[48px] -z-10 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-20px_rgba(0,0,0,0.1)] bg-dental-offwhite aspect-[4/5] lg:aspect-[3/4]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  src="/images/abhishekpati.jpg" 
                  alt={`${DOCTOR_NAME} - Principal Dentist`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                
                {/* Floating Experience Badge */}
                <motion.div 
                  variants={SCALE_IN}
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/40"
                >
                  <p className="text-4xl font-bold text-dental-blue mb-0">15+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] leading-none mt-1">Years Experience</p>
                </motion.div>
              </div>

              {/* Award Badge */}
              <motion.div 
                animate={{ rotate: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 bg-dental-teal text-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4"
              >
                <Award size={32} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Recognition</p>
                  <p className="text-sm font-bold">Top Rated Dentist</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Text Content with Staggered Fade */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CONTAINER}
            className="w-full lg:w-1/2"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 bg-blue-50 text-dental-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[3px] mb-6">
              <ShieldCheck size={14} />
              About The Founder
            </motion.div>
            
            <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-6xl font-bold text-dental-dark mb-8 leading-[1.1]">
              {DOCTOR_NAME}
            </motion.h2>
            
            <motion.div variants={FADE_UP} className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12 font-medium opacity-90">
              <p>
                Dr. Abhishek is a visionary dental surgeon with over 15 years of experience, dedicated to raising the standard of oral healthcare in Bhubaneswar.
              </p>
              <p>
                His philosophy merges clinical precision with a gentle, patient-centric approach. He believes every smile tells a story, and his goal is to make yours healthy and confident.
              </p>
              <p>
                As an influential educator on YouTube, he empowers millions with honest, evidence-based advice, making advanced dentistry accessible to everyone.
              </p>
            </motion.div>

            <motion.div variants={FADE_UP} className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-dental-dark">10K+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Successful Cases</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-dental-blue">1.4L+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Online Community</p>
              </div>
            </motion.div>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 shadow-xl"
              >
                Book Appointment
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 border-gray-200"
              >
                Learn More on YouTube
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

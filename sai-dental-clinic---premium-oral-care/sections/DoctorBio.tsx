
import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle2, HeartPulse, Youtube, Users } from 'lucide-react';
import { DOCTOR_NAME, SUBSCRIBER_COUNT } from '../constants';

const DoctorBio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dental-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://picsum.photos/seed/doctor-bio/600/750" 
                alt={DOCTOR_NAME} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Youtube stat */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white">
                      <Youtube size={24} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">YouTube Family</p>
                      <h4 className="text-xl font-bold text-dental-dark">{SUBSCRIBER_COUNT} Subscribers</h4>
                   </div>
                </div>
              </div>
            </div>
            {/* Background Decorations */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-dental-teal/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-dental-blue/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-dental-teal font-bold tracking-widest uppercase text-sm mb-4 block">Meet the Visionary</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-6 leading-tight">
              {DOCTOR_NAME} <br />
              <span className="text-dental-blue">Leading Oral Health Educator</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dr. Abhishek is not just a dentist; he is a digital health pioneer in Odisha. Through his clinical excellence and massive YouTube presence, he has educated millions on ethical dentistry and advanced oral care techniques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-blue-50 rounded-2xl text-dental-blue">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dental-dark">Excellence</h4>
                  <p className="text-sm text-gray-500">Post-Graduation in Oral Surgery</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-teal-50 rounded-2xl text-dental-teal">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dental-dark">Authority</h4>
                  <p className="text-sm text-gray-500">State Medical Council Member</p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {['Ethical & Transparency Focused Treatment', 'Painless Modern Surgical Techniques', 'Odisha’s Most Followed Dental Authority'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-dental-blue" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-8 bg-dental-blue rounded-[32px] text-white shadow-xl shadow-blue-500/20">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                   <Users size={32} />
                </div>
                <div>
                   <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-1">Patient Legacy</p>
                   <p className="text-2xl font-bold leading-tight">Treating 3 Generations of Families in Bhubaneswar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorBio;

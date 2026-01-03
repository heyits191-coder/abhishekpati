
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, ExternalLink, Smile } from 'lucide-react';
import { CONTACT_INFO, DOCTOR_NAME } from '../constants';
import Button from '../components/Button';
import { STAGGER_CONTAINER, FADE_UP, SCALE_IN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT } from '../animations/variants';

const Appointment: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    time: 'Morning (10 AM - 1 PM)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', concern: '', time: 'Morning (10 AM - 1 PM)' });
    }, 2000);
  };

  const whatsappMessage = encodeURIComponent("Hi Sai Dental Clinic, I want to book a dental appointment.");
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            Book Your Dental Appointment
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Get expert dental care from {DOCTOR_NAME} at Sai Dental Clinic, Bhubaneswar.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={SLIDE_IN_LEFT}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-dental-blue/10 rounded-xl flex items-center justify-center text-dental-blue">
                  <Smile size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-dental-dark">Sai Dental Clinic</h3>
              </div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Visit us for a consultation. We prioritize your comfort and time, ensuring a seamless dental experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-dental-blue mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-dental-dark">Location</p>
                  <p className="text-gray-500">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-dental-teal mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-dental-dark">Working Hours</p>
                  <p className="text-gray-500">{CONTACT_INFO.timings}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-between p-5 bg-blue-50/50 rounded-2xl group hover:bg-dental-blue hover:text-white transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-dental-blue group-hover:text-dental-blue shadow-sm">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold">Call Now</span>
                </div>
                <span className="font-medium opacity-60">{CONTACT_INFO.phone}</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-emerald-50/50 rounded-2xl group hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm">
                    <MessageCircle size={20} />
                  </div>
                  <span className="font-bold">WhatsApp Chat</span>
                </div>
                <ExternalLink size={18} className="opacity-40" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={SLIDE_IN_RIGHT}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={FADE_UP} className="space-y-2">
                        <label className="text-sm font-bold text-dental-dark ml-1">Full Name *</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-dental-blue focus:bg-white outline-none transition-all font-medium"
                        />
                      </motion.div>
                      <motion.div variants={FADE_UP} className="space-y-2">
                        <label className="text-sm font-bold text-dental-dark ml-1">Phone Number *</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="Contact Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-dental-blue focus:bg-white outline-none transition-all font-medium"
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={FADE_UP} className="space-y-2">
                      <label className="text-sm font-bold text-dental-dark ml-1">Preferred Visit Time</label>
                      <select 
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-dental-blue focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      >
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Afternoon (1 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                    </motion.div>

                    <motion.div variants={FADE_UP} className="space-y-2">
                      <label className="text-sm font-bold text-dental-dark ml-1">Dental Concern (Optional)</label>
                      <textarea 
                        rows={4} 
                        placeholder="E.g. Root Canal, Teeth Whitening, Braces..." 
                        value={formData.concern}
                        onChange={(e) => setFormData({...formData, concern: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-dental-blue focus:bg-white outline-none transition-all font-medium"
                      />
                    </motion.div>

                    <motion.div variants={FADE_UP}>
                      <Button type="submit" className="w-full py-5 text-lg font-bold">
                        Book Appointment
                        <Send size={20} className="ml-2" />
                      </Button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    variants={SCALE_IN}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }} 
                      transition={{ duration: 0.5, repeat: 1 }}
                      className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-dental-dark mb-2">Request Received!</h3>
                    <p className="text-gray-500 mb-8 max-w-xs">
                      We've received your request. Our clinic coordinator will call you back within 2-4 working hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-dental-blue font-bold text-sm uppercase tracking-widest hover:underline"
                    >
                      Book another appointment
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

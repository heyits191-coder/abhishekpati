
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dental-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dental-dark mb-6">Plan Your Visit</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We are located in the heart of Tamando, Bhubaneswar. Feel free to reach out for appointments or queries regarding our services.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dental-blue shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dental-dark mb-1">Location</h4>
                  <p className="text-gray-500">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dental-teal shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dental-dark mb-1">Phone</h4>
                  <p className="text-gray-500">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dental-blue shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dental-dark mb-1">Working Hours</h4>
                  <p className="text-gray-500">{CONTACT_INFO.timings}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] shadow-xl shadow-blue-500/5 border border-gray-100"
          >
            <h3 className="font-heading text-2xl font-bold text-dental-dark mb-8">Request an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dental-dark mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-dental-offwhite rounded-2xl border-none focus:ring-2 focus:ring-dental-blue outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dental-dark mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-5 py-4 bg-dental-offwhite rounded-2xl border-none focus:ring-2 focus:ring-dental-blue outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-dental-dark mb-2">Treatment Interested In</label>
                <select className="w-full px-5 py-4 bg-dental-offwhite rounded-2xl border-none focus:ring-2 focus:ring-dental-blue outline-none transition-all appearance-none cursor-pointer">
                  <option>Dental Implants</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Orthodontics</option>
                  <option>General Checkup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-dental-dark mb-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your concern..." 
                  className="w-full px-5 py-4 bg-dental-offwhite rounded-2xl border-none focus:ring-2 focus:ring-dental-blue outline-none transition-all"
                />
              </div>
              <Button type="submit" className="w-full py-5">
                Send Request <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

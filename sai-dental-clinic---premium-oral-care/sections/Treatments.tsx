
import React from 'react';
import { motion } from 'framer-motion';
import { TREATMENTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, HOVER_LIFT, BUTTON_TAP } from '../animations/variants';

const Treatments: React.FC = () => {
  return (
    <section id="treatments" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            Our Dental Treatments
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Comprehensive dental care with modern technology and ethical approach.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TREATMENTS.map((item) => (
            <motion.div
              key={item.title}
              variants={FADE_UP}
              whileHover={HOVER_LIFT}
              whileTap={BUTTON_TAP}
              className="group cursor-pointer p-10 rounded-[16px] bg-white border-2 border-transparent shadow-sm hover:shadow-2xl hover:border-dental-blue/10 hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-dental-offwhite rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-50 transition-colors duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-dental-dark mb-4 group-hover:text-dental-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 h-12">
                {item.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-dental-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                View Details <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;

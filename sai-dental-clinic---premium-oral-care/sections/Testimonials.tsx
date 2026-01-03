
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { STAGGER_CONTAINER, FADE_UP, HOVER_LIFT } from '../animations/variants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            What Our Patients Say
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Real experiences from patients treated at Sai Dental Clinic.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={FADE_UP}
              whileHover={HOVER_LIFT}
              className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i < testimonial.rating ? "" : "text-gray-200"}
                  />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-50 -z-10" />
                <p className="text-gray-600 leading-relaxed italic relative z-10">
                  "{testimonial.feedback}"
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-dental-dark text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-[0.2em]">
            Verified Reviews on
          </p>
          <div className="flex items-center justify-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
            <span className="text-xl font-bold text-gray-600">Maps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

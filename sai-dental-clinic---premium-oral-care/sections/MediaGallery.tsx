
import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Play } from 'lucide-react';

const MediaGallery: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dental-dark mb-4">Patient Education & Media</h2>
            <p className="text-gray-500">
              Watch our helpful videos on dental hygiene and see real transformations from our clinic.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all">
              <Youtube size={24} />
            </button>
            <button className="p-3 bg-pink-50 text-pink-500 rounded-2xl hover:bg-pink-500 hover:text-white transition-all">
              <Instagram size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={`https://picsum.photos/seed/vid-${i}/600/340`} 
                alt="Clinic Video" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dental-dark/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <Play size={24} className="text-white group-hover:text-dental-blue fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold">Understanding Dental Implants</p>
                <p className="text-white/70 text-sm">Educational Series • 04:30</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;

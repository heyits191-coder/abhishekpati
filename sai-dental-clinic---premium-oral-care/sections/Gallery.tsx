
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import ImageLightbox from '../components/ImageLightbox';
import { Maximize2 } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, BUTTON_TAP } from '../animations/variants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{url: string, alt: string} | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            Inside Our Clinic
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            A clean, modern and comfortable environment for your dental care.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {GALLERY_IMAGES.map((image, idx) => (
            <motion.div
              key={idx}
              variants={FADE_UP}
              whileTap={BUTTON_TAP}
              className="relative break-inside-avoid rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage({ url: image.url, alt: image.alt })}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dental-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-dental-blue shadow-xl"
                >
                  <Maximize2 size={24} />
                </motion.div>
              </div>
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-dental-dark uppercase tracking-widest shadow-sm">
                {image.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ImageLightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageUrl={selectedImage?.url || ""} 
        imageAlt={selectedImage?.alt || ""} 
      />
    </section>
  );
};

export default Gallery;

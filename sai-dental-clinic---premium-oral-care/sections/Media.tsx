
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../constants';
import VideoModal from '../components/VideoModal';
import { STAGGER_CONTAINER, FADE_UP, HOVER_LIFT, SCALE_IN } from '../animations/variants';

const Media: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <section id="media" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="text-center mb-16"
        >
          <motion.div 
            variants={SCALE_IN}
            className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Youtube size={18} fill="currentColor" />
            Watch & Learn
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-heading text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            Dental Education on YouTube
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Learn about dental health, procedures, and oral hygiene directly from Dr. Abhishek’s expert guides.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <motion.div
              key={`${video.id}-${idx}`}
              variants={FADE_UP}
              whileHover={HOVER_LIFT}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedVideoId(video.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-dental-dark/20 group-hover:bg-dental-dark/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300"
                  >
                    <Play size={28} className="text-white fill-current translate-x-1" />
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-dental-blue uppercase tracking-wider">
                  {video.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-dental-dark group-hover:text-dental-blue transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Play size={12} />
                  Click to Watch
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
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-red-600 font-bold hover:gap-5 transition-all"
          >
            Visit Our YouTube Channel
            <Youtube size={20} />
          </a>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={!!selectedVideoId} 
        onClose={() => setSelectedVideoId(null)} 
        videoId={selectedVideoId || ""} 
      />
    </section>
  );
};

export default Media;

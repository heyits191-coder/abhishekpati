
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Treatments from './sections/Treatments';
import AboutDoctor from './sections/AboutDoctor';
import Media from './sections/Media';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Appointment from './sections/Appointment';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

const App: React.FC = () => {
  useEffect(() => {
    // Force scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-dental-blue/20 selection:text-dental-blue bg-dental-offwhite">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <Treatments />
            <AboutDoctor />
            <Media />
            <Testimonials />
            <Gallery />
            <Appointment />
          </main>
          <Footer />
          <MobileCTA />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;

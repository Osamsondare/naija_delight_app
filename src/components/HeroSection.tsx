
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const HeroSection = () => {
  return (
    <>
      <Navigation />
      
      <div className="relative h-[70vh] bg-naija-brown overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000" 
            alt="Nigerian cuisine" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-naija-brown/90 to-naija-brown/70"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Experience Authentic<br />
              <span className="text-naija-orange">Nigerian Cuisine</span>
            </h1>
            <p className="text-naija-cream text-xl md:text-2xl mb-8">
              A visual journey through the rich and flavorful world of Nigerian food
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a href="#dishes" className="bg-naija-orange hover:bg-naija-orange/90 text-white font-medium px-8 py-3 rounded-full inline-block transition-colors">
                Explore Dishes
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-naija-brown to-transparent"
        >
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import DishCard from '../components/DishCard';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import { dishes } from '../data/dishes';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredDishes, setFilteredDishes] = useState(dishes);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredDishes(dishes);
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-naija-cream/30">
      <HeroSection />

      <section id="dishes" className="container mx-auto py-16 px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-naija-brown mb-4">
            Explore Nigerian Cuisine
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich flavors and cultural heritage of Nigeria through our collection of authentic dishes.
          </p>
        </motion.div>

        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="bg-naija-green/10 py-16 pattern-bg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-naija-brown mb-6">
              Experience the Taste of Nigeria
            </h2>
            <p className="text-gray-700 mb-8">
              Nigerian cuisine is known for its rich flavors, diverse ingredients, and cultural significance. 
              Each dish tells a story of tradition, community, and the bountiful resources of the land.
            </p>
            <div className="flex justify-center">
              <motion.button 
                className="bg-naija-orange hover:bg-naija-orange/90 text-white font-medium px-8 py-3 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Food
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;



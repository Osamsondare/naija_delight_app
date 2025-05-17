
import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/dishes';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="flex flex-wrap gap-3 justify-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;

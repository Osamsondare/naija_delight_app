
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Dish } from '../data/dishes';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

interface DishCardProps {
  dish: Dish;
  index: number;
}

const DishCard: React.FC<DishCardProps> = ({ dish, index }) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  
  const fallbackImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800";

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAddToCart = () => {
    addToCart(dish);
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      layout
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageError ? fallbackImage : dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
          onError={handleImageError}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-naija-brown">{dish.name}</h3>
          <span className="px-3 py-1 text-xs font-medium bg-naija-cream text-naija-orange rounded-full">
            {dish.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-naija-green font-semibold">₦{dish.price.toFixed(2)}</span>
          <Button 
            onClick={handleAddToCart}
            className="bg-naija-orange hover:bg-naija-orange/90"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;

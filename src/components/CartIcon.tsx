
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="relative">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart className="h-6 w-6 text-naija-brown" />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-naija-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
};

export default CartIcon;


import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from "@/components/ui/sonner";

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart,
    getTotalPrice 
  } = useCart();

  const handleCheckout = () => {
    toast("Order Placed Successfully!", {
      description: "Thank you for ordering from NaijaDelights.",
    });
    clearCart();
  };

  const deliveryFee = 2.00;

  return (
    <div className="min-h-screen bg-naija-cream/30 flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto py-8 px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-naija-brown mb-2">
            Your Cart
          </h1>
          <p className="text-gray-600">
            Review your selected Nigerian delicacies before checkout
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingBag className="mx-auto h-16 w-16 text-naija-orange/50 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any Nigerian delicacies to your cart yet.</p>
            <Button 
              className="bg-naija-orange hover:bg-naija-orange/90" 
              onClick={() => window.location.href = '/'}
            >
              Browse Dishes
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-1/4 h-24 sm:h-auto">
                            <AspectRatio ratio={4/3}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800";
                                }}
                              />
                            </AspectRatio>
                          </div>
                          <div className="flex-grow p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-lg text-naija-brown">{item.name}</h3>
                                <p className="text-gray-500 text-sm">{item.category}</p>
                              </div>
                              <span className="text-naija-green font-semibold">₦{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8" 
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8" 
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-500 hover:text-red-700 hover:bg-red-50" 
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="text-naija-orange border-naija-orange hover:bg-naija-orange/10"
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span>₦{getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>₦{deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span className="text-naija-green">₦{(getTotalPrice() + deliveryFee).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-naija-orange hover:bg-naija-orange/90"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

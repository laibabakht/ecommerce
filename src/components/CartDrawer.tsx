import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}
export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(totalAmount);
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-rose-900/40 backdrop-blur-sm z-50" />
        

          {/* Drawer */}
          <motion.div
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
          
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-rose-100 bg-rose-50/50">
              <h2 className="text-2xl font-serif font-semibold text-rose-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Your Cart
              </h2>
              <button
              onClick={onClose}
              className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-100 rounded-full transition-colors">
              
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ?
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-rose-300" />
                  </div>
                  <p className="text-lg text-rose-900 font-medium">
                    Your cart is empty
                  </p>
                  <p className="text-rose-500">
                    Looks like you haven't added any sarees yet.
                  </p>
                  <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
                
                    Continue Shopping
                  </button>
                </div> :

            <div className="space-y-6">
                  {cartItems.map((item) =>
              <div
                key={item.id}
                className="flex gap-4 bg-white border border-rose-100 p-3 rounded-2xl shadow-sm">
                
                      <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded-xl" />
                
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900 line-clamp-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-rose-600">
                              {item.category}
                            </p>
                          </div>
                          <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <p className="font-semibold text-gray-900">
                            ₹
                            {(item.price * item.quantity).toLocaleString(
                        'en-IN'
                      )}
                          </p>

                          <div className="flex items-center gap-3 bg-rose-50 rounded-full px-2 py-1">
                            <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 text-rose-600 hover:bg-rose-200 rounded-full transition-colors"
                        disabled={item.quantity <= 1}>
                        
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-4 text-center text-sm font-medium text-rose-900">
                              {item.quantity}
                            </span>
                            <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 text-rose-600 hover:bg-rose-200 rounded-full transition-colors">
                        
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
              )}
                </div>
            }
            </div>

            {/* Footer */}
            {cartItems.length > 0 &&
          <div className="border-t border-rose-100 p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-rose-900">
                    {formattedTotal}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full py-4 bg-rose-600 text-white rounded-full font-medium text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200">
                  Proceed to Checkout
                </button>
              </div>
          }
          </motion.div>
        </>
      }
    </AnimatePresence>);

}
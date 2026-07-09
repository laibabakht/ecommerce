import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Saree } from '../types';
interface SareeCardProps {
  saree: Saree;
  onAddToCart: (saree: Saree) => void;
}
export function SareeCard({ saree, onAddToCart }: SareeCardProps) {
  // Format price to Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(saree.price);
  return (
    <motion.div
      whileHover={{
        y: -8
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-rose-100 transition-shadow duration-300 flex flex-col h-full group">
      
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-rose-50">
        <img
          src={saree.image}
          alt={saree.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy" />
        
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-rose-700 text-xs font-semibold rounded-full shadow-sm">
            {saree.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {saree.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {saree.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose-50">
          <span className="text-xl font-bold text-rose-700">
            {formattedPrice}
          </span>
          <button
            onClick={() => onAddToCart(saree)}
            className="flex items-center justify-center p-2.5 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-600 hover:text-white transition-colors duration-200"
            aria-label={`Add ${saree.name} to cart`}>
            
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>);

}
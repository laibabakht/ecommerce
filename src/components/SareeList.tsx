import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SareeCard } from './SareeCard';
import { Saree } from '../types';
interface SareeListProps {
  sarees: Saree[];
  onAddToCart: (saree: Saree) => void;
}
export function SareeList({ sarees, onAddToCart }: SareeListProps) {
  if (sarees.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-serif text-rose-900 mb-2">
          No sarees found
        </h3>
        <p className="text-rose-600">
          Try adjusting your search or category filter.
        </p>
      </div>);

  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        
        <AnimatePresence>
          {sarees.map((saree) =>
          <motion.div
            key={saree.id}
            layout
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            transition={{
              duration: 0.3
            }}>
            
              <SareeCard saree={saree} onAddToCart={onAddToCart} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>);

}
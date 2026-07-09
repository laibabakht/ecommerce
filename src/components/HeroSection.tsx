import React from 'react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <div className="relative bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-rose-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="sm:text-center lg:text-left">
            
            <h1 className="text-4xl tracking-tight font-extrabold text-rose-900 sm:text-5xl md:text-6xl font-serif">
              <span className="block xl:inline">Elegance Woven in</span>{' '}
              <span className="block text-rose-600 xl:inline">
                Every Thread
              </span>
            </h1>
            <p className="mt-3 text-base text-rose-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans">
              Discover our handcrafted collection of premium sarees. From
              traditional Kanchipuram silks to modern party wear, find the
              perfect drape for every occasion.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-rose-200">
                  
                  Shop Collection
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-rose-700 bg-rose-100 hover:bg-rose-200 md:py-4 md:text-lg md:px-10 transition-colors">
                  
                  View New Arrivals
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="src\photo\heroimage.jpg" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-transparent lg:from-rose-50 lg:via-rose-50/20 lg:to-transparent"></div>
      </div>
    </div>);

}
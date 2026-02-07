import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';
import heroImage from '../../assets/hero_group.png'; 

const Hero = () => {
  return (
    <div className="
      relative 
      flex items-center 
      bg-gradient-to-b from-brand-50 to-brand-400
      /* HEIGHT ADJUSTMENT: Shorter height & Padding Bottom for overlap */
      h-auto py-16 pb-32 lg:py-0 lg:pb-0
      lg:h-[60vh] lg:min-h-[450px] 
    ">
      
      {/* 1. BACKGROUND BLOB */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-gradient-to-b from-pink-200 to-brand-600 rounded-full blur-[80px] lg:blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full relative">

        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="space-y-4 lg:space-y-6 z-10 text-center lg:text-left order-1 lg:mb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="inline-block bg-[#db2777] text-white px-5 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm rounded-full font-bold shadow-lg cursor-default hover:animate-pulse">
              Trusted By 100K +
            </div>
          </motion.div>

          {/* Main Headline - REDUCED SIZE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1] tracking-tight">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent mb-1"
              style={{ WebkitTextStroke: '1.5px #db2777', textShadow: '2px 2px 0px rgba(219, 39, 119, 0.1)' }}
            >
              REHEM SOFT
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#db2777] block"
            >
              SOFTWARE
            </motion.span>

            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#db2777] block"
            >
              GROWING !
            </motion.span>
          </h1>
        </div>

        {/* --- RIGHT SIDE: IMAGE - REDUCED SIZE --- */}
        <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0 lg:mb-16 order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-pink-300/30 blur-[50px] rounded-full -z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }} 
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-[350px] lg:max-w-[420px]" // Reduced max-width significantly
            >
               <motion.img 
                 src={heroImage}
                 alt="Rehem Soft Team"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="w-full h-auto object-contain drop-shadow-2xl"
               />
            </motion.div>
        </div>

      </div>

      {/* --- BOTTOM ABSOLUTE STATS (Overhanging) --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 1, duration: 0.8, staggerChildren: 0.2 } 
          }
        }}
        // Hanging further down (-bottom-16) to overlap next section
        className="absolute -bottom-16 left-0 right-0 z-30 px-6 w-full hidden md:block" 
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { num: "100,250", lbl: "Total Members" },
            { num: "20,155", lbl: "Software Client" },
            { num: "502,366", lbl: "Rehem Visitors" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <div className="shadow-2xl rounded-2xl bg-white">
                 <StatCard number={stat.num} label={stat.lbl} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

       {/* Mobile-only stats (Static, not absolute) */}
       <div className="md:hidden w-full px-6 absolute bottom-6 left-0 z-30">
          <div className="grid grid-cols-1 gap-4">
               {/* Just showing one on mobile to save space, or map all if needed */}
               <div className="shadow-xl rounded-2xl bg-white">
                  <StatCard number="100,250" label="Total Members" />
               </div>
          </div>
       </div>

    </div>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';
import heroImage from '../../assets/hero_group.png'; 

const Hero = () => {
  return (
    <div className="
      relative 
      overflow-hidden 
      flex items-center 
      bg-gradient-to-b from-brand-50 to-brand-400
      h-auto py-8
      lg:h-[80vh] lg:min-h-[600px] lg:py-0
    ">
      
      {/* 1. ANIMATED BACKGROUND BLOB (Breathing Effect) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gradient-to-b from-pink-200 to-brand-600 rounded-full blur-[80px] lg:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">

        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="space-y-6 lg:space-y-8 z-10 text-center lg:text-left order-1">

          {/* Badge: Pop In + Hover Shake */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="inline-block bg-[#db2777] text-white px-6 lg:px-8 py-2 lg:py-2.5 text-sm lg:text-base rounded-full font-bold shadow-lg cursor-default hover:animate-pulse">
              Trusted By 100K +
            </div>
          </motion.div>

          {/* Main Headline: Staggered Word Reveal */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            
            {/* Word 1: Slides from Left */}
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent mb-1 lg:mb-2"
              style={{ 
                WebkitTextStroke: '2px #db2777', 
                textShadow: '2px 2px 0px rgba(219, 39, 119, 0.1)'
              }}
            >
              REHEM SOFT
            </motion.span>
            
            {/* Word 2: Slides from Right */}
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#db2777] block"
            >
              SOFTWARE
            </motion.span>

            {/* Word 3: Slides from Bottom */}
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#db2777] block"
            >
              GROWING !
            </motion.span>
          </h1>

          {/* Stats Grid: Staggered Fade Up */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.8 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pt-2 lg:pt-6 max-w-xl mx-auto lg:mx-0"
          >
            {[
              { num: "100,250", lbl: "Total Members" },
              { num: "20,155", lbl: "Software Client" },
              { num: "502,366", lbl: "Rehem Visitors" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <StatCard number={stat.num} label={stat.lbl} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0 lg:h-full order-2">
            
            {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-pink-300/30 blur-[60px] rounded-full -z-10"></div>
            
            {/* Floating Image Animation */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }} 
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-[550px] lg:max-w-2xl"
            >
               {/* Continuous Floating Loop */}
               <motion.img 
                 src={heroImage}
                 alt="Rehem Soft Team"
                 animate={{ y: [-15, 15, -15] }}
                 transition={{ 
                   repeat: Infinity, 
                   duration: 6, 
                   ease: "easeInOut",
                   delay: 1 
                 }}
                 className="w-full h-auto object-contain drop-shadow-2xl"
               />
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
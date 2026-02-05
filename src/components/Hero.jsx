import React from 'react';
import StatCard from '../shared/StatCard';
import heroImage from '../assets/hero_group.png'; 

const Hero = () => {
  return (
    // Changed: 'min-h-[90vh]' -> 'min-h-[70vh]'
    <div className="relative lg:max-h-[70vh] bg-gradient-to-b from-brand-50 to-brand-400 overflow-hidden flex items-center">
      
      {/* Background Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-50 to-brand-600 rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="space-y-8 z-10 text-center lg:text-left pt-10 lg:pt-0">

          {/* Badge */}
          <div className="inline-block bg-[#db2777] text-white px-8 py-2.5 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
            Trusted By 100K +
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span 
              className="block text-transparent mb-2"
              style={{ 
                WebkitTextStroke: '2px #db2777', 
                textShadow: '2px 2px 0px rgba(219, 39, 119, 0.1)'
              }}
            >
              REHEM SOFT
            </span>
            
            <span className="text-[#db2777] block">
              SOFTWARE
            </span>
            <span className="text-[#db2777] block">
              GROWING !
            </span>
          </h1>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 max-w-2xl mx-auto lg:mx-0">
            <StatCard number="100250" label="Total Members" />
            <StatCard number="20155" label="Software Client" />
            <StatCard number="502366" label="Rehem Visitors" />
          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <div className="relative flex justify-center lg:justify-end pb-10 lg:pb-0 h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-300/30 blur-[60px] rounded-full -z-10"></div>
            <img 
              src={heroImage} 
              alt="Rehem Soft Team and Apps" 
              className="w-full max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-2xl animate-in slide-in-from-right-10 duration-1000 fade-in"
            />
        </div>

      </div>
    </div>
  );
};

export default Hero;
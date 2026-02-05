import React from 'react';
import StatCard from '../shared/StatCard';
import heroImage from '../assets/hero_group.png'; 

const Hero = () => {
  return (
    <div className="
      relative 
      overflow-hidden 
      flex items-center 
      bg-gradient-to-b from-brand-50 to-brand-400
      
      /* MOBILE: Reduced padding (py-8) to remove empty space */
      h-auto py-8
      
      /* DESKTOP: Keep original fixed height */
      lg:h-[80vh] lg:min-h-[600px] lg:py-0
    ">
      

      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-gradient-to-b from-brand-50 to-brand-600 rounded-full blur-[80px] lg:blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">

   
        <div className="space-y-6 lg:space-y-8 z-10 text-center lg:text-left order-1">

          <div className="inline-block bg-[#db2777] text-white px-6 lg:px-8 py-2 lg:py-2.5 text-sm lg:text-base rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
            Trusted By 100K +
          </div>


          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span 
              className="block text-transparent mb-1 lg:mb-2"
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


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pt-2 lg:pt-6 max-w-xl mx-auto lg:mx-0">
            <StatCard number="100,250" label="Total Members" />
            <StatCard number="20,155" label="Software Client" />
            <StatCard number="502,366" label="Rehem Visitors" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0 lg:h-full order-2">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-pink-300/30 blur-[60px] rounded-full -z-10"></div>
            
            <img 
              src={heroImage} 
              alt="Rehem Soft Team and Apps" 
      
              className="w-full max-w-[550px] lg:max-w-2xl h-auto object-contain drop-shadow-2xl animate-in slide-in-from-right-10 duration-1000 fade-in"
            />
        </div>

      </div>
    </div>
  );
};

export default Hero;
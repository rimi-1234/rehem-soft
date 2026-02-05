// src/components/Hero.jsx
import React from 'react';
import StatCard from '../shared/StatCard';
// Make sure this path is correct

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] bg-gradient-to-b from-brand-50 to-brand-400 overflow-hidden flex items-center">

            {/* Background Blobs (Optional for that soft glow) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-50 to-brand-600  rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* --- LEFT COLUMN: CONTENT --- */}
                <div className="space-y-8 z-10 text-center lg:text-left pt-10 lg:pt-0">

                    {/* Badge: Dark Pink (#be185d / brand-700) */}
                    <div className="inline-block bg-brand-700 text-white px-8 py-2.5 rounded-full font-bold shadow-lg">
                        Trusted By 100K +
                    </div>
                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                        {/* Outline Text */}
                        <span
                            className="block text-white mb-2"
                            style={{
                                WebkitTextStroke: '2px #db2777',
                                textShadow: '2px 2px 0px rgba(219, 39, 119, 0.2)'
                            }}
                        >
                            REHEM SOFT
                        </span>
                        {/* Solid Text */}
                        <span className="text-pink-600 block">
                            SOFTWARE
                        </span>
                        <span className="text-pink-600 block">
                            GROWING !
                        </span>
                    </h1>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 max-w-2xl mx-auto lg:mx-0">
                        <StatCard number="100,250" label="Total Members" />
                        <StatCard number="20,155" label="Software Client" />
                        <StatCard number="502,366" label="Rehem Visitors" />
                    </div>
                </div>

                {/* --- RIGHT COLUMN: IMAGE --- */}
                <div className="relative flex justify-center lg:justify-end pb-10 lg:pb-0">
                    {/* Decorative Circle behind image */}
                    <div className="absolute inset-0 bg-pink-200 blur-[80px] opacity-40 rounded-full -z-10 scale-90"></div>

                    {/* Floating Phone 1 (Optional - Behind) */}
                    <div className="hidden xl:block absolute top-0 -left-12 w-32 -z-0 rotate-[-12deg] opacity-80">
                        {/* <img src={phoneImage} /> */}
                    </div>

                    {/* <img 
            src={groupImage} 
            alt="Rehem Soft Team" 
            className="w-full max-w-lg lg:max-w-xl h-auto object-cover drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
          /> */}
                </div>

            </div>
        </div>
    );
};

export default Hero;
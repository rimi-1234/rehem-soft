import React from 'react';

const Card = ({ title, subtitle, description, image, gradient, textColor = "text-white" }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-xl h-[500px] w-full cursor-pointer">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-85 group-hover:opacity-95 transition-opacity duration-300`}></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-center items-center z-10">
        <h3 className={`text-3xl font-bold mb-3 uppercase ${textColor} drop-shadow-md`}>
          {title}
        </h3>
        
        {/* Divider */}
        <div className="w-12 h-1.5 bg-white/90 mb-4 rounded-full"></div>
        
        <h4 className="text-xl text-white font-semibold mb-3 tracking-wide">
          {subtitle}
        </h4>
        
        <p className="text-gray-100 text-sm font-light leading-relaxed max-w-[90%] opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
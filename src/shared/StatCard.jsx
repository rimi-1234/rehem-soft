import React from 'react';

const StatCard = ({ number, label }) => {
  return (
    <div className="bg-brand-100 border-b-4 border-brand-200 p-4 rounded-lg text-center shadow-sm hover:-translate-y-1 transition-transform duration-300">
      <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
        {number}
      </div>
      <div className="text-brand-600 font-bold text-sm mt-1">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
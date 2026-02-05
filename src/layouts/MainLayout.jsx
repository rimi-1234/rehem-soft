import React from 'react';
import Navbar from '../components/Navbar';


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-pink-200 selection:text-pink-900">
      
      {/* Fixed/Sticky Header */}
      <Navbar />

      {/* Main Content Area - Grows to fill space */}
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

    

    </div>
  );
};

export default MainLayout;
import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <MainLayout>
      <Hero />
      <FeaturesSection />
  
    </MainLayout>
  );
}

export default App;
import React from 'react';
import BeginnerSection from '../BeginnerSection';
import IntermediateSection from '../IntermediateSection';
import AdvanceSection from '../AdvanceSection';
import Hero from '../Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <BeginnerSection />
      <IntermediateSection />
      <AdvanceSection />
    </div>
  );
};

export default Home;

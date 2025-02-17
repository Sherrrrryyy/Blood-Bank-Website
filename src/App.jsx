import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BloodDonationInfo from './components/BloodDonationInfo';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BloodDonationInfo />
      <HowItWorks />
    </>
  );
}

export default App;

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BloodDonationInfo from './components/BloodDonationInfo';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BloodDonationInfo />
    </>
  );
}

export default App;

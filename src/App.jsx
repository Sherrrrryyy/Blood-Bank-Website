import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BloodDonationInfo from './components/BloodDonationInfo';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { NotificationProvider } from './context/NotificationContext';


function App() {

  return (
    <>
    <NotificationProvider>
      <Navbar />
      <Hero />
      <HowItWorks />
      <BloodDonationInfo />
      <Testimonials />
      <Stats />
      </NotificationProvider>
    </>
  );
}

export default App;

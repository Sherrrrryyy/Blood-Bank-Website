import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BloodDonationInfo from './components/BloodDonationInfo';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <HowItWorks />
          <BloodDonationInfo />
          <Testimonials />
          <Stats />
        </>
      )}
    </>
  );
}

export default App;

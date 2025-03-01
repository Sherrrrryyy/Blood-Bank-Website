import React, { useEffect, useState } from 'react';

const FindDonor = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('/api/donations');

        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching donor data:', error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="donor-list">
      {donors.map((donor) => (
        <div key={donor._id} className="donor-card">
          <h3>{donor.name}</h3>
          <p>Blood Type: {donor.bloodType}</p>
          <p>Contact: {donor.contact}</p>
          <p>Location: {donor.location}</p>
        </div>
      ))}
    </div>
  );
};

export default FindDonor;

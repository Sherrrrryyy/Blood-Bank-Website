import React, { useEffect, useState } from 'react';

const DonationFrom = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const response = await fetch('/api/donors');
      const data = await response.json();
      setDonors(data);
    };

    fetchDonors();
  }, []);

  return (
    <div>
      {donors.map((donor) => (
        <div key={donor.id} className="card">
          <h2>{donor.name}</h2>
          <p>Blood Type: {donor.bloodType}</p>
          <p>Location: {donor.location}</p>
          <p>Contact: {donor.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default DonationFrom;

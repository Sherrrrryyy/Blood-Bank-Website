import React, { useState } from 'react';
import axios from 'axios';

const DonationRequest = () => {
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = { bloodType, location };
        await axios.post('http://localhost:5000/api/donate', requestData);
        // Handle success or error
    };

    return (
       <>
       
       </>
    );
};

export default DonationRequest;
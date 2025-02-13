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
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Request Blood Donation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Blood Type"
                    onChange={(e) => setBloodType(e.target.value)}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-500">
                    Request Donation
                </button>
            </form>
        </div>
    );
};

export default DonationRequest;
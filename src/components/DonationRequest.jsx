import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DonationRequest = () => {
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.post(
                'http://localhost:5000/api/donations',
                { bloodType, location },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            
            if (response.status === 201) {
                alert('Donation request submitted successfully!');
                setBloodType('');
                setLocation('');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to submit donation request');
            console.error('Donation request error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Request Blood Donation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Blood Type"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="border border-gray-300 p-2 mb-2 w-full rounded"
                />
                {error && (
                    <div className="text-red-600 mb-4 text-center">
                        {error}
                    </div>
                )}
                <button 
                    type="submit" 
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-500 disabled:bg-red-300 w-full"
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Request Donation'}
                </button>
            </form>
        </div>
    );
};

export default DonationRequest;

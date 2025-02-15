import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, password };
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Redirect to login after registration
        navigate('/login');
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Blood Bank Registration</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200 font-semibold">
                        Register
                    </button>
                    <p className="text-center mt-4 text-gray-600">
                        Already have an account?{' '}
                        <button 
                            onClick={() => navigate('/login')}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Login here
                        </button>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email: formData.email, password: formData.password };
            await axios.post('http://localhost:5000/api/login', userData);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Blood Bank Login</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-200 font-semibold">
                        Login
                    </button>
                    <p className="text-center mt-4 text-gray-600">
                        Don't have an account?{' '}
                        <button 
                            onClick={() => navigate('/register')}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Register here
                        </button>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default Login;

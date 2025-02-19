import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email: formData.email,
                password: formData.password
            });
            const { token, result } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            alert('Login failed. Please check your credentials and try again.');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-3xlw-full max-w-md overflow-hidden">
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all font-semibold mt-4"
                        >
                            Login
                        </button>

                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-4 text-gray-500">or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                       

                        <p className="text-center mt-6 text-gray-600">
                            Don't have an account?{' '}
                            <button
                                onClick={() => navigate('/signup')}
                                className="text-red-600 hover:text-red-700 font-semibold"
                            >
                                Register here
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

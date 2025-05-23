import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [registeredEmail, setRegisteredEmail] = useState('');

    useEffect(() => {
        // Fetch the registered email from the backend or local storage
        const fetchRegisteredEmail = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/registered-email');
                setRegisteredEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching registered email:', error);
            }
        };

        fetchRegisteredEmail();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if the email matches the registered email
        if (formData.email == registeredEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Email does not match. Please try again.',
            });
            navigate('/')
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email: formData.email,
                password: formData.password
            });
            const { token, result } = response.data;

            if (result && formData.email === result.email) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email address or password',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden">
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

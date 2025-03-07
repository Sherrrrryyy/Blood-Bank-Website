import React, { useContext, useState } from 'react'; // Importing useState

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThreeDots } from 'react-loader-spinner'; // Importing ThreeDots as Loader


import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NotificationContext } from '../context/NotificationContext';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const { addNotification } = useContext(NotificationContext);

    const [loading, setLoading] = useState(false); // Adding loading state

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone number is required'),
        bloodGroup: Yup.string().required('Blood group is required'),
        city: Yup.string().required('City is required'),
        role: Yup.string().required('Role is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const onSubmit = async (data) => {
        try {
            setLoading(true); // Set loading to true
            const response = await axios.post('http://localhost:5000/api/users/register', data); 

            setLoading(false); // Set loading to false after request
            const { token, result } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('result', JSON.stringify(result));
            navigate('/login');
            Swal.fire({
                title: 'Signup successful',
                text: 'Login to continue donating',
                icon: 'success',
            });
        } catch (error) {
            console.error('Registration failed:', error.response?.data?.message || error.message);
            addNotification('Registration failed. Please try again.', 'error');

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md overflow-hidden">
                <div className="p-8">

                        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
                            Create Account
                        </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    placeholder="john@example.com"
                                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    placeholder="••••••••"
                                    className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    {...register('phone')}
                                    placeholder="+92"
                                    className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Blood Group
                                </label>
                                <select
                                    id="bloodGroup"
                                    {...register('bloodGroup')}
                                    className={`w-full px-4 py-3 border ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white`}
                                >
                                    <option value="">Select Blood Group</option>
                                    {bloodGroups.map(group => (
                                        <option key={group} value={group}>{group}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    {...register('city')}
                                    placeholder="Karachi"
                                    className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Register as
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="donor"
                                        {...register('role')}
                                        value="Donor"
                                        className="mr-2"
                                        required
                                    />
                                    <label htmlFor="donor" className="mr-4">Donor</label>
                                    <input
                                        type="radio"
                                        id="patient"
                                        {...register('role')}
                                        value="Patient"
                                        className="mr-2"
                                        required
                                    />
                                    <label htmlFor="patient">Patient</label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all font-semibold mt-4"
                        >
                            Sign Up
                        </button>

                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-4 text-gray-500">or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                    </form>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={() => navigate('/login')}
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;

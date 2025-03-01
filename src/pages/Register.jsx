import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NotificationContext } from '../context/NotificationContext';
import { FaLock, FaClipboard } from 'react-icons/fa'; // Importing icons
import Swal from 'sweetalert2';

const Register = () => {
    const generatePassword = () => {
        let newPassword = "";
        let length = 12;

        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let number = "1234567890";
        let speChar = "!@#$%^&*()_/|}{[]?/><";

        const allChar = upperCase + lowerCase + number + speChar;

        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += speChar[Math.floor(Math.random() * speChar.length)];

        while (length > password.length) {
            password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        newPassword = password;
        setFormData({
            ...formData,
            password: newPassword
            // navigator.clipboard.writeText(formData.password);
        });
    };

    const copyToClipboard = () => {
        let passArea = document.getElementById("password");
        navigator.clipboard.writeText(passArea.value).then(() => {
            console.log('Password copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy password: ', err);
        });
    };


    const navigate = useNavigate();
    const { addNotification } = useContext(NotificationContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        bloodGroup: '',
        city: '',
        role: ''
    });

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
           console.log(response);
           
            const { token, result } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('result', JSON.stringify(result));

            // if (formData.role === 'Patient') {
            //     // Trigger notification for patient registration
            //     await axios.post('http://localhost:5000/api/notifications', {
            //         type: 'new_patient',
            //         resultId: result._id
            //     });
            //     addNotification('New patient needs blood!', result._id);
            // }
            navigate('/login');
            Swal.fire({
                title: 'Signup successful',
                text: 'Login to continue donating',
                icon: 'success',
            })
        } catch (error) {
            console.error('Registration failed:', error.response?.data?.message || error.message);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md overflow-hidden">
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
                        Create Account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="col-span-2">
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

                            <div className="col-span-2 relative">
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
                                    onClick={generatePassword}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all pr-10"
                                />
                                <FaClipboard className="absolute right-4 top-10 text-red-500 cursor-pointer" onClick={copyToClipboard} />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+92"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Blood Group
                                </label>
                                <select
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
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
                                    name="city"
                                    placeholder="Karachi"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                                        name="role"
                                        value="Donor"
                                        onChange={handleChange}
                                        className="mr-2"
                                        required
                                    />
                                    <label htmlFor="donor" className="mr-4">Donor</label>
                                    <input
                                        type="radio"
                                        id="patient"
                                        name="role"
                                        value="Patient"
                                        onChange={handleChange}
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

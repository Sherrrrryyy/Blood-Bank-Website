import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Donor'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            if (formData.role === 'Donor') {
              navigate('/donors');
            } else {
              // Trigger notification for patient registration
              await axios.post('http://localhost:5000/api/notifications', {
                type: 'new_patient',
                userId: user._id
              });
              addNotification('New patient registered');
              navigate('/login');
            }

        } catch(error) {
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
                                {/* Add your form fields here */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
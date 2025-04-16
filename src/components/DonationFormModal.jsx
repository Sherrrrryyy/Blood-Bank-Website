import React, { useState } from 'react';

const DonationFormModalUpdated = ({ onClose }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, number, address, bloodGroup });
        onClose(); // Close the modal after submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Donation Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Blood Group"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    />
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">Submit</button>
                        <button type="button" onClick={onClose} className="bg-gray-300 rounded-md px-4 py-2">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonationFormModalUpdated;

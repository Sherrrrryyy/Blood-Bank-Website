 import React from 'react';
import bloodDonationImage from '../assets/blood-donation.jpg'; // Assuming we'll add this image

const BloodDonationInfo = () => {
    return (
        <div className="bg-white w-full mx-auto py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img 
                        src={bloodDonationImage} 
                        alt="Blood Donation" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-red-700 mb-6">
                        Why is Blood Donation Important?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-black mr-2">1)</span>
                            <span>One donation can help up to three people in need of urgent blood transfusion.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-black mr-2">2)</span>
                            <span>Regular donation blackuces the risk of heart disease and keeps your body healthy.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-black mr-2">3)</span>
                            <span>Maintains adequate blood supply for accidents, surgeries, and medical conditions like cancer.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-black mr-2">4)</span>
                            <span>People with anemia, cancer, and blood disorders rely on regular blood transfusions.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-black mr-2">5)</span>
                            <span>Blood donation builds a strong community by helping those in medical emergencies.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-black mr-2">6)</span>
                            <span>The body naturally replaces donated blood within a few weeks, keeping you healthy.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BloodDonationInfo;

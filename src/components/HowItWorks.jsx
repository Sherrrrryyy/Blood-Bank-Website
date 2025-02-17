import React from 'react';

const HowItWorks = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
                    How Spleen Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-red-700 text-4xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Register</h3>
                        <p className="text-gray-600">Create your account to join our blood donation community</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-red-700 text-4xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Donate Blood</h3>
                        <p className="text-gray-600">Visit our centers and contribute to saving lives</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-red-700 text-4xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                        <p className="text-gray-600">Your donation helps patients in critical need</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);
  const { notifications } = useContext(NotificationContext);

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    console.log(getUser);

    if (getUser) {
      console.log('User exists');
      setIsUserExist(true);
    } else {
      console.log('User does not exist');
      setIsUserExist(false);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="rounded-full w-full">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-black text-2xl font-bold">
              Spleen
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-black hover:text-red-600 transition duration-300">Home</a>
            <a href="/about" className="text-black hover:text-red-600 transition duration-300">About</a>
            <a href="/donors" className="text-black hover:text-red-600 transition duration-300">Find a Donor</a>
            <a href="/chat" className="text-black hover:text-red-600 transition duration-300">Chat</a>
          </div>

          {/* Signup and Profile Icon */}
          <div className="flex items-center space-x-4">
            {!isUserExist && (
              <Link to="/signup" className="group relative inline-block text-sm font-medium text-black focus:ring-3 focus:outline-hidden">
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
                <span className="relative block border border-current bg-white px-8 py-3">SIGNUP</span>
              </Link>
            )}

            {isUserExist && (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button className="text-black hover:text-red-600 transition duration-300 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <button onClick={toggleDropdown} className="text-black hover:text-red-600 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-900 hover:bg-red-100">Profile</a>
                      <a href="/activities" className="block px-4 py-2 text-sm text-gray-900 hover:bg-red-100">Activities</a>
                      <a href="/logout" className="block px-4 py-2 text-sm text-gray-900 hover:bg-red-100">Logout</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black hover:text-red-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-black hover:text-red-600 hover:bg-white w-full transition duration-300">Home</a>
            <a href="/about" className="block text-black hover:text-red-600 hover:bg-white transition duration-300">About</a>
            <a href="/donors" className="block text-black hover:text-red-600 hover:bg-white transition duration-300">Donors List</a>
            <a href="/chat" className="block text-black hover:text-red-600 hover:bg-white transition duration-300">Chat</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

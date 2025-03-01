import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (e.g., remove token from local storage)
    localStorage.removeItem('userToken');
    // Redirect to login page
    navigate('/login');
  };

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='flex h-screen'>
      <div className='bg-gray-200 w-1/4 p-4'>
        <h2 className='text-lg font-bold mb-4'>Dashboard</h2>
        <ul>
          <li className='mb-2'>
            <Link to="/profile" className='text-blue-500'>Profile</Link>
          </li>
          <li className='mb-2'>
            <Link to="/activities" className='text-blue-500'>Activities</Link>
          </li>
          <li>
            <button onClick={handleLogout} className='text-red-500 mt-4'>Logout</button>
          </li>
        </ul>
      </div>
      <div className='bg-gray-300 flex-1 p-4'>
      </div>
    </div>
  );
}

export default Dashboard;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { NotificationProvider } from './context/NotificationContext.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DonationFrom from './pages/DonationFrom.jsx';

createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/donationForm" element={<DonationFrom />} />
      </Routes>
    </Router>
  </NotificationProvider>,
)

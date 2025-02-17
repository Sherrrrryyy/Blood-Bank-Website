import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import DonationRequest from './components/DonationRequest';
import Chat from './components/Chat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <App />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<DonationRequest />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  </StrictMode>,
)

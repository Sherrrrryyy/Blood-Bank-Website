import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import DonationRequest from './components/DonationRequest';
import Chat from './components/Chat';
import DonationForm from './pages/DonationForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<DonationRequest />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/DonationForm" element={<DonationForm />} />
      </Routes>
    </Router>
  </StrictMode>,
)

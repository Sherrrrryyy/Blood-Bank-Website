import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import DonationRequest from './components/DonationRequest'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    
    </>
  )
}

export default App

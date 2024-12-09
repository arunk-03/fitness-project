
// import './App.css'
import NavBar from './Components/NavBar'
// import Bottom from './Components/Bottom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import AboutPage from './Pages/AboutPage'
import Dashboard from './Pages/Dashboard'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
     
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
    </>
  )
}

export default App

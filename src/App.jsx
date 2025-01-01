
// import './App.css'
import NavBar from './Components/NavBar'
// import Bottom from './Components/Bottom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import AboutPage from './Pages/AboutPage'
import Dashboard from './Pages/Dashboard'
import ChatPage from './Pages/ChatPage'
import NutritionPlans from './Pages/NutritionPlans'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutPlans from './Pages/WorkoutPlans'


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
            <Route path="/workoutplans" element={<WorkoutPlans />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/nutritionplans" element={<NutritionPlans />} />
          </Routes>
        </main>
    </>
  )
}

export default App

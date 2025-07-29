import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import './App.css'
import AboutPage from './components/AboutPage'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App

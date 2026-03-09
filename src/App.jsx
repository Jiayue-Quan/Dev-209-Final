// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Profile from "./pages/Profile";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

 export default App

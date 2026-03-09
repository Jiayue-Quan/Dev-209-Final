import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<MainPage/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

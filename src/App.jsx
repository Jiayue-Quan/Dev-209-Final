import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<MainPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

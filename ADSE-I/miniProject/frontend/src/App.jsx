import React from 'react'
import Index from './Pages/Index'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import SignUp from './Pages/SignUp'

function App() {
  return (

    <>
    <Routes>
      <Route path='/home' element={<Index />} />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
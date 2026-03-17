import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import Widgets from './Pages/Widgets'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}/>
    </Routes>
  )
}

export default App
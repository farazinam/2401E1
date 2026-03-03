import React from 'react'
import AddPro from './Pages/AddPro'
import ViewPro from './Pages/ViewPro'
import UpdatePro from './Pages/UpdatePro'
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <nav>
      <NavLink to="/addPro">Add Product</NavLink>
      <NavLink to="/viewPro">View Product</NavLink>
    </nav>

    <Routes>
      <Route path="/addPro" element={<AddPro />} />
      <Route path="/viewPro" element={<ViewPro />} />
      <Route path="/update" element={<UpdatePro />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
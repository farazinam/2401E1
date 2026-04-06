import React from 'react'

import { Routes, Route } from 'react-router-dom'
import About from './UserPages/About'
import SignUp from './UserPages/SignUp'
import UserIndex from './UserPages/Index'
import AdminIndex from './AdminPages/Index'
import SignIn from './UserPages/SignIn'
import PrivateRoute from './PrivateRoute'

function App() {
  return (

    <>
    <Routes>
      <Route path='/userhome' element={
        <PrivateRoute>
          <UserIndex />
        </PrivateRoute>
      } />
      <Route path='/adminhome' element={
        <PrivateRoute>
          <AdminIndex />
        </PrivateRoute>
      } />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
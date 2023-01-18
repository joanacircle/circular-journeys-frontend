import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/User/Login/Login'
import Shop from './pages/Shop/Shop'
import Signup from './pages/User/Signup/Signup'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/blog' element={<Blog />} /> */}

      </Routes>
    </>
  )
}

export default App

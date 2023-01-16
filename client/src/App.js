import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Login from './pages/User/Login'

const App = () => {
  return (
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        {/* <Route path='/blog' element={<Blog />} /> */}

      </Routes>

  )
}

export default App

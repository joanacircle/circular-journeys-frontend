import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/User/Login/Login'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop/Shop'
import Blog from 'pages/Blog/Blog'
import { NotFound } from './pages/NotFound'
import { User } from './pages/User/User'
import Tour from 'pages/Tour/Tour'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path="member" element={<User />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

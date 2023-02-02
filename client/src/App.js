import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop/Shop'
import Blog from 'pages/Blog/Blog'
import MemberCenter from 'pages/User/MemberCenter/MemberCenter'
import { NotFound } from './pages/NotFound'
import { User } from './pages/User/User'
import Signup from 'pages/User/Signup/Signup'
import { ShoppingCart } from 'pages/ShoppingCart/ShoppingCart'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<ShoppingCart />} />

          <Route path='member' element={<User />}>
            {/* <Route index element={<Login />} />
            <Route path='login' element={<Login />} /> */}
          </Route>
          {/* <Route path='signup' element={<Signup />} />
          <Route path='/login' element={<Login />} /> */}


          <Route path='*' element={<NotFound />} />



          <Route path='/membercenter' element={<MemberCenter />} />
        </Route>
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

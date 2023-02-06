import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop/Shop'

import Blog from 'pages/Blog'
import UserBlog from 'pages/Blog/UserBlog'
import MemberCenter from 'pages/User/MemberCenter/MemberCenterMenu'

import { NotFound } from './pages/NotFound'
import { ShoppingCart } from 'pages/ShoppingCart/ShoppingCart'
import MemberSetting from 'pages/User/MemberCenter/Setting'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:memberId' element={<UserBlog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<ShoppingCart />} />

          <Route path='/member' element={<MemberCenter />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

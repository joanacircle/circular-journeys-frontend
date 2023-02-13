import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop/Shop'

import Blog from 'pages/Blog'
import UserBlog from 'pages/Blog/UserBlog'
import SinglePost from 'pages/Blog/SinglePost'
import SearchResult from 'pages/Blog/SearchResult'

import MemberCenter from 'pages/User/MemberCenter/MemberCenterMenu'
import { NotFound } from './pages/NotFound'
import { ShoppingCart } from 'pages/ShoppingCart/ShoppingCart'
import MemberSetting from 'pages/User/MemberCenter/Setting'
import LoginModal from 'pages/User/Login/LoginModal'
import DropdownMenu from 'pages/User/DropdownMenu/DropdownMenu'
import { UserContext } from 'hooks/UserContext'

const App = () => {
  const [context, setContext] = useState()
  return (
    <UserContext.Provider value={{ context, setContext }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/p123' element={<SinglePost />} />
            <Route path='/blog/t123' element={<SearchResult />} />
            <Route path='/blog/:memberId' element={<UserBlog />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<ShoppingCart />} />

            <Route path='/member' element={<MemberCenter />} />
            <Route path='login' element={<LoginModal />} />
            <Route path='dropdownMenu' element={<DropdownMenu />} />
            <Route path='memberSetting' element={<MemberSetting />} />

            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  )
}

export default App

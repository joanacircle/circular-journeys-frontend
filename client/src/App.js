import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop'
import { CartCountProvider } from 'components/ShoppingCart/CartCountProvider'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop/Shop'
import Blog from 'pages/Blog'
import UserBlog from 'pages/Blog/UserBlog'
import PostEditor from 'pages/Blog/PostEditor'
import EditPost from 'pages/Blog/EditPost'
import SinglePost from 'pages/Blog/SinglePost'
import NavResult from 'pages/Blog/NavResult'
import Tour from 'pages/Tour/Tour'
import TourMapPage from 'pages/Tour/TourMapPage'
import ProductDetail from 'pages/Shop/ProductDetail'
import Menu from 'pages/User/MemberCenter/Menu'
import { NotFound } from './pages/NotFound'
import MemberSetting from 'pages/User/MemberCenter/Setting'
import LoginModal from 'pages/User/Login/LoginModal'
import DropdownMenu from 'pages/User/DropdownMenu/DropdownMenu'

import useAuth from 'hooks/useAuth'
import Context from 'components/Context'
import ProtectedRouter from 'utils/ProtectedRouter'
import useModal from 'hooks/useModal'

const App = () => {
  const { isLogin, setIsLogin } = useAuth()
  const { modal, setModal } = useModal()

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Context.Provider value={{
        isLogin,
        setIsLogin,
        modal,
        setModal
      }} >
        <CartCountProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:memberId' element={<UserBlog />} />
              <Route path='/blog/editor/:memberId' element={<PostEditor />} />
              <Route path='/blog/edit/:postId' element={<EditPost />} />
              <Route path='/blog/post/:postId' element={<SinglePost />} />
              <Route path='/blog/tag/:tagId' element={<NavResult />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/shop/product/:p_id' element={<ProductDetail />} />
              <Route path='/tour' element={<Tour />} />
              <Route path='/tour/tourmappage' element={<TourMapPage />} />
              <Route path='member' element={
                <ProtectedRouter isLogin={isLogin}>
                  <Menu />
                </ProtectedRouter>
              } />
              <Route path='login' element={<LoginModal />} />
              <Route path='dropdownMenu' element={
                <ProtectedRouter isLogin={isLogin}>
                  <DropdownMenu />
                </ProtectedRouter>
              } />
              <Route path='memberSetting' element={
                <ProtectedRouter isLogin={isLogin}>
                  <MemberSetting />
                </ProtectedRouter>
              } />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='checkout' element={<Checkout />} />
          </Routes>
        </CartCountProvider>
      </Context.Provider>

    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    < Routes >
      <Route path='/' element={<Home />} />
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/blog' element={<Blog />} /> */}

      <Route path='/shop' element={<Shop />} />
    </Routes >

  )
}

export default App

import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRouter = ({ isLogin, children, redirectPath = '/' }) => {
  const { pathname } = useLocation()

  if (isLogin.userState && pathname === '/login') return <Navigate to={redirectPath} replace />
  if (!isLogin.userState) return <Navigate to={redirectPath} replace />

  return children
}

export default ProtectedRouter

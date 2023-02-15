import { useEffect, useState } from 'react'

export const useIsLoggedIn = () => {
  const [isLogin, setIsLogin] = useState()
  useEffect(() => {
    localStorage.getItem('token')
      ? setIsLogin({
        state: true,
        token: localStorage.getItem('token')
      })
      : setIsLogin({
        ...isLogin,
        state: false
      })
  }, [])
  return { isLogin }
}

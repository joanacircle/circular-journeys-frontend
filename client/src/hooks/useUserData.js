import { useState, useEffect } from 'react'

export const useUserData = (initData) => {
  const [data, setData] = useState()
  useEffect(() => {
    setData(initData)
  }, [])
  return [{ data }, setData]
}

import { useEffect, useState } from 'react'
import axios from 'axios'

const url = `${process.env.REACT_APP_DEV_URL}/user/userinfo`

export const userInfo = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  const fetchData = async () => {
    const result = await axios.post(url, { token })
    const data = result.data
    setUserData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { userData }
}

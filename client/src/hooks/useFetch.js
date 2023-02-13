import { useState, useEffect } from 'react'
import axios from 'axios'


export const useFetch = (initUrl, initData) => {
  const [state, setState] = useState({
    data: initData,
    url: initUrl,
    isError: false,
    isLoading: false
  })
  useEffect(() => {
    const getApi = async () => {
      setState({
        ...state,
        isLoading: true,
        isError: false
      })
      try {
        const result = await axios.post(state.url)
        setState({
          ...state,
          data: result.data
        })
      } catch (error) {
        setState({
          ...state,
          isError: true
        })
      }
      setState({
        ...state,
        isLoading: false
      })
    }
    getApi()
  }, [])
  return [{ state }, setState]
}

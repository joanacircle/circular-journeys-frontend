import React, { useState } from 'react'

export const useAlert = () => {
  const [alert, setAlert] = useState({
    state: false,
    message: ''
  })
  return ({ alert, setAlert })
}

import { useState } from 'react'

const useModal = () => {
  const [modal, setModal] = useState(false)
  return { modal, setModal }
}

export default useModal

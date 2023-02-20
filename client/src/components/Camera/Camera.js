import React, { useRef } from 'react'
import styled from 'styled-components'
import { AiFillCamera } from 'react-icons/ai'
import axios from 'axios'

const FileInput = styled.input`
  display:none;
`
const CustomButton = styled.button`
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
`
const CustomFileInput = ({ picture, setPicture }) => {
  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const handlePictureChange = (event) => {
    const imageFile = event.target.files[0]
    setPicture(imageFile)
  }

  const handleSendFile = async () => {
    const token = localStorage.getItem('token')
    const imageData = new FormData()
    imageData.append('file', picture)
    const req = await axios.post('http://localhost:3001/user/upload', { imageData, token })
    const res = req.data
    console.log(res)
  }

  return (
    <>
      <CustomButton onClick={handleButtonClick}>
        <AiFillCamera size={25} />
      </CustomButton>
      <FileInput
        type='file'
        name='picture'
        id='picture'
        ref={fileInputRef}
        accept='image/*'
        onChange={handlePictureChange}
      />
    </>
  )
}

export default CustomFileInput

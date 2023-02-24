import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import firebase from '../Firebase/firebase'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// icon
import { HiOutlinePhoto } from 'react-icons/hi2'
import { MdDone, MdClear } from 'react-icons/md'
import { userInfo } from 'components/userInfo/UserInfo'

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
  const { userData } = userInfo()

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const handlePictureChange = (event) => {
    const imageFile = event.target.files[0]
    setPicture(imageFile)

  }

  // handle picture submit
  const handlePictureSubmit = () => {
    const documentRef = firebase.firestore().collection('picture').doc()
    const fileRef = firebase.storage().ref('user-images/' + documentRef.id)
    const metadata = { contentType: picture.type }
    const url = `${process.env.REACT_APP_DEV_URL}/user/picture`
    const { member_id } = userData
    fileRef.put(picture, metadata)
      .then(() => {
        fileRef.getDownloadURL()
          .then(async imageUrl => {
            await axios.post(url, { imageUrl, member_id })
            documentRef.set({
              imageUrl,
              createdAt: firebase.firestore.Timestamp.now()
            })
              .then(() => {
                location.reload()
              })
          })
      })
  }

  // handle clear picture
  const handleClearPicture = () => (
    setPicture(null)
  )

  return (
    <>
      <CustomButton onClick={handleButtonClick}>
        {!picture && <HiOutlinePhoto size={25} />}
      </CustomButton>
      {
        picture &&
        (
          <>
            <MdDone className='picture-option' size={25} color='green' onClick={handlePictureSubmit} />
            <MdClear className='picture-option' size={25} color='red' onClick={handleClearPicture} />
          </>
        )
      }
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

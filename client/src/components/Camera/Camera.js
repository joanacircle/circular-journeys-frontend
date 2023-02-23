import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import firebase from '../Firebase/firebase'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// icon
import { HiOutlinePhoto } from 'react-icons/hi2'
import { MdDone, MdClear } from 'react-icons/md'

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

  // TODO:
  useEffect(() => {
    firebase.firestore().collection('picture').get()
      .then(collectionSnapshot => {
        const data = collectionSnapshot.docs
        console.log(data)
      })
  }, [])

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
    fileRef.put(picture, metadata)
      .then(() => {
        fileRef.getDownloadURL()
          .then(imageUrl => {
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

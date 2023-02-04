import React from 'react'
import { Link, useParams } from 'react-router-dom'

const UserBlog = () => {
  const { memberId } = useParams()
  console.log(memberId)
  return (
    <div>UserBlog</div>
  )
}

export default UserBlog

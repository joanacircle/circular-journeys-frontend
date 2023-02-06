import React from 'react'
import { Link } from 'react-router-dom'

import './SinglePost.scss'
import B001 from 'images/Blog/B001.jpeg'

const SinglePost = () => {
  const memberName = 'CircleChang'
  const memberId = '123'
  return (
    <>
    <div>
      <div className="post-container">
        <div className="page-body">
          <div className="post-header">
            <h2>文章標題文章標題文章標題文章標題文章標題</h2>
              <h5>BY:
                <Link to={`blog/${memberId}`}> {memberName}</Link>
                </h5>
            <div className='member-avatar'>
              <img src="" alt="avatar" />
            </div>
          </div>
          <div className="post-img">
            <img src={B001} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SinglePost

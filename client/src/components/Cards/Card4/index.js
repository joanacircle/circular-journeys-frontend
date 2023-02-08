import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

import './Card4.scss'


const Card4 = (props) => {
  return (
    <>
    <div className="card4">
      <div className="card-header">
        <div className='post-meta'>
          <div className="post-tags">
            <ul>
              <Link to={`/blog/${props.tagId}`}>
                <li># {props.tags}</li>
              </Link>
              <Link to={`/blog/${props.tagId}`}>
                <li># {props.tags}</li>
              </Link>
              <Link to={`/blog/${props.tagId}`}>
                <li># {props.tags}</li>
              </Link>
            </ul>
          </div>
          <div className='post-likes'>
            <AiOutlineHeart size={35} className='heart-icon'/>
          </div>
        </div>
        <h2>{props.title}</h2>
      </div>

      <Link to={`/blog/${props.postId}`}>
        <div className="img-container">
            <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
        </div>
      </Link>

      <div className="card-footer">
        <div className="post-meta2">
          <div className="create-at-group">
            <AiOutlineCalendar
            className='calendar-icon'
            size={25} />
            <p>{props.createAt}</p>
          </div>
          <div className="post-likes-group">
            <AiOutlineHeart size={25} className='heart-icon'/>
            <p>{props.likes}</p>
          </div>
        </div>
        <p className='post-content'>{props.postContent}</p>
        <Link to={props.linkToPost}>
          <div className="read-more">
            <p>閱讀更多</p>
            <HiOutlineArrowLongRight size={25} className='right-icon'/>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Card4

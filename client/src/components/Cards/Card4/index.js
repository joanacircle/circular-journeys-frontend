import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineCalendar } from 'react-icons/ai'

import './Card4.scss'


const Card4 = (props) => {
  return (
    <>
    <div className="card4">
      <div className="post-header">
        <h2>{props.title}</h2>
        <div className='post-meta'>
          <div className='post-likes'>
            <AiOutlineHeart size={40} className='heart-icon'/>
            <p>{props.likes}</p>
          </div>
          <div className="post-tags">
            <ul>
              <li># {props.tags}</li>
              <li># {props.tags}</li>
              <li># {props.tags}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="img-container">
        <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
      </div>

      <div className="post-footer">
        <div className="create-at-group">
          <AiOutlineCalendar
          className='calendar-icon'
          color='#B7B7B7' size={25} />
          <p className='create-at'>{props.createAt}</p>
        </div>
        <p className='post-content'>{props.postContent}</p>
      </div>
    </div>
    </>
  )
}

export default Card4

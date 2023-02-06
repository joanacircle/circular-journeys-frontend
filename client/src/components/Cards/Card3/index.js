import React from 'react'
import { Link } from 'react-router-dom'
import './Card3.scss'

import { AiOutlineHeart } from 'react-icons/ai'

const Card3 = (props) => {
  const TagsValue = props.tags
  return (
    <>
      <div className="card3">
        <Link to={`blog/${props.postId}`}>
          <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
        </Link>
        <div className="card-caption">
          <div className='card-header d-flex'>
            <ul className='blog-tags d-flex'>
              {TagsValue.map((v, i) => {
                return (
                  <li key={i}>
                    <Link to={`blog/${props.tagId}`}># {v}</Link>
                  </li>
                )
              })}
            </ul>
            <ul className='blog-avatar'>
              <Link to={`/blog/${props.memberId}`}>
                <li>{props.avatar}</li>
              </Link>
            </ul>
          </div>
          <div className='card-body'>
            <h4>{props.title}</h4>
          </div>
          <div className='card-footer d-flex'>
            <div>
              {props.createAt}
            </div>
            <div className='d-flex'>
              <AiOutlineHeart size={25} className='heart-icon'/>
              <p>{props.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3

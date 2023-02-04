import React from 'react'
import './Card3.scss'

import { AiOutlineHeart } from 'react-icons/ai'

const Card3 = (props) => {
  return (
    <>
      <div className="card3">
        <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
        <div className="card-caption">
          <div className='card-header d-flex'>
            <ul className='blog-tags d-flex'>
              <li># {props.tags}</li>
              <li># {props.tags}</li>
            </ul>
            <ul className='blog-avatar'>
              <li>{props.avatar}</li>
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

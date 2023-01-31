import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './Card2.scss'

const Card2 = (props) => {
  return (
    <>
    <div className="card2">
      <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
      <div className="card-body">
        <ul className='blog-tags d-flex'>
              <li>{props.tags}</li>
              <li>{props.tags}</li>
        </ul>
          <h4 className='card-title'>
            {props.title}
          </h4>
        <div className='card-likes d-flex'>
              <AiOutlineHeart size={25} className='heart-icon'/>
              <p>{props.likes}</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Card2

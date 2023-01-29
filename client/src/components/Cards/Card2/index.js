import React from 'react'
import './Card2.scss'

const Card2 = (props) => {
  return (
    <div className="card2">
      <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
        <button>{props.tags}</button>
        <h4>{props.title}</h4>
        <div className='article-likes'>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>

  )
}

export default Card2

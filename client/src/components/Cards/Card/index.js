import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
          <h5>{props.title}</h5>
      </div>
    </div>

  )
}

export default Card

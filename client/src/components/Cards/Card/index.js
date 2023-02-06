import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <Link to={`/blog/${props.postId}`}>
          <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
        </Link>
        <div className="card-body">
          <h5>{props.title}</h5>
        </div>
      </div>
    </>

  )
}

export default Card

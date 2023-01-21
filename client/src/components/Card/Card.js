import React from 'react'
import { Title, Theme } from 'Styles/styled'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
          <Title size={Theme.H5} color={Theme.Black} family="Sigmar One" class="card-title">{props.title}</Title>
      </div>
    </div>

  )
}

export default Card

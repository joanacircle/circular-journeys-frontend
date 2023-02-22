import { Link } from 'react-router-dom'
import './Card.scss'

const Card = (props) => {
  const { postId, img, title } = props
  return (
    <>
      <div className="card">
        <Link to={`/blog/post/${postId}`}>
          <div className="card-img" dangerouslySetInnerHTML={{
            __html: img
          }} />
        </Link>
        <div className="card-body">
          <h5>{title}</h5>
        </div>
      </div>
    </>
  )
}

export default Card

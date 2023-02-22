import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import shortid from 'shortid'
import './Card2.scss'

const Card2 = (props) => {
  // props.tags 傳入 object
  const { postId, img, tags, title, likes } = props
  return (
    <>
    <div className="card2">
      <Link to={`/blog/post/${postId}`}>
        <div className="card-img" dangerouslySetInnerHTML={{
          __html: img
        }} />
      </Link>
      <div className="card-body">
        <ul className='blog-tags'>
        {/* 問題:Warning: Each child in a list should have a unique "key" prop. */}
        {!tags
        ? <div></div>
        : Object.entries(tags).slice(0, 2).map(([key, value]) => (
            <Link to={`/blog/tag/${key}`} key={shortid.generate()}>
              <li># {value}</li>
            </Link>
          ))
        }
        </ul>
          <h5 className='card-title'>
            {title}
          </h5>
        <div className='card-likes d-flex'>
          <AiOutlineHeart size={25} className='heart-icon'/>
          {props.likes === 0
          ? <p></p>
          : <p>{likes}</p>
          }
        </div>
      </div>
    </div>
    </>

  )
}

export default Card2

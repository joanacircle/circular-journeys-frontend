import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import shortid from 'shortid'
import './Card3.scss'

const Card3 = (props) => {
  // props.tags 傳入 object
  const { postId, img, tags, memberId, memberName, title, createAt, likes } = props
  return (
    <>
      <div className="card3">
        <Link to={`/blog/post/${postId}`}>
          <div className="card-img" dangerouslySetInnerHTML={{
            __html: img
          }} />
        </Link>
        <div className="card-caption">
          <div className='card-header d-flex'>
            <ul className='blog-tags d-flex'>
              {!tags
              ? <></>
              : Object.entries(tags).slice(0, 2).map(([key, value]) => (
                <Link to={`/blog/tag/${key}`} key={shortid.generate()}>
                  <li># {value}</li>
                </Link>
              ))
              }
            </ul>
            <ul className='blog-avatar d-flex'>
              <Link to={`/blog/${memberId}`}>
                <li>{memberName}</li>
              </Link>
            </ul>
          </div>
          <div className='card-body'>
            <h4>{title}</h4>
          </div>
          <div className='card-footer d-flex'>
            <div>
              {createAt}
            </div>
            <div className='d-flex'>
              <AiOutlineHeart size={25} className='heart-icon'/>
              {props.likes === 0
              ? <p></p>
              : <p>{likes}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3

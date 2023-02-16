import { Link } from 'react-router-dom'
import './Card3.scss'

import { AiOutlineHeart } from 'react-icons/ai'

const Card3 = (props) => {
  const tag = props.tags // 傳入 object
  return (
    <>
      <div className="card3">
        <Link to={`/blog/post/${props.postId}`}>
          <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
        </Link>
        <div className="card-caption">
          <div className='card-header d-flex'>
            <ul className='blog-tags d-flex'>
              {!tag
              ? <li>Loading...</li>
              : Object.entries(tag).slice(0, 2).map(([key, value]) => (
                <Link to={`/blog/tag/${key}`} key={key}>
                  <li># {value}</li>
                </Link>
              ))
              }
            </ul>
            <ul className='blog-avatar d-flex'>
              <Link to={`/blog/${props.memberId}`}>
                <li>{props.memberName}</li>
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
              {props.likes === 0
              ? <p></p>
              : <p>{props.likes}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3

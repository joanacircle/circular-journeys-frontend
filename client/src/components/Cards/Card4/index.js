import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

import './Card4.scss'


const Card4 = (props) => {
  const tag = props.tag // 傳入 object
  return (
    <>
    <div className="card4">
      <div className="card-header">
        <div className='post-meta'>
          <div className="post-tags">
            {/* 取前 3 個 tag */}
            <ul>
              {!tag
              ? <li>Loading...</li>
              : Object.entries(tag).slice(0, 3).map(([key, value]) => (
                  <Link to={`/blog/tag/${key}`} key={key}>
                    <li># {value}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className='post-likes'>
            <AiOutlineHeart size={35} className='heart-icon'/>
          </div>
        </div>
        <h2>{props.title}</h2>
      </div>

      <Link to={`/blog/post/${props.postId}`}>
        <div className="img-container">
          <img src={require(`images/Blog/${props.imgSrc}`)} className="card-img" alt={props.imgAlt} />
        </div>
      </Link>

      <div className="card-footer">
        <div className="post-meta2">
          <div className="create-at-group">
            <AiOutlineCalendar
            className='calendar-icon'
            size={25} />
            <p>{props.createAt}</p>
          </div>
          <div className="post-likes-group">
            <AiOutlineHeart size={25} className='heart-icon'/>
            {props.likes === 0
            ? (<p>{''}</p>)
            : (<p>{props.likes}</p>)
            }
          </div>
        </div>
        <p className='post-content'>{props.postContent}</p>
        <Link to={`/blog/post/${props.postId}`}>
          <div className="read-more">
            <p>閱讀更多</p>
            <HiOutlineArrowLongRight size={25} className='right-icon'/>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Card4

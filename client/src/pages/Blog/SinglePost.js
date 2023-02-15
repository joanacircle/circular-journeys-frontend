import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineCalendar } from 'react-icons/ai'

import './SinglePost.scss'
import Card2 from 'components/Cards/Card2'
import B001 from 'images/Blog/B001.jpg'

const SinglePost = () => {
  const [post, setPost] = useState([{}])
  const { postId } = useParams()
  const [url, setUrl] = useState(
    `http://localhost:3001/blog/post/${postId}`
  )
  useEffect(() => {
    getData()
  }, [url])
  function getData() {
    fetch(url)
    .then(r => r.json())
    .then((data) => {
      setPost(data)
    })
    .catch(error => console.log(error))
  }

  return (
    <>
    {!post
    ? (<div>Loading...</div>)
    : (
      <div>
      <div className="post-container">
        <div className="page-body">
          <div className="post-header">
            <h2>{post[0].post_title}</h2>
            <ul className='tags-section'>
              {!post[0].tag
              ? <li>Loading...</li>
              : Object.entries(post[0].tag).map(([key, value]) => (
                <Link to={`/blog/tag/${key}`} key={key}>
                  <li># {value}</li>
                </Link>
                ))
              }
            </ul>
            <h5>BY:
              <Link to={`/blog/${post[0].member_id}`}>{post[0].last_name}</Link>
            </h5>
            <div className='member-avatar'>
              <img src="" alt="avatar" />
            </div>
          </div>
          <div className="head-img">
            <img src={B001} alt="" />
          </div>
          <div className="post-body">
            <div className='post-meta'>
              <div className="createAt">
                <AiOutlineCalendar size={25} className='icon'/>
                <p>{post[0].create_at}</p>
              </div>
              <div className="post-likes-group">
                  <AiOutlineHeart size={25} className='heart-icon'/>
                  {post[0].total_likes === 0
                  ? (<p>{''}</p>)
                  : (<p>{post[0].total_likes}</p>)
                  }
              </div>
            </div>
            <p className='post-content'>
              {post[0].post_content}
            </p>
          </div>
          <div className="post-footer">
            <AiOutlineHeart className='heart-icon' size={40}/>
            <p>
              即將要出發去旅行了嗎？ 按「喜歡」集中儲存您絕佳的想法。
            </p>
            TODO
            <p>
              <Link to='#'>前一篇 </Link>
              |
              <Link to='#'> 後一篇</Link>
            </p>
          </div>
          TODO
          {/* <div className="related-post">
            <Card2
              tags={tags}
              postId={postId}
              imgSrc={imgSrc[0]}
              imgAlt={imgAlt[0]}
              tagId={tagId}
              title={title}
              likes={likes}/>
            <Card2
              tags={tags}
              postId={postId}
              imgSrc={imgSrc[1]}
              imgAlt={imgAlt[1]}
              tagId={tagId}
              title={title}
              likes={likes}/>
            <Card2
              tags={tags}
              postId={postId}
              imgSrc={imgSrc[2]}
              imgAlt={imgAlt[2]}
              tagId={tagId}
              title={title}
              likes={likes}/>
            <Card2
              tags={tags}
              postId={postId}
              imgSrc={imgSrc[3]}
              imgAlt={imgAlt[3]}
              tagId={tagId}
              title={title}
              likes={likes}/>
          </div> */}
        </div>
      </div>
    </div>
    )
    }
    </>
  )
}

export default SinglePost

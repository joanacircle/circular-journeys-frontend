import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineCalendar } from 'react-icons/ai'


import './SinglePost.scss'
import Card2 from 'components/Cards/Card2'
import B001 from 'images/Blog/B001.jpeg'
import B002 from 'images/Blog/B002.jpeg'
import B003 from 'images/Blog/B003.jpeg'
import B004 from 'images/Blog/B004.jpeg'

const SinglePost = () => {
  const memberName = 'CircleChang'
  const memberId = '123'
  const tags = ['旅遊', '旅遊', '旅遊']
  const tagId = 't123'
  const postContent = `高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。`
  const postId = 'p123'
  const imgSrc = [B001, B002, B003, B004]
  const imgAlt = [B001, B002, B003, B004]
  const likes = '10k'
  const title = '假設文章標題上限為二十個字應該可以吧嗎吧'
  return (
    <>
    <div>
      <div className="post-container">
        <div className="page-body">
          <div className="post-header">
            <h2>文章標題文章標題文章標題文章標題文章標題</h2>
            <ul className='tags-section'>
              {tags.map((v, i) => {
                return (
                  <Link to={`/blog/${tagId}`} key={i}>
                    <li># {v}</li>
                  </Link>
                )
              })}
            </ul>
            <h5>BY:
              <Link to={`/blog/${memberId}`}> {memberName}</Link>
            </h5>
            <div className='member-avatar'>
              <img src="" alt="avatar" />
            </div>
          </div>
          <div className="head-img">
            <img src={B001} alt="" />
          </div>
          <div className="post-body">
            <div className="createAt">
              <AiOutlineCalendar size={25} className='icon'/>
              <p>2023/02/07</p>
            </div>
            <p className='post-content'>
              {postContent}
              <br />
              <br />
              {postContent}
              <br />
              <br />
              {postContent}
              <br />
              <br />
              {postContent}
              <br />
              <br />
            </p>
          </div>
          <div className="post-footer">
            <AiOutlineHeart className='heart-icon' size={40}/>
            <p>
              即將要出發去旅行了嗎？ 按「喜歡」集中儲存您絕佳的想法。
            </p>
            <p>
              <Link to='#'>前一篇</Link>
               ｜
              <Link to='#'>後一篇</Link>
            </p>
          </div>
          <div className="related-post">
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
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SinglePost

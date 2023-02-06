import React from 'react'
import { Link } from 'react-router-dom'

import './SinglePost.scss'
import B001 from 'images/Blog/B001.jpeg'

const SinglePost = () => {
  const memberName = 'CircleChang'
  const memberId = '123'
  const tags = ['旅遊', '旅遊', '旅遊']
  const tagId = '1'
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
                  <Link to={`/blog/{tagId}`} key={i}>
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
            <p>
              高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。
              <br />
              <br />
              高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。
              <br />
              <br />
              高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。
              <br />
              <br />
              高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。
              <br />
              <br />
              高雄是位於台灣南部的現代化城市，這個城市同時融合了古老的歷史和現代的文化，還有全台灣最大的夜市。 千萬別錯過壯觀的佛光山，還有佛光山大佛堂。 統一夢時代購物中心是台灣最大的購物中心，購物中心的頂樓還有摩天輪。 你可驅車前往墾丁國家公園，一覽墾丁美麗的地形風景。 搭船到旗津吃海鮮。
            </p>
          </div>
          <div className="post-footer">
            <p>即將要出發去旅行了嗎？ 按「喜歡」集中儲存您絕佳的想法。</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SinglePost

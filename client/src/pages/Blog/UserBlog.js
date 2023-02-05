import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'

import './UserBlog.scss'
import Card4 from 'components/Cards/Card4'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
import B001 from 'images/Blog/B001.jpeg'

const UserBlog = () => {
  const { memberId } = useParams()
  const memberName = 'CircleChang'
  // Card4 props:
  const linkToTags = '#'
  const tags = '旅遊'
  const title = '高雄一日遊-駁二、愛河、瑞豐夜市'
  const linkToPost = '#'
  const imgSrc = B001
  const imgAlt = 'img'
  const createAt = '2023/02/02'
  const likes = '10k'
  const postContent = `今天我們先去高雄的駁二藝術特區裡有許多精彩的藝術展覽，我們看了很久才走出來，我們沿著小路漫步，欣賞著各式各樣的藝術作品。接著，我們走到了愛河畔，沿著小徑悠閒地散步，看著河水悠悠地流過。
  最後，我們到了瑞豐夜市，吃了許多美味的小吃。首先，我們品嘗了一道傳統的台灣小吃——臭豆腐。臭豆腐的味道香醇，口感酥脆，而且很有嚼勁。接著，我們點了一道高雄特色的海鮮炒麵，裡面有豐富的海鮮，搭配著Q彈的麵條，吃起來非常美味。最後，我們點了一杯珍珠奶茶，清新的口感搭配著珍珠的Q彈，讓我們在逛夜市的同時又能消暑。整個晚上，我們品嘗了許多美味的小吃，並且在瑞豐夜市的氣氛中度過了一個愉快的夜晚。`
  // TagsCategory props:
  const tagsCategory = ['左營', '高雄港', '壽山', '旗津', '一日遊', '夜市', '新開幕', '熱門打卡', '親子餐廳']


  return (
    <>
    <div>
      <div className='userblog-container'>
        <div className='userblog-body'>
          <div className='post-container'>
              <h2 className='userblog-h2'>{memberName}</h2>
              <div className='userblog-nav'>
                <ul>
                  <Link to='#'>
                    <li className='Active'>主頁</li>
                  </Link>
                  <Link to='#'>
                    <li>喜歡的文章</li>
                  </Link>
                </ul>
              </div>
              <Card4
                linkToTags={linkToTags}
                tags={tags}
                title={title}
                linkToPost={linkToPost}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                createAt= {createAt}
                likes={likes}
                postContent={postContent}/>

              <Card4
                linkToTags={linkToTags}
                tags={tags}
                title={title}
                linkToPost={linkToPost}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                createAt= {createAt}
                likes={likes}
                postContent={postContent}/>

              <Card4
                linkToTags={linkToTags}
                tags={tags}
                title={title}
                linkToPost={linkToPost}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                createAt= {createAt}
                likes={likes}
                postContent={postContent}/>

              <div className='userblog-pagination'>
                <Pagination />
              </div>

          </div>

          <div className='userblog-aside'>
            <div className="userblog-aside-item">
              <div className='member-avatar'>
                <img src="" alt="avatar" />
                <h4>{memberName}</h4>
              </div>
            </div>
            <div className='userblog-aside-item'>
              <form className='blog-search'>
                <input className='blog-input' placeholder="Search">
                </input>
                <button className='blog-button' type="submit">
                  <BiSearch className='search-icon'/>
                </button>
              </form>
            </div>
            <div className='userblog-aside-item'>
              <BlogCategory />
            </div>
            <div className='userblog-aside-item'>
              <TagsCategory tags={tagsCategory}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default UserBlog

import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './LikeHistory.scss'
import axios from 'axios'
import dayjs from 'dayjs'

// context
import Context from 'components/Context'

// url
const likedURL = `${process.env.REACT_APP_DEV_URL}/userposts/liked`

const LikeHistoryPage = () => {
  const { isLogin } = useContext(Context)
  const [posts, setPosts] = useState()
  const navigate = useNavigate()

  // get user liked posts
  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const result = await axios.post(likedURL, { member_id: isLogin.userData.member_id })
        const { data } = result
        console.log(data)
        setPosts(data)
      } catch (err) {
        console.log(err)
      }
    }
    getUserPosts()
  }, [])

  // handle post link
  const handlePostLink = (postId) => (
    navigate(`/blog/post/${postId}`)
  )


  return (
    <div className="top-place animate__animated animate__fadeInDown animate__faster">
      <h3>我的收藏</h3>
      <hr />
      <div className='table-place'>
        {
          posts &&
          <>
            <hr />
            <table>
              <thead>
                <tr>
                  <td>貼文標題</td>
                  <td>貼文內容</td>
                  <td>貼文時間</td>
                </tr>
              </thead>
              <tbody>
                {
                  posts.map(post => (
                    <tr
                      className='tr-hover-post'
                      key={post.post_id}
                      onClick={() => handlePostLink(post.post_id)}
                    >
                      <th>{post.post_title}</th>
                      <th>
                        <div className='post-context-place'
                          dangerouslySetInnerHTML={{ __html: post.cover }}
                        />
                      </th>
                      <th>{dayjs(post.create_at).format('YYYY-MM-DD HH:mm')}</th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
        }
      </div>
    </div>
  )
}

export default LikeHistoryPage

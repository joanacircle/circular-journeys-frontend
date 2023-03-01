import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './TagsCategory.scss'

const TagsCategory = (props) => {
  const [tags, setTags] = useState()
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/tag`)
    .then(r => { setTags(r.data) })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    <h4>探索</h4>
    <ul className='blog-aside-tags'>
      {!tags
      ? <></>
      : tags.map((v, i) =>
        (
          <Link to={`/blog/tag/${v.tag_id}`} key={v.tag_id}>
            <li># {v.tag}</li>
          </Link>
        )
        )
      }
    </ul>
    </>
  )
}

export default TagsCategory

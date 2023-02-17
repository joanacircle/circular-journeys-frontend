import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './SearchResult.scss'
import { NotFound } from 'pages/NotFound'

const SearchResult = () => {
  const [id, setId] = useState([])
  const { tagId } = useParams()

  // 驗證 parameter的 tagId是否存在於資料庫
  useEffect(() => { fetcher() }, [])
  function fetcher() {
    fetch(`http://localhost:3001/blog/api`)
    .then(r => r.json())
    .then(data => {
      const tId = data.tag[0].tag_id
      setId(tId)
    })
  }

  if (id.includes(tagId)) {
    return (
      <div>SearchResult</div>
    )
  } else {
    return (<NotFound/>)
  }
}

export default SearchResult

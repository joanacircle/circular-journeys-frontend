import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCategory.scss'

const BlogCategory = () => {
  return (
    <>
    <h4>分類</h4>
    <ul className='blog-categories'>
      {/* TODO */}
      <li>
        <Link to='#' title='熱門'>熱門</Link>
      </li>
      <li >
        <Link to='#' title='最新'>最新</Link>
      </li>
      <li >
        <Link to='#' title='美食'>美食</Link>
      </li>
      <li>
        <Link to='#' title='景點'>景點</Link>
      </li>
      <li>
        <Link to='#' title='住宿'>住宿</Link>
      </li>
    </ul>
    </>
  )
}

export default BlogCategory

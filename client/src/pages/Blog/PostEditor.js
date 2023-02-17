import React from 'react'

const PostEditor = () => {
  return (
    <>
    <div className='edit-container'>
      <div className="edit-wrapper">
        <form className="edit-form-group">
          <div className="edit-form-group">
            <label htmlFor="title">文章標題</label>
            <input type="text" name='title' placeholder='請輸入文章標題' />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default PostEditor

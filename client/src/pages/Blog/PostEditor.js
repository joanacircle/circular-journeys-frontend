import React from 'react'

const PostEditor = () => {
  return (
    <>
    <div className='edit-container'>
      <div className="edit-wrapper">
        <form className="edit-form-group">
          <div className="edit-form-group">
            <label htmlFor="title">文章標題</label>
<<<<<<< HEAD
            <input type="text" name='title' placeholder='文章標題...' className='' required/>
          </div>

          <div className="edit-form-group">
            <label htmlFor="tag">文章關鍵字</label>
            <input type="text" name='tag' placeholder='文章關鍵字...' className='' required/>
          </div>

          <div className="edit-form-group">
            <label htmlFor="tag">文章關鍵字</label>
            <textarea name="tag" id="" cols="30" rows="30" placeholder='文章內文...'></textarea>
=======
            <input type="text" name='title' placeholder='請輸入文章標題' />
>>>>>>> main
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default PostEditor

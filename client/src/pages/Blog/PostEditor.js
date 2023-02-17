import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import './PostEditor.scss'

const PostEditor = () => {
  const [form, setForm] = useState({ title: '', tag: '', content: '' })
  const handleChange = (e) => {
    // const name = e.target.name
    // const value = e.target.value
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

  }
  console.log(form)

  return (
    <>
    <div className='edit-container'>
      <div className="edit-wrapper">
        <h2>新增文章</h2>
        <form className="edit-form-group"
          onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
              }}>
          <div className="form-item">
            <label htmlFor="title">文章標題</label>
            <input
            type="text" name='title' className=''
            value={form.title} onChange={handleChange}
            placeholder='文章標題...' required/>
          </div>

          <div className="form-item">
            <label htmlFor="tag">文章關鍵字</label>
            <input
            type="text" name='tag'
            className=''
            value={form.tag}
            onChange={handleChange}
            placeholder='文章關鍵字...' required/>
          </div>

          <div className="form-item">
            <label htmlFor="content">文章內文</label>
            <CKEditor
              editor={ ClassicEditor }
              data="<p>Hello from CKEditor 5!</p>"
              // onReady={ editor => {
              //     // You can store the "editor" and use when it is needed.
              //     console.log('Editor is ready to use!', editor)
              // } }
              onChange={ (event, editor) => {
                const data = editor.getData()
                setForm({ ...form, content: [data] })
                  console.log({ event, editor, data })
                  console.log(form)
              } }
              // onBlur={ (event, editor) => {
              //     console.log('Blur.', editor)
              // } }
              // onFocus={ (event, editor) => {
              //     console.log('Focus.', editor)
              // } }
                />
            {/* <textarea
            name="content"
            value={form.content} onChange={handleChange}
            id=""
            cols="100" rows="30"
            placeholder='文章內文...'></textarea> */}
          </div>

          <div className="form-item">
            <input
            type="submit"
            name='submit'
            value={'完成'}
            className='submit-btn'/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default PostEditor

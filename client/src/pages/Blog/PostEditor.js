import { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './PostEditor.scss'

const PostEditor = () => {
  const { memberId } = useParams()
  const [tag, setTag] = useState([])
  const [form, setForm] = useState({ memberId: `${memberId}`, title: '', tags: [], content: '' })
  const category = ['美食', '景點', '住宿']
  const [ctag, setCtag] = useState(
    category.map((v, i) => {
      return ({ id: i, value: v, checked: false })
    })
  )

  const handleChange = (e) => {
    // const name = e.target.name
    // const value = e.target.value
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_DEV_URL}/blog/newpost/${memberId}`, form)
    .then(r => console.log(r))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    const newTags = ctag.filter((v) => v.checked).map((v) => v.value)
    setTag(newTags)
   }, [ctag]) // 勾選文章分類後，更新 tag
  useEffect(() => { setForm({ ...form, tags: tag }) }, [tag]) // 只要tag更新，將tag值放入form裡面

  // console.log(form)

  return (
    <>
    <div className='edit-container'>
      <div className="edit-wrapper">
        <h2>新增文章</h2>
        <form className="edit-form-group"
          onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="title">文章標題</label>
            <input
            type="text" name='title' className=''
            value={form.title} onChange={handleChange}
            placeholder='文章標題...' required/>
          </div>

          <div className="form-item">
            <p>文章分類</p>
            {ctag.map((v, i) => (
              <div key={i}>
                <input
                type='checkbox'
                value={v.value}
                checked={v.checked}
                onChange={(e) => {
                  const newCtag = ctag.map((v2, i2) => {
                    if (v2.id === v.id) return { ...v2, checked: !v2.checked }

                    return { ...v2 }
                  })
                  setCtag(newCtag)
                }}
                />
                <label>{v.value}</label>
              </div>
            ))}
          </div>

          <div className="form-item">
            <label htmlFor="tag1">文章關鍵字1</label>
            <input
            type="text" name='tag1'
            value={form.tag}
            onChange={handleChange}
            placeholder='文章關鍵字...' required/>
          </div>

          <div className="form-item">
            <label htmlFor="tag2">文章關鍵字2</label>
            <input
            type="text" name='tag2'
            value={form.tag}
            onChange={handleChange}
            placeholder='文章關鍵字...' required/>
          </div>

          <div className="form-item">
            <label htmlFor="tag3">文章關鍵字3</label>
            <input
            type="text" name='tag3'
            value={form.tag}
            onChange={handleChange}
            placeholder='文章關鍵字...' required/>
          </div>

          <div className="form-item">
            <label htmlFor="content">文章內文</label>
            <CKEditor
              editor={ ClassicEditor }
              data='<p>文章內文</p>'
              // onReady={ editor => {
              //     // You can store the "editor" and use when it is needed.
              //     console.log('Editor is ready to use!', editor)
              // } }
              onChange={ (event, editor) => {
                const data = editor.getData()
                setForm({ ...form, content: [data] })
                // console.log({ event, editor, data })
                // console.log(form)
              } }
              // onBlur={ (event, editor) => {
              //     console.log('Blur.', editor)
              // } }
              // onFocus={ (event, editor) => {
              //     console.log('Focus.', editor)
              // } }
              config={
                {
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_DEV_URL}/blog/upload-img`
                  }
                  // toolbar: ['imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo']
                }
              }
            />
          </div>

          <div className="form-item">
            <input
            type="submit"
            name='submit'
            value='完成'
            className='submit-btn'/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default PostEditor

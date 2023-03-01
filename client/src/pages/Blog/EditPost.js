import { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './EditPost.scss'

const EditPost = () => {
  const { postId } = useParams()
  const [form, setForm] = useState({
    postId: `${postId}`,
    title: '',
    tags: '',
    tag1: '',
    tag2: '',
    tag3: '',
    coverPath: '',
    content: ''
  })
  const category = ['美食', '景點', '住宿']
  const [ctag, setCtag] = useState(
    category.map((v, i) => {
      return ({ id: i, value: v, checked: false })
    })
  )

  useEffect(() => { getData() }, [])
  function getData () {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/post/${postId}`)
    .then(r => {
      const { post_title, tag, cover, post_content } = r.data[0]

      const tags = Object.values(tag).filter((v) => (
        category.includes(v)
      )) // 分類
      const restTags = Object.values(tag).filter((v) => (
        !category.includes(v)
      )) // 剩下的關鍵字

      setForm({
        postId,
        title: post_title,
        tags: tags || '',
        tag1: restTags[0] || '',
        tag2: restTags[1] || '',
        tag3: restTags[2] || '',
        coverPath: cover,
        content: post_content
      })

      const newCtag = ctag.map((v, i) => {
        if (tags.includes(v.value)) {
          return ({ ...v, checked: true })
        } else {
          return ({ ...v })
        }
      })
      setCtag(newCtag)
     })
    .catch(err => console.log(err))
  }

  // 分類
  useEffect(() => {
    const newTags = ctag.filter((v) => v.checked).map((v) => v.value)
    setForm({ ...form, tags: newTags })
   }, [ctag])

  // 標題、關鍵字
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // 傳到後端
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_DEV_URL}/blog/post/${postId}`, form)
    .then(r => {
      if (r.data.success === true) {
        window.location = `http://localhost:3000/blog/post/${postId}`
      }
    })
    .catch(err => console.log(err))
  }
  console.log(form)
  return (
    <>
    <div className='edit-container'>
      <h2>修改文章</h2>
      <div className="edit-wrapper">
        <form className="edit-form-group"
          onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="title">標題</label>
            <input
            type="text" name='title'
            value={form.title}
            onChange={handleChange}
            placeholder={form.title} required/>
          </div>

          <div className="form-item">
            <label>分類</label>
            <div className="category">
              {ctag.map((v, i) => (
                <div key={i}>
                  <input
                  type='checkbox'
                  value={v.value}
                  checked={v.checked}
                  onChange={() => {
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
          </div>

          <div className="form-item">
            <label>關鍵字</label>
            <div className="tags">
              <input
              type="text" name='tag1'
              value={form.tag1}
              onChange={handleChange}
              placeholder='#關鍵字'
              />

              <input
              type="text" name='tag2'
              value={form.tag2}
              onChange={handleChange}
              placeholder='#關鍵字'
              />

              <input
              type="text" name='tag3'
              value={form.tag3}
              onChange={handleChange}
              placeholder='#關鍵字'
              />
            </div>
          </div>

          <div className="form-item">
            <label>首圖</label>
            <CKEditor
              editor={ ClassicEditor }
              data={form.coverPath}
              onChange={(event, editor) => {
                const data = editor.getData()
                setForm({ ...form, coverPath: data })
              }}
              config={
                {
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_DEV_URL}/blog/upload-cover`
                  },
                  toolbar: ['imageUpload']
                }
              }
            />
          </div>

          <div className="form-item">
            <label>內文</label>
            <CKEditor
              editor={ ClassicEditor }
              data={form.content}
              onChange={ (event, editor) => {
                const data = editor.getData()
                setForm({ ...form, content: data })
              } }
              config={
                {
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_DEV_URL}/blog/upload-img`
                  }
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

export default EditPost


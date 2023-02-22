import { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './PostEditor.scss'

const PostEditor = () => {
  const { memberId } = useParams()
  const [form, setForm] = useState({ memberId: `${memberId}`, title: '', tags: '', tag1: '', tag2: '', tag3: '', content: '' })
  const category = ['美食', '景點', '住宿']
  const [ctag, setCtag] = useState(
    category.map((v, i) => {
      return ({ id: i, value: v, checked: false })
    })
  )

  // 文章分類
  useEffect(() => {
    const newTags = ctag.filter((v) => v.checked).map((v) => v.value)
    setForm({ ...form, tags: newTags })
   }, [ctag])

  // 關鍵字
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // 傳到後端
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_DEV_URL}/blog/newpost/${memberId}`, form)
    .then(r => console.log(r))
    .catch(err => console.log(err))
  }

  console.log(form)

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
            value={form.title}
            onChange={handleChange}
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

          <div className="form-item">
            <label htmlFor="tag1">文章關鍵字1</label>
            <input
            type="text" name='tag1'
            value={form.tag1}
            onChange={handleChange}
            placeholder='#關鍵字'
            />
          </div>

          <div className="form-item">
            <label htmlFor="tags">文章關鍵字2</label>
            <input
            type="text" name='tag2'
            value={form.tag2}
            onChange={handleChange}
            placeholder='#關鍵字'
            />
          </div>

          <div className="form-item">
            <label htmlFor="tag3">文章關鍵字3</label>
            <input
            type="text" name='tag3'
            value={form.tag3}
            onChange={handleChange}
            placeholder='#關鍵字'
            />
          </div>

          {/* TODO post cover */}
          {/* <div className="form-item">
            <label>文章首圖</label>
            <CKEditor
              editor={ ClassicEditor }
              data=''
              onChange={(event, editor) => {
                const cover = editor.getData()
                setForm({ ...form, cover: [cover] })
              }}
              config={
                {
                  ckfinder: {
                    uploadUrl: `${process.env.REACT_APP_DEV_URL}/blog/upload-cover/${form.postId}`
                  },
                  toolbar: ['imageUpload']
                }
              }
            />
          </div> */}

          <div className="form-item">
            <label>文章內文</label>
            <CKEditor
              editor={ ClassicEditor }
              data='<p>文章內文</p>'
              onChange={ (event, editor) => {
                const data = editor.getData()
                setForm({ ...form, content: [data] })
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

export default PostEditor

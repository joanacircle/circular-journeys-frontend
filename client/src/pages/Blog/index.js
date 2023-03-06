import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'
import Pagination from 'rc-pagination'
// import 'rc-pagination/assets/index.css'
import { userInfo } from 'components/userInfo/UserInfo'
import './Blog.scss'
import Banner from 'images/Blog/blog-banner.jpeg'
import Card3 from 'components/Cards/Card3'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'

const Blog = () => {
  const [weather, setWeather] = useState([])
  const [district, setDistrict] = useState([])
  const [item, setItem] = useState([])
  const [dataIndex, setDataIndex] = useState({ district: 0, item: 0, measure: '%' })
  const [post, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const currentPost = post.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const { userData } = userInfo()

  useEffect(() => {
    console.log('weather dataIndex')
    if (weather.length > 0) {
      setDistrict(weather.map(v => v.locationName))
      setItem(weather[0].weatherElement.map(v => v.description))
    }
  }, [weather])

  useEffect(() => {
    getData()
    getWeather()
  }, [])
  function change() {
    if (dataIndex.item === 0 || dataIndex.item === 2) {
      setDataIndex({ ...dataIndex, measure: '%' })
    } else if (dataIndex.item === 1 || dataIndex.item === 5 || dataIndex.item === 8 || dataIndex.item === 11) {
      setDataIndex({ ...dataIndex, measure: '°C' })
    } else if (dataIndex.item === 4) {
      setDataIndex({ ...dataIndex, measure: '公尺/秒' })
    } else {
      setDataIndex({ ...dataIndex, measure: '' })
    }
  }

  function getData() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog`)
      .then(r => { setPost(r.data) })
      .catch(err => console.log(err))
  }
  function getWeather () {
    axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=${process.env.REACT_APP_WEATHER_KEY}&format=JSON`)
    .then(r =>
      setWeather(r.data.records.locations[0].location)
    )
    .catch(err => console.log(err))
  }
  function handleChange (e) {
    console.log('hi')
    const { name, value } = e.target
    let index = -1
    if (name === 'district') {
      index = district.findIndex((v) => v === value)
    } else if (name === 'item') {
      index = item.findIndex((v) => v === value)
    }

    let measureString = null
    if (index === 0 || index === 2) {
      measureString = '%'
    } else if (index === 1 || index === 5 || index === 8 || index === 11 || index === 14) {
      measureString = 'C'
    } else if (index === 4) {
      measureString = ' 公尺/秒'
    } else {
      measureString = ''
    }

    setDataIndex({ ...dataIndex, [name]: index, measure: measureString })
  }

  return (
    <>
      <div>
        <div className='blog-banner'>
          <img className='blog-banner-img' src={Banner} alt="Banner"></img>
          <h2 className='blog-title'>
            高雄旅遊日誌
          </h2>
        </div>
        <div className='page-body'>
          <div className='blog-container row justify-content-md-center justify-content-xl-between'>
            <div className='col-md-10 col-lg-8 col-xl-7 text-center'>
              <div className='row'>
                {currentPost.map((v, i) => {
                  return (
                    <div className='blog-post col-md-6' key={v.post_id}>
                      <Card3
                        postId={v.post_id}
                        userMemberId={userData.member_id}
                        img={v.cover}
                        tags={v.tag}
                        memberId={v.member_id}
                        memberName={v.user_nickname}
                        title={v.post_title}
                        createAt={v.create_at}
                        likes={v.total_likes} />
                    </div>
                  )
                })}
                <div className='blog-pagination'>
                  <Pagination
                    current={currentPage}
                    total={post.length}
                    pageSize={4}
                    onChange={page => setCurrentPage(page)}
                  />
                </div>
              </div>
            </div>
            <div className='blog-aside col-md-10 col-lg-4'>
              <div className='blog-aside-item'>
                <form className='blog-search'>
                  <input className='blog-input' placeholder="Search">
                  </input>
                  <button className='blog-button' type="submit">
                    <BiSearch className='search-icon' />
                  </button>
                </form>
              </div>
              <div className='blog-aside-item'>
                <BlogCategory />
              </div>
              <div className='blog-aside-item'>
                <TagsCategory />
              </div>
              <div className='blog-aside-item'>
                <div className="weather-section">
                  <div className="weather-section-select">
                    <select
                    name='district'
                    onChange={(e) => handleChange(e)}>
                      {district.length > 0 && district.map((v, i) => (
                        <option key={'d' + i} value={v}>{v}</option>
                      ))}
                    </select>
                    <select
                    name="item"
                    onChange={(e) => handleChange(e)}>
                      {item.length > 0 && item.map((v, i) => (
                        <option key={'i' + i} value={v}>{v}</option>
                      ))
                    }
                    </select>
                  </div>
                  <div className="weather-section-data">
                    {/* <img src={`${process.env.REACT_APP_DEV_URL}/blog/weather-icon.png`} alt="" /> */}
                    <p>
                      {weather.length > 0 &&
                      dataIndex.item &&
                      dataIndex.item === 10
                      ? weather[dataIndex.district].weatherElement[10].time[0].elementValue[0].value.split('。')[0]
                      : weather[dataIndex.district].weatherElement[dataIndex.item].time[0].elementValue[0].value}
                      {dataIndex.measure}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

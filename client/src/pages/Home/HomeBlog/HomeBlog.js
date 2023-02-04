import React from 'react'
import './HomeBlog.scss'
import { Container, Row, Col } from 'Styles/styled'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

import Card from 'components/Cards/Card'
import Card2 from 'components/Cards/Card2'
import Banner from 'images/Blog/home-banner.jpg'
import B001 from 'images/Blog/B001.jpeg'
import B002 from 'images/Blog/B002.jpeg'
import B003 from 'images/Blog/B003.jpeg'
import B004 from 'images/Blog/B004.jpeg'


const HomeBlog = () => {
  return (
    <>
    <div className='home-banner section'>
      {/* alt 下關鍵字 */}
      <img className='home-banner-img' src={Banner} alt="Banner"></img>
      <div className='title-section'>
        <h1 className='home-blog-h1'>高雄最棒的旅遊體驗</h1>
        <form className='home-search'>
          <input className='home-input' placeholder="Search">
          </input>
          <button className='home-button' type="submit">
            <BiSearch className='home-search-icon'/>
          </button>
        </form>
      </div>
    </div>

    <section className='section'>
      <Container className='h2-container'>
      <h2>熱門文章</h2>
      </Container >
      <Container className='card-container'>
        <BsFillArrowLeftCircleFill className='arrow-left' />
        <Row>
        <Col>
          <Card imgSrc={B001} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col className='padding-left'>
          <Card imgSrc={B002} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col className='padding-left padding-right'>
          <Card imgSrc={B003} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col>
          <Card imgSrc={B004} imgAlt="abc" title="文章標題"/>
        </Col>
        </Row>
        <BsFillArrowRightCircleFill className='arrow-right'/>
      </Container>


    </section>

    <section className='section'>
    <Container className='h2-container'>
      <h2>最新文章</h2>
    </Container >
    <Container className='card-container'>
      <BsFillArrowLeftCircleFill className='arrow-left' />
      <Row>
        <Col>
          <Card2 imgSrc={B001} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
        <Col className='padding-left padding-right'>
          <Card2 imgSrc={B003} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
        <Col>
          <Card2 imgSrc={B004} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
      </Row>
      <BsFillArrowRightCircleFill className='arrow-right'/>
    </Container>
    </section>
    </>
  )
}

export default HomeBlog

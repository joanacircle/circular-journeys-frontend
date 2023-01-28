import React from 'react'
import './HomeBlog.scss'
import { Container, Row, Col } from 'Styles/styled'
import Card from 'components/Cards/Card'
import Card2 from 'components/Cards/Card2'
import B001 from 'images/Blog/B001.jpeg'


const HomeBlog = () => {
  return (
    <>
    <section>
      <Container className='h2-container'>
      <h2>熱門文章</h2>
      </Container >
      <Container className='card-container'>
      <Row>
        <Col>
          <Card imgSrc={B001} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col>
          <Card imgSrc={B001} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col>
          <Card imgSrc={B001} imgAlt="abc" title="文章標題"/>
        </Col>
        <Col>
          <Card imgSrc={B001} imgAlt="abc" title="文章標題"/>
        </Col>
      </Row>
      </Container>
    </section>

    <section>
    <Container className='h2-container'>
      <h2>最新文章</h2>
    </Container >
    <Container className='card-container'>
      <Row>
        <Col>
          <Card2 imgSrc={B001} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
        <Col>
          <Card2 imgSrc={B001} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
        <Col>
          <Card2 imgSrc={B001} imgAlt="B001" tags="旅遊" title="文章標題" likes="10k"/>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  )
}

export default HomeBlog

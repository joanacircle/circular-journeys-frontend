import React from 'react'
import './NavbarStyles.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from '../../Styles/styled'
import { Title, Option } from './NavbarStyles'
import Logo from '../../images/Logo/Logo'
import { FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Container className='navbar-fixed'>
      <Row align={'center'} justify={'space-between'}>
        <Col className='navbar-title'>
          <Logo />
          <Title>circular journeys</Title>
        </Col>
        <Col>
          <ul>
            <li>
              <Link to='/blog' title='Blog'>
                <li>部落格</li>
              </Link>
            </li>
            <li>
              <Link to='/shop'>
                <li>商城</li>
              </Link>
            </li>
            <li>
              <Link to='/#'>
                <li>自由行</li>
              </Link>
            </li>
            <li>
              <Link to='/#'>
                <li>套票 </li>
              </Link>
            </li>
            <li>
              <Link to='/user/login'>
                <FaUserAlt />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar

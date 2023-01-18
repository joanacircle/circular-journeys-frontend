import React from 'react'
import './LoginStyles.scss'
import { Input, LoginTitle, Button } from './LoginStyles'
import { Container, Row, Col, Theme } from '../../../Styles/styled'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'

const Login = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <Col className='login-place'>
          <div className='login-flex'>
            <LoginTitle size={Theme.H1} color={Theme.Orange} family={Theme.Family}>Login</LoginTitle>
            <Input
              type='text'
              placeholder='Email'
            />
            <Input
              type='password'
              placeholder='Password'
            />
            <div className='login-remember-place'>
              <div className='login-checkbox'>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                />
                <label htmlFor='remember'>
                  記住我
                </label>
              </div>
              <div>
                <a href="#">加入會員？</a>
                <a href="#">忘記密碼？</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

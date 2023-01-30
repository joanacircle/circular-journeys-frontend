import React from 'react'
import { Link } from 'react-router-dom'
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
          <form>
            <div className='login-flex'>
              <LoginTitle size={Theme.H1} color={Theme.Orange}>Login</LoginTitle>
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
                  <Link to='/signup'>加入會員？</Link>
                    <a href="#">忘記密碼？</a>
                </div>
              </div>
              <Input
                className='input-submit'
                type='submit'
                value='登入'
              />
              <div className='login-contact-link'>
                <a className='btn input-submit' href="http:#">
                  <button
                    type="button"
                  >
                    <FcGoogle size={25} />
                  </button>
                </a>
                <a className='btn btn-fb input-submit' href="http:#">
                  <button
                    type="button"
                  >
                    <FaFacebookSquare color='#fff' size={25} />
                  </button>
                </a>
                <a className='btn btn-ap input-submit' href="http:#">
                  <button
                    type="button"
                  >
                    <AiFillApple color='#fff' size={25} />
                  </button>
                </a>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

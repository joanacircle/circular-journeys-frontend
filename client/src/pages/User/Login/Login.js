import React from 'react'
import './LoginStyles.scss'
import { Input, LoginTitle, Button, Label } from './LoginStyles'
import { Container, Row, Col, Theme } from '../../../Styles/styled'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'

const Login = () => {
  return (
    <Container>
      <Row justify={'center'}>
        <Col className='login-place' >
          <LoginTitle size={Theme.H1} color={Theme.Orange} family={Theme.Family}>Login</LoginTitle>
          <Input
            type='text'
            placeholder='Email'
          />
          <Input
            type='password'
            placeholder='Password'
          />
          <Input
            type='checkbox'
            name='remember'
            id='remember'
          />
          <Label htmlFor='remember'>
            記住我
          </Label>
          <div>
            <a href="#">忘記密碼？</a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

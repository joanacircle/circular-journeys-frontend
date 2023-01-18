import styled from 'styled-components'
import { Theme, Title } from '../../../Styles/styled'

export const Input = styled.input`
  width:350px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 5px 0.5px rgba(73, 73, 73, 0.467);
  opacity: 0.6;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`
export const LoginTitle = styled(Title)`
  letter-spacing:8px;
  text-shadow: 1px 2px 5px ${Theme.Black};
`

export const Button = styled.button`
`

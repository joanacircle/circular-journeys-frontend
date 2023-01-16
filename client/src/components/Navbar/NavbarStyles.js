import styled from 'styled-components'
import { Theme, Text } from '../../Styles/styled'

export const Option = styled(Text)`
  font-size:18px;
  transition: .3s;
  &:hover {
    border-bottom:5px solid ${Theme.Orange};
  }
`

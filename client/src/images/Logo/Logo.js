import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Styles/styled'
import { ReactComponent as LogoSVG } from './logo.svg'

const NavbarLogo = styled(LogoSVG)`
  width: ${props => props.width || '80px'};
  height: ${props => props.height || '80px'};
  fill: ${theme.primaryOrange};
  stroke:${theme.primaryBlack};
`

export default NavbarLogo

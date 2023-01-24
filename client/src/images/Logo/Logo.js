import styled from 'styled-components'
import { Theme } from '../../Styles/styled'
import { ReactComponent as LogoSVG } from './logo.svg'

const NavbarLogo = styled(LogoSVG)`
  width: ${props => props.width || '80px'};
  height: ${props => props.height || '80px'};
  fill: ${Theme.Orange};
`
// stroke:${Theme.Black};
export default NavbarLogo

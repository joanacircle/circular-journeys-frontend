import styled from 'styled-components'

const theme = {
  primaryOrange: '#F2AE3D',
  primaryPurple: '#514895',
  primaryDarkgray: '#252525',
  primaryEggYolk: '#FCED53',
  primaryWhite: '#fff',
  primaryGray: '#F7F7F7',
  primaryBlack: '#000',
  primaryYellow: '#F8DA95'
}

const Container = styled.div`
  max-width:1920px;
  margin:0 auto;
  width:100%;
  background:${props => props.background || theme.primaryWhite};
`
const Row = styled.div`
  display:flex;
  justify-content:${props => props.justify || 'none'};
  align-items:${props => props.align || 'none'};
  flex-direction:${props => props.direction || 'row'};
  flex-wrap:${props => props.wrap || 'nowrap'};
`
const Col = styled.div`
  flex:${props => props.size || 1};
  width:calc(100% / 12);
`

export {
  Container,
  Row,
  Col,
  theme
}

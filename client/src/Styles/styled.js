import styled from 'styled-components'

export const Theme = {
  Orange: '#F2AE3D',
  Purple: '#514895',
  Darkgray: '#252525',
  EggYolk: '#FCED53',
  White: '#fff',
  Gray: '#F7F7F7',
  Black: '#000',
  Yellow: '#F8DA95',
  Family: 'Sigmar One',
  H1: '42px',
  H2: '35px',
  H3: '28px',
  H4: '24px',
  H5: '19px',
  p: '15px'
}
// h1~h5
export const Title = styled.h1`
  font-size:${props => props.size};
  color:${props => props.color};
  font-family:${props => props.family};
`
// p
export const Text = styled.p`
  font-size:${props => props.size || '15px'};
`

// flex box
export const Container = styled.div`
  max-width:1160px;
  margin:0 auto;
  width:100%;
  background:${props => props.background || Theme.White};
`
export const Row = styled.div`
  display:flex;
  justify-content:${props => props.justify || 'none'};
  align-items:${props => props.align || 'none'};
  flex-direction:${props => props.direction || 'row'};
  flex-wrap:${props => props.wrap || 'nowrap'};
`
export const Col = styled.div`
  flex:${props => props.size || 1};
  width:calc(100% / 12);
  `

import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.div`
  background: ${prop('background','')};
  display: ${prop('display','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  position: ${prop('position','')};
  width: ${prop('width','')};
  min-width: ${prop('minWidth','')};
  height: ${prop('height','')};
  max-height: ${prop('maxHeight','')};
  border: ${prop('border','')};
  float: ${prop('float','')};
  clear: ${prop('clear','')};
  bottom: ${prop('bottom','')};
  border-bottom: ${prop('borderBottom','')};
  border-top: ${prop('borderTop','')};
  border-radius: ${prop('borderRadius','')};
  left: ${prop('left','')};
  top: ${prop('top','')};
  overflow: ${prop('overflow','')};
  opacity: ${prop('opacity','')};
  z-index: ${prop('zIndex','')};
  box-shadow: ${prop('boxShadow','')};
  background-color: ${prop('backgroundColor','')};
  background-size: ${prop('backgroundSize','')};
  background-position: ${prop('backgroundPosition','')};
  background-attachment: ${prop('backgroundAttachment','')};
  background-image: ${(prop) => prop.backgroundImg ? `url(${prop.backgroundImg})`:''};
  color: ${prop('color','')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','')};
  border-bottom: ${prop('bottomBorder','')};
  text-align: ${prop('textAlign','')};
  line-height: ${prop('lineHeight','')};
  flex-direction: ${prop('flexDirection','row')};
  flex-wrap: ${prop('flexWrap','wrap')};
  flex-flow: ${prop('flexFlow','')};
  justify-content: ${prop('justifyContent','flex-start')};
  align-items: ${prop('alignItems':'flex-start')};
  grid-column: ${prop('gridColumn','')};
  grid-row: ${prop('gridRow','')};
  ${props => props.themed && css`
    background-color: ${props => props.theme.DarkColor};
    color: white;
    font-family: ${props => props.theme.ThemedFont};
  `};
  ${props => props.themedBorder && css`
    border-color: ${props => props.theme.ThemedColor};
    border-width: 3px;
    border-style: solid;
  `};
  ${props => props.bold && css`
    font-weight: bold;
  `};
`

import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
export default styled.button`
  background-color: ${prop('backgroundColor')};
  color: white;
  font-family: ${prop('fontFamily')};
  width: ${prop('width','auto')};
  height: ${prop('height','auto')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','')};
  opacity: ${prop('padding','.9')};
  box-shadow: ${prop('boxShadow','')};
  border: ${prop('border','')};
  width: ${prop('width','')};
  height: ${prop('height','')};
  border-radius: ${prop('borderRadius','')};
  font-size: ${prop('fontSize','')};
  opacity: ${prop('opacity','')};
  ${props => props.themed && css`
    padding: 10px;
    background-color: ${props => props.theme.DarkColor};
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;
    :hover{
      background-color: ${props => props.theme.ThemedColor};
      cursor: pointer;
    }
  `};

`

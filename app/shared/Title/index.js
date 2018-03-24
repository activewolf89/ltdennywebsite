import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.legend`
  text-align: ${prop('textAlign','center')};
  margin: ${prop('margin','')};
  text-decoration: ${prop('textDecoration','')};
  font-size: ${prop('fontSize','')};
  color: ${prop('color','')};
  background-color: ${prop('backgroundColor','')};
  font-style: ${prop('fontStyle','')};
  ${props => props.bold && css`
    font-weight: bold;
  `};
  ${props => props.capitalize && css`
    text-transform: uppercase;
  `};
  ${props => props.noCenter && css`
    text-align:left;
  `};
  ${props => props.underline && css`
    text-decoration: underline;
  `};
`

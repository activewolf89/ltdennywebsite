import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { prop, ifProp, switchProp } from 'styled-tools';


export default styled.a`
  color:  ${prop('color','blue')};
  ${props => props.active && css`
    color: ${props => props.theme.ThemedColor};
`};
  :hover {
    color: ${props => props.theme.ThemedColor};
  }
`;

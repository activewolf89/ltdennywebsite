import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { prop, ifProp, switchProp } from 'styled-tools';


export default styled.a`
  color:  ${prop('color','gray')};
  :hover {
    cursor: pointer;
    color: ${props => props.theme.ThemedColor};
  }
`;

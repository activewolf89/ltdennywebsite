import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import { prop, ifProp, switchProp } from 'styled-tools';


export default styled(Link)`
  color:  ${prop('color','gray')};
  text-decoration: none;
  :hover {
    color: ${props => props.theme.ThemedColor};
  }
`;

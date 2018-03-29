import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.li`
  display: flex;
  background-size: ${prop('backgroundSize','')};
  background-image: ${(prop) => prop.backgroundImg ? `url(${prop.backgroundImg})`:''};
  background-position: left;
  ${props => props.noUnderline && css`
    border-bottom: 0px solid gray;
  `};
`

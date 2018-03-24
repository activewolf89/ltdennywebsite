import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import Div from 'shared/Div';

export const MobileOnlyDiv = styled(Div)`
display: block;
  @media screen and (min-width:768px){
    display: none;
  };

`;

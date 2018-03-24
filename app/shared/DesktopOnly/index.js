import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import Div from 'shared/Div';
import Title from 'shared/Title';

export const DesktopOnlyDiv = styled(Div)`
display: none;
  @media screen and (min-width:768px){
    display: block;
  };

`;

export const TitleSize = styled(Title)`
  font-size: 16px;
  @media screen and (min-width:768px){
    font-size: 20px;
  };
`;

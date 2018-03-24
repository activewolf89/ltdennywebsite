import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.ul`
  list-style-type: ${prop('listStyle','')};
  padding: ${prop('padding','')};
  margin: ${prop('margin','')};
  display: ${prop('display','')};
  border: ${prop('border','')};
  flex-flow: ${prop('flexFlow','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  width: ${prop('width','')};
  background-color: ${prop('backgroundColor','')};
  ${props => props.childrenMargin && css`
    >li{
      margin: ${prop('childrenMargin','')};
    }
  `};
`;

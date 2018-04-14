import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.ul`
  list-style-type: ${prop('listStyle','')};
  padding: ${prop('padding','')};
  margin: ${prop('margin','')};
  border: ${prop('border','')};
  flex-flow: ${prop('flexFlow','')};
  flex-direction: ${prop('flexDirection','')};
  display: ${prop('display','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  width: ${prop('width','')};
  background-color: ${prop('backgroundColor','')};

  ${props => props.childrenBottomBorder && css`
    >li{
      border-bottom: 1px solid white;
    }
  `};

  ${props => props.childrenMargin && css`
    >li{
      margin: ${prop('childrenMargin','')};
    }
  `};
  ${props => props.childrenPadding && css`
    >li{
      padding: ${prop('childrenPadding','')};
    }
  `};
  ${props => props.childrenBorderRight && css`
    >li{
      border-right: ${prop('childrenBorderRight','')};
    }
  `};
`;

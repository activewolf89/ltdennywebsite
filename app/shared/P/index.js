import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.p`
  font-family: ${prop('fontFamily','')};
  font-style: ${prop('fontStyle','')};
  font-size: ${prop('fontSize','')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','')};
  display: ${prop('display','')};
  text-align: ${prop('textAlign','')};
  line-height: ${prop('lineHeight','')};
  background-color: ${prop('backgroundColor','')};
`

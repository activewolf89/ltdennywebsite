import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

export default styled.li`
  color:${prop('color','')};
  width: ${prop('width','')};
  height: ${prop('height','')};
  padding: ${prop('padding','')};
  margin: ${prop('margin','')};
  font-style: ${prop('fontStyle','')};
  background-color: ${prop('backgroundColor','')};
`;

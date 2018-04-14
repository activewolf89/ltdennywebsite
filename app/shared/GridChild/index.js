import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import Div from 'shared/Div';
export default styled(Div)`
  grid-column-start: ${prop('columnStart','')};
  grid-column-end: ${prop('columnEnd','')};
  grid-row-start: ${prop('rowStart','')};
  grid-row-end: ${prop('rowEnd','')};
  grid-area: ${prop('gridArea','')};
  background-color: ${prop('backgroundColor','')};
  grid-column: ${prop('column','')};
  grid-row: ${prop('row','')};
  margin: ${prop('margin','')};
`

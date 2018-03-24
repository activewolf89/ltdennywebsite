import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import DIV from 'shared/Div';
export default styled(DIV)`
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

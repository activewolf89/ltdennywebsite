import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import GridChild from 'shared/GridChild';

export default styled(GridChild)`
-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
filter: grayscale(100%);
  :hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
    >Div {
      background-color: ${props => props.theme.ThemedColor};
    }
  }
`

import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import Ul from 'shared/Ul';
export default styled(Ul)`
margin: ${prop('margin',0)};
padding: ${prop('padding',0)};
display: ${prop('display','inline-block')};
  >li {
    list-style: none;
    margin: 0px;
    line-height: 40px;
    border-bottom: ${prop('borderBottom','')};

  }

  >li:before {
    content: '';
display: inline-block;
height: 30px;
width: 50px;
background-repeat: no-repeat;
margin-right: 5px;
  }
`

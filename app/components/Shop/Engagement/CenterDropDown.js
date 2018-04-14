import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontAwesome';
//shared
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Title from 'shared/Title';

//------
const DesignerDiv = styled(Div)`
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  color: black;
  ${props => props.highlighted && css`
    color: white;
    background-color: ${props => props.theme.ThemedColor}
`}
`;
const CenterDropDown = () =>{
  return (
    <Div display="flex" >
      <DesignerDiv highlighted width="100px" height="100px"><Title bold>All Shapes</Title></DesignerDiv>
      <DesignerDiv width="100px" height="100px"><Title bold>Round</Title></DesignerDiv>
      <DesignerDiv width="100px" height="100px" ><Title bold>Cushion</Title></DesignerDiv>
      <DesignerDiv width="100px" height="100px"><Title bold>Princess</Title></DesignerDiv>
      <DesignerDiv width="100px" height="100px"><Title bold>Oval</Title></DesignerDiv>
      <DesignerDiv width="100px" height="100px"><Title bold>Asscher</Title></DesignerDiv>
  </Div>
  )
}
CenterDropDown.propTypes = {
}
export default CenterDropDown;

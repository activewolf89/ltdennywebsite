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
const StyleDropDown = () =>{
  return (
    <Div display="flex"  >
      <DesignerDiv highlighted width="100px" height="100px"><Title bold>Show All</Title></DesignerDiv>
      <DesignerDiv width="100px"  height="100px"><Title bold>Solitaire</Title></DesignerDiv>
      <DesignerDiv width="100px"  height="100px"><Title bold>Pave</Title></DesignerDiv>
      <DesignerDiv width="100px"  height="100px"><Title bold>Halo</Title></DesignerDiv>
      <DesignerDiv width="100px"  height="100px"><Title bold>ThreeStone</Title></DesignerDiv>
  </Div>
  )
}
StyleDropDown.propTypes = {
}
export default StyleDropDown;

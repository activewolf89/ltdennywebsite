import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';
//shared
import Div from 'shared/Div';
import SideScreenContent from './SideScreenContent';

//------
const SideNavigationDiv = styled(Div)`
display: block;
position: fixed;
z-index: 2;
top:44px;
width: 0vw;
height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
transition: 3.5s;
background-color: white;
${props => props.open && css`
width: 85vw;
transition: 3.5s;
`}
@media screen and (min-width:768px){
  display: none;

};
`
const SideNavigation = (props) =>{
  return (
    <SideNavigationDiv open={props.isHamburgerOpen}>
      <SideScreenContent
        isHamburgerDetailOpen = {props.isHamburgerDetailOpen}
        onHamburgerDetailClick = {props.onHamburgerDetailClick}
        onNavigationDirection ={props.onNavigationDirection}
      />
    </SideNavigationDiv>
  )
}
SideNavigation.propTypes = {
  isHamburgerOpen: PropTypes.bool.isRequired,
  isHamburgerDetailOpen:PropTypes.object.isRequired,
  onHamburgerDetailClick: PropTypes.func.isRequired,
}
export default SideNavigation;

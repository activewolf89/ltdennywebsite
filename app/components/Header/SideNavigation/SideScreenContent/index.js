import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';
//shared
import GeneralTab from './GeneralTab';
import DetailTab from './DetailTab';
import Div from 'shared/Div';

//------


const SideContentDivParent = styled(Div)`
  position: relative;
  background-color:white;
  height: 100%;
  margin: 0 10px;
  >ul:nth-child(1){
    display: block;

    position: absolute;
    top:0px;
    z-index:2;
    width: 100%;
    background-color:white;
    transition: width 500ms ease-in-out;

  }
  >ul:nth-child(2){
    display: none;

    width: 0%;
    transition: width 500ms ease-in-out;

  }
  ${props => props.isHamburgerDetailOpen.get('toggle') && css`
  >ul:nth-child(1){
    display: none;
    width: 0%;
    transition: width 500ms ease-in-out;

  }
  >ul:nth-child(2){
    display: block;

    transition: width 500ms ease-in-out;
    width: 100%;

  }
`};

`;

const SideScreenContent = (props) =>{
  return (
    <SideContentDivParent isHamburgerDetailOpen={props.isHamburgerDetailOpen}>
      <GeneralTab onHamburgerDetailClick ={props.onHamburgerDetailClick} />
      <DetailTab isHamburgerDetailOpen={props.isHamburgerDetailOpen} onNavigationDirection={props.onNavigationDirection} onHamburgerDetailClick ={props.onHamburgerDetailClick}/>
    </SideContentDivParent>
  )
}
SideScreenContent.propTypes = {
  isHamburgerDetailOpen:PropTypes.object.isRequired,
  onHamburgerDetailClick:PropTypes.func.isRequired
}
export default SideScreenContent;

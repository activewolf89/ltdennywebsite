import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontAwesome';
//shared
import Input from 'shared/Input';
import Button from 'shared/Button';
import A from 'shared/A';
import Aul from 'shared/Aul';
import ALi from 'shared/ALi';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
//------
const GeneralUl = styled(Ul)`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  ${props => props.open && css`
`};
`;
const GeneralLi = styled(Li)`
  padding: 10px 0;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;
const GeneralTab = (props) =>{
  return (
    <GeneralUl>
      <GeneralLi onClick={()=>{props.onHamburgerDetailClick('engagement')}}>
        <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
          <A>ENGAGEMENT</A>
          <FontAwesome name="caret-right" size="2x"/>
        </Div>
      </GeneralLi>
      <GeneralLi onClick={()=>{props.onHamburgerDetailClick('wedding')}}>
          <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
            <A >WEDDING</A>
            <FontAwesome name="caret-right" size="2x"/>
          </Div>
      </GeneralLi>
      <GeneralLi onClick={()=>{props.onHamburgerDetailClick('diamond')}}>
          <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
            <A >DIAMOND</A>
            <FontAwesome name="caret-right" size="2x"/>
          </Div>
      </GeneralLi>
      <GeneralLi onClick={()=>{props.onHamburgerDetailClick('jewelry')}}>
          <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
            <A >JEWELRY</A>
            <FontAwesome name="caret-right" size="2x"/>
          </Div>
      </GeneralLi>
      <GeneralLi onClick={()=>{props.onHamburgerDetailClick('about')}}>
        <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
          <A >ABOUT</A>
          <FontAwesome name="caret-right" size="2x"/>
        </Div>
      </GeneralLi>
      <GeneralLi>
        <form>
          <Div display="flex" flexWrap="no-wrap">
            <Input standard type="text" placeholder="Enter keywords" />
            <Button themed>SEARCH</Button>
        </Div>
        </form>
      </GeneralLi>
  </GeneralUl>
  )
}
GeneralTab.propTypes = {
  onHamburgerDetailClick: PropTypes.func.isRequired,
}
export default GeneralTab;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontAwesome';
//shared
import StyledLink from 'shared/StyledLink';
import Input from 'shared/Input';
import Button from 'shared/Button';
import A from 'shared/A';
import Aul from 'shared/Aul';
import ALi from 'shared/ALi';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Title from 'shared/Title';
import EngagementDetails from 'components/DropDownDetails/EngagementDropDown.js';
import WeddingDetails from 'components/DropDownDetails/WeddingDropDown.js';
import DiamondDetails from 'components/DropDownDetails/DiamondDropDown.js';
import JewelryDetails from 'components/DropDownDetails/JewelryDropDown.js';
import AboutDetails from 'components/DropDownDetails/WhatWeOfferDropDown.js';
//------
const GeneralUl = styled(Ul)`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
`;
const GeneralLi = styled(Li)`
  padding: 10px 0;
  border-bottom: 1px solid gray;
`;
const DetailTable = (props) =>{
  return (
    <GeneralUl>

      <GeneralLi >
        <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
          <FontAwesome name="caret-left" size="2x" onClick={()=>{props.onHamburgerDetailClick('')}}/>
            <Title capitalize bold>
              {
                props.isHamburgerDetailOpen.get('engagement') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('engagement')
                    props.onNavigationDirection('/engagement')
                }}
                  >engagement</Title>
              }
              {
                props.isHamburgerDetailOpen.get('wedding') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('wedding')
                    props.onNavigationDirection('/wedding')
                }}
                  >wedding</Title>
              }
              {
                props.isHamburgerDetailOpen.get('diamond') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('diamond')
                    props.onNavigationDirection('/diamond')
                }}
                  >diamond</Title>
              }
              {
                props.isHamburgerDetailOpen.get('jewelry') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('jewelry')
                    props.onNavigationDirection('/jewelry')
                }}
                  >jewelry</Title>
              }
              {
                props.isHamburgerDetailOpen.get('service') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('service')
                    props.onNavigationDirection('/service')
                }}
                  >service</Title>
              }
              {
                props.isHamburgerDetailOpen.get('about') &&
                <Title capitalize bold
                  onClick={
                  ()=>{
                    props.onHamburgerDetailClick('about')
                    props.onNavigationDirection('/about')
                }}
                  >about</Title>
              }
            </Title>
          <A ></A>
        </Div>
      </GeneralLi>
      {
        props.isHamburgerDetailOpen.get('engagement') &&
          <EngagementDetails />
      }
      {
        props.isHamburgerDetailOpen.get('wedding') &&
          <WeddingDetails/>
      }
      {
        props.isHamburgerDetailOpen.get('diamond') &&
          <DiamondDetails/>
      }
      {
        props.isHamburgerDetailOpen.get('jewelry') &&
          <JewelryDetails/>
      }
      {
        props.isHamburgerDetailOpen.get('about') &&
          <AboutDetails/>
      }
  </GeneralUl>
  )
}
DetailTable.propTypes = {
  onHamburgerDetailClick: PropTypes.func.isRequired,
  isHamburgerDetailOpen:PropTypes.object.isRequired,

}
export default DetailTable;

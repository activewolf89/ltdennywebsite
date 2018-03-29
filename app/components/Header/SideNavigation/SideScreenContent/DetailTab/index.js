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
  cursor: pointer;
`;
const DetailTable = (props) =>{
  return (
    <GeneralUl>

      <GeneralLi >
        <Div display="flex" justifyContent="space-between" alignItems="center" flexWrap="no-wrap">
          <FontAwesome name="caret-left" size="2x" onClick={()=>{props.onHamburgerDetailClick('')}}/>
          <A>
            <Title capitalize bold>
              {
                props.isHamburgerDetailOpen.get('engagement') &&
                'engagement'
              }
              {
                props.isHamburgerDetailOpen.get('wedding') &&
                'wedding'
              }
              {
                props.isHamburgerDetailOpen.get('diamond') &&
                'diamond'
              }
              {
                props.isHamburgerDetailOpen.get('jewelry') &&
                'jewelry'
              }
              {
                props.isHamburgerDetailOpen.get('about') &&
                'about'
              }
            </Title>
          </A>
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

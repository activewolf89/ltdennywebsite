/**
*
* BottomNavigation
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';
//shared --
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';
import {TitleSize,DesktopOnlyDiv} from 'shared/DesktopOnly'
import EngagementDropDown from 'components/DropDownDetails/EngagementDropDown';
import WeddingDropDown from 'components/DropDownDetails/WeddingDropDown';
import DiamondDropDown from 'components/DropDownDetails/DiamondDropDown';
import JewelryDropDown from 'components/DropDownDetails/JewelryDropDown';
import WhatWeOfferDropDown from 'components/DropDownDetails/WhatWeOfferDropDown';


class DesktopNavigationBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const ToggleActiveDiv = styled(Div)`
      max-height: 0px;
      overflow: hidden;
      ${props => props.toggle && css`
        max-height: 10000px;
        height: auto;
        transition: max-height .5s ease-in;
        width: 100%;
        position: absolute;
        top: 38px;
        left: 0px;
        color: black;
        background-color: white;
        `};
    `
    return (
      <DesktopOnlyDiv themed
        position="sticky"
        width="100%"
        top="0"
        padding="5px 0"
        zIndex="2"
        >

        <Ul childrenPadding="0 30px" display="flex" justifyContent="center" margin="0px" padding="0px" listStyle="none" flexWrap="no-wrap">
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('engagement')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('engagement')
              if(this.props.isHamburgerDetailOpen.get('engagement')){
                this.props.onNavigationDirection('/engagement')
              }
            }}><TitleSize>Engagement</TitleSize></A>

        </Li>
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('wedding')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('wedding')
              if(this.props.isHamburgerDetailOpen.get('wedding')){
                this.props.onNavigationDirection('/wedding')
              }
            }}>  <TitleSize>Wedding</TitleSize></A>
        </Li>
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('diamond')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('diamond')
              if(this.props.isHamburgerDetailOpen.get('diamond')){
                this.props.onNavigationDirection('/diamond')
              }
            }}>  <TitleSize>Diamond</TitleSize></A>

        </Li>
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('jewelry')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('jewelry')
              if(this.props.isHamburgerDetailOpen.get('jewelry')){
                this.props.onNavigationDirection('/jewelry')
              }
            }}>  <TitleSize>Jewelry</TitleSize></A>
        </Li>
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('service')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('service')
              if(this.props.isHamburgerDetailOpen.get('service')){
                this.props.onNavigationDirection('/service')
              }
            }}>  <TitleSize>Service</TitleSize></A>
        </Li>
          <Li >
          <A active={this.props.isHamburgerDetailOpen.get('about')} color="white"
            onClick={()=>{
              this.props.onHamburgerDetailClick('about')
              if(this.props.isHamburgerDetailOpen.get('about')){
                this.props.onNavigationDirection('/about')
              }
            }}>  <TitleSize>About</TitleSize></A>
        </Li>
        </Ul>
        <ToggleActiveDiv toggle={this.props.isHamburgerDetailOpen.get('toggle')}>
          {
            this.props.isHamburgerDetailOpen.get('engagement')  &&
            <EngagementDropDown />
          }
          {
            this.props.isHamburgerDetailOpen.get('wedding') &&
            <WeddingDropDown />
          }
          {
            this.props.isHamburgerDetailOpen.get('diamond') &&
            <DiamondDropDown />
          }
          {
            this.props.isHamburgerDetailOpen.get('jewelry') &&
            <JewelryDropDown />
          }
          {
            this.props.isHamburgerDetailOpen.get('service') &&
            <WhatWeOfferDropDown />
          }
          {
            this.props.isHamburgerDetailOpen.get('about') &&
            <WhatWeOfferDropDown />
          }
        </ToggleActiveDiv>
      </DesktopOnlyDiv>
    );
  }
}

DesktopNavigationBar.propTypes = {
  onHamburgerDetailClick:PropTypes.func.isRequired,
  isHamburgerDetailOpen: PropTypes.object.isRequired,
  onHamburgerClick:PropTypes.func.isRequired,
  isHamburgerOpen: PropTypes.bool.isRequired,
  onNavigationDirection: PropTypes.func.isRequired

};

export default DesktopNavigationBar;

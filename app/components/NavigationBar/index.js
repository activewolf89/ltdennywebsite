/**
*
* BottomNavigation
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
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


class NavigationBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const HoverLi = styled(Li)`
    > div{
      max-height: 0px;
      height: auto;
      overflow: hidden;
      transition: max-height 500ms ease-in-out;
    }
    :hover >div{
      transition: max-height 500ms ease-in-out;
      height: auto;
      max-height: 1000px;
    }
    `;
    return (
      <DesktopOnlyDiv themed
        position="sticky"
        width="100%"
        top="0px"
        padding="5px 0"
        zIndex="2"
        >

        <Ul childrenPadding="0 30px" display="flex" justifyContent="center" margin="0px" padding="0px" listStyle="none" flexWrap="no-wrap">
          <HoverLi >
          <A color="white">  <TitleSize>Engagement</TitleSize></A>
          <Div width="100%" position="absolute" top="30px" left="0px" color="black" backgroundColor="white" >
              <EngagementDropDown />
          </Div>
          </HoverLi>
          <HoverLi >
          <A color="white">  <TitleSize>Wedding</TitleSize></A>
          <Div width="100%" position="absolute" top="30px" left="0px" color="black" backgroundColor="white" >
              <WeddingDropDown />
          </Div>
          </HoverLi>
          <HoverLi >
          <A color="white">  <TitleSize>Diamonds</TitleSize></A>
          <Div width="100%" position="absolute" top="30px" left="0px" color="black" backgroundColor="white" >
              <DiamondDropDown />
          </Div>
          </HoverLi>
          <HoverLi >
          <A color="white">  <TitleSize>Jewelry</TitleSize></A>
          <Div width="100%" position="absolute" top="30px" left="0px" color="black" backgroundColor="white" >
              <JewelryDropDown />
          </Div>
          </HoverLi>
          <HoverLi >
          <A color="white">  <TitleSize>Services</TitleSize></A>
          <Div width="100%" position="absolute" top="30px" left="0px" color="black" backgroundColor="white" >
              <WhatWeOfferDropDown />
          </Div>
          </HoverLi>
        </Ul>
      </DesktopOnlyDiv>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;

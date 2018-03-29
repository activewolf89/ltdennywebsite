/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
//shared --
import SideNavigation from 'components/Header/SideNavigation';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Title from 'shared/Title';
import ClickableFontAwesome from 'shared/ClickableFontAwesome';
import A from 'shared/A';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const ControlledHeaderUl = styled(Ul)`
      display: flex;
      position: sticky;
      top: 0px;
      border-bottom: 2px solid gray;
      background-color: white;
      z-index: 3;
      justify-content: space-between;
      padding: 5px 0px;
      margin: 0px;
      @media screen and (min-width:768px){
        padding: 20px 5px;
        position: static;
        justify-content: space-around;

      };
    >li{
      font-size: 20px;
      }

    >ul >li:not(:last-child) {
      display: none;
    }
      @media screen and (min-width:768px){
        >ul >li:not(:last-child) {
          display: flex;
        }
        >ul >li:last-child {
          display: none;
        }
      >li {
        font-size: 26px;
      }
      };

    `;
    return (

      <ControlledHeaderUl padding="0px"  display="flex" alignItems="center" listStyle="none">
        <Ul margin="0px" padding="0px" display="flex" listStyle="none" childrenMargin="0 10px" justifyContent='center' alignItems='center'>
          <Li><A>206.682.5555</A></Li>
        <Li><ClickableFontAwesome name='envelope' size='2x' /></Li>
        <Li><ClickableFontAwesome name='map' size='2x' /></Li>
        <Li><ClickableFontAwesome name='calendar' size='2x' /></Li>
        <Li onClick={this.props.onHamburgerClick}><ClickableFontAwesome name='bars' size='2x' isHamburgerOpen={this.props.isHamburgerOpen}/></Li>
      </Ul>
      <Li ><Title  bold>L T Denny Jewelers</Title></Li>
      <Ul  margin="0px" padding="0px" display="flex" listStyle="none" childrenMargin="0 10px" justifyContent='center' alignItems='center'>
        <Li><ClickableFontAwesome name='search' size='2x' /></Li>
        <Li><ClickableFontAwesome name='user' size='2x' /></Li>
        <Li><ClickableFontAwesome name='shopping-bag' size='2x' /></Li>
        <Li><ClickableFontAwesome name='heart' size='2x' /></Li>
        <Li><ClickableFontAwesome name='heart' size='2x' /></Li>
      </Ul>
      <SideNavigation
        isHamburgerOpen = {this.props.isHamburgerOpen}
        isHamburgerDetailOpen = {this.props.isHamburgerDetailOpen}
        onHamburgerClick = {this.props.handleHamburgerClick}
        onHamburgerDetailClick = {this.props.onHamburgerDetailClick}
      />
      </ControlledHeaderUl>

    );
  }
}

Header.propTypes = {

};

export default Header;

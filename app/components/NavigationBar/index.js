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
import DIV from 'shared/DIV';
import UL from 'shared/UL';
import LI from 'shared/LI';
import {TitleSize} from 'shared/DesktopOnly'
import {MobileOnlyDiv} from 'shared/MobileOnly';

class NavigationBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DIV themed
        >
        <UL display="flex" justifyContent="space-around" margin="0px" padding="0px" listStyle="none" fleWrap="no-wrap">
          <LI>
            <DIV display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MobileOnlyDiv><FontAwesome name='shopping-bag' size="2x" ></FontAwesome></MobileOnlyDiv>
              <TitleSize>Shop</TitleSize>
            </DIV>
          </LI>
          <LI>
            <DIV display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MobileOnlyDiv><FontAwesome name='star' size="2x" ></FontAwesome></MobileOnlyDiv>
              <TitleSize>About</TitleSize>
            </DIV>
          </LI>
          <LI>
            <DIV display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MobileOnlyDiv><FontAwesome name='phone' size="2x" ></FontAwesome></MobileOnlyDiv>
              <TitleSize>Contact</TitleSize>
            </DIV>
          </LI>
          <LI>
            <DIV display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MobileOnlyDiv><FontAwesome name='map-marker' size="2x" ></FontAwesome></MobileOnlyDiv>
              <TitleSize>Visit</TitleSize>
            </DIV>
          </LI>
          <LI>
            <DIV display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <MobileOnlyDiv><FontAwesome name='user' size="2x" ></FontAwesome></MobileOnlyDiv>
              <TitleSize>Account</TitleSize>
            </DIV>
          </LI>
        </UL>
      </DIV>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;

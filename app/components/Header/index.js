/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FontAwesome from 'react-fontawesome';
//shared --
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import NavigationBar from 'components/NavigationBar';
import Title from 'shared/Title';
import {DesktopOnlyDiv} from 'shared/DesktopOnly'

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Div themed bold
        position="sticky"
        zIndex="2"
        top="0px"
        width="100%"
        padding="10px 0"
        >
          <Div display="flex" justifyContent="center" alignItems="center">
          <Title fontWeight="bold" fontSize="22px">L/T/Denny Jewelers</Title>
          <DesktopOnlyDiv width="70%">
            <NavigationBar />
          </DesktopOnlyDiv>
          </Div>
      </Div>
    );
  }
}

Header.propTypes = {

};

export default Header;

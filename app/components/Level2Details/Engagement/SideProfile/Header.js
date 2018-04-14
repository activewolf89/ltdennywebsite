import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import SideProfile from 'components/Level2Details/Engagement/images/side-profile.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {SideProfile}
        title='Side-Profile'
        title1 = "Engagement Rings"
        description = 'The Side Profile is what everyone sees on the side -- explore the different options below and learn more'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

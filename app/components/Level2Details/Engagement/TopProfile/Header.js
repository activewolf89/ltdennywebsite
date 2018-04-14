import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import TopProfile from 'components/Level2Details/Engagement/images/top-profile.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {TopProfile}
        title='Top-Profile'
        title1 = "Engagement Rings"
        description = 'The Tp Profile is what everyone sees first -- explore the different options below and learn more'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

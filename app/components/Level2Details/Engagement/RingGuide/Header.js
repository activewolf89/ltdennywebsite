import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import RingGuide from 'components/Level2Details/Engagement/images/RingGuide.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {RingGuide}
        title='Ring-Guide'
        title1 = "Engagement Rings"
        description = 'There are a lot of little tricks that you may need to learn when it comes to rings, view what we came up with below'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

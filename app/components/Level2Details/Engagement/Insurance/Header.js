import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import Insurance from 'components/Level2Details/Engagement/images/JewelersMutual.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {Insurance}
        title='Metal Choices'
        title1 = "Engagement Rings"
        description = 'Each piece of jewelry needs a different metal for what is inside the peice and what its used for -- check below to learn more'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

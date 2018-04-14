import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import Designer from 'components/Level2Details/Engagement/images/Designer.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {Designer}
        title='Designers'
        title1 = "Engagement Rings"
        description = 'Designers have made it their mission to produce beautiful peices, we represent a number of absolutely gorgeous styles, view below'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

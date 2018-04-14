import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import Tacori from 'components/Level2Details/Engagement/images/tacori.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';

//------

const Header = (props) =>{
  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {Tacori}
        title='Tacori'
        title1 = "Engagement Rings"
        description = 'Tacori is a special designer we carry, we are Tacoris oldest partners and their peices have a lot to show'
        path = "/engagement/shop"
       />

    </Div>
  )
}
Header.propTypes = {
}
export default Header;

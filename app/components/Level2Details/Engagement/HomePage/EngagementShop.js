import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import TestImage from 'components/Level2Details/Engagement/images/haloSemi.jpg';
import Div from 'shared/Div';
//------

const EngagementShop = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Shop Engagement Rings"
        description = "this is a description"
        backgroundImg={TestImage}
        linkTo ="/engagement/shop"
        />
    </Div>
  )
}
EngagementShop.propTypes = {
}
export default EngagementShop;

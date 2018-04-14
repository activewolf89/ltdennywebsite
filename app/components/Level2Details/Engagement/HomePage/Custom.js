import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import Customize from 'components/Level2Details/Engagement/images/custom.jpg';
import Div from 'shared/Div';
//------

const Custom = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Custom"
        description = "Learn the differences between the two and what to select that best fits your needs"
        backgroundImg={Customize}
        linkTo ="/engagement/custom"
        />
    </Div>
  )
}
Custom.propTypes = {
}
export default Custom;

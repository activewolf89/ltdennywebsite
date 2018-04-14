import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import MetalChoiceImg from 'components/Level2Details/Engagement/images/MetalChoices.png';
import Div from 'shared/Div';
//------

const MetalChoices = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Metal-Choices"
        description = "Learn about the different metal choices"
        backgroundImg={MetalChoiceImg}
        linkTo ="/engagement/metal-choices"
        />
    </Div>
  )
}
MetalChoices.propTypes = {
}
export default MetalChoices;

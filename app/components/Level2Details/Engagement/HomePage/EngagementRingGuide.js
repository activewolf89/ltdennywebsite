import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';


import RingGuide from 'components/Level2Details/Engagement/images/RingGuide.jpg';
import Div from 'shared/Div';
//------

const EngagementRingGuide = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Ring-Guide"
        description = "Walk through information and tips on what you need to know when selecting an engagement ring"
        backgroundImg={RingGuide}
        linkTo ="/engagement/ring-guide"
        />
    </Div>
  )
}
EngagementRingGuide.propTypes = {
}
export default EngagementRingGuide;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import TopProfile from 'components/Level2Details/Engagement/images/top-profile.jpg';
import Div from 'shared/Div';
//------

const EngagementTopProfile = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Top-Profile"
        description = "Learn about the different types of top profiles"
        backgroundImg={TopProfile}
        linkTo ="/engagement/top-profile"
        />
    </Div>
  )
}
EngagementTopProfile.propTypes = {
}
export default EngagementTopProfile;

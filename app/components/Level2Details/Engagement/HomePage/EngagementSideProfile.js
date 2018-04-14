import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import SideImage from 'components/Level2Details/Engagement/images/side-profile.jpg';
import Div from 'shared/Div';
//------

const engagementSideProfile = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Side-Profile"
        description = "Understand the side profiles of rings and learn the options"
        backgroundImg={SideImage}
        linkTo ="/engagement/side-profile"
        />
    </Div>
  )
}
engagementSideProfile.propTypes = {
}
export default engagementSideProfile;

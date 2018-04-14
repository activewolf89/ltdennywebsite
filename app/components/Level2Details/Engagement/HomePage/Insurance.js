import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import JewelersMutual from 'components/Level2Details/Engagement/images/JewelersMutual.jpg';
import Div from 'shared/Div';
//------

const Insurance = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Insurance"
        description = "Learn about the engagement ring insurance"
        backgroundImg={JewelersMutual}
        linkTo ="/engagement/insurance"
        />
    </Div>
  )
}
Insurance.propTypes = {
}
export default Insurance;

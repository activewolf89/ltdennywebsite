import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';


import Diamond from 'components/Level2Details/Engagement/images/Diamond.jpg';
import Div from 'shared/Div';
//------

const CenterStone = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Center Stone Information"
        description = "Learn more about the process of making the ring around the diamond"
        backgroundImg={Diamond}
        linkTo ="/engagement/center-stone"
        />
    </Div>
  )
}
CenterStone.propTypes = {
}
export default CenterStone;

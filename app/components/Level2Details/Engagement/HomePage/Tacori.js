import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Template from 'components/Level2Details/Template.js';


import tacori from 'components/Level2Details/Engagement/images/tacori.jpg';
import Div from 'shared/Div';
//------

const Tacori = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Tacori"
        description = "With every piece purchased, enjoy to further your honeymoon with rewards points"
        backgroundImg={tacori}
        linkTo ="/engagement/tacori"
        />
    </Div>
  )
}
Tacori.propTypes = {
}
export default Tacori;

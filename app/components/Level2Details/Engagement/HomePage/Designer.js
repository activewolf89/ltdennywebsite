import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import Designerize from 'components/Level2Details/Engagement/images/Designer.jpg';
import Div from 'shared/Div';
//------

const Designer = (props) =>{
  return (
    <Div height="100%">
      <Template
        nonHeader={props.nonHeader}
        title = "Designer"
        description = "Browse all our designers and learn more about the differences"
        backgroundImg={Designerize}
        linkTo ="/engagement/designer"
        />
    </Div>
  )
}
Designer.propTypes = {
}
export default Designer;

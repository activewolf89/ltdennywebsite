import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Template from 'components/Level2Details/Template.js';

import slide6 from 'components/Level2Details/Engagement/images/slide6.jpg';
import Div from 'shared/Div';
import Title from 'shared/Title';
import HeaderTemplate from 'components/Level2Details/HeaderTemplate.js';
//------

const EngagementHome = (props) =>{

  return (
    <Div height="100%">
      <HeaderTemplate
        backgroundImg = {slide6}
        title='Engagement Rings'
        title1='Engagement Rings'
        description = 'Browse our selection of rings or read through helpful articles to get you started concerning all things engagement ring related'
        path = "/engagement/shop"
       />

    </Div>
  )
}
EngagementHome.propTypes = {
}
export default EngagementHome;

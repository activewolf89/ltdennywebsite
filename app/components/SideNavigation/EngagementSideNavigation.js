import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'shared/Div';

//shared
import {SideUl,SideLi} from 'shared/SideNavigationStyle';
import Title from 'shared/Title';
import fiveStartYelp from 'shared/Shapes/5StarYelp.svg';
import Button from 'shared/Button';
import SideNavigationTemplate from './SideNavigationTemplate.js';
//------

const EngagementSideNavigation = (props) =>{
  return (
    <SideNavigationTemplate
      Line0Active= {props.location.pathname === '/engagement'}
      Line0="Engagement Home"
      line0Destination = '/engagement'
      Line1Active= {props.location.pathname === '/engagement/shop'}
      Line1="Shop Rings"
      line1Destination = '/engagement/shop'
      Line2Active= {props.location.pathname === '/engagement/top-profile'}
      Line2="Top Profile"
      line2Destination = '/engagement/top-profile'
      Line3Active= {props.location.pathname === '/engagement/side-profile'}
      Line3="Side Profile"
      line3Destination = '/engagement/side-profile'
      Line4Active= {props.location.pathname === '/engagement/ring-guide'}
      Line4="Ring Guide"
      line4Destination = '/engagement/ring-guide'
      Line5Active= {props.location.pathname === '/engagement/tacori'}
      Line5="Tacori"
      line5Destination = '/engagement/tacori'
      Line6Active= {props.location.pathname === '/engagement/metal-choices'}
      Line6="Metal Choices"
      line6Destination = '/engagement/metal-choices'
      Line7Active= {props.location.pathname === '/engagement/insurance'}
      Line7="Insurance"
      line7Destination = '/engagement/insurance'
      Line8Active= {props.location.pathname === '/engagement/center-stone'}
      Line8="Center Stone"
      line8Destination = '/engagement/center-stone'
      Line9Active= {props.location.pathname === '/engagement/custom-designer'}
      Line9="Custom"
      line9Destination = '/engagement/custom'
      Line10Active= {props.location.pathname === '/engagement/designer'}
      Line10="Designer"
      line10Destination = '/engagement/designer'

    />
  )
}
EngagementSideNavigation.propTypes = {
}
export default EngagementSideNavigation;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//shared
import Div from 'shared/Div';


//------
import IntroSection from './IntroSection';
import FilterSection from './FilterSection';
import ProductSection from './ProductSection';




const Engagement = (props) =>{
  return (
  <Div color="black" backgroundColor="white">
    <IntroSection />
    <FilterSection onToggleDetail={props.onToggleDetail} filterDetails={props.filterDetails} toggle={props.toggle} onToggleFilter={props.onToggleFilter} />
    <ProductSection />
  </Div>
  )
}
Engagement.propTypes = {
  onToggleDetail: PropTypes.func.isRequired,
  filterDetails: PropTypes.object.isRequired,
  onToggleFilter: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
}
export default Engagement;

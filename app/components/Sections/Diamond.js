import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import rbc from 'images/rbc.png';
import fancyCuts from 'images/fancyCuts.jpg';
import forevermarkLogo from 'images/forevermarkLogo.jpg';
import fourCs from 'images/fourCs.jpg';
import syntheticVsNatural from 'images/syntheticVsNatural.jpg';
//------

const Diamond = () =>{
  return (
    <HomepageRotation
      mainTitle="Diamond Details"
      image1={rbc}
      image1MainDescription="Round-Brilliant-Cut Diamonds"
      image1SecondaryDescription="learn about hearts & arrows-cut, all the way to seeing the color difference"
      image2={fancyCuts}
      image2MainDescription="Fancy-Cuts"
      image2SecondaryDescription="What to know when selecting your beautiful stone"
      image3={forevermarkLogo}
      image3MainDescription="Forevermark"
      image3SecondaryDescription="Non rounds ranging from cushions to princess-cuts -- the cut still matters!"
      image4={syntheticVsNatural}
      image4MainDescription="Synthetics vs Natural"
      image4SecondaryDescription="The modern debate over synthetic lab diamonds vs natural stones--learn more"
      image5={fourCs}
      image5MainDescription="The four C's of diamonds"
      image5SecondaryDescription="we guide our customers in-person and do the same online - read useful articles we made ranging from selecting engagement rings to picking a gift"
     />
  )
}
Diamond.propTypes = {
}
export default Diamond;

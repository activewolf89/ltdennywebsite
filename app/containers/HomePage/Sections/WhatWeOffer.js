import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import ringRepair from 'images/ringRepair.jpg';
import custom from 'images/custom.jpg';
import guidance from 'images/guidance.jpg';
import forevermark from 'images/forevermark.jpg';
import tacori from 'images/tacori.jpg';
//------

const WhatWeOffer = () =>{
  return (
    <HomepageRotation
      mainTitle="What We Offer"
      image1={ringRepair}
      image1MainDescription="Repair-Work"
      image1SecondaryDescription="We repair and refurbrish jewelry every day, whether its resizing engagement rings to setting stones"
      image2={custom}
      image2MainDescription="Custom-Jobs"
      image2SecondaryDescription="Our goldsmith on site has been building beautiful custom pieces for over 50 years, see his work"
      image3={tacori}
      image3MainDescription="Tacori"
      image3SecondaryDescription="We represent beautiful brands such as Tacori"
      image4={forevermark}
      image4MainDescription="Forevermark"
      image4SecondaryDescription="Our diamonds are hand-picked and typically Forevermark naturally responsibly sourced stones"
      image5={guidance}
      image5MainDescription="guidance"
      image5SecondaryDescription="we guide our customers in-person and do the same online - read useful articles we made ranging from selecting engagement rings to picking a gift"
     />
  )
}
WhatWeOffer.propTypes = {
}
export default WhatWeOffer;

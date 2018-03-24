import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import slide6 from 'images/slide6.jpg';
import weddingBands from 'images/weddingBands.jpg';
import diamonds from 'images/diamonds.png';
import fineJewelry from 'images/fineJewelry.jpg';
import watches from 'images/watches.jpg';
//------

const Banner = () =>{
  return (
    <HomepageRotation
      mainTitle="Seattle's Destination Jewelers"
      image1={slide6}
      image1MainDescription="Engagement Rings"
      image1SecondaryDescription="Shop our rings, read our two-cents ranging from synthetics to choosing the right ring"
      image2={weddingBands}
      image2MainDescription="Wedding Bands"
      image2SecondaryDescription="Find your matching band and something that fits well for him"
      image3={diamonds}
      image3MainDescription="Diamonds"
      image3SecondaryDescription="Browse our hand-picked selection and learn about the center-crown of your setting"
      image4={fineJewelry}
      image4MainDescription="Fine Jewelry"
      image4SecondaryDescription="Browse beautiful fine jewelry hand-picked for you"
      image5={watches}
      image5MainDescription="Watches"
      image5SecondaryDescription="View our watches from Frederique Constant & Ebel"

     />
  )
}
Banner.propTypes = {
}
export default Banner;

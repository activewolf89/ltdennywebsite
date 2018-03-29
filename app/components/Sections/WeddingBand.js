import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import ladiesAnniversary from 'images/ladiesAnniversary.jpg';
import ladiesClassic from 'images/ladiesClassic.jpg';
import ladiesDiamond from 'images/ladiesDiamond.jpg';
import mensClassic from 'images/mensClassic.png';
import mensAlternative from 'images/mensAlternative.jpg';
import mensMeteorite from 'images/mensMeteorite.jpg';
//------

const WhatWeOffer = () =>{
  return (
    <HomepageRotation
      mainTitle="Wedding Band Details"
      image1={ladiesDiamond}
      image1MainDescription="ladiesDiamond"
      image1SecondaryDescription="We repair and refurbrish jewelry every day, whether its resizing engagement rings to setting stones"
      image2={mensClassic}
      image2MainDescription="mensClassic"
      image2SecondaryDescription="Our goldsmith on site has been building beautiful custom pieces for over 50 years, see his work"
      image3={mensMeteorite}
      image3MainDescription="mensMeteorite"
      image3SecondaryDescription="We represent beautiful brands such as Tacori"
      image4={ladiesClassic}
      image4MainDescription="ladiesClassic"
      image4SecondaryDescription="Our diamonds are hand-picked and typically Forevermark naturally responsibly sourced stones"
      image5={mensAlternative}
      image5MainDescription="mensAlternative"
      image5SecondaryDescription="we guide our customers in-person and do the same online - read useful articles we made ranging from selecting engagement rings to picking a gift"
      image6={ladiesAnniversary}
      image6MainDescription="ladiesAnniversary"
      image6SecondaryDescription="we guide our customers in-person and do the same online - read useful articles we made ranging from selecting engagement rings to picking a gift"
     />
  )
}
WhatWeOffer.propTypes = {
}
export default WhatWeOffer;

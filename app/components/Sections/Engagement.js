import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import solitaire from 'images/solitaire.jpg';
import haloFull from 'images/haloFull.jpg';
import haloSemi from 'images/haloSemi.jpg';
import roseGoldRing from 'images/roseGoldRing.png';
import paveRing from 'images/paveRing.jpg';
import ThreeStoneRing from 'images/ThreeStoneRing.jpg';

//------

const Engagement = () =>{
  return (
    <HomepageRotation
      mainTitle="Engagement Ring Details"
      oneLargeImage={true}
      image1={solitaire}
      image1MainDescription="Solitaire"
      image1SecondaryDescription="Shop our rings, read our two-cents ranging from synthetics to choosing the right ring"
      image2={haloFull}
      image2MainDescription="Dantella Halo"
      image2SecondaryDescription="Find your matching band and something that fits well for him"
      image3={haloSemi}
      image3MainDescription="Full Bloom Halo"
      image3SecondaryDescription="Browse our hand-picked selection and learn about the center-crown of your setting"
      image4={roseGoldRing}
      image4MainDescription="Rose-Gold Ring"
      image4SecondaryDescription="Browse beautiful earrings hand-picked for you"
      image5={paveRing}
      image5MainDescription="Pave"
      image5SecondaryDescription="Browse beautiful pave rings hand-picked for you"
      image5={ThreeStoneRing}
      image5MainDescription="Three Stone Ring"
      image5SecondaryDescription="Browse beautiful pave rings hand-picked for you"
     />
  )
}
Engagement.propTypes = {
}
export default Engagement;

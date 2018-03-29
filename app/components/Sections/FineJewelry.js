import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import HomepageRotation from './HomePageRotation';
import diamondEarrings from 'images/diamondEarrings.jpg';
import diamondFineRing from 'images/diamondFineRing.jpg';
import diamondNecklace from 'images/diamondNecklace.jpg';
import diamondBracelet from 'images/diamondBracelet.png';
import gemstoneEarrings from 'images/gemstoneEarrings.jpg';
import gemstoneFineRing from 'images/gemstoneFineRing.jpg';
import gemstoneNecklace from 'images/gemstoneNecklace.jpg';
import gemstoneBracelet from 'images/gemstoneBracelet.jpg';
//------

const FineJewelry = () =>{
  return (
    <HomepageRotation
      mainTitle="Fine Jewelry Details"
      image1={diamondEarrings}
      image1MainDescription="Diamond Earrings"
      image1SecondaryDescription="learn about hearts & arrows-cut, all the way to seeing the color difference"
      image2={diamondNecklace}
      image2MainDescription="Diamond Necklaces"
      image2SecondaryDescription="What to know when selecting your beautiful stone"
      image3={diamondFineRing}
      image3MainDescription="Diamond Fine Rings"
      image3SecondaryDescription="Non rounds ranging from cushions to princess-cuts -- the cut still matters!"
      image4={diamondBracelet}
      image4MainDescription="Diamond Bracelets"
      image4SecondaryDescription="The modern debate over synthetic lab diamonds vs natural stones--learn more"
      image5={gemstoneEarrings}
      image5MainDescription="Gemstone Earrings"
      image5SecondaryDescription="learn about hearts & arrows-cut, all the way to seeing the color difference"
      image6={gemstoneNecklace}
      image6MainDescription="Gemstone Necklaces"
      image6SecondaryDescription="What to know when selecting your beautiful stone"
      image7={gemstoneFineRing}
      image7MainDescription="Gemstone Fine Rings"
      image7SecondaryDescription="Non rounds ranging from cushions to princess-cuts -- the cut still matters!"
      image8={gemstoneBracelet}
      image8MainDescription="Gemstone Bracelets"
      image8SecondaryDescription="Non rounds ranging from cushions to princess-cuts -- the cut still matters!"
     />
  )
}
FineJewelry.propTypes = {
}
export default FineJewelry;

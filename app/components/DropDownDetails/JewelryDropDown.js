import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'shared/Title';
import FineJewelrySection from 'components/Sections/FineJewelry';

import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';
import Aul from 'shared/Aul';
import Ali from 'shared/Ali';
import Hr from 'shared/Hr';

import DiamondStuds from 'shared/Shapes/DiamondStuds.svg';
import AnniversaryLBand from 'shared/Shapes/AnniversaryLBand.svg';

import DiamondBracelet from 'shared/Shapes/diamondBracelet.svg';
import DiamondRing from 'shared/Shapes/diamondRing.svg';
import DiamondNecklace from 'shared/Shapes/diamondPendant.svg';
import DiamondEarring from 'shared/Shapes/diamondEarring.svg';

import GemBracelet from 'shared/Shapes/gemstoneBracelet.svg';
import GemRing from 'shared/Shapes/gemstoneRing.svg';
import GemNecklace from 'shared/Shapes/gemstonePendant.svg';
import GemEarring from 'shared/Shapes/gemstoneEarring.svg';
//new stuff

const FlexColumn = styled(Div)`
  display: block;

`;
const FlexParent = styled(Div)`
  display: flex;
  flex-wrap: no-wrap;
  justify-content:space-around;
  @media screen and (max-width:768px){
    display: block;
    >div legend {
      background-color: lightGray;
    }
    >div ul li {
      border-bottom: 1px solid gray;
    }
  }
`;
const AdjustableTitle = styled(Title)`
text-align:left;

  @media screen and (min-width:768px){
  text-align:center;
  };
`
const JewelryDropDown = (props) =>{
  return (
    <Div padding="20px 0">
      <FlexParent>
        <FlexColumn>
            <Title color="teal" noCenter capitalize>Our Selection</Title>
            <Aul display="block">
              <Ali backgroundSize="35px" backgroundImg={DiamondRing}><A>View Fine Jewelry</A></Ali>
              <Ali backgroundSize="50px" backgroundImg={DiamondStuds}><A>Diamond Studs</A></Ali>
              <Ali backgroundSize="50px" backgroundImg={AnniversaryLBand}><A>Anniversary Bands</A></Ali>
            <Ul margin="0px" padding="0px" childrenMargin="10px 0">
              <Li>Birthstone Gifts</Li>
              <Li>Gifts Under 500</Li>
            </Ul>
          </Aul>
        </FlexColumn>
        <FlexColumn>
          <AdjustableTitle color="teal" capitalize>Browse By Category</AdjustableTitle>
          <Div display="flex">
          <Aul display="block" padding="0 10px 0 0">
            <Ali backgroundSize="40px" backgroundImg={DiamondRing}><A>Diamond Rings</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={DiamondNecklace}><A>Diamond Necklaces</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={DiamondEarring}><A>Diamond Earrings</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={DiamondBracelet}><A>Diamond Bracelets</A></Ali>
          </Aul>
          <Aul display="block">
            <Ali backgroundSize="40px" backgroundImg={GemRing}><A>Gem Rings</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={GemNecklace}><A>Gem Necklaces</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={GemEarring}><A>Gem Earrings</A></Ali>
            <Ali backgroundSize="40px" backgroundImg={GemBracelet}><A>Gem Bracelets</A></Ali>
          </Aul>
        </Div>
        </FlexColumn>
        <FlexColumn gridArea="rightColumn">
          <Title color="teal" noCenter capitalize>Watches</Title>
            <Ul padding="0px" childrenMargin="12px 0" display="block">
              <Li ><A>Mens Watches</A></Li>
              <Li ><A>Ladies Watches</A></Li>
            </Ul>
          <Title color="teal" noCenter capitalize>Ideas</Title>
            <Ul padding="0px" childrenMargin="12px 0" display="block">
              <Li ><A>Gift Guide</A></Li>
              <Li ><A>Gemstone Filter</A></Li>
            </Ul>

        </FlexColumn>
      </FlexParent>
    <FineJewelrySection />
  </Div>
  )
}
JewelryDropDown.propTypes = {
}
export default JewelryDropDown;

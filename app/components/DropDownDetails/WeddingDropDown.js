import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'shared/Div';
import Title from 'shared/Title';
import WeddingSection from 'components/Sections/WeddingBand';

import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';
import Aul from 'shared/Aul';
import Ali from 'shared/Ali';
import Hr from 'shared/Hr';
import diamondLBand from 'shared/Shapes/diamondLBand.svg';
import classicLBand from 'shared/Shapes/classicLBand.svg';
import diamondMBand from 'shared/Shapes/diamondMBand.svg';
import classicMBand from 'shared/Shapes/classicMBand.svg';
import eternityLBand from 'shared/Shapes/eternityLBand.svg';
import meteoriteBand from 'shared/Shapes/meteoriteBand.svg';
import AnniversaryBand from 'shared/Shapes/anniversaryLBand.svg';
import alternativeMBand from 'shared/Shapes/alternativeMBand.svg';
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
const WeddingDropDown = (props) =>{
  return (
    <Div padding="20px 0">
      <FlexParent>
        <FlexColumn>
            <Title color="teal" noCenter capitalize>Wedding Bands</Title>
            <Aul display="block">
              <Ali backgroundSize="40px" backgroundImg={classicLBand}><A>View Ladies Bands</A></Ali>
              <Ali backgroundSize="40px" backgroundImg={classicMBand}><A>View Mens Bands</A></Ali>
            <Ul margin="0px" padding="0px" childrenMargin="10px 0">
              <Li>Rose Gold Wedding Bands</Li>
              <Li>Custom Wedding Bands</Li>
            </Ul>
          </Aul>
        </FlexColumn>
        <FlexColumn>
          <AdjustableTitle color="teal" capitalize>Browse Styles</AdjustableTitle>
          <Div display="flex">
          <Aul display="block" padding="0 10px 0 0">
            <Ali backgroundSize="50px" backgroundImg={classicLBand}><A>Ladies Classic</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={eternityLBand}><A>Ladies Eternity</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={diamondLBand}><A>Ladies Diamond</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={AnniversaryBand}><A>Ladies Anniversary</A></Ali>
          </Aul>
          <Aul display="block">
            <Ali backgroundSize="50px" backgroundImg={classicMBand}><A>Mens Classic</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={diamondMBand}><A>Mens Diamond</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={meteoriteBand}><A>Mens Meteorite</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={alternativeMBand}><A>Mens Alternative</A></Ali>
          </Aul>
        </Div>
        </FlexColumn>
        <FlexColumn gridArea="rightColumn">
          <Title color="teal" noCenter capitalize>Education</Title>
            <Ul padding="0px" childrenMargin="12px 0" display="block">
              <Li ><A>Finger-Size</A></Li>
              <Li><A>Custom Vs. Designer</A></Li>
              <Li><A>Find Her Style</A></Li>
              <Li><A>Matching the band</A></Li>
            </Ul>
        </FlexColumn>
      </FlexParent>
    <WeddingSection/>
  </Div>
  )
}
WeddingDropDown.propTypes = {
}
export default WeddingDropDown;

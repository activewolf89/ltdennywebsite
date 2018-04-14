import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'shared/Div';
import Title from 'shared/Title';
import EngagementSection from 'components/Sections/Engagement';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';
import Aul from 'shared/Aul';
import Ali from 'shared/Ali';
import Hr from 'shared/Hr';
import SolitaireRing from 'shared/Shapes/SolitaireRing.svg';
import ThreeStoneRing from 'shared/Shapes/ThreeStoneRing.svg';
import HaloRing from 'shared/Shapes/HaloRing.svg';
import PaveRing from 'shared/Shapes/PaveRing.svg';
import AllEngagementRings from 'shared/Shapes/showAllRings.svg';
import AllDiamonds from 'shared/Shapes/viewAllDiamonds.svg';
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
const EngagementDropDown = (props) =>{
  return (
    <Div padding="20px 0">
      <FlexParent>
        <FlexColumn>
            <Title color="teal" noCenter capitalize> Starting Point</Title>
            <Aul display="block">
              <Ali backgroundSize="50px" backgroundImg={AllEngagementRings}><A>View Our Settings</A></Ali>
              <Ali backgroundSize="30px" backgroundImg={AllDiamonds}><A>View Our Diamonds</A></Ali>
            <Ul margin="0px" padding="0px" childrenMargin="10px 0">
              <Li>Rose Gold Engagement Rings</Li>
              <Li>Custom Engagement Rings</Li>
            </Ul>
          </Aul>
        </FlexColumn>
        <FlexColumn>
          <Title color="teal" noCenter capitalize>Browse Styles</Title>
          <Aul display="block">
            <Ali backgroundSize="50px" backgroundImg={SolitaireRing}><A>Solitaire</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={HaloRing}><A>Halo</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={PaveRing}><A>Side Stone</A></Ali>
            <Ali backgroundSize="50px" backgroundImg={ThreeStoneRing}><A>Three Stone</A></Ali>
          </Aul>
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
  </Div>
  )
}
EngagementDropDown.propTypes = {
}
export default EngagementDropDown;

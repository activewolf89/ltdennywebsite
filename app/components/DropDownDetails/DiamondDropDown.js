import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'shared/Div';
import Title from 'shared/Title';
import DiamondSection from 'components/Sections/Diamond';

import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';
import Aul from 'shared/Aul';
import Ali from 'shared/Ali';
import Hr from 'shared/Hr';
import AllEngagementRings from 'shared/Shapes/showAllRings.svg';
import AllDiamonds from 'shared/Shapes/viewAllDiamonds.svg';

import Asscher from 'shared/Shapes/asscher.svg';
import Emerald from 'shared/Shapes/emerald.svg';
import Oval from 'shared/Shapes/oval.svg';
import Round from 'shared/Shapes/round.svg';
import Princess from 'shared/Shapes/princess.svg';
import Cushion from 'shared/Shapes/cushion.svg';

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
const DiamondDropDown = (props) =>{
  return (
    <Div padding="20px 0">
      <FlexParent>
        <FlexColumn>
            <Title color="teal" noCenter capitalize>Our Selection</Title>
            <Aul display="block">
              <Ali backgroundSize="35px" backgroundImg={AllDiamonds}><A>View Our Diamonds</A></Ali>
              <Ali backgroundSize="50px" backgroundImg={AllEngagementRings}><A>View Our Settings</A></Ali>
            <Ul margin="0px" padding="0px" childrenMargin="10px 0">
              <Li>Forevermark Diamonds</Li>
              <Li>FireCushions</Li>
              <Li>FireMark Princess-Cuts</Li>
            </Ul>
          </Aul>
        </FlexColumn>
        <FlexColumn>
          <AdjustableTitle color="teal" capitalize>Browse By Shape</AdjustableTitle>
          <Div display="flex">
          <Aul display="block" padding="0 10px 0 0">
            <Ali backgroundSize="30px" backgroundImg={Round}><A>Rounds</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Princess}><A>Princess</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Cushion}><A>Cushion</A></Ali>
          </Aul>
          <Aul display="block">
            <Ali backgroundSize="30px" backgroundImg={Oval}><A>Ovals</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Emerald}><A>Emerald</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Asscher}><A>Asscher</A></Ali>
          </Aul>
        </Div>
        </FlexColumn>
        <FlexColumn gridArea="rightColumn">
          <Title color="teal" noCenter capitalize>Education</Title>
            <Ul padding="0px" childrenMargin="12px 0" display="block">
              <Li ><A>Four C's + 1</A></Li>
              <Li><A>Put Your $$ where it matters</A></Li>
              <Li><A>Picking The Perfect Stone For You</A></Li>
              <Li><A>What Matters Most</A></Li>
            </Ul>
        </FlexColumn>
      </FlexParent>
  </Div>
  )
}
DiamondDropDown.propTypes = {
}
export default DiamondDropDown;

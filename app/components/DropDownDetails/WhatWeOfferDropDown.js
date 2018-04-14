import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from 'shared/Div';
import Title from 'shared/Title';
import WhatWeOfferSection from 'components/Sections/WhatWeOffer';
import FontAwesome from 'react-fontawesome';

import Ul from 'shared/Ul';
import A from 'shared/A';
import Li from 'shared/Li';
import Aul from 'shared/Aul';
import Ali from 'shared/Ali';
import Custom from 'shared/Shapes/hammer.svg';
import Repair from 'shared/Shapes/repairRing.svg';
import Phone from 'shared/Shapes/phone.svg';
import Email from 'shared/Shapes/email.svg';
import Appointment from 'shared/Shapes/appointment.svg';
import MapLocation from 'shared/Shapes/map.svg';

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

const WhatWeOffer = (props) =>{
  return (
    <Div padding="20px">
      <FlexParent>
        <FlexColumn>
            <Title color="teal" noCenter capitalize>What We Offer</Title>
            <Aul display="block">
              <Ali backgroundSize="30px" backgroundImg={Custom}><A>Custom-Work</A></Ali>
              <Ali backgroundSize="30px" backgroundImg={Repair}><A>Repair-Services</A></Ali>
              <Ali backgroundSize="30px" backgroundImg={Repair}><A>Guidance</A></Ali>
          </Aul>
        </FlexColumn>
        <FlexColumn>
          <Title color="teal" noCenter capitalize>Contact Info</Title>
          <Aul display="block">
            <Ali backgroundSize="30px" backgroundImg={Phone}><A>Call</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Email}><A>Email</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={MapLocation}><A>Directions</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Appointment}><A>Appointment</A></Ali>
        </Aul>
        </FlexColumn>
        <FlexColumn gridArea="rightColumn">
          <Title color="teal" noCenter capitalize>Social Media/Reviews</Title>
          <Aul display="block">
            <Ali backgroundSize="30px" backgroundImg={Repair}><A>Yelp Rating</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Repair}><A>Google Rating</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Repair}><A>FaceBook</A></Ali>
            <Ali backgroundSize="30px" backgroundImg={Repair}><A>Instagram</A></Ali>
        </Aul>

        </FlexColumn>
      </FlexParent>
  </Div>
  )
}
WhatWeOffer.propTypes = {
}
export default WhatWeOffer;

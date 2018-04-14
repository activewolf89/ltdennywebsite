import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Div from 'shared/Div';
import Title from 'shared/Title';
import P from 'shared/P';
//------
const DesktopDiv = styled(Div)`
  display: none;
  @media screen and (min-width:768px){
  display: block;
  };
`
const IntroSection = () =>{
  return (
    <Div padding="50px 0"  display="flex" flexDirection="column" alignItems="center" backgroundColor="black" color="white">
    <Title fontSize="26px" capitalize>Engagement Rings</Title>
    <Title fontSize="26px" bold capitalize>Settings</Title>
    <DesktopDiv width="50%">
    <P><Title>Our settings are hand-picked from the designers we carry, along with custom-pieces we have made, and some we collected over the years</Title></P>
  </DesktopDiv>
  </Div>
  )
}
IntroSection.propTypes = {
}
export default IntroSection;

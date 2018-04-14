import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import OwlCarousel from 'react-owl-carousel';
import Div from 'shared/Div';
import Title from 'shared/Title';
//------

const Banner = () =>{

  const HoverDiv = styled(Div)`
    width: 300px;
    height: 300px;
      @media screen and (min-width:768px){
        width: 400px;
        height: 350px;
      };

  `

  return (
    <Div display="flex" flexDirection='column' justifyContent='center' alignItems='center' padding="40px 0">
      <Div margin="0 0 30px 0">
      <Title bold>Rotating Banner</Title>
    </Div>
    <OwlCarousel margin={15} autoWidth>
        <HoverDiv>
          1
        </HoverDiv>
        <HoverDiv>
        </HoverDiv>
        <HoverDiv>
        </HoverDiv>
        <HoverDiv >
        </HoverDiv>

    </OwlCarousel>
  </Div>
  )
}
Banner.propTypes = {
}
export default Banner;

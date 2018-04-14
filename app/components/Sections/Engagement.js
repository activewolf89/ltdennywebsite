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
import OwlCarousel from 'react-owl-carousel';
import Div from 'shared/Div';
import Title from 'shared/Title';
import EngagementShop from 'components/Level2Details/Engagement/HomePage/EngagementShop';
import CenterStone from 'components/Level2Details/Engagement/HomePage/CenterStone';
import Custom from 'components/Level2Details/Engagement/HomePage/Custom';
import EngagementRingGuide from 'components/Level2Details/Engagement/HomePage/EngagementRingGuide';
import Insurance from 'components/Level2Details/Engagement/HomePage/Insurance';
import EngagementTopProfile from 'components/Level2Details/Engagement/HomePage/EngagementTopProfile';
import EngagementSideProfile from 'components/Level2Details/Engagement/HomePage/EngagementSideProfile';
import Tacori from 'components/Level2Details/Engagement/HomePage/Tacori';
//------

const Engagement = () =>{
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
      <Title bold>Engagement Ring Details</Title>
    </Div>
    <OwlCarousel margin={15} autoWidth>
        <HoverDiv>
          <EngagementShop />
        </HoverDiv>
        <HoverDiv>
        <Tacori />
      </HoverDiv>
        <HoverDiv>
        <CenterStone />
      </HoverDiv>
        <HoverDiv>
          <Custom />
        </HoverDiv>
        <HoverDiv>
          <EngagementRingGuide />
        </HoverDiv>
        <HoverDiv >
          <EngagementTopProfile />
        </HoverDiv>
        <HoverDiv >
          <EngagementSideProfile />
        </HoverDiv>
    </OwlCarousel>
  </Div>
  )
}
Engagement.propTypes = {
}
export default Engagement;

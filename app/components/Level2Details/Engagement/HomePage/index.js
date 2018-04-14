import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import GridChild from 'shared/GridChild';
import MainContent from 'components/MainContent';
import EngagementHome from './EngagementHome';
import EngagementSideProfile from './EngagementSideProfile';
import EngagementTopProfile from './EngagementTopProfile';
import EngagementRingGuide from './EngagementRingGuide';
import Tacori from './Tacori';
import MetalChoices from './MetalChoices';
import Insurance from './Insurance';
import CenterStone from './CenterStone';
import Custom from './Custom';
import Designer from './Designer';
import Div from 'shared/Div';

//------

class Homepage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){

      const ParentGrid = styled(Div)`
        display: block;

        @media screen and (min-width:768px){
        grid-template-rows: auto 500px 300px 300px 300px 300px;
        grid-template-columns: repeat(12,1fr);
        display: grid;

        grid-gap: 20px;
        grid-template-areas:
        " firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne "
        " secondOne secondOne secondOne secondOne secondOne secondOne secondTwo secondTwo secondTwo secondTwo secondTwo secondTwo "
        " thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo "
        " fourthOne fourthOne fourthOne fourthOne fourthOne fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo "
        " fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne "
        " sixthOne sixthOne sixthOne sixthOne sixthOne sixthOne sixthTwo sixthTwo sixthTwo sixthTwo sixthTwo sixthTwo";
      };
      `
      const DissapearDiv = styled(Div)`
        display: block;
        @media screen and (min-width:768px){
          display: none;
        };
      `
      const ReappearDiv = styled(Div)`
      display: none;
        @media screen and (min-width:768px){
          display: block;
        };
      `
      const AdjustableHeight= styled(GridChild)`
        height: 450px;
        @media screen and (min-width:768px){
        height: auto;
        };
      `
    return (
      <ParentGrid  >
        <DissapearDiv position="fixed" top="40px" backgroundColor="blue" zindex="10000">
          <EngagementHome nonHeader history = {this.props.history}/>
        </DissapearDiv>
        <AdjustableHeight gridArea="firstOne" height="450px">
          <ReappearDiv>
            <EngagementHome nonHeader history = {this.props.history}/>
        </ReappearDiv>
        </AdjustableHeight>
        <GridChild gridArea="secondOne">
          <EngagementSideProfile nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="secondTwo">
          <EngagementTopProfile nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="thirdOne">
          <EngagementRingGuide nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="thirdTwo">
          <Tacori nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="fourthOne">
          <MetalChoices nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="fourthTwo">
          <Insurance nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="fifthOne">
          <CenterStone nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="sixthOne">
          <Custom nonHeader history = {this.props.history}/>
        </GridChild>
        <GridChild gridArea="sixthTwo">
          <Designer nonHeader history = {this.props.history}/>
        </GridChild>

      </ParentGrid>
    )
  }
}

Homepage.propTypes = {
}
export default Homepage;

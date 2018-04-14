import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import GridChild from 'shared/GridChild';
import EngagementMainImg from 'images/slide6.jpg';
import Title from 'shared/Title';
import P from 'shared/P';
import Button from 'shared/Button';
import GrayHoverDiv from 'shared/GrayHoverDiv';
import Div from 'shared/Div';
import { Link } from 'react-router-dom';

//------
const ParentGrid = styled(Div)`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: auto        ;
  grid-gap: 10px;

  grid-template-areas:
  " firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne "
  " secondOne secondOne secondOne secondOne secondOne secondOne secondTwo secondTwo secondTwo secondTwo secondTwo secondTwo "
  " thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo "
  " fourthOne fourthOne fourthOne fourthOne fourthOne fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo fourthTwo "
  " fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne fifthOne "
  " sixthOne sixthOne sixthOne sixthOne sixthOne sixthOne sixthTwo sixthTwo sixthTwo sixthTwo sixthTwo sixthTwo";
`
const MainContent = (props) =>{
  return (
    <ParentGrid>
      <GrayHoverDiv height="400px" onClick={()=>props.history.push(props.firstOneLink)} position="relative" backgroundImg={props.firstOneImg} backgroundSize="cover" gridArea="firstOne" backgroundColor="red">
        <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
        <Div width="100%" height="20%" position="absolute" top="70%">
          <Title capitalize fontSize="26px">{props.firstOneTitle}</Title>
          <Title fontStyle="italic">{props.firstOneDescription}</Title>
        </Div>
  </GrayHoverDiv>
  <GrayHoverDiv height="400px" gridArea="secondOne"  onClick={()=>props.history.push(props.secondOneLink)} position="relative" backgroundImg={props.secondOneImg} backgroundSize="cover" backgroundColor="red">
    <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
    <Div width="100%" height="20%" position="absolute" top="70%">
      <Title capitalize fontSize="26px">{props.secondOneTitle}</Title>
      <Title fontStyle="italic">{props.secondOneDescription}</Title>
    </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="secondTwo"  onClick={()=>props.history.push(props.secondTwoLink)} position="relative" backgroundImg={props.secondTwoImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.secondTwoTitle}</Title>
    <Title fontStyle="italic">{props.secondTwoDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="thirdOne"  onClick={()=>props.history.push(props.thirdOneLink)} position="relative" backgroundImg= {props.thirdOneImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.thirdOneTitle}</Title>
    <Title fontStyle="italic">{props.thirdOneDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="thirdTwo"  onClick={()=>props.history.push(props.thirdTwoLink)} position="relative" backgroundImg= {props.thirdTwoImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.thirdTwoTitle}</Title>
    <Title fontStyle="italic">{props.thirdTwoDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="fourthOne"  onClick={()=>props.history.push(props.fourthOneLink)} position="relative" backgroundImg= {props.fourthOneImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.fourthOneTitle}</Title>
    <Title fontStyle="italic">{props.fourthOneDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="fourthTwo"  onClick={()=>props.history.push(props.fourthTwoLink)} position="relative" backgroundImg= {props.fourthTwoImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.fourthTwoTitle}</Title>
    <Title fontStyle="italic">{props.fourthTwoDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="fifthOne"  onClick={()=>props.history.push(props.fifthOneLink)} position="relative" backgroundImg= {props.fifthOneImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.fifthOneTitle}</Title>
    <Title fontStyle="italic">{props.fifthOneDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="sixthOne"  onClick={()=>props.history.push(props.sixthOneLink)} position="relative" backgroundImg= {props.sixthOneImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.sixthOneTitle}</Title>
    <Title fontStyle="italic">{props.sixthOneDescription}</Title>
  </Div>
</GrayHoverDiv>
<GrayHoverDiv height="400px" gridArea="sixthTwo"  onClick={()=>props.history.push(props.sixthTwoLink)} position="relative" backgroundImg= {props.sixthTwoImg} backgroundSize="cover" backgroundColor="red">
  <Div width="100%" height="20%" position="absolute" top="70%" backgroundColor="gray" opacity=".8"  />
  <Div width="100%" height="20%" position="absolute" top="70%">
    <Title capitalize fontSize="26px">{props.sixthTwoTitle}</Title>
    <Title fontStyle="italic">{props.sixthTwoDescription}</Title>
  </Div>
</GrayHoverDiv>

    </ParentGrid>
  )
}
MainContent.propTypes = {
}
export default MainContent;

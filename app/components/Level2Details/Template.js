import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Title from 'shared/Title';
import Div from 'shared/Div';
import {Link} from 'react-router-dom';
//------

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  :hover {
    Div div {
    background-color:${props => props.theme.ThemedColor};
    font-weight: bold;
  }
  }

`
const AdjustableDiv = styled(Div)`
  position: static;
  background-color: black;
  padding: 10px;
  opacity: .9;

  @media screen and (min-width:768px){
    position: absolute;
    bottom: 5%;
    background-color: gray;
    width: 100%;
    opacity: .9;

  };
`
const Template = (props) =>{
  return (
    <StyledLink to={props.linkTo}>
      {!props.nonHeader  &&
      <Div position="relative" backgroundColor="black" height="100%" width="100%" display="flex" flexDirection="column" flexWrap="noWrap">
      <Div height="80%" width="100%" backgroundImg={props.backgroundImg} backgroundSize="cover" />
      <Div>
        <Title fontSize="26px">{props.title}</Title>
        <Title color="gray" fontStyle="italic">{props.description}</Title>
      </Div>
      </Div>
    }
    {
      props.nonHeader  &&
      <Div position="relative" backgroundImg={props.backgroundImg} backgroundSize="cover" height="100%" width="100%" display="flex" flexDirection="column" flexWrap="noWrap">
      <AdjustableDiv position="absolute" bottom="5%" backgroundColor="gray" width="100%" opacity=".9">
        <Title fontSize="26px">{props.title}</Title>
        <Title fontStyle="italic">{props.description}</Title>
      </AdjustableDiv>
      </Div>
    }

  </StyledLink>
  )
}
Template.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
}
export default Template;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Title from 'shared/Title';
import Div from 'shared/Div';
import P from 'shared/P';
import {Link} from 'react-router-dom';
import Button from 'shared/Button';
import FontAwesome from 'react-fontAwesome';
//------

const HeaderTemplate = (props) =>{

  const AdjustableImg = styled.img`
      width: 300px;
      height: 250px;
    @media screen and (min-width:768px){
        width: 500px;
        height: 400px;
    };
    @media screen and (min-width:900px){
        width: 700px;
        height: 500px;
    };
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
      legend{
        text-decoration: underline;
        color: teal;
      }
    }
  `;
  const AdjustableDiv = styled(Div)`
  position: static;
  background-color: black;

  @media screen and (min-width:768px){
    position: absolute;
    top: 50%;
    width: 50%;
    opacity: .8;
    height: 50%;
  };
  `;
  const AdjustableShopDiv = styled(Div)`
    text-align: center;
    top: 0px;
  @media screen and (min-width:768px){

  };
  `
  const PapaDiv = styled(Div)`
    background-color: black;
    padding: 20px 0;
    @media screen and (min-width:768px){
    position: relative;
    };
  `
  return (
    <PapaDiv >
      <Div display="flex" justifyContent="space-around">
      <AdjustableImg src={props.backgroundImg}  />
    </Div>
      <AdjustableDiv>
        <Title fontSize="26px">{props.title}</Title>
        <Title><P fontSize="16px">{props.description}</P></Title>
        <StyledLink to={props.path ? props.path: '/'}>
        <AdjustableShopDiv>
          <Title textDecoration="underline" fontSize="20px" margin="0 20px">Shop {props.title1} <FontAwesome name="caret-right" style={{color:'green'}}/></Title>
    </AdjustableShopDiv>
      </StyledLink>
      </AdjustableDiv>
  </PapaDiv>
  )
}
HeaderTemplate.propTypes = {
}
export default HeaderTemplate;

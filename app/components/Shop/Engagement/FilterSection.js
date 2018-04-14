import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import FontAwesome from 'react-fontAwesome';


//shared
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Title from 'shared/Title';
import Div from 'shared/Div';

//------
import DesignerDropDown from './DesignerDropDown';
import MetalDropDown from './MetalDropDown';
import CenterDropDown from './CenterDropDown';
import StyleDropDown from './StyleDropDown';
import PriceDropDown from './PriceDropDown';

const DetailsDiv = styled(Div)`
  position: block;
  background-color: white;
  @media screen and (min-width:768px){
  position: absolute;
  display: ${prop('display'),''};
  width: 400px;
  top: 60px;
  left: ${prop('left'),''};
  transform: translate(-50%, -0%);
};
`;
const MobileDiv = styled(Div)`
  display: block;
  @media screen and (min-width:768px){
  display: none;
  };
`
const AdjustableUl = styled(Ul)`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0px;
  padding: 5px 10px;
  flex-direction: column;
  >li {
    padding: 10px 0;
    border-bottom: 1px solid lightGray;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width:768px){
    flex-direction: row;
    >li {
      padding: 10px 20px;
      justify-content: center;
      border-bottom: 0px solid lightGray;

    }
  };
`

const FilterSection = (props) =>{
  return (
    <Div position="relative" color="black" backgroundColor="white">
      <MobileDiv padding="10px 0" backgroundColor="lightGray" onClick={()=>{props.onToggleFilter()}}>
      <Title capitalize bold> Filter & Sort
        <Div display="inline-block" padding="0 0 0 10px">
        <FontAwesome name={props.toggle ? 'caret-up':'caret-down'} style={{color:'black'}} />
      </Div>
      </Title>
    </MobileDiv>
    <Div display={props.toggle ? 'block':'none'}>
      <AdjustableUl>
        <Li onClick={()=>{props.onToggleDetail('designer')}}>
          <Div margin="0 5px 0 0" position="relative">
            <Title capitalize>Designer</Title>
          </Div>
          <Div>
            {
              props.filterDetails.get('designer') ?  <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'minus':'caret-up'} style={{color:'black'}} /> :
                <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'plus':'caret-down'} style={{color:'black'}} />
            }
        </Div>
        </Li>
        <DetailsDiv left="40%" display={props.filterDetails.get('designer') ? 'block':'none'}>
          <DesignerDropDown />
        </DetailsDiv>
        <Li display="flex" alignItems="center" onClick={()=>{props.onToggleDetail('metal')}}>
          <Div margin="0 5px 0 0" position="relative">
            <Title capitalize>Metal</Title>
          </Div>
          <Div>
            {
              props.filterDetails.get('metal') ?  <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'minus':'caret-up'} style={{color:'black'}} /> :
                <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'plus':'caret-down'} style={{color:'black'}} />
            }
        </Div>
        </Li>
        <DetailsDiv left="45%" display={props.filterDetails.get('metal') ? 'block':'none'}>
          <MetalDropDown />
        </DetailsDiv>
        <Li display="flex" alignItems="center" onClick={()=>{props.onToggleDetail('centerShape')}}>
          <Div margin="0 5px 0 0" position="relative">
            <Title capitalize>CenterShape</Title>
          </Div>
          <Div>
            {
              props.filterDetails.get('centerShape') ?  <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'minus':'caret-up'} style={{color:'black'}} /> :
                <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'plus':'caret-down'} style={{color:'black'}} />
            }
        </Div>
        </Li>
        <DetailsDiv left="50%" display={props.filterDetails.get('centerShape') ? 'block':'none'}>
          <CenterDropDown />
        </DetailsDiv>
        <Li display="flex" alignItems="center" onClick={()=>{props.onToggleDetail('style')}}>
          <Div margin="0 5px 0 0" position='relative'>
            <Title capitalize>Style</Title>
          </Div>
          <Div>
            {
              props.filterDetails.get('style') ?  <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'minus':'caret-up'} style={{color:'black'}} /> :
                <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'plus':'caret-down'} style={{color:'black'}} />
            }
        </Div>
        </Li>
        <DetailsDiv left="55%"  display={props.filterDetails.get('style') ? 'block':'none'}>
          <StyleDropDown />
        </DetailsDiv>
        <Li display="flex" alignItems="center" onClick={()=>{props.onToggleDetail('price')}}>
          <Div margin="0 5px 0 0">
            <Title capitalize>Price</Title>
          </Div>
          <Div>
            {
              props.filterDetails.get('price') ?  <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'minus':'caret-up'} style={{color:'black'}} /> :
                <FontAwesome name={window.matchMedia("(max-width: 768px)").matches === true ? 'plus':'caret-down'} style={{color:'black'}} />
            }
        </Div>
        </Li>
        <DetailsDiv left="60%" display={props.filterDetails.get('price') ? 'block':'none'}>
          <PriceDropDown />
        </DetailsDiv>
      </AdjustableUl>
    </Div>
    </Div>
  )
}
FilterSection.propTypes = {
  filterDetails: PropTypes.object.isRequired,
  onToggleFilter: PropTypes.func.isRequired,
  onToggleDetail: PropTypes.func.isRequired
}
export default FilterSection;

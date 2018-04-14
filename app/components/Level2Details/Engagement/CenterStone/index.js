import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Header from './Header';
import Div from 'shared/Div';
import Template from 'components/Level2Details/Template.js';
//------

class CenterStone extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render(){

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
      const AdjustableHeight= styled(Div)`
        height: 450px;
        @media screen and (min-width:768px){
        height: auto;
        };
      `
    return (
      <Div  >
        <DissapearDiv position="fixed" top="40px" >
          <Header />
        </DissapearDiv>
        <AdjustableHeight gridArea="firstOne" height="450px">
          <ReappearDiv>
            <Header />
          </ReappearDiv>
        </AdjustableHeight>
          <Div position="relative" backgroundColor="white" color="black" height="100%" width="100%" height="1000px">
            hi
          </Div>

      </Div>
    )
  }
}

CenterStone.propTypes = {
}
export default CenterStone;

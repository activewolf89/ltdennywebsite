import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontAwesome';
//shared
import Div from 'shared/Div';
import Title from 'shared/Title';
import {Link} from 'react-router-dom';
//------

const MobileNavigationBar = (props) =>{
  function SeparatePathPieces(path){
    var splitPath = path.split('/');
    if(path == '/'){
      return 'Home' + '/';
    }
    if(splitPath.length == 2){
      return (
        <Div>
        <Link to='/'>Home</Link>
        /{splitPath[1]}
      </Div>
      )
    }
    if(splitPath.length == 3){
      return (
        <Div>
          <Link to='/'>Home</Link>
          / <Link to={'/'+splitPath[1]}>{splitPath[1]}</Link>
          /{splitPath[2]}
        </Div>
      )
    }
    if(splitPath.length == 4){
      return (
        <Div>
          <Link to='/'>Home</Link>
          / <Link to={'/'+splitPath[1]}>{splitPath[1]}</Link>
          /<Link to={'/'+ splitPath[1] + '/' + splitPath[2]}>{splitPath[2]}</Link>
          /{splitPath[3]}
        </Div>
      )
    }
  };
  const DissapearingMobileDiv = styled(Div)`
    display: flex;
    justify-content: center;
    padding: 5px 10px;
    align-items: center;
    position: sticky;
    background-color: white;
    z-index: 2;
    top: 45px;
  @media screen and (min-width:768px){
    display: none;
  };
  `;
  return (
    <DissapearingMobileDiv history={props.history.location.pathname}>
      <Title fontSize="14px" capitalize>{SeparatePathPieces(props.history.location.pathname)}</Title>
    </DissapearingMobileDiv>
  )
}
MobileNavigationBar.propTypes = {
}
export default MobileNavigationBar;

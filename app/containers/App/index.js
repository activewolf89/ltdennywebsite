/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header/Loadable';
import NavigationBar from 'components/NavigationBar';
import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';

//shared
import Div from 'shared/Div';
const BODY = styled(Div)`
margin: 0 0 20px 0;
  background-color: black;
  color: white;
  @media screen and (min-width:768px){
    margin: 0px;
  }
`
const MobileViewDiv = styled(Div)`
  position: fixed;
  bottom: 0px;
  display: block;
  width: 100%;
  z-index: 2;
  @media screen and (min-width:768px){
  display: none;
  };
`;
//
export default function App() {
  return (
    <Div position="relative">
      <Header />
      <BODY>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BODY>
    <MobileViewDiv>
      <NavigationBar />
    </MobileViewDiv>
    </Div>
  );
}

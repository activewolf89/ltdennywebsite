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
import { createStructuredSelector } from 'reselect';

//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router'
import reducer from './reducer';

import {handleHamburgerClick,handleHamburgerDetailClick} from './actions';
import {makeSelectHamburger,makeSelectHamburgerDetail} from './selectors';
//shared
import Div from 'shared/Div';
const Body = styled(Div)`
  background-color: black;
  color: white;
`
//
export class App extends React.PureComponent {
  render(){
    return (
      <Div position="relative">
        <Header
          isHamburgerOpen = {this.props.isHamburgerOpen}
          isHamburgerDetailOpen = {this.props.isHamburgerDetailOpen}
          onHamburgerClick = {this.props.handleHamburgerClick}
          onHamburgerDetailClick = {this.props.handleHamburgerDetailClick}

        />
        <NavigationBar />
        <Body>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Body>
      </Div>
    );
  }
}
export function mapDispatchToProps(dispatch){
  return {
    handleHamburgerClick: () => dispatch(handleHamburgerClick()),
    handleHamburgerDetailClick: (evt) => dispatch(handleHamburgerDetailClick(evt)),

  }
};
const mapStateToProps = createStructuredSelector({
  isHamburgerOpen: makeSelectHamburger(),
  isHamburgerDetailOpen: makeSelectHamburgerDetail()

});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default withRouter(compose(
  withReducer,
  withConnect,
)(App));

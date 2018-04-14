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
import Engagement from 'containers/Engagement/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header/Loadable';
import MobileNavigationBar from 'components/MobileNavigationBar';
import DesktopNavigationBar from 'components/DesktopNavigationBar';
import styled,{css} from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import { createStructuredSelector } from 'reselect';

//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router';
import reducer from './reducer';
import { push } from 'react-router-redux';

import {handleHamburgerClick,handleHamburgerDetailClick} from './actions';
import {makeSelectHamburger,makeSelectHamburgerDetail} from './selectors';
//shared
import EngagementSideNavigation from 'components/SideNavigation/EngagementSideNavigation';
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
          onNavigationDirection = {this.props.handleNavigationDirection}
        />
        <MobileNavigationBar history={this.props.history}/>
        <DesktopNavigationBar
          onNavigationDirection = {this.props.handleNavigationDirection}
          isHamburgerOpen = {this.props.isHamburgerOpen}
          onHamburgerClick = {this.props.handleHamburgerClick}
          isHamburgerDetailOpen = {this.props.isHamburgerDetailOpen}
          onHamburgerDetailClick = {this.props.handleHamburgerDetailClick}
        />

        <Body onClick={()=>{
          if(this.props.isHamburgerOpen){
            this.props.handleHamburgerClick()
          }
          if(this.props.isHamburgerDetailOpen.get('toggle')){
            this.props.handleHamburgerDetailClick('');
          }
        }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/engagement" component={Engagement} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Body>
      </Div>
    );
  }
}

export function mapDispatchToProps(dispatch){
  return {
    handleNavigationDirection: (evt) => dispatch(push(evt)),
    handleHamburgerClick: () => dispatch(handleHamburgerClick()),
    handleBodyClick: () => dispatch(handleBodyClick()),
    handleHamburgerDetailClick: (evt) => dispatch(handleHamburgerDetailClick(evt)),
  }
};

const mapStateToProps = createStructuredSelector({
  isHamburgerOpen: makeSelectHamburger(),
  isHamburgerDetailOpen: makeSelectHamburgerDetail(),

});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default withRouter(compose(
  withReducer,
  withConnect,
)(App));

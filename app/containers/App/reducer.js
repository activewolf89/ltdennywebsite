import {fromJS} from 'immutable';
import HamburgerDetailHelper from './HelperFunctions/HamburgerDetailHelper';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import React from 'react';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';


import {
HAMBURGER_CLICK,
HAMBURGER_DETAIL_CLICK,

} from './constants';

const initialState = fromJS({
  isHamburgerOpen: false,
  isHamburgerDetailOpen: {engagement: false,wedding:false,diamond: false,jewelry: false,service:false,about: false,toggle:false}
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case HAMBURGER_CLICK:
      return state.set('isHamburgerOpen',state.get('isHamburgerOpen') == false ? true: false);
    case HAMBURGER_DETAIL_CLICK:
    if(state.getIn(['isHamburgerDetailOpen',action.toggle])){
      //this triggers navigation within our app.
      //we need to set isHamburgerOpen to false, go to the trigger via a link, and set our state detail to false
      return state.merge({
        isHamburgerOpen: false,
        isHamburgerDetailOpen: {engagement: false,wedding:false,diamond: false,jewelry: false,service:false,about: false,toggle:false}
      })

    } else {
      return state.set('isHamburgerDetailOpen',HamburgerDetailHelper(state.get('isHamburgerDetailOpen'),action.toggle));
    }
    default:
      return state;
  }
}

export default appReducer;

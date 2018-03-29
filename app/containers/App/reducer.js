import {fromJS} from 'immutable';
import HamburgerDetailHelper from './HelperFunctions/HamburgerDetailHelper';
import {
HAMBURGER_CLICK,
HAMBURGER_DETAIL_CLICK

} from './constants';

const initialState = fromJS({
  isHamburgerOpen: false,
  isHamburgerDetailOpen: {engagement: false,wedding:false,diamond: false,jewelry: false,about: false,toggle:false}
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case HAMBURGER_CLICK:
      return state.set('isHamburgerOpen',state.get('isHamburgerOpen') == false ? true: false);
    case HAMBURGER_DETAIL_CLICK:
      return state.set('isHamburgerDetailOpen',HamburgerDetailHelper(state.get('isHamburgerDetailOpen'),action.toggle));
    default:
      return state;
  }
}

export default appReducer;

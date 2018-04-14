/*
 *
 * EngagementShop reducer
 *
 */

import { fromJS } from 'immutable';
import ToggleDetailHelper from './Helpers/ToggleDetailHelper';
import {
  DEFAULT_ACTION,
  TOGGLE_FILTER,
  TOGGLE_FILTER_DETAIL

} from './constants';

const initialState = fromJS({filter: true, filterDetails: {designer:false,metal: false,centerShape:false,style: false,price: false},loading: true});

function engagementShopReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER_DETAIL:
    return state.set('filterDetails',ToggleDetailHelper(state.get('filterDetails'),action.evt))
    return state
    case TOGGLE_FILTER:
      return state.set('filter',state.get('filter') == false ? true: false);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default engagementShopReducer;

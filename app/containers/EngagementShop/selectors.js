import { createSelector } from 'reselect';

/**
 * Direct selector to the engagementShop state domain
 */
const selectEngagementShopDomain = (state) => state.get('engagementShop');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EngagementShop
 */
 const makeSelectToggle = () => createSelector(
   selectEngagementShopDomain,
   (substate) => substate.get('filter')

 )
 const makeSelectFilterDetails = () => createSelector(
   selectEngagementShopDomain,
   (substate) => substate.get('filterDetails')

 )
const makeSelectEngagementShop = () => createSelector(
  selectEngagementShopDomain,
  (substate) => substate.toJS()
);
const makeSelectLoading = () => createSelector(
  selectEngagementShopDomain,
  (substate) => substate.get('loading')

);
export {
  makeSelectFilterDetails,
  selectEngagementShopDomain,
  makeSelectEngagementShop,
  makeSelectToggle,
  makeSelectLoading
};

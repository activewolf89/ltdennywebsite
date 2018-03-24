import { createSelector } from 'reselect';

/**
 * Direct selector to the shop state domain
 */
const selectShopDomain = (state) => state.get('shop');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Shop
 */

const makeSelectShop = () => createSelector(
  selectShopDomain,
  (substate) => substate.toJS()
);

export default makeSelectShop;
export {
  selectShopDomain,
};

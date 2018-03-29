import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('app');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectHamburger = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isHamburgerOpen')

)
const makeSelectHamburgerDetail = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isHamburgerDetailOpen')

)
export {
  makeSelectLocation,
  makeSelectHamburger,
  makeSelectHamburgerDetail
};

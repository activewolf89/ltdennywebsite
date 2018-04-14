import { createSelector } from 'reselect';

/**
 * Direct selector to the engagement state domain
 */
const selectEngagementDomain = (state) => state.get('engagement');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Engagement
 */

const makeSelectEngagement = () => createSelector(
  selectEngagementDomain,
  (substate) => substate.toJS()
);

export default makeSelectEngagement;
export {
  selectEngagementDomain,
};

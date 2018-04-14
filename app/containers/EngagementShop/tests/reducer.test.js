
import { fromJS } from 'immutable';
import engagementShopReducer from '../reducer';

describe('engagementShopReducer', () => {
  it('returns the initial state', () => {
    expect(engagementShopReducer(undefined, {})).toEqual(fromJS({}));
  });
});

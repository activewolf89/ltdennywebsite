
import { fromJS } from 'immutable';
import engagementReducer from '../reducer';

describe('engagementReducer', () => {
  it('returns the initial state', () => {
    expect(engagementReducer(undefined, {})).toEqual(fromJS({}));
  });
});


import { fromJS } from 'immutable';
import shopReducer from '../reducer';

describe('shopReducer', () => {
  it('returns the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(fromJS({}));
  });
});

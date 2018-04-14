/*
 *
 * EngagementShop actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_FILTER,
  TOGGLE_FILTER_DETAIL,
  FETCH_PRODUCTS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function toggleFilter() {
  return {
    type: TOGGLE_FILTER,
  };
}
export function handleToggleDetail(evt) {
  return {
    type: TOGGLE_FILTER_DETAIL,
    evt: evt
  };
}
export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
  };
}

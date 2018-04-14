/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const HAMBURGER_CLICK = 'Website/App/HAMBURGER_CLICK';
export const HAMBURGER_DETAIL_CLICK = 'Website/App/HAMBURGER_DETAIL_CLICK';
export const LOAD_ITEMS = 'Website/App/LOAD_ITEMS';

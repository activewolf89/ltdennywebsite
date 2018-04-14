/**
 *
 * Asynchronously loads the component for EngagementShop
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

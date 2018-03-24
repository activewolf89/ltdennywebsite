/**
 *
 * Shop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShop from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Shop extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Shop</title>
          <meta name="description" content="Description of Shop" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Shop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  shop: makeSelectShop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shop', reducer });
const withSaga = injectSaga({ key: 'shop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Shop);

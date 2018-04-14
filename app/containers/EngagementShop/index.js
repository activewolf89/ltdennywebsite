/**
 *
 * EngagementShop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {toggleFilter,handleToggleDetail,fetchProducts} from './actions';
import {makeSelectToggle,makeSelectEngagementShop,makeSelectFilterDetails,makeSelectLoading} from './selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Shop from 'components/Shop/Engagement';
import { withRouter } from 'react-router';
import LoadingIndicator from 'components/LoadingIndicator';


export class EngagementShop extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.fetchProducts()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>EngagementShop</title>
          <meta name="description" content="Description of EngagementShop" />
        </Helmet>

        <Shop onToggleDetail={this.props.handleToggleDetail} filterDetails={this.props.filterDetails} toggle={this.props.toggle} onToggleFilter={this.props.handleToggleFilter} />

      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  engagementshop: makeSelectEngagementShop(),
  toggle: makeSelectToggle(),
  filterDetails: makeSelectFilterDetails(),
  loading: makeSelectLoading()
});

function mapDispatchToProps(dispatch) {
  return {
    handleToggleFilter: () => dispatch(toggleFilter()),
    handleToggleDetail: (evt) => dispatch(handleToggleDetail(evt)),
    fetchProducts: () => dispatch(fetchProducts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'engagementShop', reducer });
const withSaga = injectSaga({ key: 'engagementShop', saga });

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(EngagementShop));

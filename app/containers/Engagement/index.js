/**
 *
 * Engagement
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { withRouter } from 'react-router';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEngagement from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styled from 'styled-components';
//shared -----
import Div from 'shared/Div';

import SideNavigation from 'components/SideNavigation/EngagementSideNavigation/'

import HomePage from 'components/Level2Details/Engagement/HomePage';
import EngagementShop from 'containers/EngagementShop/Loadable';
import TopProfile from 'components/Level2Details/Engagement/TopProfile';
import SideProfile from 'components/Level2Details/Engagement/SideProfile';
import RingGuide from 'components/Level2Details/Engagement/RingGuide';
import Tacori from 'components/Level2Details/Engagement/Tacori';
import MetalChoices from 'components/Level2Details/Engagement/MetalChoices';
import Insurance from 'components/Level2Details/Engagement/Insurance';
import CenterStone from 'components/Level2Details/Engagement/CenterStone';
import Custom from 'components/Level2Details/Engagement/Custom';
import Designer from 'components/Level2Details/Engagement/Designer';


export class Engagement extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const DesktopNavigationDiv = styled(Div)`
      display: none;

      @media screen and (min-width:768px){
      display: block;
      };
    `
    const AdjustableDiv = styled(Div)`
      width: 100%;
      display: block;
      @media screen and (min-width:768px){
      width: 80%;
      display: inline-block;

      };
    `
    return (
      <Div height="100%" backgroundColor="black">
        <DesktopNavigationDiv  float="left" backgroundColor="gray"  width="20%" position="sticky" top="40px">
          <SideNavigation location = {this.props.history.location}  path = "/engagement" />
      </DesktopNavigationDiv>
      <AdjustableDiv >
        {this.props.history.location.pathname == '/engagement' &&
        <HomePage history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/shop' &&
        <EngagementShop history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/top-profile' &&
        <TopProfile history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/side-profile' &&
        <SideProfile history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/ring-guide' &&
        <RingGuide history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/tacori' &&
        <Tacori history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/metal-choices' &&
        <MetalChoices history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/insurance' &&
        <Insurance history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/center-stone' &&
        <CenterStone history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/custom' &&
        <Custom history={this.props.history}/>
        }
        {this.props.history.location.pathname == '/engagement/designer' &&
        <Designer history={this.props.history}/>
        }

      </AdjustableDiv>

      </Div>

    );
  }
}

Engagement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  engagement: makeSelectEngagement(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'engagement', reducer });
const withSaga = injectSaga({ key: 'engagement', saga });

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(Engagement));

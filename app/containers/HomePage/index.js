/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
//shared --
import Div from 'shared/Div';
import GRIDCHILD from 'shared/GRIDCHILD';
import Banner from 'components/Sections/Banner.js';
import Engagement from 'components/Sections/Engagement.js';
import WhatWeOffer from 'components/Sections/WhatWeOffer.js';
import Diamond from 'components/Sections/Diamond.js';
import WeddingBand from 'components/Sections/WeddingBand.js';
import FineJewelry from 'components/Sections/FineJewelry.js';
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <Div>
        <Banner />
        <WhatWeOffer />
        <Engagement />
        <Diamond />
        <WeddingBand />
        <FineJewelry />
      </Div>
    );
  }
}

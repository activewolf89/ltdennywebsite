import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import GridChild from 'shared/GridChild';
//------
const ProductParent = styled(Ul)`
  padding: 0px;
display: flex;
justify-content: center;
list-style: none;
flex-wrap: wrap;
>li {
  margin: 10px 10px 0 0;
}


`
const Product = styled(Li)`
  height: 300px;
  width: 300px;
  background-color: green;
`
const ProductSection = () =>{
  return (
    <ProductParent minHeight="500px" backgroundColor="gray">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />

    </ProductParent>
  )
}
ProductSection.propTypes = {
}
export default ProductSection;

import React from 'react';
import StarRating from './StarRating.jsx';
import ProductHeadline from './ProductHeadline.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function ProductOptions(props) {
  console.log('PO:',props)
  return (
    <div id="overview_product_options">
      <StarRating />
      <ProductHeadline />
      <StyleSelector productStyle={props.productStyle} />
      <AddToCart />
    </div>
  );
};

export default ProductOptions;
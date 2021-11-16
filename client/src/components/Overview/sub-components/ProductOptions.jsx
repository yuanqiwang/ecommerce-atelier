import React from 'react';
import StarRating from './StarRating.jsx';
import ProductHeadline from './ProductHeadline.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function ProductOptions(props) {
  // console.log('PO:',props)
  return (
    <div id="overview_product_options" data-testid="product-options">
      <StarRating />
      <ProductHeadline
        productInfo={props.productInfo}
        currentStyleID={props.currentStyleID} />
      <StyleSelector
        productStyle={props.productStyle}
        currentStyleID={props.currentStyleID}
        changeStyle={props.changeStyle} />
      <AddToCart />
    </div>
  );
};

export default ProductOptions;
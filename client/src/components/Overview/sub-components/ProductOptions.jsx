import React from 'react';
import StarRating from './StarRating.jsx';
import ProductHeadline from './ProductHeadline.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function ProductOptions(props) {
  // console.log('PO:',props)
  return (
    <div id="overview_product_options" data-testid="product-options">
      <StarRating
        stars={props.stars} />
      <ProductHeadline
        productInfo={props.productInfo}
        currentStyleID={props.currentStyleID} />
      <StyleSelector
        productStyle={props.productStyle}
        currentStyleID={props.currentStyleID}
        changeStyle={props.changeStyle} />
      <AddToCart
        productID={props.productInfo.id}
        addOutfit={props.addoutfit}
        removeOutfit={props.removeoutfit} />
    </div>
  );
};

export default ProductOptions;
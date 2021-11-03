import React from 'react';

function ProductHeadline(props) {
  let category = 'Condiments';
  let productName = 'Heinz Tomato Ketchup';
  let price = '$5.99';

  try {
    category = props.productInfo.category;
    productName = props.productInfo.name;
    price = props.productInfo.default_price;
  } catch {
    console.log('please try again later...');
  }

  return (
    <div id="overview_product_headline">
      <h3>{category}</h3>
      <h2>{productName}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductHeadline;
import React from 'react';

function ProductInfo(props) {
  let slogan = "America's Favorite Ketchup. Yeah, it's that important.";
  let description = 'First introduced as "Catsup" in 1876 in Pittsburgh, Pennsylvania, Heinz Tomato Ketchup remains the best-selling brand of ketchup, and is used as a condiment for many foods, such as french fries, chips, hamburgers and hot dogs.';

  try {
    slogan = props.productInfo.slogan;
    description = props.productInfo.description;
  } catch {}

  return (
    <div id="overview_product_info" data-testid="product-info">
      <div>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
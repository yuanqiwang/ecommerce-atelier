import React from 'react';

function ProductBullets(props) {
  let features = ['test', 'test', 'test'];

  try {
    features = [...props.productInfo.features];
  } catch {}

  return (
    <div id="overview_product_bullets" data-testid="product-bullets">
      <div>
        <ul>
          {features.map(feature => (
            <li key={Math.random()}>{feature.feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductBullets;
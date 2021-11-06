import React from 'react';

function ProductInfo(props) {
  return (
    <div id="overview_product_bullets" data-testid="product-bullets">
      <div>
        <ul>
          <li>Heinz sells 11B packets of ketchup a year</li>
          <li>Tap the 57 on the bottleneck to make the ketchup pour more quickly</li>
          <li>Heinz buys two million tons of tomatoes every year</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
import React from 'react';

function AddToCart(props) {
  return (
    <div id="overview_add_cart" data-testid="add-to-cart">
      <button>Add to Bag<span>+</span></button>
      <div id="overview_favorite">☆</div>
    </div>
  );
};

export default AddToCart;
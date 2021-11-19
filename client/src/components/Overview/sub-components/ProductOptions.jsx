import React from 'react';
import StarRating from './StarRating.jsx';
import ProductHeadline from './ProductHeadline.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: -1,
      qty: 1
    };

    this.updateSize = this.updateSize.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  updateSize() {}

  updateQty() {}

  addToCart() {
    let purchaseItem = {
      productID: this.props.productInfo.id,
      styleID: this.props.currentStyleID,
      size: this.state.size,
      qty: this.state.qty
    };

    let currentCart = window.localStorage.getItem('AtelierCart');

    if (currentCart) {
      currentCart = JSON.parse(currentCart);
      let itemsInCart = Object.keys(currentCart).length;

      currentCart[itemsInCart] = purchaseItem;

      window.localStorage.setItem('AtelierCart', JSON.stringify(currentCart));
    } else {
      currentCart = {0: purchaseItem};

      window.localStorage.setItem('AtelierCart', JSON.stringify(currentCart));
    }
    // console.log('added to cart!');
  }

  render() {
    return (
      <div id="overview_product_options" data-testid="product-options">
        <StarRating
          stars={this.props.stars} />
        <ProductHeadline
          productInfo={this.props.productInfo}
          currentStyleID={this.props.currentStyleID} />
        <StyleSelector
          productStyle={this.props.productStyle}
          currentStyleID={this.props.currentStyleID}
          changeStyle={this.props.changeStyle}
          updateSize={this.updateSize}
          updateQty={this.updateQty} />
        <AddToCart
          productID={this.props.productInfo.id}
          addOutfit={this.props.addoutfit}
          removeOutfit={this.props.removeoutfit}
          addToCart={this.addToCart} />
      </div>
    );
  }
}

export default ProductOptions;
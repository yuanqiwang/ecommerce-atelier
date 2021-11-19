import React from 'react';
import StarRating from './StarRating.jsx';
import ProductHeadline from './ProductHeadline.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      qty: 1,
      maxQty: 1
    };

    this.updateSize = this.updateSize.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  updateSize(sizeData) {
    sizeData = JSON.parse(sizeData.target.value);
    console.log('chose a size!', sizeData);

    this.setState({size: sizeData.size, maxQty: sizeData.quantity});
  }

  updateQty(quantity) {
    // console.log('chose a quantity!', quantity.target.value);
    this.setState({qty: parseInt(quantity.target.value)});

    console.log(this.state);
  }

  addToCart() {
    let purchaseItem = {
      productID: this.props.productInfo.id,
      styleID: this.props.currentStyleID,
      size: this.state.size,
      qty: this.state.qty
    };

    let currentCart = window.localStorage.AtelierCart;

    if (currentCart) {
      currentCart = JSON.parse(currentCart);
      let itemsInCart = Object.keys(currentCart).length;

      currentCart[itemsInCart] = purchaseItem;
    } else {
      currentCart = {0: purchaseItem};
    }

    window.localStorage.setItem('AtelierCart', JSON.stringify(currentCart));

    console.log('added to cart!');
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
          maxQty={this.state.maxQty}
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
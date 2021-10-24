import React from 'react';
import RP from './related_components/RP.jsx';
import YO from './related_components/YO.jsx';

class Related extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 60221
    }
  }

  render() {
    return (
      <div id='related'>
        <br/>
        <h2> Part 2 : This will be Related Products section</h2>
        <RP />
        <YO />
        <br/>
      </div>
    )
  }

}

export default Related;


// two sets of product cards
// 1:  a list of products, determined internally... are related to the product currently being viewed
// api: /products/:product_id/related
// 2:  a list custom created by the user.. grouped with the current product into an "outfit"

// each of the card is clickable... clicking the card will navigate to the detail page for that product
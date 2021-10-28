import React, {useState, useEffect} from 'react';
import RP_sub from './related_components/RP-sub.jsx';
import YO from './related_components/YO.jsx';

const Related =(props) => {


  return (
    <div id='related'>
      <br/>
      <h2> Part 2 : This will be Related Products section</h2>
      <h3>RELATED PRODUCTS</h3>
      <section className = 'rp-cardrow'>
        {props.relatedProductArr.map((item, i) => <RP_sub key={i} item ={item} /> )}
      </section>
      <YO />
      <br/>
    </div>
  );

}

export default Related;


// two sets of product cards
// 1:  a list of products, determined internally... are related to the product currently being viewed
// api: /products/:product_id/related
// 2:  a list custom created by the user.. grouped with the current product into an "outfit"

// each of the card is clickable... clicking the card will navigate to the detail page for that product
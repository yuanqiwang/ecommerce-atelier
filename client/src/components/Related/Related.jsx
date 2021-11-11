import React, {useState, useEffect} from 'react';
import YO_row from './related_components/YO-row.jsx';
import RP_row from './related_components/RP-row.jsx';

const Related = ({relatedProductArr, productInfo, productStyle, changeProduct, outfits, addoutfit, removeoutfit}) => {



    return (
      <div id='related' data-testid="related-render">
        <br/>
        <h2> Part 2 : This will be Related Products section</h2>
        <div id='related-rp'>
          <div id='rp-title'>RELATED PRODUCTS</div>
          <RP_row relatedProductArr={relatedProductArr} productInfo = {productInfo} productStyle ={productStyle} changeProduct={changeProduct}/>
        </div>
          <div id='rp-title'>YOUR OUTFIT</div>
          <YO_row outfits={outfits} addoutfit={addoutfit} removeoutfit={removeoutfit} changeProduct={changeProduct}/>
        <br/>
      </div>
      );
}

export default Related;


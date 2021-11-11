import React, {useState, useEffect} from 'react';
import YO_row from './related_components/YO-row.jsx';
import RP_row from './related_components/RP-row.jsx';

const Related = ({relatedProductArr, productInfo, productStyle, changeProduct, outfits, addoutfit, removeoutfit}) => {

    return (
      <div id='related' data-testid="related-render">
        <br/>
        <div id='related-rp'>
          <div id='rp-title' widget = 'Related Products'>RELATED PRODUCTS</div>
          <RP_row relatedProductArr={relatedProductArr} productInfo = {productInfo} productStyle ={productStyle} changeProduct={changeProduct}/>
          <div id='rp-title' widget = 'Related Products'>YOUR OUTFIT</div>
          <YO_row outfits={outfits} addoutfit={addoutfit} removeoutfit={removeoutfit} changeProduct={changeProduct}/>
        </div>
        <br/>
      </div>
      );
}

export default Related;


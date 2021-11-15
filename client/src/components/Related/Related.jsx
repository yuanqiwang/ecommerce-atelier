import React, {useState, useEffect} from 'react';
import YO_row from './related_components/YO-row.jsx';
import RP_row from './related_components/RP-row.jsx';

const Related = ({relatedProductArr, productInfo, productStyle, outfits, addoutfit, removeoutfit, trackClick}) => {

  return (
    <div id='related' onClick={trackClick}>
      <br/>
      <div id='related-rp'>
        <div id='rp-title' >RELATED PRODUCTS</div>
        <RP_row relatedProductArr={relatedProductArr} productInfo = {productInfo} productStyle ={productStyle}/>
        <div id='rp-title' >YOUR OUTFIT</div>
        <YO_row outfits={outfits} addoutfit={addoutfit} removeoutfit={removeoutfit} />
      </div>
      <br/>
    </div>
    );
}

export default Related;


import React from 'react';

function SelectSize(props) {
  let sizes = [];
  let qty = [1];

  try {
    let skus = props.currentStyleInfo['skus'];

    for (let key of Object.keys(props.currentStyleInfo['skus'])) {
      sizes.push(skus[key]);
    }

    qty = [];
    for ( let i=1; i<=props.maxQty; i++ ) {
      if ( i <= 15 ) {
        qty.push(i);
      }
    }
    // console.log(qty);

  } catch {}

  return (
    <div id="overview_select_size" data-testid="select-size">
      <select className="size-dropdown" onChange={props.updateSize}>
        <option value="">Select Size</option>
        {sizes.map(size => {
          let sizeData = JSON.stringify(size);
          return (
            <option key={sizeData} value={sizeData}>{size.size}</option>
          );
        })}
      </select>
      <select className="qty-dropdown" onChange={props.updateQty}>
        {qty.map(i => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSize;
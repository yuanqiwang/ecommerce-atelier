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
    for ( let i=1; i<=props.quantityAvailable; i++ ) {
      qty.push(i);
    }
    // console.log(qty);

  } catch {}

  return (
    <div id="overview_select_size" data-testid="select-size">
      <select className="size-dropdown" onChange={props.updateSize}>
        <option value="">Select Size</option>
        {sizes.map(size => {
          return (
            <option key={Math.random()} value={size.size + '&' + size.quantity}>{size.size}</option>
          );
        })}
      </select>
      <select className="qty-dropdown">
        {qty.map(i => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSize;
import React from 'react';
import Styles from './Styles.jsx';
import SelectSize from './SelectSize.jsx';

function StyleSelector(props) {
  console.log('SS:',props);

  let selectedStyleName = 'Ketchup';
  let selectedStyle = {
    name: 'Ketchup',
    photos: [
      {
        thumbnail_url: 'https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg',
        url: "https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg"
      }
    ]
  };

  try {
    selectedStyleName = props.productStyle[0].name;
    selectedStyle = props.productStyle[0];
  } catch {
    console.log('nope, still no data loaded...');
  }

  return (
    <div id="overview_style_selector">
      <h3>Style > {selectedStyleName}</h3>
      <Styles selectedStyle={selectedStyle} />
      <SelectSize />
    </div>
  );
};

export default StyleSelector;
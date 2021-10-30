import React from 'react';
import Styles from './Styles.jsx';
import SelectSize from './SelectSize.jsx';

function StyleSelector(props) {
  return (
    <div id="overview_style_selector">
      <h3>Style > {props.selectedStyle}</h3>
      <Styles />
      <SelectSize />
    </div>
  );
};

export default StyleSelector;
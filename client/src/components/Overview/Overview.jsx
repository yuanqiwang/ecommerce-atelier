import React from 'react';
import ImageGallery from './sub-components/ImageGallery.jsx';
import ProductOptions from './sub-components/ProductOptions.jsx';
import ProductInfo from './sub-components/ProductInfo.jsx';

class Overview extends React.Component {
  render() {
    return (
      <div id="overview">
        <ImageGallery />
        <ProductOptions />
        <ProductInfo />
      </div>
    );
  }
}

export default Overview;

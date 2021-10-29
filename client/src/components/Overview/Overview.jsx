import React from 'react';
import ImageGallery from './sub-components/ImageGallery.jsx';
import ProductOptions from './sub-components/ProductOptions.jsx';
import ProductInfo from './sub-components/ProductInfo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: "https://pngimg.com/uploads/ketchup/ketchup_PNG21.png"
    };

    this.changeHeroPic = this.changeHeroPic.bind(this);
  }

  changeHeroPic(pic) {
    this.setState({currentImg: pic});
  }

  render() {
    return (
      <div id="overview">
        <ImageGallery heroPic={this.state.currentImg} changePic={this.changeHeroPic} />
        <ProductOptions />
        <ProductInfo />
      </div>
    );
  }
}

export default Overview;

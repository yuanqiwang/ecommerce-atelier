import React from 'react';
import axios from 'axios';
import ImageGallery from './sub-components/ImageGallery.jsx';
import ProductOptions from './sub-components/ProductOptions.jsx';
import ProductInfo from './sub-components/ProductInfo.jsx';
import ProductBullets from './sub-components/ProductBullets.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: props.productStyle,
      currentStyleID: 369761
    };

    this.changeHeroPic = this.changeHeroPic.bind(this);
  }

  getProductInfo(prodNum) {
    console.log('Getting product:', prodNum);

    axios.get('/product/info/' + prodNum)
    .then(data => {
      console.log(data.data.prod);
    })
    .catch(err => {
      console.log('Error fetching Overview data!');
      console.log(err);
    })
  }

  changeHeroPic(pic) {
    // this.setState({currentImg: pic});
    console.log(this.props);
  }

  render() {
    return (
      <div id="overview">
        <ImageGallery productStyle={this.props.productStyle} changePic={this.changeHeroPic} />
        <ProductOptions productInfo={this.props.productInfo} productStyle={this.props.productStyle} currentStyle={this.state.currentStyleID} />
        <ProductInfo />
        <ProductBullets />
      </div>
    );
  }

  componentDidMount() {
    // this.getProductInfo('59980');
  }
}

export default Overview;

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
      currentStyleID: 0
    };

    this.changeStyle = this.changeStyle.bind(this);
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

  changeStyle(id) {
    this.setState({currentStyleID: id});
  }

  render() {
    return (
      <div id="overview" data-testid="overview">
        <ImageGallery
          productStyle={this.props.productStyle}
          currentStyle={this.state.currentStyleID} />

        <ProductOptions
          productInfo={this.props.productInfo}
          productStyle={this.props.productStyle}
          currentStyle={this.state.currentStyleID}
          changeStyle={this.changeStyle} />

        <ProductInfo
          productInfo={this.props.productInfo} />

        <ProductBullets
          productInfo={this.props.productInfo} />

      </div>
    );
  }

  componentDidMount() {
    // this.getProductInfo('59980');
  }
}

export default Overview;

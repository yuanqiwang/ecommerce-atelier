import React from 'react';
import axios from 'axios';
import ImageGallery from './sub-components/ImageGallery.jsx';
import ProductOptions from './sub-components/ProductOptions.jsx';
import ProductInfo from './sub-components/ProductInfo.jsx';
import ProductBullets from './sub-components/ProductBullets.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentStyleID: 0 };

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

  updateHero() {
    let firstThumbnail = document.querySelector('#overview_thumbnails').children[1];
    // console.log(thumbnailGallery);
    firstThumbnail.click();
  }

  changeStyle(id) {
    // console.log('style changed: ', this.props);
    this.setState({currentStyleID: id}, () => {
      this.updateHero();
    });
  }

  render() {
    return (
      <div id="overview" data-testid="overview">
        <ImageGallery
          productStyle={this.props.productStyle}
          currentStyleID={this.state.currentStyleID} />

        <ProductOptions
          productInfo={this.props.productInfo}
          productStyle={this.props.productStyle}
          currentStyleID={this.state.currentStyleID}
          stars={this.props.stars}
          changeStyle={this.changeStyle} />

        <ProductInfo
          productInfo={this.props.productInfo}
          currentStyleID={this.state.currentStyleID} />

        <ProductBullets
          productInfo={this.props.productInfo}
          currentStyleID={this.state.currentStyleID} />

      </div>
    );
  }

  componentDidMount() {
    // this.getProductInfo('59980');
  }
}

export default Overview;

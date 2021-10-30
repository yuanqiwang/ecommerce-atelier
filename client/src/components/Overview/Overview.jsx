import React from 'react';
import axios from 'axios';
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

  getProductInfo(prodNum) {
    console.log('Getting product:', prodNum);

    axios.get('/product/info/' + prodNum)
    .then(data => {
      // console.log(data);
    })
    .catch(err => {
      console.log('Error fetching Overview data!');
      console.log(err);
    })
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

  componentDidMount() {
    this.getProductInfo('59980');
  }
}

export default Overview;

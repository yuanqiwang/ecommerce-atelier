import React from 'react';
import Thumbnails from './Thumbnails.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroPic: 'https://pngimg.com/uploads/ketchup/ketchup_PNG21.png',
      thumbnailCount: 0,
      currentImg: 0
    };

    this.changeHeroPic = this.changeHeroPic.bind(this);
  }

  changeHeroPic(pic) {
    this.setState({heroPic: pic});
    // console.log(this.state);
  }

  changeThumbnail(thumbIndex) {
    this.setState({currentImg: thumbIndex})
  }

  render() {
    // let heroPic = {'background-image': "url('" + props.heroPic + "')"};
    let thumbnails = []

    try {
      // heroPic = props.productStyle[0].photos[0].url;
      thumbnails = this.props.productStyle[0].photos;
    } catch {}

    return (
      <div id="overview_image_gallery" data-testid="image-gallery">
        <Thumbnails thumbnails={thumbnails} changePic={this.changeHeroPic} />
        <div className="overview_hero_nav overview_hero_nav_prev"></div>
        <div id="heroPic" style={{'background-image': "url('" + this.state.heroPic + "')"}}></div>
        <div className="overview_hero_nav overview_hero_nav_next"></div>
        <div id="overview_fullscreen_toggle" onClick={() => {console.log('woosh!')}}>
          <div className="toggle-icon"></div>
        </div>
      </div>
    )
  }
}

export default ImageGallery;
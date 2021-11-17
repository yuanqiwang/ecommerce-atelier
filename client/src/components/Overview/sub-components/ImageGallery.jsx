import React from 'react';
import Thumbnails from './Thumbnails.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroPic: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      thumbnailCount: 0,
      currentImg: 0
    };

    this.changeHeroPic = this.changeHeroPic.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
  }

  changeHeroPic(pic) {
    this.setState({heroPic: pic});
    // console.log(this.state);
  }

  changeThumbnail(thumbIndex) {
    this.setState({currentImg: thumbIndex});
  }

  render() {
    let heroPic = {'backgroundImage': "url('" + this.state.heroPic + "')"};
    let thumbnails = []

    try {
      // heroPic = {'backgroundImage': "url('" + this.props.productStyle[this.props.currentStyleID].photos[this.state.currentImg].url + "')"};
      // console.log(this.props.currentStyleID);
      thumbnails = this.props.productStyle[this.props.currentStyleID].photos;
    } catch {}

    return (
      <div id="overview_image_gallery" data-testid="image-gallery">
        <Thumbnails
          thumbnails={thumbnails}
          changePic={this.changeHeroPic}
          changeThumbnail={this.changeThumbnail} />

        <div className="overview_hero_nav overview_hero_nav_prev"></div>
        <div id="heroPic" style={heroPic}></div>
        <div className="overview_hero_nav overview_hero_nav_next"></div>
        <div id="overview_fullscreen_toggle" onClick={() => {console.log('woosh!')}}>
          <div className="toggle-icon"></div>
        </div>
      </div>
    )
  }
}

export default ImageGallery;
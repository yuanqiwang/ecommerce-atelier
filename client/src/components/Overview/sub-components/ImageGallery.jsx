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
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
  }

  changeHeroPic(pic) {
    this.setState({heroPic: pic});
  }

  changeThumbnail(thumbIndex) {
    this.setState({currentImg: thumbIndex});
  }

  nextImage() {
    let thumbIndex = this.state.currentImg;
    if ( this.state.currentImg === this.props.productStyle[this.props.currentStyleID].photos.length ) {
      this.changeThumbnail(0);
    } else {
      this.changeThumbnail(this.state.currentImg + 1 );
    }

    thumbIndex++;

    this.setState({
      currentImg: thumbIndex,
      heroPic: this.props.productStyle[this.props.currentStyleID].photos[thumbIndex].thumbnail_url
    });
  }

  prevImage() {
    let thumbIndex = this.state.currentImg;
    if ( this.state.currentImg > 0 ) {
      this.changeThumbnail(this.state.currentImg + 1 );

      thumbIndex--;

      this.setState({
        currentImg: thumbIndex,
        heroPic: this.props.productStyle[this.props.currentStyleID].photos[thumbIndex].thumbnail_url
      });
    }
  }

  expandGallery() {
    let imageGallery = document.querySelector('#gallery_expander');
    if ( imageGallery.classList.contains('expanded') ) {
      imageGallery.classList.remove('expanded');
    } else {
      imageGallery.classList.add('expanded');
    }
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
        <div id="gallery_expander">
          <Thumbnails
            thumbnails={thumbnails}
            currentStyleID = {this.props.currentStyleID}
            productId = {this.props.productId}
            changePic={this.changeHeroPic}
            changeThumbnail={this.changeThumbnail}
            currentHeroPic = {this.state.heroPic} />

          <div className="overview_hero_nav overview_hero_nav_prev" onClick={this.prevImage}></div>
          <div id="heroPic" style={heroPic} onClick={this.expandGallery}></div>
          <div className="overview_hero_nav overview_hero_nav_next" onClick={this.nextImage}></div>
          <div id="overview_fullscreen_toggle" onClick={this.expandGallery}>
          <div className="toggle-icon"></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    if ( this.props.productStyle[this.props.currentStyleID] !== undefined &&
          this.state.currentImg === 0 &&
          this.props.productStyle[this.props.currentStyleID].photos[0].thumbnail_url !== this.state.heroPic ) {
      this.setState({
        heroPic: this.props.productStyle[this.props.currentStyleID].photos[0].thumbnail_url
      });
    }
    // console.log('gallery updated:', this.props.productStyle[this.props.currentStyleID].photos[0].url);
  }
}

export default ImageGallery;
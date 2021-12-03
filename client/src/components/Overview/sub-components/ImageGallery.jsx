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
    // console.log(this.state);
  }

  changeThumbnail(thumbIndex) {
    // console.log(thumbIndex);

    this.setState({currentImg: thumbIndex});
  }

  nextImage() {
    console.log('props: ', this.props);
    let thumbIndex = this.state.currentImg;
    // if ( this.state.currentImg === this.props.images.length ) {
    //   this.changeThumbnail(0);
    // } else {
    //   this.changeThumbnail(this.state.currentImg + 1 );
    // }

    thumbIndex++;

    this.setState({currentImg: thumbIndex});
  }

  prevImage() {
    console.log('state: ', this.state);
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
            changePic={this.changeHeroPic}
            changeThumbnail={this.changeThumbnail} />

          <div className="overview_hero_nav overview_hero_nav_prev" onClick={this.prevImage}></div>
          <div id="heroPic" style={heroPic}></div>
          <div className="overview_hero_nav overview_hero_nav_next" onClick={this.nextImage}></div>
          <div id="overview_fullscreen_toggle" onClick={this.expandGallery}>
          <div className="toggle-icon"></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    // if ( this.props.productStyle[this.props.currentStyleID] !== undefined &&
    //       this.state.currentImg === 0 &&
    //       this.props.productStyle[this.props.currentStyleID].photos[0].url !== this.state.heroPic ) {
    //   this.setState({ heroPic: this.props.productStyle[this.props.currentStyleID].photos[0].url });
    // }
    // console.log('gallery updated:', this.props.productStyle[this.props.currentStyleID].photos[0].url);
  }
}

export default ImageGallery;
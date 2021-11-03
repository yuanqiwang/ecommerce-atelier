import React from 'react';
import Thumbnails from './Thumbnails.jsx';

function ImageGallery(props) {
  let heroPic = 'https://pngimg.com/uploads/ketchup/ketchup_PNG21.png';
  let thumbnails = []

  try {
    heroPic = props.productStyle[0].photos[0].url;
    thumbnails = props.productStyle[0].photos;
  } catch {
    // console.log(props);
    console.log('no data from server yet!');
  }

  return (
    <div id="overview_image_gallery">
      <Thumbnails thumbnails={thumbnails} changePic={props.changePic} />
      <img src={heroPic}/>
    </div>
  );
};

export default ImageGallery;
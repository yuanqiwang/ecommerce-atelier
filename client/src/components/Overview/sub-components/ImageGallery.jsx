import React from 'react';
import Thumbnails from './Thumbnails.jsx';

function ImageGallery(props) {
  return (
    <div id="overview_image_gallery">
      <Thumbnails />
      <img src="https://pngimg.com/uploads/ketchup/ketchup_PNG21.png"/>
    </div>
  );
};

export default ImageGallery;
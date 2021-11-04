import React from 'react';
import Thumbnails from './Thumbnails.jsx';

function ImageGallery(props) {
  return (
    <div id="overview_image_gallery">
      <Thumbnails changePic={props.changePic} />
      <img src={props.heroPic}/>
    </div>
  );
};

export default ImageGallery;
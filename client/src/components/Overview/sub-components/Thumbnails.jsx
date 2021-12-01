import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail.jsx';

// let testPics = [
//   "https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg",
//   "https://i5.walmartimages.com/asr/799ba014-9a45-49d3-9685-b7f68d9581cd.149da1d9d2c8278c24af9843c97e7391.jpeg",
//   "https://target.scene7.com/is/image/Target/GUEST_075ed466-052e-417f-86f5-cdbddbea5fb7?wid=488&hei=488&fmt=pjpeg",
//   "https://images.heb.com/is/image/HEBGrocery/001260656?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
//   "https://m.media-amazon.com/images/I/81P34yhaDlL._SX425_.jpg"
// ];

function Thumbnails(props) {
  return (
    <div id="overview_thumbnails" data-testid="thumbnails">
      <div className="overview_thumb_scroll overview_thumb_scroll_up"></div>
      {props.thumbnails.map((thumb,i) => {
        // console.log(thumb, i);
        return (
          <Thumbnail key={Math.random()} id={i} img={thumb.thumbnail_url} changePic={props.changePic} changeThumbnail={props.changeThumbnail} />
        )
      })}
      <div className="overview_thumb_scroll overview_thumb_scroll_down"></div>
    </div>
  );
}

export default Thumbnails;
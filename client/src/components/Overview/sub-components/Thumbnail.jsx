import React from 'react';

function Thumbnail(props) {
  return (
      <div className="overview_thumbnail" onClick={() => {
        props.changeThumbnail(props.id);
        props.changePic(props.img);
        // console.log(props);
      }}>
        <div id={'thumbnail-' + props.id} className="overview_thumbnail_img"  style={{'backgroundImage': "url('" + props.img + "')"}}></div>
      </div>
  );
};

export default Thumbnail;
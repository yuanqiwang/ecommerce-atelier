import React from 'react';

function Thumbnail(props) {
  return (
      <div className="overview_thumbnail" onClick={() => {
        props.changePic(props.img);
      }}>
        <div className="overview_thumbnail_img"  style={{'backgroundImage': "url('" + props.img + "')"}}></div>
      </div>
  );
};

export default Thumbnail;
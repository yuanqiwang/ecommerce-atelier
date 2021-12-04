import React, { useState, useEffect } from 'react';

const Thumbnail=({id, img, changeThumbnail, changePic, currentHeroPic}) => {
  return (
      <div className="overview_thumbnail" onClick={() => {
        changeThumbnail(id);
        changePic(img);
      }}>
      {
        new URL(img).pathname === new URL(currentHeroPic).pathname?
        <div id={'thumbnail-' + id} className="overview_thumbnail_img_highlight" style={{'backgroundImage': "url('" + img + "')"}} ></div>
        : <div id={'thumbnail-' + id} className="overview_thumbnail_img"  style={{'backgroundImage': "url('" + img + "')"}}></div>
      }
      </div>
  );
};

export default Thumbnail;
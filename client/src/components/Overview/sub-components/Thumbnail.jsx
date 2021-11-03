import React from 'react';

function Thumbnail(props) {
  return (
      <div onClick={() => {
        props.changePic(props.img);
      }}>
        <img className="overview_thumbnail" src={props.img}/>
      </div>
  );
};

export default Thumbnail;
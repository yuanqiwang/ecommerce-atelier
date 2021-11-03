import React from 'react';

function Styles(props) {
  console.log('S',props);

  return (
    <div id="overview_all_styles">
      <div className="overview_style overview_selected_style">
        <img src={props.selectedStyle.photos[0].thumbnail_url} />
      </div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
      <div className="overview_style"></div>
    </div>
  );
};

export default Styles;
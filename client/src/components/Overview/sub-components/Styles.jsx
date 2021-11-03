import React from 'react';

function Styles(props) {
  // console.log('S:',props);

  return (
    <div id="overview_all_styles">
      {props.allStyles.map(style => {
        if ( props.currentStyle === style.style_id ) {
          return (
            <div key={style.name} className="overview_style overview_selected_style">
              <img src={style.photos[0].thumbnail_url} alt={style.name} />
            </div>
          );
        } else {
          return (
            <div className="overview_style">
              <img src={style.photos[0].thumbnail_url} alt={style.name} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Styles;
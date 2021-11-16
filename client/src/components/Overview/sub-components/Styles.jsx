import React from 'react';

function Styles(props) {
  // console.log(props);
  // props.updateStyles(props.currentStyleID, props.allStyles);

  return (
    <div id="overview_all_styles" data-testid="styles">
      {props.allStyles.map((style, i) => {
        if ( props.currentStyleID === i ) {
          return (
            <div key={Math.random()} className="overview_style overview_selected_style">
              <img src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => {
                props.updateStyles(i, props.allStyles);
                }} />
            </div>
          );
        } else {
          return (
            <div key={Math.random()} className="overview_style">
              <img src={style.photos[0].thumbnail_url} alt={style.name} onClick={() => {
                props.updateStyles(i, props.allStyles);
                }} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Styles;
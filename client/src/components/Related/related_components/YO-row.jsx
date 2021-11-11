import React, {useState, useEffect} from 'react';
import YO_sub from './YO-subcard.jsx';

const YO_row =({outfits, addoutfit, removeoutfit, changeProduct})=> {
  const scrl = React.createRef();
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
  };
  // console.log(Object.keys(outfits).length)  why these console.log repeated 6 times?

  // const scrollCheck = () => {
  //   setscrollX(scrl.current.scrollLeft);
  //   if (
  //     Math.floor(scrl.current.scrollWidth - scrl.current.offsetWidth - 3) <= scrl.current.scrollLeft
  //   ) {
  //     setscrolEnd(false);
  //   } else {
  //     setscrolEnd(true);
  //   }
  // };


  // useEffect(() => {
  //   if (
  //     scrl.current &&
  //     scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
  //   ) {
  //     setscrolEnd(true);
  //   } else {
  //     setscrolEnd(false);
  //   }
  //   return () => {};
  // }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);


    return (

        <div id ='rp-wrapper'>
            {scrollX === 0 ?
            null
            : (
              <button className="rp-prev" onClick={() => slide(-400)}>
                {'<'}
              </button>
              )
            }
            <ul className = 'rp-cardrow' ref={scrl}>
               <article className = 'rp-card'  style ={{'textAlign':'center'}} onClick={addoutfit}>
                 Add to your Outfit
                <li id= 'yo-button'>+</li>
               </article>
              {
                Object.keys(outfits).length > 0 ?
                  Object.keys(outfits).map((product, i) => <YO_sub response={outfits[product]} key={i} removeoutfit={removeoutfit} changeProduct={changeProduct}/>)
                : null
              }
            </ul>
            {scrolEnd ?
             (
              <button className="rp-next" onClick={() => slide(+400)}>
                {'>'}
              </button>
            )
            : null
            }
         </div>
    )

}


export default YO_row;
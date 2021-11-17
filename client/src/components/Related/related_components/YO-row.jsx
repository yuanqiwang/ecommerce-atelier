import React, {useState, useEffect} from 'react';
import YO_sub from './YO-subcard.jsx';

const YO_row =({outfits, addoutfit, removeoutfit})=> {
  const scrl = React.createRef();
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(true);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.offsetWidth - 3) <= scrl.current.scrollLeft
    ) {
      setscrolEnd(false);
    } else {
      setscrolEnd(true);
    }
  };


  useEffect(() => {
    if(Object.keys(outfits).length > 2) {
      if (
        scrl.current &&
        scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
      ) {
        setscrolEnd(false);
      } else {
        setscrolEnd(true);
      }
      return () => {};
    }
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth, Object.keys(outfits).length]);


    return (

        <div id ='rp-wrapper'>
            {scrollX === 0 ?
            null
            : (
              <button className="rp-prev" onClick={() => slide(-400)} data-testid = "rp-left-button">
                {'<'}
              </button>
              )
            }
            <ul className = 'rp-cardrow' ref={scrl} onScroll={scrollCheck}>
               <article className = 'rp-card' id ='outfit-card'  style ={{'textAlign':'center'}} onClick={addoutfit}>
                <li id = 'outfit-card-text'> Add to your Outfit </li>
                <li id= 'yo-button' onClick={addoutfit} data-testid = "rp-add-button">+</li>
               </article>
              {
                Object.keys(outfits).length >0 ?
                  Object.keys(outfits).map((product, i) => <YO_sub response={outfits[product]} key={i} removeoutfit={removeoutfit}/>)
                : null
              }
            </ul>
            {
            Object.keys(outfits).length <= 2 ?
            null
            :
            scrolEnd ?
             (
              <button className="rp-next" onClick={() => slide(+400)} data-testid = "rp-right-button">
                {'>'}
              </button>
            )
            : null
            }
         </div>
    )

}


export default YO_row;
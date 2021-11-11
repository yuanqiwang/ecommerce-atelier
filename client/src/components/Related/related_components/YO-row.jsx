import React, {useState, useEffect} from 'react';
import YO_sub from './YO-subcard.jsx';

const YO_row =({outfits, addoutfit, removeoutfit, changeProduct})=> {
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
        setscrolEnd(false);//显示
        console.log(scrl.current.scrollWidth, scrl.current.offsetWidth)
      } else {
        setscrolEnd(true);//隐藏
        console.log(scrl.current.scrollWidth, scrl.current.offsetWidth)
      }
      return () => {};
    }
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth, Object.keys(outfits).length]);


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
            <ul className = 'rp-cardrow' ref={scrl} onScroll={scrollCheck}>
               <article className = 'rp-card' id ='outfit-card'  style ={{'textAlign':'center'}} onClick={addoutfit}>
                 Add to your Outfit
                <li id= 'yo-button' onClick={addoutfit} widget = 'Related Products'>+</li>
               </article>
              {
                Object.keys(outfits).length >0 ?
                  Object.keys(outfits).map((product, i) => <YO_sub response={outfits[product]} key={i} removeoutfit={removeoutfit} changeProduct={changeProduct}/>)
                : null
              }
            </ul>
            {
            Object.keys(outfits).length <= 2 ?
            null
            :
            scrolEnd ?
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
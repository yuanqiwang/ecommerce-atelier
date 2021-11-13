import React, {useState, useEffect} from 'react';
import RP_sub from './RP-subcard.jsx';

const RP_row = ({relatedProductArr, productInfo, productStyle }) => {

  const scrl_rp = React.createRef();
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl_rp.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
  };

  const scrollCheck = () => {
    setscrollX(scrl_rp.current.scrollLeft);
    if (
      Math.floor(scrl_rp.current.scrollWidth - scrl_rp.current.offsetWidth - 3) <= scrl_rp.current.scrollLeft
    ) {
      setscrolEnd(false);
    } else {
      setscrolEnd(true);
    }
  };


  useEffect(() => {
    if (
      scrl_rp.current &&
      scrl_rp?.current?.scrollWidth === scrl_rp?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl_rp?.current?.scrollWidth, scrl_rp?.current?.offsetWidth]);

    return (
          <div id ='rp-wrapper'>
            {scrollX === 0 ?
            null
            : (
              <button className="rp-prev" onClick={() => slide(-400)} >
                {'<'}
              </button>
              )
            }
            <ul className = 'rp-cardrow' ref={scrl_rp} onScroll={scrollCheck} >
              {relatedProductArr.length >0 ?
               relatedProductArr.map((item, i) => <RP_sub key={i} item ={item} mainInfo = {productInfo} mainStyle ={productStyle}/> )
              : null }
            </ul>
            {
            relatedProductArr.length <= 3 ?
            null
            :
            scrolEnd ?
             (
              <button className="rp-next" onClick={() => slide(+400)} >
                {'>'}
              </button>
            )
            : null
            }
          </div>
      );
}

export default RP_row;


import React, {useState, useEffect} from 'react';
import RP_sub from './RP-subcard.jsx';

const RP_row = ({relatedProductArr, productInfo, productStyle }) => {

  const scrl = React.createRef();
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

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
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

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
              {relatedProductArr.map((item, i) => <RP_sub key={i} item ={item} mainInfo = {productInfo} mainStyle ={productStyle}/> )}
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
      );
}

export default RP_row;


import React, {useState, useEffect, lazy, Suspense} from 'react';
const Overview = lazy(() => import('./components/Overview/Overview.jsx'));
const Review = lazy(() => import('./components/Review/Review.jsx'));
const Related = lazy(() => import('./components//Related/Related.jsx'));
const QA = lazy(() => import('./components/QA/QA.jsx'));

import { useParams } from 'react-router-dom';
import axios from 'axios';

const App = ()=> {

  //const [theme, setTheme] = useState('light');
  const [productId, setProductID] = useState(59553);// 59553
  const [productInfo, setproductInfo] = useState({});
  const [productStyle, setproductStyle] = useState([]);
  const [relatedProductArr,setrelatedProductArr] = useState([]);
  const [questions, setquestions] = useState([]);
  const [reviews,setreviews] = useState([]);
  const [stars, setstars] = useState({});
  const [outfits, setOutfits] = useState([]);

  const {pid} = useParams();

  useEffect(()=>{
    if (pid) {
      setProductID(pid)
    }
  },[pid])

  const loadInfo = async (Id) => {

    try {
      const response = await axios.get(`/product/info/${Id}`);
      setrelatedProductArr(response.data['related'])
      setquestions(response.data['questions'])
      setreviews(response.data['review']['results'])
      setstars(response.data['reviewStars'])
      setproductStyle(response.data['style']['results'])
      setproductInfo(response.data['prod'])
    } catch(err){
      console.log(err);
    }

  };

  useEffect(()=>{
    loadInfo(productId);
    window.scrollTo(0, 0);
  },[productId])

  const addoutfit = () => {
    let newState = {...outfits};
    if(!newState[productId]) {
      newState[productId] = {
        productInfo: productInfo,
        stars: stars,
        productStyle: productStyle
      };
      setOutfits(newState)
      window.localStorage.removeItem('AtelierOutfits');
      window.localStorage.setItem('AtelierOutfits', JSON.stringify(newState));
    }
  }

  const removeoutfit = (Id) => {
    let newState = {...outfits};
    delete newState[Id];
    setOutfits(newState);
    window.localStorage.removeItem('AtelierOutfits');
    window.localStorage.setItem('AtelierOutfits', JSON.stringify(newState));
  }

  useEffect(()=>{
    const savedOutfit = JSON.parse(window.localStorage.getItem('AtelierOutfits'));
    if(savedOutfit) {
      setOutfits(savedOutfit);
    }
  },[Object.keys(outfits).length])

  //pass this function with widget name
  //then add it to a click event listener at top of the main component
  const trackClick = (e, widget) => {
    let data = {
      element: e.target.outerHTML,
      widget: widget,
      time: new Date()
    }
    axios.post('/interactions', data)
      .then((result)=> {})
      .catch((err) => {})
  }

  const renderLoader = () => <p>Loading</p>;
    return (
        <div>
          <Suspense fallback={renderLoader()}>
          <Overview
            productInfo={productInfo}
            productStyle={productStyle}
            stars={stars} />
          <Related
            relatedProductArr={relatedProductArr}
            productID={productId}
            productInfo={productInfo}
            productStyle={productStyle}
            addoutfit={addoutfit}
            removeoutfit={removeoutfit}
            outfits = {outfits}
            trackClick={(e)=>trackClick(e, 'Related Product')}
            />
          <QA
            productId={productId}
            productInfo={productInfo}
            questions={questions}
            trackClick={(e)=>trackClick(e, 'QA')}/>
          <Review
            productID={productId}
            reviews={reviews}
            stars={stars}
            productInfo={productInfo}
            trackClick={(e)=>trackClick(e, 'Review')}
          />
          </Suspense>
        </div>
    );
};


export default App;
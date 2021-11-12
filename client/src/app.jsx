import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import Review from './components/Review/Review.jsx'
import Related from './components/Related/Related.jsx'
import QA from './components/QA/QA.jsx'

import axios from 'axios';

const App = ()=> {

  const [productId, setProductID] = useState(59553);// 59553
  const [productInfo, setproductInfo] = useState({});
  const [productStyle, setproductStyle] = useState([]);
  const [relatedProductArr,setrelatedProductArr] = useState([]);
  const [questions, setquestions] = useState([]);
  const [reviews,setreviews] = useState([]);
  const [stars, setstars] = useState({});
  const [outfits, setOutfits] = useState([]);


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

  const changeProduct = (Id) => {
    setProductID(Id);
  }

  useEffect(()=>{
    loadInfo(productId);
  },[productId, Object.keys(outfits).length])

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
    // console.log('postData!!', data)
    axios.post('/interactions', data)
      .then((result)=> {})
      .catch((err) => {})
  }

    return (
        <div>
          <div id="header">
            <h1>Logo</h1>
            <div id="search"></div>
          </div>
          <Overview
            productInfo={productInfo}
            productStyle={productStyle} />
          <Related
            relatedProductArr={relatedProductArr}
            productID={productId}
            productInfo={productInfo}
            productStyle={productStyle}
            changeProduct={changeProduct}
            addoutfit={addoutfit}
            removeoutfit={removeoutfit}
            outfits = {outfits}
            />
          <QA
            productId={productId}s
            productInfo={productInfo}
            questions={questions}
            trackClick={(e)=>trackClick(e, 'QA')}/>
          <Review
            productID={productId}
            reviews={reviews}
            stars={stars}
          />
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('app'));
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import Review from './components/Review/Review.jsx'
import Related from './components/Related/Related.jsx'
import QA from './components/QA/QA.jsx'

import axios from 'axios';

const App = ()=> {

  const [productId, setProductID] = useState(59553);
  const [productInfo, setproductInfo] = useState({});
  const [productStyle, setproductStyle] = useState([]);
  const [relatedProductArr,setrelatedProductArr] = useState([]);
  const [questions, setquestions] = useState([]);
  const [reviews,setreviews] = useState([]);
  const [stars, setstars] = useState({});

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

  useEffect( ()=>{
    loadInfo(productId);
  },[productId])

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
            changeProduct={changeProduct}/>
          <QA
            productId={productId}
            productInfo={productInfo}
            questions={questions}/>
          <Review
            productID={productId}
            reviews={reviews}
            stars={stars}
          />
        </div>
    );
};



ReactDOM.render(<App />, document.getElementById('app'));
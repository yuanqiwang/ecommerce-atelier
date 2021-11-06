import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ComparisonModal from './RP-Modal.jsx';

const RP_sub = ({item, mainInfo}) => {

  const[productInfo, setInfo] = useState({});
  const[stylePic, setStylePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  const[stylePrice, setStylePrice] = useState();
  const[salePrice, setSaleprice] = useState(100);
  const[styleName, setStyleName] = useState();
  const[reviewInfo, setReview] = useState(0);
  const[showModal, setModal] = useState(false);

  const avgReview = (reviewObj) => {
    let reviewNum=0;
    let ratingSum=0;

    if(reviewObj) {
      let keys = Object.keys(reviewObj);
      let values = Object.values(reviewObj);

        for (var i=0; i<keys.length; i++) {
          reviewNum += parseInt(values[i]);
          ratingSum += parseInt(keys[i])*parseInt(values[i]);
        }
    }


    return reviewNum > 0?  (ratingSum/reviewNum).toFixed(1) : 0

  };

  const getProductInfo = async () => {
    try {
      const response =  await axios.get(`/product/info/${item}`);
      const avgReviewnum = avgReview(response.data['reviewStars'].ratings);
      setInfo(response.data['prod']);
      setStylePicture(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
      setReview(avgReviewnum)
      setStylePrice(parseInt(response.data['style']['results'][0]['original_price']).toFixed(0))
      if(response.data['style']['results'][0]['sale_price']){
        setSaleprice(response.data['style']['results'][0]['sale_price'].toFixed(0))
      }
      const ProductName = response.data['prod']['name'] + ' -- ' + response.data['style']['results'][0]['name'];
      setStyleName(ProductName)

    } catch (err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getProductInfo();
  }, [])

  // const calAverageRating;// helper function
  function MouseOver(event) {
    event.target.style['-webkit-text-fill-color'] = 'black';
  }
  function MouseOut(event){
    event.target.style['-webkit-text-fill-color'] = 'transparent';
  }

  function actionClick(){
    setModal(!showModal);
  }

  return(
    <article className = 'rp-card'>

      <div className='sub-card-img'>
         <button id='rp-action-button' onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={actionClick}> ★ </button>
         <img className='rp-card-img' src={stylePic} />
      </div>

      <div className ='sub-card'>
        <div id = 'category'> {productInfo.category}</div>
        <div id = 'name'> {styleName}</div>
        {
          salePrice > 0?
          <div className='rp-allprice'>
            <div id= 'rp-sale-price'> ${salePrice}</div>
            <div id= 'rp-origin-price-dup'>${stylePrice}</div>
          </div>
          : <div id= 'rp-origin-price'> {stylePrice}</div>
        }
        {
          reviewInfo?
          <div className ='sub-card-star' style = {{'--rating': reviewInfo}} >
            &nbsp;{reviewInfo}
          </div>
          : <div>No Reviews yet</div>
        }
      </div>

      <ComparisonModal isOpen={showModal} mainFeature = {mainInfo.features} currentFeature = {productInfo.features} mainName = {mainInfo.name} currentName ={productInfo.name}/>
    </article>
  )
}



export default RP_sub;

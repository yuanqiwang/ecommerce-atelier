import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from 'style-it';


const RP_sub = (props) => {

  const[productInfo, setInfo] = useState({});
  const[stylePic, setStylePicture] = useState([]);
  const[stylePrice, setStylePrice] = useState([]);
  const[styleName, setStyleName] = useState([]);
  const[reviewInfo, setReview] = useState(0);

  const avgReview = (reviewObj) => {
    let reviewNum=0;
    let ratingSum=0;

    if(reviewObj) {
      let keys = Object.keys(reviewObj);
      let values = Object.values(reviewObj);

        for (var i=0; i<keys.length; i++) {
          // console.log(keys[i], typeof keys[i]);
          // console.log(values[i], typeof values[i])
          reviewNum += parseInt(values[i]);
          ratingSum += parseInt(keys[i])*parseInt(values[i]);
        }
    }


    return reviewNum > 0?  (ratingSum/reviewNum).toFixed(1) : 0

  };

  const getProductInfo = async () => {
    try {
      const response =  await axios.get(`/product/info/${props.item}`);
      const avgReviewnum = avgReview(response.data['reviewStars'].ratings);
      setInfo(response.data['prod']);
      setStylePicture(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
      setReview(avgReviewnum)
      setStylePrice(response.data['style']['results'][0]['original_price'])
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

  return(
    <article className = 'rp-card'>
      <img className='rp-card-img' src={stylePic} />
      <div className ='sub-card'>
        <div id = 'category'> {productInfo.category}</div>
        <div id = 'name'> {styleName}</div>
        <div id= 'price'> {stylePrice}</div>
      </div>
      <div className ='sub-card-star' style = {{'--rating': reviewInfo}} >
        &nbsp;{reviewInfo}
      </div>
    </article>
  )
}



export default RP_sub;
//style = "--rating: 2.3"
import React, {useState, useEffect} from 'react';

const YO_sub = ({response, removeoutfit, changeProduct}) => {

  const[productInfo, setInfo] = useState({});
  const[productId, setProductId] = useState({});
  const[stylePic, setStylePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  const[stylePrice, setStylePrice] = useState();
  const[salePrice, setSaleprice] = useState(0);
  const[styleName, setStyleName] = useState();
  const[reviewInfo, setReview] = useState(0);

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


  const getProductInfo = () => {
      setInfo(response.productInfo);
      setProductId(response.productInfo.id)
      if(response.stars.ratings) {
        const avgReviewnum = avgReview(response.stars.ratings);
        setReview(avgReviewnum)
      }

      if(response.productStyle[0]['photos'][0]['thumbnail_url']){
        setStylePicture(response.productStyle[0]['photos'][0]['thumbnail_url']);
      }
      setStylePrice(parseInt(response.productStyle[0]['original_price']).toFixed(0))
      if(response.productStyle[0]['sale_price']){
        setSaleprice(parseInt(response.productStyle[0]['sale_price']).toFixed(0))
      }
      const ProductName = response.productInfo.name;
      setStyleName(ProductName)
  }

  useEffect(()=>{
    getProductInfo();
  }, [productId])


  return(
    <article className = 'rp-card'>

      <div className='sub-card-img'>
         <button id='yo-action-button'  onClick={() => removeoutfit(productId)}>X</button>
         <img className='rp-card-img' src={stylePic} onClick = {() => changeProduct(productId)}/>
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
          : <div id= 'rp-origin-price'> ${stylePrice}</div>
        }
        {
          reviewInfo > 0?
          <div className ='sub-card-star' style = {{'--rating': reviewInfo}} >
          </div>
          : <div className ='sub-card-no-star'> Be the 1st to Review!</div>
        }
      </div>
    </article>
  )
}



export default YO_sub;

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RP_sub = (props) => {

  const[productInfo, setInfo] = useState({});
  const[stylePic, setStylePicture] = useState([]);
  const[stylePrice, setStylePrice] = useState([]);
  const[styleName, setStyleName] = useState([]);
  const[reviewInfo, setReview] = useState({});


  const getProductInfo = async () => {
    try {
      const response =  await axios.get(`/product/info/${props.item}`);

      setInfo(response.data['prod']);
      setStylePicture(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
      setReview(response.data['reviewStars'].ratings)
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
        <div id = 'category'> &nbsp;{productInfo.category}</div>
        <div id = 'name'> &nbsp;{styleName}</div>
        <div id= 'price'> &nbsp;${stylePrice}</div>
      </div>
    </article>
  )
}



export default RP_sub;
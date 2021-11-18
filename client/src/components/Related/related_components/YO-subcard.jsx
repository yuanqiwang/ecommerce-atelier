import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Star from '../../../star.jsx';
const YO_sub = ({response, removeoutfit}) => {

  const[productInfo, setInfo] = useState({});
  const[productId, setProductId] = useState({});
  const[stylePic, setStylePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  const[stylePrice, setStylePrice] = useState();
  const[salePrice, setSaleprice] = useState(0);
  const[styleName, setStyleName] = useState();
  const[stars, setStars] = useState({});
  const[addtionalImage, setaddtionalImage] = useState();



  const getProductInfo = () => {
      setInfo(response.productInfo);
      setProductId(response.productInfo.id)
      if(response.stars) {
        setStars(response.stars)
      }

      if(response.productStyle[0]['photos'][0]['url']){
        setStylePicture(response.productStyle[0]['photos'][0]['url']);
      } else {
        setStylePicture('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
      }

      if(response.productStyle[0]['photos'][0]['thumbnail_url']){
        setaddtionalImage(response.productStyle[0]['photos'][0]['thumbnail_url']);
      }

      setStylePrice(parseInt(response.productStyle[0]['original_price']).toFixed(0))
      if(response.productStyle[0]['sale_price']){
        setSaleprice(parseInt(response.productStyle[0]['sale_price']).toFixed(0))
      } else {
        setSaleprice(0)
      }
      const ProductName = response.productInfo.name;
      setStyleName(ProductName)
  }

  useEffect(()=>{
    getProductInfo();
  }, [response.productInfo.id])


  return(
    <article className = 'rp-card'>

      <div className='sub-card-img'>
         <button id='yo-action-button'  onClick={() => removeoutfit(productId)} className="fas fa-times-circle"></button>
         <Link to={`/product/${productId}`}>
         <div className='rp-card-img' style={{'backgroundImage': "url('" + stylePic + "')"}} ></div>
         </Link>
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
        <Star stars={stars}/>
      </div>
    </article>
  )
}



export default YO_sub;

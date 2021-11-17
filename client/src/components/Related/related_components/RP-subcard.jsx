import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ComparisonModal from './RP-Modal.jsx';
import { Link } from 'react-router-dom';
import Star from '../../../star.jsx';
import Additional from './Additional.jsx';

const RP_sub = ({item, mainInfo}) => {

  const[productInfo, setInfo] = useState({});
  const[productId, setProductId] = useState();
  const[stylePic, setStylePicture] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
  const[stylePrice, setStylePrice] = useState();
  const[salePrice, setSaleprice] = useState(0);
  const[styleName, setStyleName] = useState();
  const[stars, setStars] = useState({});
  const[showModal, setModal] = useState(false);
  const[addtionalImage, setaddtionalImage] = useState([]);
  const[display, setDisplay] = useState(false);


  const getProductInfo = async () => {
    try {
      const response =  await axios.get(`/related/${item}`);
      if(response) {
        if(response.data['reviewStars']) {
          setStars(response.data['reviewStars'])
        }
        setInfo(response.data['prod']);
        setProductId(response.data['prod'].id);
        if(response.data['style']['results'][0]['photos'][0]['url']){
          setStylePicture(response.data['style']['results'][0]['photos'][0]['url']);
        } else {
          setStylePicture('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png');
        }

        if(response.data['style']['results'][0]['photos'][0]['thumbnail_url']){
          setaddtionalImage(response.data['style']['results'][0]['photos'][0]['thumbnail_url']);
        }

        setStylePrice(parseInt(response.data['style']['results'][0]['original_price']).toFixed(0))
        if(response.data['style']['results'][0]['sale_price']){
          setSaleprice(parseInt(response.data['style']['results'][0]['sale_price']).toFixed(0));
        } else {
          setSaleprice(0);
        }
        const ProductName = response.data['prod']['name'];
        setStyleName(ProductName)

        const addPhotos = response.data['style']['results'].flatMap(style=> style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : [] );
        if(addPhotos){
          setaddtionalImage(addPhotos);
        } else {
          setaddtionalImage([]);
        }

      }
    } catch (err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getProductInfo();
  }, [item])

  // const calAverageRating;// helper function
  const btMouseOver = (event) => {
    event.target.style['-webkit-text-fill-color'] = '#c62828';
  }
  const btMouseOut = (event) => {
    event.target.style['-webkit-text-fill-color'] = 'transparent';
  }

  const imgMouseOver = (event) => {
    setDisplay(true);
  }
  const imgMouseOut = (event) => {
    setDisplay(false);
  }
  const changeBackground = (img) => {
    setStylePicture(img);
  }

  const actionClick = () => {
    setModal(!showModal);
  }

  useEffect(() => {

  }, [stylePic])

  return(
    <article className = 'rp-card' data-testid = 'rp-subcard' id = 'rp-card'>

      <div className='sub-card-img' id = 'sub-card-img' onMouseOver = {imgMouseOver} onMouseLeave = {imgMouseOut}>
        <button id='rp-action-button' onMouseOver={btMouseOver} onMouseOut={btMouseOut} onClick={actionClick} href="#" className="fas fa-star"> </button>
        <Link to={`/product/${productId}`}>
        <div className='rp-card-img' style={{'backgroundImage': "url('" + stylePic + "')"}} ></div>
        </Link>
        {
          display && addtionalImage.length > 0 ?
          <Additional images={addtionalImage} changeBackground={changeBackground} />
          : null
        }
      </div>

      <div className ='sub-card' id = 'sub-card'>
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
      <ComparisonModal
          isOpen={showModal}
          mainFeature = {!mainInfo? [] : mainInfo.hasOwnProperty('features')? mainInfo.features : []}
          currentFeature = {!productInfo? [] : productInfo.hasOwnProperty('features')? productInfo.features : []}
          mainName = {!mainInfo? null: mainInfo.name}
          currentName ={!productInfo? null: productInfo.name}
      />
    </article>
  )
}

//rating={reviewInfo}
//<div className ='sub-card-no-star'> Be the 1st to Review!</div>
export default RP_sub;

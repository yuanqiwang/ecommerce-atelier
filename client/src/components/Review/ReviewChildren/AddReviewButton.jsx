import React, { useState } from "react";
import Modal from "./Modal.jsx";
import meanings from "./meanings.js";
import axios from 'axios';





export default function AddReviewButton( {productName, productId, reviews}) {
  const characteristicTitles = reviews !== null ? Object.keys(reviews) : null
  productId = parseInt(productId) || null;
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [characteristics, setCharacteristics] = useState({}) //for post request
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formComplete, setFormComplete] = useState(true);



  const [isOpen, setIsOpen] = useState(false);
  const [textAreaCount, setTextAreaCount] = useState(0);
  const [characVal, setCharacVal] = useState( //for the UI
    {
      Size: "none selected",
      Width: "none selected",
      Comfort: "none selected",
      Quality: "none selected",
      Length: "none selected",
      Fit: "none selected"
    }
  );

  const uploadImage = async e => {
    const files = e.target.files
    if (files.length > 5) {
      e.preventDefault();
      alert('Cannot upload more than 5 files, please edit your review') //add some text later
      return;
    } else {
     for (var i=0; i<files.length; i++) {
        const data = new FormData()
        data.append('file', files[i])
        data.append('upload_preset', 'ketchup')

        setLoading(true);
        const res = await fetch('https://api.cloudinary.com/v1_1/dousz4spf/image/upload', {
          method: 'POST',
          body: data
        },
      )
      const file = await res.json() //json response
      setPhotos(photos => [...photos, file.secure_url])
      setLoading(false)
      }
    }

  }

  const postData = (e) => {
    e.preventDefault();
    let data = {
      product_id: productId,
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      characteristics
    }
    if (data.rating === null || data.rating === 0 || data.summary === '') {
      console.log('error')
    } else {
      axios.post('/review/reviews', data)
        .then((res)  =>
          res.send(201)
        )
        .catch((err) =>
          console.log(err)
        )
      setFormComplete(true)
    }
  }
  const clearForm = () => {
    setPhotos([])
  }

  const renderSwitch = (val) => {
    switch(val) {
      case 5: return `"Great"`
      case 4: return `"Good"`
      case 3: return `"Average"`
      case 2: return `"Fair"`
      case 1: return `"Poor"`
      default: return null
    }
  }
  const calculateTextArea = e => {
    setTextAreaCount(e.target.value.length);
  }

  return (

    <div >
      <button
        id="review-button"
        data-testid="ClickIndicator"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div>ADD A REVIEW +</div>
      </button>
      <Modal
        visable={isOpen}
        close={() => {
          clearForm()
          setIsOpen(false);
        }}
      >
      { formComplete === false ?
        <div id="rmodal-wrapper">
          <div id="rmodal-border">
            <div id="rmodal-title">Write Your Review</div>
            <div id="rmodal-subtitle">About the {productName}</div>
          </div>
          <form id="form" name="form">
            <div id="rmodal-stars">
              <div className="rmodal-question">Overall rating (mandatory)*</div>
              <div className="star-rating">
                <input type="radio" onClick={() => {
                  setRating(5)}} id="5-stars" name="rating" value="5"/>
                <label htmlFor="5-stars" className="fa fa-star"></label>
                <input type="radio" onClick={() => {
                  setRating(4)}}  id="4-stars" name="rating" value="4" />
                <label htmlFor="4-stars"  className="fa fa-star"></label>
                <input type="radio" onClick={() => {
                  setRating(3)}}  id="3-stars" name="rating" value="3" />
                <label htmlFor="3-stars" className="fa fa-star"></label>
                <input type="radio" onClick={() => {
                  setRating(2)}}  id="2-stars" name="rating" value="2" />
                <label htmlFor="2-stars" className="fa fa-star"></label>
                <input type="radio" onClick={() => {
                  setRating(1)}} id="1-star" name="rating" value="1" />
                <label htmlFor="1-star" className="fa fa-star"></label>
              </div>
                <span id="rstar-value">{renderSwitch(rating)}</span>
              </div>
              <div id="block">
                <div className="rmodal-overall-rating"><p>Do you recommend this product (mandatory)*?</p></div>
                <div id="rmodal-radio">
                  <input type="radio" value="true" onClick={() => {setRecommend(true)}} name="review-radio"/>
                  <label htmlFor="yes">&nbsp;yes&nbsp;</label>
                  <input type="radio" value="no" onClick={() => {setRecommend(false)}} name="review-radio"/>
                  <label htmlFor="no">&nbsp;no&nbsp;</label>
                </div>
              </div>
            <div className="rmodal-characteristics">
              <div className="rmodal-question">Characteristics (mandatory)*</div>
                {characteristicTitles !== null ? characteristicTitles.map( (characteristic, index) =>
                <div key={index}>
                <span id="modal-charac-title" >{characteristic}</span><br/>
                  <div className="letter-slider" >
                    <div className="rmodal-selected"><span className="choice">choice:</span> {characVal[characteristic]}</div><br/>
                    <input
                      id={`${characteristic}1`}
                      type="radio"
                      name={characteristic}
                      value="1"
                      onClick={() =>{ setCharacVal(prevState => ({...prevState,
                        [characteristic]: [meanings[characteristic][0]]
                        }))
                        setCharacteristics(prevState => (
                          {...prevState,
                          [{...reviews[[characteristic]]}["id"].toString()]:1
                        }))
                      }}/>
                    <label htmlFor={`${characteristic}1`}>{meanings[characteristic][0]}</label>
                    <input id={`${characteristic}2`} type="radio"  name={characteristic} value="2"
                      onClick={() =>{
                        setCharacteristics(prevState => (
                          {...prevState,
                          [{...reviews[[characteristic]]}["id"].toString()]:2
                        }))
                        setCharacVal(prevState => ({...prevState,[characteristic]: [meanings[characteristic][1]]}))}}/>
                    <label  htmlFor={`${characteristic}2`}>{meanings[characteristic][1]}</label>
                    <input  id={`${characteristic}3`} type="radio" name={characteristic} value="3" onClick={() =>{
                      setCharacteristics(prevState => (
                        {...prevState,
                        [{...reviews[[characteristic]]}["id"].toString()]:3
                      }))
                      setCharacVal(prevState => ({...prevState,[characteristic]: [meanings[characteristic][2]]}))}}/>
                    <label htmlFor={`${characteristic}3`}>{meanings[characteristic][2]}</label>
                    <input id={`${characteristic}4`} type="radio"name={characteristic} value="4" onClick={() =>{
                      setCharacteristics(prevState => (
                        {...prevState,
                        [{...reviews[[characteristic]]}["id"].toString()]:4
                      }))
                      setCharacVal(prevState => ({...prevState,[characteristic]: [meanings[characteristic][3]]}))}}/>
                    <label htmlFor={`${characteristic}4`}>{meanings[characteristic][3]}</label>
                    <input id={`${characteristic}5`} type="radio" name={characteristic} value="5" onClick={() =>{
                      setCharacteristics(prevState => (
                        {...prevState,
                        [{...reviews[[characteristic]]}["id"].toString()]:5
                      }))
                      setCharacVal(prevState => ({...prevState,[characteristic]: [meanings[characteristic][4]]}))}}/>
                    <label htmlFor={`${characteristic}5`}>{meanings[characteristic][4]}</label>
                  </div>
                </div>
                ) : null}
              </div>
            <div className="rmodal-summary">
              <div className="rmodal-question">Review Summary</div>
              <input type="text" placeholder="Example: Best purchase ever!" onChange={(e) => setSummary(e.target.value)} maxLength="60" size="85" />
            </div>
            <div className="rmodal-body">
              <div className="rmodal-question">Your Review (mandatory)*</div>
              <textarea
                id="rmodal-textarea"
                property="comment"
                cols="65"
                rows="4"
                minLength="50"
                maxLength="1000"
                placeholder="Why did you like this product or not?"
                onChange={(e) => {
                  calculateTextArea(e)
                  setBody(e.target.value)
                }}
                >
              </textarea>
              <p id="rmodal-caption-box">{textAreaCount < 50 ? `Minimum required characters left: ${50 - textAreaCount}` : `Minimum Reached`}</p>
            </div>
            <div className="rmodal-nickname">
              <label className="rmodal-question">What is your nickname (mandatory)*?</label>
              <input type="text" name="nickname" id="nickname" placeholder="ex:jackson11!" onChange={(e) => {
                setName(e.target.value)
              }}/>
              <p id="rmodal-caption">For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="rmodal-email">
              <label className="rmodal-question">Your email (mandatory)* </label>
              <input type="text" name="email" id="email" maxLength="60" Length="200" placeholder="ex:jackson11@email.com" onChange={(e) => setEmail(e.target.value)}/>
              <p id="rmodal-caption">For authentication reasons, you will not be emailed</p>
            </div>
            <div className="rmodal-nickname">
                <label className="rmodal-question">Upload your Photos </label>
                <input multiple
                  type="file"
                  name="photo"
                  id="upload"
                  accept="image/png, image/jpeg"
                  onChange={uploadImage}
                />
                {loading ? (
                <h3 data-testid='image-loaded'>loading ... </h3>
              ) : (
              <div className="form-group qa-multi-preview" data-testid='image-loaded'>
                {(photos || []).map((url,i) => (
                    <img key={i} src={url} alt={`review image ${i}`} />
                ))}
              </div>
              )}
            </div>
            <span id='rmodal-caption'> Upload up to 5 photos</span>
            <div className="review-form-btn-container">
              <button id="review-form-btn" type="submit" onClick={(e) => postData(e)}>submit</button>
            </div>
          </form>
        </div>
      : <><header><div className = "logo-name" id = "logo-name">cinquante-sept</div></header><div id="rmodal-submitted"> Thanks for submitting your review! </div></>  }
      </Modal>
    </div>
  );
}

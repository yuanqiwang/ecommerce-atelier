import React, { useState } from "react";
import Modal from "./Modal.jsx";
import meanings from "./meanings.js";
import axios from 'axios';



export default function AddReviewButton( {productName, productId, reviews}) {
  const characteristicTitles = reviews !== null ? Object.keys(reviews) : null
  productId = parseInt(productId) || null;
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [textAreaCount, setTextAreaCount] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [characteristics, setCharacteristics] = useState({}) //for post request
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
      characteristics
    }

    axios.post('/review/reviews', data)
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
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
    <div className="App">
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
          setIsOpen(false);

        }}
      >
        <div id="rmodal-wrapper">
          <span id="rmodal-title">Write Your Review</span>
          <div id="rmodal-subtitle">About the {productName}</div>
          <form id="form" name="form">
            <div id="rmodal-stars">
              <div className="rmodal-question">Overall rating*</div>
              <div className="star-rating">
                <input type="radio" onClick={() => {
                  setRating(5)}} id="5-stars" name="rating" value="5"/>
                <label htmlFor="5-stars" >&#9733;</label>
                <input type="radio" onClick={() => {
                  setRating(4)}}  id="4-stars" name="rating" value="4" />
                <label htmlFor="4-stars"  className="star">&#9733;</label>
                <input type="radio" onClick={() => {
                  setRating(3)}}  id="3-stars" name="rating" value="3" />
                <label htmlFor="3-stars" className="star">&#9733;</label>
                <input type="radio" onClick={() => {
                  setRating(2)}}  id="2-stars" name="rating" value="2" />
                <label htmlFor="2-stars" className="star">&#9733;</label>
                <input type="radio" onClick={() => {
                  setRating(1)}} id="1-star" name="rating" value="1" />
                <label htmlFor="1-star" className="star">&#9733;</label>
              </div>
              <span id="rstar-value">{renderSwitch(rating)}</span>
              <div className="rmodal-overall-rating">
                <p>Do you recommend this product*????</p>
                <input type="radio" value="true" onClick={() => {setRecommend(true)}} name="review-radio"/>
                <label htmlFor="yes">yes👍</label>
                <input type="radio" value="no" onClick={() => {setRecommend(false)}} name="review-radio"/>
                <label htmlFor="no">no👎</label>
              </div>
            </div>
            <div className="rmodal-characteristics">
              <div className="rmodal-question">Characteristics*</div>
                {characteristicTitles !== null ? characteristicTitles.map( (characteristic, index) =>
                <>
                <span id="modal-charac-title">{characteristic}</span><br/>
                  <div className="letter-slider">
                    <div className="rmodal-selected">choice: {characVal[characteristic]}</div>
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
                    <label htmlFor={`${characteristic}2`}>{meanings[characteristic][1]}</label>
                    <input id={`${characteristic}3`} type="radio" name={characteristic} value="3" onClick={() =>{
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
                </>
                ) : null}
              </div>
            <div className="rmodal-summary">
              <div className="rmodal-question">Review Summary</div>
              <input type="text" placeholder="Example: Best purchase ever!" onChange={(e) => setSummary(e.target.value)} maxLength="60" size="70" />
            </div>
            <div className="rmodal-body">
              <div className="rmodal-question">Your Review*</div>
              <textarea
                property="comment"
                cols="50"
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
              <p>{textAreaCount < 50 ? `Minimum required characters left: ${50 - textAreaCount}` : `Minimum Reached`}</p>
            </div>
            <div className="rmodal-nickname">
              <label className="rmodal-question">What is your nickname* </label>
              <input type="text" name="nickname" id="nickname" placeholder="ex:jackson11!" onChange={(e) => {
                setName(e.target.value)
              }}/>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>
            <div className="rmodal-email">
              <label className="rmodal-question">Your email*: </label>
              <input type="text" name="email" id="email" maxLength="60" Length="100" placeholder="ex:jackson11@email.com" onChange={(e) => setEmail(e.target.value)}/>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
            <div className="rmodal-nickname">
                <label className="rmodal-question">Upload your Photos: </label>
                <input type="file" name="photo" id="upload" accept="image/png, image/jpeg" onChange={(e) => setPhoto(e.target.value)} />
            </div>
            <button type="submit" onClick={(e) => postData(e)}>submit</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

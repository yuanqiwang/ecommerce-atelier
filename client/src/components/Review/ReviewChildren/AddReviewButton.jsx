import React, { useState } from "react";
import Modal from "./Modal.jsx";

function renderSwitch(val) {
  switch(val) {
    case 5: return `"Great"`
    case 4: return `"Good"`
    case 3: return `"Average"`
    case 2: return `"Fair"`
    case 1: return `"Poor"`
    default: return null
  }
}
export default function AddReviewButton( {productName}) {
  const [isOpen, setIsOpen] = useState(false);
  const [starVal, setStarVal] = useState(0);

  return (
    <div className="App">
      <button
        id="review-button"
        data-testid="ClickIndicator"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        ADD A REVIEW +
      </button>
      <Modal
        visable={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <div id="review-modal-wrapper">

          <span id="review-modal-title">Write Your Review</span>
          <div id="review-modal-subtitle">About the {productName}</div>
            <form id="form" name="form" method="post" action="index.html">
            <span id="rstar-title">Overall rating*</span>
            <div className="star-rating">
              <input type="radio" onClick={() => {
                setStarVal(5)}} id="5-stars" name="rating" value="5" />
              <label htmlFor="5-stars" >&#9733;</label>
              <input type="radio" onClick={() => {
                setStarVal(4)}}  id="4-stars" name="rating" value="4" />
              <label htmlFor="4-stars"  className="star">&#9733;</label>
              <input type="radio" onClick={() => {
                setStarVal(3)}}  id="3-stars" name="rating" value="3" />
              <label htmlFor="3-stars" className="star">&#9733;</label>
              <input type="radio" onClick={() => {
                setStarVal(2)}}  id="2-stars" name="rating" value="2" />
              <label htmlFor="2-stars" className="star">&#9733;</label>
              <input type="radio" onClick={() => {
                setStarVal(1)}} id="1-star" name="rating" value="1" />
              <label htmlFor="1-star" className="star">&#9733;</label>
            </div>
            <span id="rstar-value">{renderSwitch(starVal)}</span>

              <textarea property="comment" cols="30" rows="10" placeholder="Please tell us your reasons for giving this score here...">
              </textarea>

                <span className="rmodal-nickname">
                <label>What is your nickname* </label>
                  <input type="text" name="nickname" id="nickname"/>
                </span>
                <label>Your email*: </label>
                  <input type="text" name="email" id="email"/>
                <label>Upload your Photos: </label>
                  <input type="file" name="photo" id="upload" accept="image/png, image/jpeg"/>
            </form>
          </div>
      </Modal>
    </div>
  );
}

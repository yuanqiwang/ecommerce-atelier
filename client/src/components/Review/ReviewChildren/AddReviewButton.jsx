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
        <div id="rmodal-wrapper">
          <span id="rmodal-title">Write Your Review</span>
          <div id="rmodal-subtitle">About the {productName}</div>
          <form id="form" name="form" method="post" action="index.html">
            <div id="rmodal-stars">
              <div className="rmodal-question">Overall rating*</div>
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
              <div className="rmodal-question">
                Do you recommend this product*?
                <input type="radio" value="yes" name="review-radio"/>
                <label htmlFor="yes">yes👍</label>
                <input type="radio" value="no" name="review-radio"/>
                <label htmlFor="no">no👎</label>
              </div>
            </div>
            <div className="rmodal-characteristics">
              <div className="rmodal-question">Characteristics*</div>
                <span id="modal-charac-title">characteristic title</span><br/>
                <div id="checkboxes">
                  <div className="checkboxgroup">
                    <input type="radio" value="yes" name="characteristics-radio"/>
                    <label htmlFor="yes">1</label>
                  </div>
                  <div className="checkboxgroup">
                    <input type="radio" value="yes" name="characteristics-radio"/>
                    <label htmlFor="yes">2</label>
                  </div>
                  <div className="checkboxgroup">
                    <input type="radio" value="yes" name="characteristics-radio"/>
                    <label htmlFor="yes">3</label>
                  </div>
                  <div className="checkboxgroup">
                    <input type="radio" value="yes" name="characteristics-radio"/>
                    <label htmlFor="yes">4</label>
                  </div>
                  <div className="checkboxgroup">
                    <input type="radio" value="yes" name="characteristics-radio"/>
                    <label htmlFor="yes">5</label>
                  </div>
                </div>
                <table>
                  <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                  </tr>
                  <tr>
                    <td>meaning 1</td>
                    <td>meaning 2</td>
                    <td>meaning 3</td>
                    <td>meaning 4</td>
                    <td>meaning 5</td>
                  </tr>
                </table>
              </div>
            <div className="rmodal-summary">
              <div className="rmodal-question">Review Summary</div>
              <input type="text" placeholder="Example: Best purchase ever!" maxLength="60" size="70" />
            </div>
            <div className="rmodal-body">
              <div className="rmodal-question">Your Review*</div>
              <textarea property="comment" cols="50" rows="4" maxLength="1000" placeholder="Why did you like this product or not?">
              </textarea>
            </div>
            <div className="rmodal-nickname">
              <label className="rmodal-question">What is your nickname* </label>
              <input type="text" name="nickname" id="nickname"/>
            </div>
            <div className="rmodal-email">
              <label className="rmodal-question">Your email*: </label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="rmodal-nickname">
                <label className="rmodal-question">Upload your Photos: </label>
                <input type="file" name="photo" id="upload" accept="image/png, image/jpeg"/>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

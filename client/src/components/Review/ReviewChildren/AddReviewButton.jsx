import React, { useState } from "react";
import Modal from "./Modal.jsx";

export default function AddReviewButton( {productName}) {
  const [isOpen, setIsOpen] = useState(false);
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

              <textarea property="comment" cols="30" rows="10" placeholder="Please tell us your reasons for giving this score here...">
              </textarea>

                <span className="rmodal-nickname">
                <label>What is your nickname*: </label>
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
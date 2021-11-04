import test from './test-review.js'
import React from 'react'

const ReviewCard = (props) => {
  let starsFill = (props.rating / 5) * 100
  return (
    <div>

      <div className="review-card">
        <div className="star-rating">
          <div className="off"></div>
          <div className="on" style={{"width": `${starsFill}%`}}></div>
        </div>
        <div id="review-reviewer"> {props.reviewer}, {props.date}</div>
        <div id="review-title">{props.summary}</div>
        <div id="review-body">{props.body}</div>
        <div id="review-recommend">Recommend will be true or false{props.recommend}</div>
        <div id="review-response">{props.response}</div>
        <div id="review-helpful">Helpful? Yes({props.helpfulness})</div>
        <hr id="review-solid"></hr>
      </div>
    </div>
  )

}

export default ReviewCard
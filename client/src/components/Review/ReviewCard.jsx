import test from './test-review.js'
import React from 'react'

const ReviewCard = (props) => {
  console.log(props)
  let starsFill = (props.rating / 5) * 100

  console.log(starsFill)

  return (
    <div>
      <div className="star-rating">
          <div className="off"></div>
          <div className="on" style={{"width": `${starsFill}%`}}></div>
      </div>
      <div className="review-reviewer">{props.reviewer}</div>
      <div className="review-title">{props.summary}</div>
      <div className="review-body">{props.body}</div>
      <div className="review-recommend">Recommend will be true or false{props.recommend}</div>
      <div className="review-response">{props.response}</div>
      <div className="review-helpful">Helpful? Yes({props.helpfulness})</div>
      <hr class="review-solid"></hr>
    </div>
  )

}

export default ReviewCard
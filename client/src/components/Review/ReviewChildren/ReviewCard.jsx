import React from 'react'

const ReviewCard = (props) => {
  let starsFill = (props.rating / 5) * 100
  let photos = props.photos.map( (photo, index) =>
    <><img id="review-img" src={photo.url}></img></>
  )
  let rec = props.recommend === true ? <span>✅ I recommend this product</span> : <span>👎</span>
  const handleHelpful = () => {
  }

  return (
    <div>
      <div className="review-card">
        <div className="star-rating-card">
          <div className="off-card"></div>
          <div className="on-card" style={{"width": `${starsFill}%`}}></div>
        </div>
        <div id="review-reviewer"> ✓{props.reviewer}, {props.date}</div>
        <div id="review-title">{props.summary}</div>
        <div id="review-body">{props.body}</div>
        <div id="review-photo">{photos}</div>
        <div id="review-recommend">{rec}</div>
        <div id="review-response">{props.response}</div>
        <div id="review-helpful" >Helpful? <span id="helpful" onClick={handleHelpful}>Yes</span> ({props.helpfulness}) | <span>Report</span></div>
        <hr id="review-solid"></hr>
      </div>
    </div>
  )

}

export default ReviewCard
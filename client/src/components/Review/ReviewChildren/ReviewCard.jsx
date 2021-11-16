import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ReviewCard = (props) => {
  let id = props.reviewId
  let count = props.helpfulness
  const [helpfulStatus, setHelpfulStatus] = useState(() => {
    return localStorage.getItem(id) || false
  })
  const [reportStatus, setReportStatus] = useState(() => {
    return localStorage.getItem(id) || false
  })
  const [helpfulCount, setHelpfulCount] = useState(count)


  let starsFill = (props.rating / 5) * 100
  let photos = props.photos.map( (photo, index) =>
    <><img id="review-img" src={photo.url}></img></>
  )
  let rec = props.recommend === true ? <span>✅ I recommend this product</span> : <span>👎</span>


  const handleHelpful = () => {
    if (helpfulStatus) {
      console.log('helpful already clicked')
    } else {
      setHelpfulStatus(true)
      setHelpfulCount((prev) => prev + 1)
      localStorage.setItem(`helpful${id}`, JSON.stringify(helpfulStatus))
      axios.put(`/review/reviews/helpful`, {id: id} )
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  const handleReport = () => {
    if (reportStatus) {
      console.log('report already clicked')
    } else {
      setReportStatus(true)
      localStorage.setItem(`report${id}`, JSON.stringify(reportStatus))
      axios.put(`/review/reviews/report`, {id: id})
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }

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

        <div id="review-helpful" >Helpful? <span id="helpful" onClick={handleHelpful}>{helpfulStatus ?
           "✓ Thank you for your feedback!" : "Yes"}</span> ({helpfulCount}) |
           <span onClick={handleReport}>{reportStatus ?
           "✓ Flagged for internal review" : "Report"}</span>
        </div>

        <hr id="review-solid"></hr>
      </div>
    </div>
  )

}

export default ReviewCard
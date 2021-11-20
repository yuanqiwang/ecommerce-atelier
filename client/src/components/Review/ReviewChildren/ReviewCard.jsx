import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Star from '../../../star.jsx';


const ReviewCard = (props) => {
  let id = props.reviewId
  let count = props.helpfulness
  let searchTerm = props.searchTerm

  const [helpfulStatus, setHelpfulStatus] = useState(() => {
    return localStorage.getItem(`helpful`+id) || false
  })
  const [reportStatus, setReportStatus] = useState(() => {
    return localStorage.getItem(`report`+id) || false
  })
  const [helpfulCount, setHelpfulCount] = useState(count)
  const [reviewList, setReviewList] = useState([])
  const [activeSearch, setActiveSearch] = useState(false)


  useEffect(() => {
    setReviewList(searchTerm)
    reviewList.length >= 3 ? setActiveSearch(true) : setActiveSearch(false)
  }, [searchTerm]);

  let photos = props.photos.map( (photo, index) =>
    <><img id="review-img" src={photo.url}></img></>
  )
  let rec = props.recommend === true ? <span>✅&nbsp;&nbsp;&nbsp;&nbsp;I recommend this product</span> : <span>👎</span>


  const handleHelpful = () => {
    if (helpfulStatus) {
      console.log('helpful already clicked')
    } else {
      setHelpfulStatus(true)
      setHelpfulCount((prev) => prev + 1)
      localStorage.setItem(`helpful`+id, JSON.stringify(helpfulStatus))
      axios.put(`/review/reviews/helpful`, {id: id})
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  const handleReport = () => {
    if (reportStatus) {
      console.log('report already clicked')
    } else {
      setReportStatus(true)
      localStorage.setItem(`report`+id, JSON.stringify(reportStatus))
      axios.put(`/review/reviews/report`, {id: id})
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  if ( (reviewList.length >= 3 && ( JSON.stringify(props.body).toLowerCase()).indexOf(reviewList.toLowerCase()) > 0) || activeSearch === false) {
    return (
      <div className="review-card">


        <div id="reviewcard-topline">
          <div className="star-rating-card"><Star rating={props.rating}/></div>
          <div id="reviewcard-reviewer"> ✓{props.reviewer}, {props.date}</div>
        </div>

        <div id="reviewcard-summary">{props.summary.length === 0 ? props.prodName : props.summary}</div>
        <div id="reviewcard-body">{props.body}</div>
        <div id="reviewcard-photo">{photos}</div>
        <div id="reviewcard-recommend">{rec}</div>
        <div id="reviewcard-response">{props.response}</div>
        <div id="reviewcard-helpful" >Helpful?
          <span id="helpful" onClick={handleHelpful}>
            {helpfulStatus ?   "✓ Thank you for your feedback!" : "Yes"}</span> ({helpfulCount}) |
          <span onClick={handleReport}>
            {reportStatus ? "✓ Report internally reviewed" : "Report"}</span>
        </div>
      </div>
    )
} else {
  return (
    null
  )
}
}

export default ReviewCard
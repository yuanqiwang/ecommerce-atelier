import React from 'react'
import Star from '../../../star.jsx';


const Stars = (props) => {
  /*stars variables*/
  let nOfRatings = 0;
  let starsAvg = 0;
  let showNum = 0;
  let keys, values

  if (props['ratings'] !== undefined && props['ratings'][1]) {
    nOfRatings = Object.values(props['ratings']).reduce((a, b) => parseInt(a) + parseInt(b));
    keys = Object.keys(props['ratings'])
    values = Object.values(props['ratings'])
    let keyTimesValue = [];
    console.log(props['ratings'])
    for (var i=0; i<keys.length; i++) {
      keyTimesValue.push(keys[i] * values[i])
    }
    const reducer = (a, b) => a + b;
    starsAvg = keyTimesValue.reduce(reducer) / nOfRatings;
    showNum = starsAvg.toFixed(1)
  } else {
    return null
  }


  /*recommendation logic*/
  let falseRecs = 0;
  let trueRecs = 0;
  let percentage = 0;
  if (props.recommend !== undefined) {
    falseRecs = parseInt(props.recommend['false'])
    trueRecs = parseInt(props.recommend['true'])
    percentage = Math.round(((trueRecs / (trueRecs + falseRecs)) * 100))
  }
  console.log(nOfRatings)
  console.log(props['ratings'])
  return (
    <div>
      <div id="review-star-container">
        <div className="star-text">{showNum || null}&nbsp;</div>
        <div className="review-stars"> <Star rating={starsAvg}/></div>
      </div>

      <div id="review-rec">
        {percentage}% of reviews recommend this product<br />
      </div>

      <div className="bars-breakdown">
        <div id="breakdown">
          <label htmlFor="breakdown-rating">5 stars&nbsp;</label>
          <progress id="breakdown-rating" max="100" value={(props['ratings'][5]/nOfRatings)*100}></progress>
        </div>
        <div id="breakdown">
          <label htmlFor="breakdown-rating">4 stars&nbsp;</label>
          <progress id="breakdown-rating" max="100" value={(props['ratings'][4]/nOfRatings)*100}></progress>
        </div>
        <div id="breakdown">
          <label htmlFor="breakdown-rating">3 stars&nbsp;</label>
          <progress id="breakdown-rating" max="100" value={(props['ratings'][3]/nOfRatings)*100}></progress>
        </div>
        <div id="breakdown">
          <label htmlFor="file">2 stars&nbsp;</label>
          <progress id="breakdown-rating" max="100" value={(props['ratings'][2]/nOfRatings)*100}></progress>
        </div>
        <div id="breakdown">
          <label htmlFor="breakdown-rating">1 star&nbsp;</label>
          <progress id="breakdown-rating" max="100" value={(props['ratings'][1]/nOfRatings)*100}></progress>
        </div>
      </div>
    </div>
  )
}


export default Stars
import React from 'react'


const Stars = (props) => {
  /*stars logic*/
  let stars = 0;
  let nOfRatings = 0;
  let totalScore = 0;
  let starsAvg = 0;
  let starsFill = 0;
  let showNum = 0;
  if (props.ratings !== undefined) {

    nOfRatings = Object.values(props.ratings).reduce((a, b) => parseInt(a) + parseInt(b))

    let keys = Object.keys(props.ratings)
    let values = Object.values(props.ratings)
    let keyTimesValue = [];
    for (var i=0; i<keys.length; i++) {
      keyTimesValue.push(keys[i] * values[i])
    }
    const reducer = (a, b) => a + b;
    starsAvg = keyTimesValue.reduce(reducer) / nOfRatings;
    starsFill = (2/5) * 100
    showNum = starsAvg.toFixed(1)
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
  //console.log(props)
  return (
  /*this needs to be pulled from the API and then applied styling */
 <div>
   <span className="star-text">{showNum}</span>
   <div className="star-rating">
    <div className="off"></div>
    <div className="on" style={{"width": `${starsFill}%`}}></div>
   </div>

   <div>
   {percentage}% of reviews recommend this product<br />
    5 stars<br />
    4 stars<br />
    3 stars<br />
    2 stars<br />
    </div>
  </div>
  )
}


export default Stars
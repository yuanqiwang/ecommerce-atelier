import React from 'react'


const Stars = (props) => {
  /*stars variables*/
  let nOfRatings = 0;
  let starsAvg = 0;
  let starsFill = 0;
  let showNum = 0;
  let keys, values
  /*star bars variables*/
  let keyValArr = []
  let starBars;

  if (props.ratings !== undefined) {
    nOfRatings = Object.values(props.ratings).reduce((a, b) => parseInt(a) + parseInt(b))
    keys = Object.keys(props.ratings)
    values = Object.values(props.ratings)
    let keyTimesValue = [];
    for (var i=0; i<keys.length; i++) {
      keyTimesValue.push(keys[i] * values[i])
      keyValArr.push(keys[i])
      keyValArr.push(values[i])
    }
    const reducer = (a, b) => a + b;
    starsAvg = keyTimesValue.reduce(reducer) / nOfRatings;
    starsFill = (2.5/5) * 100
    showNum = starsAvg.toFixed(1)
    /*starbars logic*/
    starBars = keyValArr.map((item, index) =>
      index%2 === 0 ?
        index === 0 ?
      <div className="starbar-rating" key={index}>{item} star</div> :
      <div className="starbar-rating" key={index}>{item} stars</div>
      :
      <div className="bar-container">
        <div className="starbar-bar" key={index} style={{"width": `${(item / 5)*100}%` }}><br/></div>
      </div>

    )

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

  return (
    <div>
      <div className="star-text">{showNum} &nbsp;</div>
      <div className="star-rating">
        <span className="off"></span>
        <span className="on" style={{"width": `${starsFill}%`}}></span>
      </div>
      <div id="review-rec">
        {percentage}% of reviews recommend this product<br />
      </div>
      <div className="star-bars">
        {starBars}
      </div>

    </div>
  )
}


export default Stars
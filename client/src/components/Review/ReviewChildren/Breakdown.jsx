import React from 'react'
import Star from '../../../star.jsx';


class Breakdown extends React.Component {
  /*stars variables*/
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e) => {
    this.props.handleReviewCallback(e);
    event.preventDefault();
  }



  render() {


    let nOfRatings = 0;
    let starsAvg = 0;
    let showNum = 0;
    let keys, values
    if (this.props['ratings'] !== undefined && this.props['ratings'][1]) {
      nOfRatings = Object.values(this.props['ratings']).reduce((a, b) => parseInt(a) + parseInt(b));
      keys = Object.keys(this.props['ratings'])
      values = Object.values(this.props['ratings'])
      let keyTimesValue = [];
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
    if (this.props.recommend !== undefined) {
      falseRecs = parseInt(this.props.recommend['false'])
      trueRecs = parseInt(this.props.recommend['true'])
      percentage = Math.round(((trueRecs / (trueRecs + falseRecs)) * 100))
    }

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
          <div id="breakdown" onClick={() => this.handleChange(5)}>
            <label htmlFor="breakdown-rating" value="5">5 stars&nbsp;</label>
            <progress id="breakdown-rating" max="100" value={(this.props['ratings'][5]/nOfRatings)*100}></progress>
          </div>
          <div id="breakdown" onClick={() => this.handleChange(4)}>
            <label htmlFor="breakdown-rating">4 stars&nbsp;</label>
            <progress id="breakdown-rating" max="100" value={(this.props['ratings'][4]/nOfRatings)*100}></progress>
          </div>
          <div id="breakdown" onClick={() => this.handleChange(3)}>
            <label htmlFor="breakdown-rating">3 stars&nbsp;</label>
            <progress id="breakdown-rating" max="100" value={(this.props['ratings'][3]/nOfRatings)*100}></progress>
          </div>
          <div id="breakdown" onClick={() => this.handleChange(2)}>
            <label htmlFor="file">2 stars&nbsp;</label>
            <progress id="breakdown-rating" max="100" value={(this.props['ratings'][2]/nOfRatings)*100}></progress>
          </div>
          <div id="breakdown" onClick={() => this.handleChange(1)}>
            <label htmlFor="breakdown-rating" >1 star&nbsp;&nbsp;&nbsp;</label>
            <progress id="breakdown-rating" max="100" value={(this.props['ratings'][1]/nOfRatings)*100}></progress>
          </div>
        </div>
      </div>
    )
  }
}


export default Breakdown
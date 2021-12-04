import React from 'react'
import Star from '../../../star.jsx';

class Breakdown extends React.Component {
  /*stars variables*/
  constructor(props) {
    super(props)
    this.state = {
      five: false,
      four: false,
      three: false,
      two: false,
      one: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange = (e) => {
    this.props.handleReviewCallback(e);
  }

  handleClick = (e) => {
    this.setState(prevState => ({
      [e]: !prevState[e]
    }))
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
      <div id="review-breakdowns">
        <div id="review-star-container">
          <div className="star-text">{showNum || null}</div>
          <div className="review-stars"> <Star rating={starsAvg}/></div>
        </div>

        <div id="review-rec">
          {percentage}% of reviews recommend this product<br />
        </div>

        <div className="bars-breakdown">
          <div id="breakdown5">
            <div onClick={() => {this.handleClick("five"), this.handleChange(5)}} id="breakdown-rating">{(this.state.five === true) ? <div style={{fontWeight: 900}}>5 stars</div>: <div>5 stars</div>}</div>
            <div id="breakdown-bar">
              <div style={{ 'width': (this.props['ratings'][5]/nOfRatings)*100 + '%'  }}></div>
            </div>
            <span id="ratings-count">&nbsp;{this.props['ratings'][5]}</span>
          </div>
          <div id="breakdown4">
            <div onClick={() => { this.handleClick("four"), this.handleChange(4)}} id="breakdown-rating">{(this.state.four === true) ? <div style={{fontWeight: 900}}>4 stars</div>: <div>4 stars</div>}</div>
            <div id="breakdown-bar">
              <div style={{ 'width': (this.props['ratings'][4]/nOfRatings)*100 + '%'  }}></div>
            </div>
            <span id="ratings-count">&nbsp;{this.props['ratings'][4]}</span>
          </div>
          <div id="breakdown3">
            <div onClick={() => {this.handleClick("three"), this.handleChange(3)}} id="breakdown-rating">{(this.state.three === true) ? <div style={{fontWeight: 900}}>3 stars</div>: <div>3 stars</div>}</div>
            <div id="breakdown-bar">
              <div style={{ 'width': (this.props['ratings'][3]/nOfRatings)*100 + '%'  }}></div>
            </div>
            <span id="ratings-count">&nbsp;{this.props['ratings'][3]}</span>
          </div>
          <div id="breakdown2">
            <div onClick={() => {this.handleClick("two"), this.handleChange(2)}} id="breakdown-rating">{(this.state.two === true) ? <div style={{fontWeight: 900}}>2 stars</div>: <div>2 stars</div>}</div>
            <div id="breakdown-bar">
              <div style={{ 'width': (this.props['ratings'][2]/nOfRatings)*100 + '%'  }}></div>
            </div>
          </div>
          <span id="ratings-count">&nbsp;{this.props['ratings'][2]}</span>
          <div id="breakdown1">
            <div onClick={() => {this.handleClick("one"), this.handleChange(1)}} id="breakdown-rating" >{(this.state.one === true) ? <div style={{fontWeight: 900}}>1&nbsp;&nbsp;&nbsp;star</div>: <div>1&nbsp;&nbsp;&nbsp;star</div>}</div>
            <div id="breakdown-bar">
              <div style={{ 'width': (this.props['ratings'][1]/nOfRatings)*100 + '%'  }}></div>
            </div>
            <span id="ratings-count">&nbsp;{this.props['ratings'][1]}</span>
          </div>
        </div>
      </div>
    )
  }
}


export default Breakdown
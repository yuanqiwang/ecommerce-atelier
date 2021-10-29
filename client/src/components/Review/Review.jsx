import React from 'react'
import Stars from './Stars.jsx'
import Characteristics from './Characteristics.jsx'
import UserReviews from './UserReviews.jsx'
import Buttons from './Buttons.jsx'


class Review extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    //console.log(this.props)
    return (
      <>
      <h2> Part 4 : This will be Ratings & Reviews section</h2>
      <div className="review-grid">
       <div id="left-column">
         <h3>Reviews & Ratings</h3>
         <Stars
          ratings={this.props.stars['ratings']}
          recommend={this.props.stars['recommended']}
         />
         <Characteristics
           characteristics={this.props.stars['characteristics']}
         />
       </div>
       <div id="right-column">
         <UserReviews
          reviews={this.props['reviews']}
         />
         <Buttons />
       </div>
      </div>
      </>
    )
  }

}

export default Review;
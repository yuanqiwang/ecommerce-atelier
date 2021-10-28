import React from 'react'
import Stars from './Stars.jsx'
import Sliders from './Sliders.jsx'
import UserReviews from './UserReviews.jsx'
import Buttons from './Buttons.jsx'


class Review extends React.Component {

  render() {
    return (
      <>
      <h2> Part 4 : This will be Ratings & Reviews section</h2>
      <div className="review-grid">
       <div id="left-column">
         <h3>Reviews & Ratings</h3>
         <Stars />
         <Sliders />
       </div>
       <div id="right-column">
         # reviews, sorted by ....
         <UserReviews />
         <Buttons />
       </div>
      </div>
      </>
    )
  }

}

export default Review;
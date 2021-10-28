import React from 'react'
import Stars from './Stars.jsx'
import Characteristics from './Characteristics.jsx'
import UserReviews from './UserReviews.jsx'
import Buttons from './Buttons.jsx'


class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      stars: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.stars !== prevProps.stars) {
      //console.log(this.props.stars['ratings'])
      this.setState({ stars: this.props.stars })
    }

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
          ratings={this.state.stars['ratings']}
          recommend={this.state.stars['recommended']}
         />
         <Characteristics />
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
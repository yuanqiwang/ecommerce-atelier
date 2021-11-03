import React from 'react'
import Stars from './Stars.jsx'
import Characteristics from './Characteristics.jsx'
import UserReviews from './UserReviews.jsx'
import SortReview from './SortReview.jsx'
import MoreReviewButton from './MoreReviewButton.jsx'
import AddReviewButton from './AddReviewButton.jsx'


class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: 'relevance',
      reviewCount: 2
    }
  }

  handleCallback = (childData) => {
    this.setState({dropdown: childData})
    this.setState({reviewCount: 2})
  }

  addCountCallback = (childData) => {
    this.setState({reviewCount: this.state.reviewCount + 2})
  }




  render() {
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
        <SortReview
          nReviews={this.props['reviews'].length}
          dropdownCallback={this.handleCallback}
        />
         <UserReviews
          reviews={this.props['reviews']}
          dropdown={this.state.dropdown}
          count={this.state.reviewCount}
         />
         <MoreReviewButton
           addCountCallback={this.addCountCallback}
           nReviews={this.props['reviews'].length}
           reviewCount={this.state.reviewCount}
         />
         <AddReviewButton />
       </div>
      </div>
      </>
    )
  }

}

export default Review;
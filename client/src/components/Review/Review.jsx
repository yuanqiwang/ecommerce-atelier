import React from 'react'
import Stars from './Stars.jsx'
import Breakdown from './Breakdown.jsx'
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
    if (this.props.reviews !== undefined) {
      return (
        <>
        <div className="review-grid">
          <div id="review-title">
          <h3>Reviews & Ratings</h3>
            <div id="left-column">
              <Stars
                ratings={this.props.stars['ratings']}
                recommend={this.props.stars['recommended']}
              />
                <Breakdown

              />
              <Characteristics
                characteristics={this.props.stars['characteristics']}
              />
              </div>
          </div>
          <div id="right-column">
          <div id="review-title">
            <h3> </h3>
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
        </div>
        </>
      )
    }
  }
}

export default Review;
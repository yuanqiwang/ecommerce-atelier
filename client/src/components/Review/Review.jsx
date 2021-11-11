import React from 'react'
import Stars from './ReviewChildren/Stars.jsx'
import Breakdown from './ReviewChildren/Breakdown.jsx'
import Characteristics from './ReviewChildren/Characteristics.jsx'
import UserReviews from './ReviewChildren/UserReviews.jsx'
import SortReview from './ReviewChildren/SortReview.jsx'
import MoreReviewButton from './ReviewChildren/MoreReviewButton.jsx'
import AddReviewButton from './ReviewChildren/AddReviewButton.jsx'


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
  }

  addCountCallback = (childData) => {
    this.setState({reviewCount: this.state.reviewCount + 2})
  }

  render() {
    //console.log(this.props.stars['product_id'])
    if (this.props.reviews !== undefined) {
      return (
        <>
        <div className="review-grid">
          <div id="review-container-left">
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

            </div>
            <MoreReviewButton
              addCountCallback={this.addCountCallback}
              nReviews={this.props['reviews'].length}
              reviewCount={this.state.reviewCount}
              />
            <AddReviewButton
              productName={this.props.productInfo['name'] || null}
              productId={this.props.stars['product_id']}
              reviews={this.props.stars['characteristics'] !== undefined ? this.props.stars['characteristics'] : null}
            />
          </div>
        </div>
        </>
      )
    }
  }
}

export default Review;
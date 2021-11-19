import React from 'react'
import Breakdown from './ReviewChildren/Breakdown.jsx'
import Characteristics from './ReviewChildren/Characteristics.jsx'
import UserReviews from './ReviewChildren/UserReviews.jsx'
import SortReview from './ReviewChildren/SortReview.jsx'
import MoreReviewButton from './ReviewChildren/MoreReviewButton.jsx'
import AddReviewButton from './ReviewChildren/AddReviewButton.jsx'
import Search from '../../search.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: 'relevance',
      reviewCount: 2,
      review5: false,
      review4: false,
      review3: false,
      review2: false,
      review1: false,
      element: 0,
      searchTerm: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleCallback = (childData) => {
    this.setState({dropdown: childData})
  }

  addCountCallback = (childData) => {
    this.setState({reviewCount: this.state.reviewCount + 2})
  }

  handleReviewCallback = (childData) => {
    let review = 'review' + childData
    this.setState(prevState => ({
      [review]: !prevState[review],
      element: childData
    }))
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const placeholder = 'SEARCH FOR A REVIEW'
    if (this.props.reviews !== undefined) {
      return (
        <>
        <div className="Review">
          <Search onChange={this.handleSearch} placeholder={placeholder}/>

        <div className="review-grid" onClick={this.props.trackClick}>
          <div id="review-container-left">
          <h3>Reviews & Ratings</h3>
            <div id="left-column" data-testid="related-render">
              <Breakdown
                ratings={this.props.stars['ratings']}
                recommend={this.props.stars['recommended']}
                handleReviewCallback={this.handleReviewCallback}
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
                productId={this.props.stars['product_id']}
                review1={this.state.review1}
                review2={this.state.review2}
                review3={this.state.review3}
                review4={this.state.review4}
                review5={this.state.review5}
                element={this.state.element}
                searchTerm={this.state.searchTerm}
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
        </div>
        </>
      )
    }
  }
}

export default Review;
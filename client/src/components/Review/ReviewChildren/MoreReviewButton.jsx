import React from 'react'


class MoreReviewButton extends React.Component {
  constructor(props) {
    super(props)

    this.addCount = this.addCount.bind(this)
  }

  addCount = (event) => {
    this.props.addCountCallback(2);
    event.preventDefault();
  }
  render() {
    if (this.props.nReviews > this.props.reviewCount) {
      return (
        <div data-testid="child-button">
          <button
            id="review-button"
            onClick={this.addCount}
          >
            MORE REVIEWS
          </button>
        </div>
      )
    }
      return (
        null
      )
  }
}



export default MoreReviewButton
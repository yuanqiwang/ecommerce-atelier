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
    return (
      <div>
      <button onClick={this.addCount}>MORE REVIEWS</button>
      <button>ADD A REVIEW +</button>
      </div>
    )
  }
}



export default MoreReviewButton
import React from 'react'

class SortReview extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.props.dropdownCallback(event.target.value);
    this.setState({clicked: false})
    event.preventDefault();
  }
  render() {
 if (this.props.nReviews > 0) {
  return (
      <div id="review-sort">
        {this.props.nReviews} reviews, sorted by &nbsp;
      <select id="review-dropdown" onChange={this.handleChange}>
        <option value="relevance">relevance</option>
        <option value="helpfulness">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      </div>
  )
 }
 return (
   null
 )
  }
}


export default SortReview
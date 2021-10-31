import React from 'react'

class SortReview extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    //console.log(event.target.value)
    this.props.dropdownCallback(event.target.value);
    event.preventDefault();
  }
  render() {
 if (this.props.nReviews > 0) {
  return (
      <div>
        {this.props.nReviews} reviews, sort by &nbsp;
      <select onChange={this.handleChange}>
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
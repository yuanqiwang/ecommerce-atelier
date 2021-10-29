import React from 'react'

const SortReview = (props) => {

 if (props.amount > 0) {
  return (
      <div>
        {props.amount} reviews, sort by &nbsp;
      <select>
        <option>relevance</option>
        <option>helpfulness</option>
        <option>newest</option>
      </select>
      </div>
  )
 }
 return (
   null
 )
}


export default SortReview
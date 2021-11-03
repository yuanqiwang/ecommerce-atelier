import React from 'react'
import test from './test-review.js'
import ReviewCard from './ReviewCard.jsx'


const UserReviews = (props) => {
  let count = props.count
  let reviews = props.reviews
  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  console.log(props.reviews)
  if (props.reviews.length > 0) {
    if (props.dropdown === 'relevance') {
      const relevance = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness && a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        let date = new Date(item.date).toLocaleDateString("en-US", options)
        return (

          <>
            <ReviewCard
              index={i}
              date={date}
              rating={item.rating}
              summary={item.summary}
              recommend={item.recommend}
              response={item.response}
              body={item.body}
              reviewer={item.reviewer_name}
              helpfulness={item.helpfulness}
              photos={item.photos}
            />
          </>
        )
      })
      return (
        <div>{relevance.slice(0, count)}</div>
      )
    }
    if (props.dropdown === 'helpfulness') {
      const helpful = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness ? 1 : -1)
      .map( (item, i) => {
      return  (
        <>
          <ReviewCard
            index={i}
            date={date}
            rating={item.rating}
            summary={item.summary}
            recommend={item.recommend}
            response={item.response}
            body={item.body}
            reviewer={item.reviewer_name}
            helpfulness={item.helpfulness}
            photos={item.photos}
          />
        </>
      )
    })
    return (
      <div>{helpful.slice(0, count)}</div>
    )
    }
    if (props.dropdown === 'newest') {
      const recent = [].concat(reviews)
      .sort((a, b) => a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        return  (
          <>
            <ReviewCard
              index={i}
              date={date}
              rating={item.rating}
              summary={item.summary}
              recommend={item.recommend}
              response={item.response}
              body={item.body}
              reviewer={item.reviewer_name}
              helpfulness={item.helpfulness}
              photos={item.photos}
            />
          </>
        )
      })
    return (
      <div>{recent.slice(0, count)}</div>
    )
   }


  }
  return (
    null
  )
}

export default UserReviews
import React from 'react'
import ReviewCard from './ReviewCard.jsx'


const FilterReviews = (props) => {
  let count = props.count
  let reviews = props.reviews
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let filter = []
  for (var i=5; i>0; i--) {
    if (props['review' + i ] === true) {
      filter.push(i)
    } else if (props['review' + i] === false) {
      let index = filter.indexOf(i)
      if (index > -1) {
        filter.splice(index, 1)
      }
    }
  }

  if (props.reviews.length > 0) {
    if (props.dropdown === 'relevance') {
      const relevance = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness && a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        let date = new Date(item.date).toLocaleDateString("en-US", options)
        if (filter.includes(item.rating) || filter.length === 0 || filter[0] === undefined) {
          return (
            <div id="review-card-container" key={i}>
              <ReviewCard
                prodName={props.productName}
                searchTerm={props.searchTerm}
                reviewId={item.review_id}
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
            </div>
          )
        } else {
          return null
        }
      })
      return (
        <>{relevance.slice(0, count)}</>
      )
    }
    if (props.dropdown === 'helpfulness') {
      const helpful = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness ? 1 : -1)
      .map( (item, i) => {
        let date = new Date(item.date).toLocaleDateString("en-US", options)

      if (filter.includes(item.rating) || filter.length === 0 || filter[0] === undefined) {

        return  (
          <div id="review-card-container" key={i}>
            <ReviewCard
              prodName={props.productName}
              searchTerm={props.searchTerm}
              reviewId={item.review_id}
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
          </div>
        )
      } else {
        return null
      }
    })
    console.log(helpful)
    return (
      <>{helpful.slice(0, count)}</>
    )
    }
    if (props.dropdown === 'newest') {
      const recent = [].concat(reviews)
      .sort((a, b) => a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        let date = new Date(item.date).toLocaleDateString("en-US", options)
        if (filter.includes(item.rating) || filter.length === 0 || filter[0] === undefined) {
          return  (
            <div id="review-card-container" key={i}>
              <ReviewCard
                prodName={props.productName}
                searchTerm={props.searchTerm}
                reviewId={item.review_id}
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
            </div>
          )
        } else {
          return null
        }
      })
    return (
      <>{recent.slice(0, count)}</>
    )
   }


  }
  return (
    null
  )
}

export default FilterReviews
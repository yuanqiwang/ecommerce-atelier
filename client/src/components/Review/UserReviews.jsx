import React from 'react'
import test from './test-review.js'
import ReviewCard from './ReviewCard.jsx'

const UserReviews = (props) => {
  let reviews = props.reviews
  if (props.reviews.length > 0) {
    if (props.dropdown === 'relevance') {
      const relevance = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness && a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        return (
          <>
          <ReviewCard
            rating={item.rating}
            summary={item.summary}
            recommend={item.recommend}
            response={item.response}
            body={item.body}
            date={item.date}
            reviewer={item.reviewer_name}
            helpfulness={item.helpfulness}
            photos={item.photos}
          />
          </>
        )
      })
      return (
        <div>{relevance}</div>
      )
    }

    if (props.dropdown === 'helpfulness') {
      const helpful = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness ? 1 : -1)
      .map( (item, i) => {
      return  (
        <>
        <ReviewCard
            rating={item.rating}
            summary={item.summary}
            recommend={item.recommend}
            response={item.response}
            body={item.body}
            date={item.date}
            reviewer={item.reviewer_name}
            helpfulness={item.helpfulness}
            photos={item.photos}
          />
        </>
      )
    })
    return (
      <div>{helpful}</div>
    )
    }

    if (props.dropdown === 'newest') {
      const recent = [].concat(reviews)
      .sort((a, b) => a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        return  (
          <>
          <ReviewCard
            rating={item.rating}
            summary={item.summary}
            recommend={item.recommend}
            response={item.response}
            body={item.body}
            date={item.date}
            reviewer={item.reviewer_name}
            helpfulness={item.helpfulness}
            photos={item.photos}
          />
          </>
        )
      })
    return (
      <div>{recent}</div>
    )
    }


  }
  return (
    null
  )
}
/*
{
            "review_id": 1029620,
            "rating": 3,
            "summary": "Consequuntur unde quod velit vel.",
            "recommend": true,
            "response": "\"Ut maiores explicabo accusamus dicta.\"",
            "body": "Quisquam dicta vel. Quia nostrum suscipit provident voluptas illo tempora saepe enim. Aut distinctio ut aliquam distinctio quis consequatur maiores in. Nemo sint nobis dicta blanditiis sed et. Ut et enim non recusandae a est.",
            "date": "2021-04-09T00:00:00.000Z",
            "reviewer_name": "Clinton93",
            "helpfulness": 29,
            "photos": [
                {
                    "id": 1959391,
                    "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                }
            ]
        }
*/

export default UserReviews
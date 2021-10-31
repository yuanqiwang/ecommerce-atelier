import React from 'react'
import test from './test-review.js'




const UserReviews = (props) => {

  let reviews = props.reviews

  //test sorting by relevance
  const relevance = [].concat(reviews)
    .sort((a, b) => a.date < b.date && a.helpfulness < b.helpfulness ? 1 : -1)
    .map( (item, i) => {
      return <div key={i}>{item.date} + {item.helpfulness}</div>
    })


  //test sorting by date
  const recent = [].concat(reviews)
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .map( (item, i) => {
      return <div key={i}>{item.date}</div>
    })


  //test sorting by helpfulness
  const helpful = [].concat(reviews)
    .sort((a, b) => a.helpfulness < b.helpfulness ? 1 : -1)
    .map( (item, i) => {
      return <div key={i}>{item.helpfulness}</div>
    })

  if (props.reviews.length > 0) {

    if (props.dropdown === 'relevance') {
      const relevance = [].concat(reviews)
      .sort((a, b) => a.helpfulness < b.helpfulness && a.date < b.date ? 1 : -1)
      .map( (item, i) => {
        return (
          <>
          <div key={i}>{item.date}</div>
          <div>{item.summary}</div>
          <div>{item.body}</div>
          <div>-------------</div>
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
        <div key={i}>{item.date}</div>
        <div>{item.summary}</div>
        <div>{item.body}</div>
        <div>-------------</div>
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
          <div key={i}>{item.date}</div>
          <div>{item.summary}</div>
          <div>{item.body}</div>
          <div>-------------</div>
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
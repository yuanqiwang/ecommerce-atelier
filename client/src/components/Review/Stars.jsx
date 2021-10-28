import React from 'react'


const Stars = (props) => {

  /*recommendation*/
  let falseRecs = 0;
  let trueRecs = 0;
  let percentage = 0;
  if (props.recommend !== undefined) {
    falseRecs = parseInt(props.recommend['false'])
    trueRecs = parseInt(props.recommend['true'])
    percentage = Math.round(((trueRecs / (trueRecs + falseRecs)) * 100))
  }
  return (
  /*this needs to be pulled from the API and then applied styling */
 <div>
   <h3>3 STARS ***</h3>
   {percentage}% of reviews recommend this product<br />
    5 stars<br />
    4 stars<br />
    3 stars<br />
    2 stars<br />
  </div>
  )
}
/* may need props not sure yet
Stars.propTypes = {

};
*/

export default Stars
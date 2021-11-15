import React, {useState, useEffect} from 'react';

// you can use this component by either passing in a Rating (directly)  or pass the rating Obj from API
const Star = ({rating, stars}) => {

  const[numRating, setnumRating] = useState();

  const avgReview = (reviewObj) => {
    let reviewNum=0;
    let ratingSum=0;

    if(reviewObj) {
      let keys = Object.keys(reviewObj);
      let values = Object.values(reviewObj);

        for (var i=0; i<keys.length; i++) {
          reviewNum += parseInt(values[i]);
          ratingSum += parseInt(keys[i])*parseInt(values[i]);
        }
    }
    return reviewNum > 0?  (ratingSum/reviewNum).toFixed(1) : 0
  };

  const calcRating =  () => {
    if(stars) {
      const avgReviewnum = avgReview(stars.ratings);
      setnumRating(avgReviewnum)
    }
    if(rating) {
      setnumRating(rating)
    }
  }


  useEffect(()=>{
    calcRating();
  }, [stars])

  return(
    <div>
      {
          numRating > 0?
          <div className ='star' style = {{'--rating': numRating}}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
          </div>
          : null
        }
    </div>
  )
}



export default Star;

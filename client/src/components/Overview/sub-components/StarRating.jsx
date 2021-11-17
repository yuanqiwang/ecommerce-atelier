import React from 'react';

function StarRating(props) {
  const scrollToReviews = () => {
    let reviewsSection = document.querySelector('.review-grid');
    reviewsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

  let avgRating = 0;

  if ( props.stars.ratings !== undefined ) {
    let total = 0;

    for ( let rating of Object.keys(props.stars.ratings) ) {
      // console.log(rating, props.stars.ratings[rating]);
      total += parseInt(props.stars.ratings[rating])
      avgRating += rating * parseInt(props.stars.ratings[rating]);
    }

    avgRating /= total;
  }

  return (
    <div id="overview_star_rating" data-testid="star-rating">
      <div className="overview_stars" style={{'--rating': avgRating}}></div>
      <div className='go-to-reviews' onClick={scrollToReviews}>Read all reviews</div>
    </div>
  );
};

export default StarRating;
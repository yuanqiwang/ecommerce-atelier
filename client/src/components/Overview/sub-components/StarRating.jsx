import React from 'react';
import Star from '../../../star.jsx';

function StarRating(props) {
  const scrollToReviews = () => {
    let reviewsSection = document.querySelector('.review-grid');
    reviewsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

  // console.log('star props: ', props.stars);

  // let avgRating = 0;

  // if ( props.stars.ratings !== undefined ) {
  //   let total = 0;

  //   for ( let rating of Object.keys(props.stars.ratings) ) {
  //     // console.log(rating, props.stars.ratings[rating]);
  //     total += parseInt(props.stars.ratings[rating])
  //     avgRating += rating * parseInt(props.stars.ratings[rating]);
  //   }

  //   avgRating /= total;
  // }

  // console.log('avg: ', avgRating);

  return (
    <div id="overview_star_rating" data-testid="star-rating">
      {/* <div className="overview_stars" style={{'--rating': avgRating}}></div> */}
      <Star stars={props.stars} />
      <div className='go-to-reviews' onClick={scrollToReviews}>Read all reviews</div>
    </div>
  );
};

export default StarRating;
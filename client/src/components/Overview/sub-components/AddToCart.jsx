import React from 'react';

function AddToCart(props) {
  const addToOutfit = () => {
    let favStar = document.querySelector('#overview_favorite');

    if ( favStar.classList.contains('selected') ) {
      favStar.classList.remove('selected');
      props.removeOutfit(props.productID);
    } else {
      favStar.classList.add('selected');
      props.addOutfit();
    }
  }

  let starBtn = <div id="overview_favorite" onClick={addToOutfit}><i className="fa fa-star" aria="hidden"></i></div>;

  if (Object.keys(JSON.parse(window.localStorage.AtelierOutfits)).includes(String(props.productID))) {
    starBtn = <div  id="overview_favorite" className="selected" onClick={addToOutfit}><i className="fa fa-star" aria="hidden"></i></div>;
  }

  return (
    <div id="overview_add_cart" data-testid="add-to-cart">
      <button>Add to Bag<span>+</span></button>
      {starBtn}
    </div>
  );
}

export default AddToCart;
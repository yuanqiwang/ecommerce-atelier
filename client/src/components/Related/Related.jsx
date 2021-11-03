import React from 'react';
import RP_sub from './related_components/RP-sub.jsx';
import YO from './related_components/YO.jsx';

class Related extends React.Component {

  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }



  handleNav = (direction) => {
    if(direction === 'left'){
      // console.log(this.navRef.current.style)
      this.navRef.current.scrollLeft -= 280;
    } else {
      // console.log(this.navRef.current)
      this.navRef.current.scrollLeft += 280;
    }
  };

  render(){
    return (
      <div id='related'>
        <br/>
        <h2> Part 2 : This will be Related Products section</h2>
        <div id='related-rp'>
          <div id='title'>RELATED PRODUCTS</div>
          <div id ='wrapper'>
            <section className = 'rp-cardrow' ref={this.navRef}>
              {this.props.relatedProductArr.map((item, i) => <RP_sub key={i} item ={item} mainInfo = {this.props.productInfo} mainStyle ={this.props.productStyle}/> )}
              <div class="paddles">
                <button class="left-paddle paddle hidden" onClick={()=>this.handleNav('left')}> {'<'} </button>
                <button class="right-paddle paddle" onClick={()=>this.handleNav('right')}> {'>'} </button>
              </div>
            </section>
          </div>
        </div>
        <YO />
        <br/>
      </div>
      );
  }
}

export default Related;


// two sets of product cards
// 1:  a list of products, determined internally... are related to the product currently being viewed
// api: /products/:product_id/related
// 2:  a list custom created by the user.. grouped with the current product into an "outfit"

// each of the card is clickable... clicking the card will navigate to the detail page for that product
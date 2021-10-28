import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import Review from './components/Review/Review.jsx'
import Related from './components/Related/Related.jsx'
import QA from './components/QA/QA.jsx'

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 60221,
      relatedProductArr: [],
      reviews: [],
      reviewStars: []
    }
  }


  componentDidMount(){
    axios
      .get(`/product/info/${this.state.productId}`)
      .then((result) => {
        //console.log(result.data)
        this.setState({
          relatedProductArr: result.data['related'],
          reviews: result.data['review']['results'],
          reviewStars: result.data['reviewStars']
        })
      })
  }


  render () {
    return (<div>
      <div id="header">
        <h1>Logo</h1>
        <div id="search"></div>
      </div>
      <Overview />
      <Related relatedProductArr={this.state.relatedProductArr}/>
      <QA productID={this.state.productId}/>
      <Review
        productID={this.state.productId}
        reviews={this.state.reviews}
        stars={this.state.reviewStars}
      />
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
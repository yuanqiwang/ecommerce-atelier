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
      productInfo: {},
      productStyle: [],
      relatedProductArr: [],
      questions: [],
      reviews: [],
      stars: {}
    }
  }

  componentDidMount() {
    axios
      .get(`/product/info/${this.state.productId}`)
      .then((result) => {
        this.setState({
          relatedProductArr: result.data['related'],
          questions: result.data['questions'],
          reviews: result.data['review']['results'],
          stars: result.data['reviewStars'],
          productStyle: result.data['style']['results'],
          productInfo: result.data['prod']
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
      <Related
        relatedProductArr={this.state.relatedProductArr}
        productID={this.state.productId}
        productInfo={this.state.productInfo}
        productStyle={this.state.productStyle} />
      <QA
        productId={this.state.productId}
        productInfo={this.state.productInfo}
        questions={this.state.questions}/>
      <Review
        productID={this.state.productId}
        reviews={this.state.reviews}
        stars={this.state.stars}
      />
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
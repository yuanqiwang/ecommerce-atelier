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
      relatedProductArr: []
    }
  }


  componentDidMount(){
    axios
      .get(`/product/info/${this.state.productId}`)
      .then((result) => {
        console.log(result.data['related']);
        this.setState({
          relatedProductArr: result.data['related']
        })
      })
  }


  render () {
    return (<div>
      <Overview />
      <Related relatedProductArr={this.state.relatedProductArr}/>
      <QA />
      <Review />
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
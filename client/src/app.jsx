import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import Review from './components/Review/Review.jsx'
import Related from './components/Related/Related.jsx'
import QA from './components/QA/QA.jsx'


let productID = '59553';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (<div>
      <Overview />
      <Related />
      <QA productID={productID}/>
      <Review />
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import Review from './components/Review/Review.jsx'
import Related from './components/Related/Related.jsx'
import QA from './components/QA/QA.jsx'




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
      <QA />
      <Review />
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AskAQuestion from './AskAQuestion.jsx';
import axios from 'axios';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.handleAskAQuestion = this.handleAskAQuestion.bind(this);
    this.state={
      questions: []
    }
  }

  handleAskAQuestion(){
    console.log('clicked ask as question')
  }

  handleMoreQuestions(){
    console.log('clicked handleMoreQuestions')
  }

  componentDidMount() {
    axios.get(`/qa/${this.props.productID}`)//{params: {productID: this.props.productID}}
      .then(({data})=> {
        console.log(data.results)
        this.setState({questions: data.results})
      })

  }


  render() {
    return (
      <div className='QA'>
        <h5>QUESTIONS & ANSWERS</h5>
        <SearchQuestions/>
        <QuestionsList questions={this.state.questions}/>
        <div>
          <MoreQuestions handleMoreQuestions={this.handleMoreQuestions.bind(this)}/>
          <AskAQuestion handleAskAQuestion={this.handleAskAQuestion}/>
        </div>
    </div>
    )
  }

}

export default QA;
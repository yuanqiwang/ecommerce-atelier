import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AskAQuestion from './AskAQuestion.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.handleAskAQuestion = this.handleAskAQuestion.bind(this)
  }

  handleAskAQuestion(){
    console.log('clicked ask as question')
  }

  handleMoreQuestions(){
    console.log('clicked handleMoreQuestions')
  }


  render() {
    return (
      <div className='QA'>
        <h5>QUESTIONS & ANSWERS</h5>
        <SearchQuestions/>
        <QuestionsList/>
        <div>
          <MoreQuestions handleMoreQuestions={this.handleMoreQuestions.bind(this)}/>
          <AskAQuestion handleAskAQuestion={this.handleAskAQuestion}/>
        </div>
    </div>
    )
  }

}

export default QA;
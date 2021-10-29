import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
// import MoreQuestions from './MoreQuestions.jsx';
// import AskAQuestion from './AskAQuestion.jsx';
import axios from 'axios';

class QA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      moreQuestionVisible: true
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.moreQuestions = this.moreQuestions.bind(this);

  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('clicked')
    this.setState({show: false},()=>{
      console.log(this.state.show)
    });
  };


  render() {
    return (
      <div className='QA'>

        <h5>QUESTIONS & ANSWERS</h5>
        <SearchQuestions/>
        <QuestionsList
            questions={this.props.questions}
          />
        {/* <div >
          {this.state.moreQuestionVisible ?
            <div className='more-question'>
                MORE ANSWERED QUESTIONS
            </div>
            : null}

          <div className='more-question' onClick={this.showModal}>
            ASK A QUESTION +
            <AskAQuestion show={this.state.show} handleClose={this.hideModal} />
          </div>
        </div> */}

    </div>
    )
  }

}

export default QA;
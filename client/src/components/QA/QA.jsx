import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
// import MoreQuestions from './MoreQuestions.jsx';
// import AskAQuestion from './AskAQuestion.jsx';
import axios from 'axios';

class QA extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      questions: []
    }

  }



  componentDidMount() {
    axios.get(`/qa/${this.props.productID}`)//{params: {productID: this.props.productID}}
      .then(({data})=> {
        this.setState({questions: data})
      })
      .catch(
        console.log('why is error display?')
      )

  }


  render() {
    return (
      <div className='QA'>
        <h5>QUESTIONS & ANSWERS</h5>
        <SearchQuestions/>
        <QuestionsList
            questions={this.state.questions}
          />
    </div>
    )
  }

}

export default QA;
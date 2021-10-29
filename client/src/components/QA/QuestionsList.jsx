import React, {useState, useEffect} from 'react'
import Question from './Question.jsx'
import AskAQuestion from './AskAQuestion.jsx'
const QuestionsList = ({questions}) => {

  const [questionDisplayCount, setQuestionDisplayCount] = useState(2);
  const [moreQuestionVisible, setMoreQuestionVisible] = useState(false);
  const [askQuestionModal, setAskQuestionModal] = useState(false);

  useEffect(() => {
    // console.log('initial render and when questions is updated ')
    if (questions.length > 0) {
      setMoreQuestionVisible(true)
    }
  },[questions])

  useEffect(() => {
    // console.log('initial and rerender on display count')
    if (questionDisplayCount>=questions.length) {
      setMoreQuestionVisible(false)
    }
  },[questionDisplayCount]
  )

  const showModal = () => {
    setAskQuestionModal(true)
  };

  const hideModal = () => {
    console.log('clicked hide modal')
    setAskQuestionModal(false)
  };


  return (
    <div>
      <div className='main-questions'>
        {questions.slice(0,questionDisplayCount).map(question => <Question question={question} key={question.question_id}/>)}
      </div>
      <div >
      {moreQuestionVisible ?
        <div className='more-question' onClick={() => setQuestionDisplayCount(questionDisplayCount + 2)}>
            MORE ANSWERED QUESTIONS

        </div>
        : null}

         <div className='more-question' onClick={showModal}>
          ASK A QUESTION +
          <AskAQuestion show={askQuestionModal} handleClose={hideModal} />
         </div>
      </div>
    </div>

  )
}


export default QuestionsList;
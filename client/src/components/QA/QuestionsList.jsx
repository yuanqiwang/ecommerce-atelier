import React, {useState, useEffect} from 'react'
import Question from './Question.jsx'
import QuestionModal from './QuestionModal.jsx';

const QuestionsList = ({questions, productId}) => {

  const [questionDisplayCount, setQuestionDisplayCount] = useState(2);
  const [moreQuestionVisible, setMoreQuestionVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // console.log('initial render and when questions is updated ')
    if (questions.length > 0) {
      setMoreQuestionVisible(true)
    }
  },[questions])

  useEffect(() => {
    // console.log('initial and rerender on display count')
    if (questionDisplayCount >= questions.length) {
      setMoreQuestionVisible(false)
    }
  },[questionDisplayCount]
  )

  return (
    <div>
      <div className='main-questions'>
        {questions.slice(0,questionDisplayCount).map(question =>
          <Question question={question} key={question.question_id}/>)
        }
      </div>

      <div>
        {moreQuestionVisible ?
          <div className='more-question' onClick={() => setQuestionDisplayCount(questionDisplayCount + 2)}>
              MORE ANSWERED QUESTIONS
          </div>
          : null
        }

        <div className='more-question' onClick={() => {setIsOpen(true)}}>
          ASK A QUESTION +

        </div>
        <QuestionModal open={isOpen} productId={productId} onClose={()=> setIsOpen(false)} />

      </div>
    </div>

  )
}


export default QuestionsList;
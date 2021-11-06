import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'
import axios from 'axios'
import AnswerModal from './AnswerModal.jsx'
import Helpful from './Helpful.jsx'

const Question = ({question, productId}) => {



  const [questionBody, setQuestionBody] = useState(question.question_body)
  const [answers, setAnswers] = useState(question.answers)

  const [visible, setVisible] = useState(2)
  const [loadMoreAnswers, setLoadMoreAnswers] = useState() //null, load more answers, collapse answers
  const [addAnswer, setAddAnswer] = useState(false)

  useEffect(() => {
   if (Object.keys(answers).length>2) {
    setLoadMoreAnswers('LOAD MORE ANSWERS')
   }
  }, []);

  function handleLoadMoreAnswers(value) {
    if (value === 'LOAD MORE ANSWERS') {
      setVisible(Object.keys(answers).length)
      setLoadMoreAnswers('COLLAPSE ANSWERS')

    } else if (value === 'COLLAPSE ANSWERS') {
      setVisible(2)
      setLoadMoreAnswers('LOAD MORE ANSWERS')
    }

  }

  const handleAddAnswer = () => {
    setAddAnswer(true)
  }

  return (
    <div>
      <div className='qa-container'>
        <div className='qa-question'>Q: {questionBody} </div>
        <div className='qa-tiny qa-helpful'>
          <div className= 'qa-helpful'> Helpful?</div>
          <Helpful
            id={question.question_id}
            helpfulness={question.question_helpfulness}
            localStorageName={'questionsMarkedHelpful'}/>
          <div className='qa-divider'>|</div>
          <div className='qa-clickable qa-helpful' onClick={handleAddAnswer}> Add Answers </div>
        </div>
      </div>
      <div className='qa-answers qa-scroll'>
        <div className='qa-answers-left'>A: </div>
        <div className='qa-answers-right'>
          {Object.keys(answers).slice(0, visible).map((key) => {
                return <Answer answer={answers[key]} key={key} />
              })
          }
        </div>
      </div>

      {loadMoreAnswers ?
        <div className ='qa-moreanswer qa-tiny' onClick={() => handleLoadMoreAnswers(loadMoreAnswers)}>
          {loadMoreAnswers}</div>
      : null}

      <AnswerModal
        open={addAnswer}
        productName={'test'}
        question={questionBody}
        productId={productId}
        onClose={()=> {
          setAddAnswer(false)}}
      />
    </div>
  )

}

export default Question;

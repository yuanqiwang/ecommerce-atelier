import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'
import axios from 'axios'
import AnswerModal from './AnswerModal.jsx'

const Question = ({question, productId}) => {

  const [questionBody, setQuestionBody] = useState(question.question_body)
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness)
  const [answers, setAnswers] = useState(question.answers)

  const [visible, setVisible] = useState(2)
  const [loadMoreAnswers, setLoadMoreAnswers] = useState() //null, load more answers, collapse answers
  const [voteHelpful, setVoteHelpful] = useState(false)
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
    console.log('add answer')
    setAddAnswer(true)
  }

  const handleHelpful = () => {

    var questionsMarkedHelpful=JSON.parse(localStorage.getItem('questionsMarkedHelpful')) || [];
    if (questionsMarkedHelpful.includes(question.question_id)) {
      console.log('already voted helpful')
    } else {
      questionsMarkedHelpful.push(question.question_id)
      localStorage.setItem('questionsMarkedHelpful', JSON.stringify(questionsMarkedHelpful));
      //put the question as helpful in API: /qa/questions/:question_id/helpful
      setQuestionHelpfulness(prevCount => prevCount +1)
    }
  }

  return (
    <div>
      <div className='qa-container'>
        <div className='qa-question'>Q: {questionBody} </div>
        <div className='qa-tiny qa-helpful'>
          <div className= 'qa-helpful'> Helpful?</div>
          <div className='qa-underscore qa-helpful' onClick={handleHelpful}> Yes ({questionHelpfulness})</div>
          <div className='qa-divider'>|</div>
          <div className='qa-underscore qa-helpful' onClick={handleAddAnswer}> Add answers </div>
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
          console.log('test')
          setAddAnswer(false)}}
      />
    </div>
  )

}

export default Question;

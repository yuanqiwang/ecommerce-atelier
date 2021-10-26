import React from 'react'
import Question from './Question.jsx'

const QuestionsList = (props) => {
  return (
    <div className='main-questions'>
      {props.questions.map(question => <Question question={question} key={question.question_id}/>)}
    </div>
  )
}


export default QuestionsList;
import React, {useState, useEffect} from 'react'
import Question from './Question.jsx'

const QuestionsList = (props) => {

  const [questionList, setQuestionList] = useState(props.questions);
  const [questionDisplayCount, setQuestionDisplayCount] = useState(2);
  const [moreQuestionVisible, setMoreQuestionVisible] = useState(true);
  console.log('x',props.questions)
  useEffect(() => {
    // console.log('effect:', questionList)
    if (props.questions.length > 0) {
      console.log('effect2')
      setMoreQuestionVisible(true)
    }
  }, [])


  const moreQuestions = () => {
    console.log()
  }

  return (
    <div>
      <div className='main-questions'>
        {props.questions.slice(0,questionDisplayCount).map(question => <Question question={question} key={question.question_id}/>)}
      </div>
      <div >
      {moreQuestionVisible ?
        <div className='more-question' onClick={() => setQuestionDisplayCount(questionDisplayCount + 2)}>
            MORE ANSWERED QUESTIONS
        </div>
        : null}

         <div className='more-question' onClick={() => {console.log('ask a questions')}}> ASK A QUESTION + </div>
      </div>
    </div>

  )
}


export default QuestionsList;
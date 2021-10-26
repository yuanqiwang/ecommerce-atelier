import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'

const Question = ({question}) => {

  // const [answerData, setAnswerData] = useState([]);
  // const [questionBody, setQuestionBody] = useState('');
  // const [questionHelpfulness, setQuestionHelpfulness] = useState();
  // const [answerData, setAnswerData] =useState();
  const [questionData, setQuestionData] = useState({
    questionBody: question.question_body,
    questionHelpfulness: question.question_helpfulness,
    answers: question.answers //object
  })
  const [visible, setVisible] = useState(2)
  const [loadMore, setLoadMore] = useState(false)

  const handleAddAnswer = () => {
    //do we need to post this?
    console.log('add answer')
  }

  const handleHelpful = () => {
    console.log('yes, helpful')
  }

  const {questionBody, questionHelpfulness, answers} = questionData;
  const checkAnswerLength = (({answers}) => {
    if (answers.length > 2) {
      setLoadMore(true)
    }
  })

  useEffect(()=> {
   if (Object.keys(answers).length>2) {
    setLoadMore(true)
   }
  }, []);


  return (
    <div>
      <div className='container'>
        <div className='question'>Q: {questionBody} </div>
        <div className='tiny helpful'>
          <div className= 'helpful'> Helpful?</div>
          <div className='underscore helpful' onClick={handleHelpful}> Yes ({questionHelpfulness})</div>
          <div className='divider'>|</div>
          <div className='underscore helpful' onClick={handleAddAnswer}> Add answers </div>
        </div>
      </div>
      <div className='answers'>
        {
            Object.keys(answers).slice(0, visible).map((key) => {
              return <Answer answer={answers[key]} />
            })
          }
      </div>

      {loadMore? <div className ='moreanswer tiny'>LOAD MORE ANSWERS</div> : null}
    </div>
  )

}

export default Question;

import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'

const Question = ({question}) => {

  const [questionData, setQuestionData] = useState({
    questionBody: question.question_body,
    questionHelpfulness: question.question_helpfulness,
    answers: question.answers //object
  })
  const [visible, setVisible] = useState(2)
  const [loadMoreAnswers, setLoadMoreAnswers] = useState() //null, load more answers, collapse answers

  const handleAddAnswer = () => {
    //do we need to post this?
    console.log('add answer')
  }

  const handleHelpful = () => {
    console.log('yes, helpful')
  }

  const {questionBody, questionHelpfulness, answers} = questionData;

  useEffect(() => {
   if (Object.keys(answers).length>2) {
    setLoadMoreAnswers('LOAD MORE ANSWERS')
   }
  }, []);

  // useEffect(() => {
  //   handleLoadMoreAnswers(loadMoreAnswers)
  // })
  function handleLoadMoreAnswers(value) {
    if (value === 'LOAD MORE ANSWERS') {
      setVisible(Object.keys(answers).length)
      setLoadMoreAnswers('COLLAPSE ANSWERS')

    } else if (value === 'COLLAPSE ANSWERS') {
      setVisible(2)
      setLoadMoreAnswers('LOAD MORE ANSWERS')
    }

  }


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
      <div className='answers scroll'>
        {Object.keys(answers).slice(0, visible).map((key) => {
              return <Answer answer={answers[key]} key={key} />
            })
        }
        </div>
      {loadMoreAnswers ?
        <div className ='moreanswer tiny' onClick={() => handleLoadMoreAnswers(loadMoreAnswers)}>
          {loadMoreAnswers}</div>
      : null}
    </div>
  )

}

export default Question;

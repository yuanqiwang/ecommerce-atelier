import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'
import axios from 'axios'


const Question = ({question, productId}) => {

  const [questionBody, setQuestionBody] = useState(question.question_body)
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness)
  const [answers, setAnswers] = useState(question.answers)

  const [visible, setVisible] = useState(2)
  const [loadMoreAnswers, setLoadMoreAnswers] = useState() //null, load more answers, collapse answers
  const [voteHelpful, setVoteHelpful] = useState(false)

  const handleAddAnswer = () => {
    console.log('add answer')
  }

  const handleHelpful = () => {

    //check if the id is already in local storage
    var questionsMarkedHelpful=JSON.parse(localStorage.getItem('questionsMarkedHelpful')) || [];
    if (questionsMarkedHelpful.includes(productId)) {
      console.log('already voted helpful')
    } else {//if not existing
      //save the question id to local storage
      questionsMarkedHelpful.push(productId)
      localStorage.setItem('questionsMarkedHelpful', JSON.stringify(questionsMarkedHelpful));
      //put the question as helpful in API: /qa/questions/:question_id/helpful
      // axios.post()
      //either increment the count locally? or get the API? option 1 because it is instant...but can check
      setQuestionHelpfulness(prevCount => prevCount +1)
    }
  }

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
        {Object.keys(answers).slice(0, visible).map((key) => {
              return <Answer answer={answers[key]} key={key} />
            })
        }
        </div>
      {loadMoreAnswers ?
        <div className ='qa-moreanswer qa-tiny' onClick={() => handleLoadMoreAnswers(loadMoreAnswers)}>
          {loadMoreAnswers}</div>
      : null}
    </div>
  )

}

export default Question;

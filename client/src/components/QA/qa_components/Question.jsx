import React, { useEffect, useState} from 'react'
import Answer from './Answer.jsx'
import axios from 'axios'
import AnswerModal from './AnswerModal.jsx'
import Helpful from './Helpful.jsx'

const Question = ({question, productId, productName}) => {

  const [questionBody, setQuestionBody] = useState(question.question_body)
  const [answers, setAnswers] = useState(question.answers)

  const [visible, setVisible] = useState(2)
  const [loadMoreAnswers, setLoadMoreAnswers] = useState() //null, load more answers, collapse answers
  const [addAnswer, setAddAnswer] = useState(false)

  useEffect(() => {
    if (Object.keys(answers).length>2) {
      setLoadMoreAnswers('LOAD MORE ANSWERS')
    } else {
      // setAnswers({0:
      //   {body: 'NO ANSWERS HAVE BEEN ADDED'
      // }})
    }}, [answers]);

  const handleLoadMoreAnswers = (value) => {
    if (value === 'LOAD MORE ANSWERS') {
      setVisible(Object.keys(answers).length)
      setLoadMoreAnswers('COLLAPSE ANSWERS')
    } else if (value === 'COLLAPSE ANSWERS') {
      setVisible(2)
      setLoadMoreAnswers('LOAD MORE ANSWERS')
    }
  }

  const sortAnswer = (answersObj) => {

    let list = Object.keys(answersObj).map((key)=>{
      return answersObj[key]
    })
    let sellerList = []

    list.sort((a,b) => {
      return b.helpfulness - a.helpfulness
    });

    list.forEach((item, i) => {
      if (item.answerer_name.toLowerCase()=='seller') {
        sellerList.push(item)
        list.splice(i, 1) //remove seller
      }
    })
    let combinedList = sellerList.concat(list);
    return combinedList;
  }


  const handleSubmitAnswer = () => {

    axios.get(`/qa/questions/${question.question_id}/answers`)
      .then((result) => setAnswers(result.data))//
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <div className='qa-question-container'>
        <div className='qa-question'>Q: {questionBody} </div>
        <div className='qa-tiny qa-helpful-container'>
          <div className= 'qa-helpful'> Helpful?</div>
          <Helpful
            id={question.question_id}
            helpfulness={question.question_helpfulness}
            localStorageName={'questionsMarkedHelpful'}/>
          <div className='qa-divider'>|</div>
          <div className='qa-clickable qa-helpful' onClick={() => setAddAnswer(true)}> Add Answers </div>
        </div>
      </div>
      <div className='qa-answers qa-scroll'>
        {Object.keys(answers).length == 0 ?
            (<p style={{fontStyle:'italic', fontSize: 'small', color: 'gray'}}>
              There is no answer to this question
            </p>)
          :
          (<>
            <div className='qa-answers-left'>A: </div>
            <div className='qa-answers-right'>
              {sortAnswer(answers).slice(0, visible).map((answer) => {
                return <Answer answer={answer} key={answer.id} />
              })}
            </div>
          </>
          )
        }
      </div>

      {loadMoreAnswers ?
        <div className ='qa-moreanswer qa-tiny' onClick={() => handleLoadMoreAnswers(loadMoreAnswers)}>
          {loadMoreAnswers}</div>
      : null}

      <AnswerModal
        open={addAnswer}
        productName={productName}
        question={questionBody}
        questionId={question.question_id}
        onClose={()=> {
          setAddAnswer(false)}}
        onSubmitAnswer={handleSubmitAnswer}
      />
    </div>
  )

}

export default Question;

import React, {useState, useEffect} from 'react'
import Question from './Question.jsx'
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';

const QuestionsList = ({questions, productId, productInfo}) => {

  const [questionDisplayCount, setQuestionDisplayCount] = useState(2);
  const [questionList, setQuestionList] = useState([]);
  const [moreQuestionVisible, setMoreQuestionVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // console.log('initial render and when questions is updated ')
    if (questions) {
      setQuestionDisplayCount(2) //if new question list, then set it to display two
      if (questions.length>2) {
        setQuestionList(questions)
        setMoreQuestionVisible(true)
      } else {
        setQuestionList(questions)
        setMoreQuestionVisible(false)
      }
    }

  },[questions])

  useEffect(() => {
    // console.log('initial and rerender on display count')
    if (questionDisplayCount >= questions.length) {
      setMoreQuestionVisible(false)
    }
  },[questionDisplayCount])

  const handleSubmitQuestion = () => {

    axios.get(`/qa/questions/${productId}`)
      .then((result) => {//might add sort function here? new q has 0 helpful and will be add on the bottom
        setQuestionList(result.data)})
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <div className='qa-main-questions'>
        {questionList.slice(0,questionDisplayCount).map(question =>
          <Question
            question={question}
            key={question.question_id}
            productId={productId}
            productName={productInfo? productInfo.name : 'product'}
            />)
        }
      </div>

      <div className='qa-bottom'>
        {moreQuestionVisible ?
          <div className='qa-more-question' onClick={() => setQuestionDisplayCount(questionDisplayCount + 2)}>
              MORE ANSWERED QUESTIONS
          </div>
          : null
        }

        <div className='qa-more-question' onClick={() => {setIsOpen(true)}}>
          ASK A QUESTION +
        </div>
        <QuestionModal
            open={isOpen}
            productName={productInfo? productInfo.name : 'product'}
            productId={productId}
            onClose={()=> {setIsOpen(false)}}
            onSubmitQuestion={handleSubmitQuestion}
        />
      </div>
    </div>

  )
}


export default QuestionsList;
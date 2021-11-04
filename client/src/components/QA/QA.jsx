import React, { useEffect, useState} from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import axios from 'axios';

const QA = ({questions, productId, productInfo}) => {
  // const [isOpen, setIsOpen] = useState(false)
  // console.log(productInfo)
  questions.sort((a,b) => {
    return b.question_helpfulness - a.question_helpfulness
  });

  return (
    <div className='QA'>
      <h5>{`QUESTIONS & ANSWERS`}</h5>
      <SearchQuestions/>
      <QuestionsList
          questions={questions}
          productId={productId}
          productInfo={productInfo}
        />
    </div>
  )

}

export default QA;
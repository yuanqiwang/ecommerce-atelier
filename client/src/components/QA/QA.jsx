import React, { useEffect, useState} from 'react';
import QuestionsList from './qa_components/QuestionsList.jsx';
import SearchQuestions from './qa_components/SearchQuestions.jsx';
import axios from 'axios';

const QA = ({questions, productId, productInfo, trackClick}) => {


  const [searchTerm, setSearchTerm] = useState('');
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    // questions.sort((a,b) => {//need to do this with search results
    //   return b.question_helpfulness - a.question_helpfulness
    // });
    setQuestionList(questions)
  }, [questions])

  useEffect(() => {
     if (searchTerm.length >= 3) {
       let matchResult = []
       questions.forEach((question) => {
        if (JSON.stringify(question.question_body).indexOf(searchTerm) >0) {
          matchResult.push(question)
        }
       })
       setQuestionList(matchResult);
     } else {
       setQuestionList(questions);
     }

   }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }


  return (
    <div className='QA' data-testid="QA-render" onClick={trackClick}>
      <h3>{`QUESTIONS & ANSWERS`}</h3>
      <SearchQuestions
        onChange={handleSearch}
      />
      <QuestionsList
        questions={questionList}
        productId={productId}
        productInfo={productInfo}
      />
    </div>
  )

}

export default QA;
import React, { useEffect, useState} from 'react';
import QuestionsList from './qa_components/QuestionsList.jsx';
import Search from '../../search.jsx';


const QA = ({questions, productId, productInfo, trackClick}) => {


  const [searchTerm, setSearchTerm] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const placeholder = 'HAVE A QUESTION? SEARCH FOR ANSWER...'
  useEffect(() => {
    setQuestionList(questions)
  }, [questions])

  useEffect(() => {
     if (searchTerm.length >= 3) {
       let matchResult = []
       if (questions) {
         questions.forEach((question) => {
           if (JSON.stringify(question.question_body).toLowerCase().indexOf(searchTerm.toLowerCase()) > 0) {
             matchResult.push(question)
           }})
         setQuestionList(matchResult);
       }
     } else {
       setQuestionList(questions);
     } //handle no search returned

   }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }


  return (
    <div className='QA' data-testid="QA-render" onClick={trackClick}>
      <div className='QA-title'> {`QUESTIONS & ANSWERS`}</div>
      <Search
        onChange={handleSearch}
        placeholder={placeholder}
      />
      <QuestionsList
        questions={questionList}
        productId={productId}
        productInfo={productInfo}
        searchTerm={searchTerm}
      />

    </div>
  )

}

export default QA;
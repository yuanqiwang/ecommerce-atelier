import React, {useState, useEffect} from 'react';
import Helpful from './Helpful.jsx';
import axios from 'axios';
const Answer = ({answer}) => {

  //[helpfulness, setHelpfulness] = useState(answer.helpfulness);

  const convertDate = (dateString) => {
    var date = new Date(dateString);
    var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']

    var year = date.getFullYear();
    var month = monthList[date.getMonth()]
    var day = date.getDate();
    return ` ${month} ${day}, ${year}`;
  }



  let reportedAnswers = JSON.parse(localStorage.getItem('reportedAnswers')) || [];
  let reportedInit = false;
  if (reportedAnswers.includes(answer.id)) {
    reportedInit = true
  }
  const [reportStatus, setReportStatus] = useState(reportedInit);
  const handleReport = () => {

    if (reportStatus) {
      console.log('already reported')
    } else {
      setReportStatus(true);
      reportedAnswers.push(answer.id);
      localStorage.setItem('reportedAnswers', JSON.stringify(reportedAnswers));

      axios.put(`/qa/answers/report`, {id: answer.id})
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }

  }

  return (
    <div className='qa-answer'>
      <div> <span className ='qa-tiny'> {answer.body}</span> </div>
      {answer.photos.length?
       <div className='qa-answer-img-container'>
         {answer.photos.map((photo, index)=>{
           if (typeof photo == 'object') {
             console.log('test object')
             return (<img className='qa-answer-img' src={photo.url} key={index}/>)
           } else {
             return (<img className='qa-answer-img' src={photo} key={index}/>)
           }

         })}
       </div>
       : null}
      <div className='qa-answerby qa-tiny'>
        <div> by
          <span className={answer.answerer_name.toLowerCase()=='seller'? 'qa-bold': 'null'}>
             {answer.answerer_name},
          </span>
          {convertDate(answer.date)}
        </div>
        <div className='qa-divider'>|</div>
        <div className='qa-helpful'> Helpful?</div>
        <Helpful id={answer.id} localStorageName='helpfulAnswersList' helpfulness={answer.helpfulness}/>
        <div className='qa-divider'>|</div>
        <div className={reportStatus? 'qa-not-clickable': 'qa-clickable'}
          onClick={handleReport}>
          {reportStatus? 'Reported': 'Report'}
        </div>


      </div>
    </div>
  )
}

export default Answer
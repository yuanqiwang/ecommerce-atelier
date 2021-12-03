import React, {useState, useEffect} from 'react';
import Helpful from './Helpful.jsx';
import axios from 'axios';
import convertDate from './convertDate.js';
import ImageModal from './ImageModal.jsx';


const Answer = ({answer}) => {

  let reportedAnswers = JSON.parse(localStorage.getItem('reportedAnswers')) || [];
  let reportedInit = false;
  if (reportedAnswers.includes(answer.id)) {
    reportedInit = true
  }

  const [reportStatus, setReportStatus] = useState(reportedInit);
  const [imageModal, setImageModal] = useState(false);
  const [imageModalURL, setImageModalURL] = useState('');

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
  const handleModalOpen = e => {
    setImageModal(true);
    setImageModalURL(e.target.src);
  }
  const handleModalClose = e => {
    setImageModal(false);
  }

  return (
    <div className='qa-answer'>
      <div> <span className ='qa-tiny'> {answer.body}</span> </div>
      {answer.photos.length?
       <div className='qa-answer-img-container'>
         {answer.photos.map((photo, i)=>{
           if (typeof photo == 'object') {
             return (<img className='qa-answer-img' src={photo.url} height="65" width="65" key={i} onClick={handleModalOpen} alt={`answer image ${i}`} />)
           } else {
             return (<img className='qa-answer-img' src={photo} height="65" width='65' key={i} onClick={handleModalOpen} alt={`answer image ${i}`} />)
           }

         })}
       </div>
       : null}
      <div className='qa-answerby qa-tiny'>
        <div> by
          <span className={answer.answerer_name.toLowerCase()=='seller'? 'qa-bold': 'null'}>
             {` ${answer.answerer_name},`}
          </span>
          {convertDate(answer.date)}
        </div>
        <div className='qa-helpful-container'>
          <div className='qa-divider'>|</div>
          <div className='qa-helpful'> Helpful?</div>
          <Helpful id={answer.id} localStorageName='helpfulAnswersList' helpfulness={answer.helpfulness}/>
          <div className='qa-divider'>|</div>
          <div className={reportStatus? 'qa-not-clickable qa-helpful': 'qa-clickable qa-helpful'}
            onClick={handleReport}>
            {reportStatus? 'Reported': 'Report'}
          </div>
        </div>
      </div>
      {imageModal ?
         <ImageModal
           imageURL={imageModalURL}
           handleModalClose={handleModalClose}
          />
        : null
      }
    </div>
  )
}

export default Answer
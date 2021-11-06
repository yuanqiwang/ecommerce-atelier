import React, {useState, useEffect} from 'react';

const Answer = ({answer}) => {

  //[helpfulness, setHelpfulness] = useState(answer.helpfulness);

  return (
    <div className='qa-answer'>
      <div className='qa-question'>
          <span className ='qa-tiny'> {answer.body}</span>
      </div>
      {answer.photos.length?
       <div className='qa-answer-img-container'>
         {answer.photos.map((photo, index)=>{
            return (<img className='qa-answer-img' src={photo} key={index}/>)
         })}
       </div>
       : null}
      <div className='qa-answerby qa-tiny'>
        <div>by {answer.answerer_name}, {answer.date.slice(0,10)}</div>
        <div className='qa-divider'>|</div>
        <div className='qa-helpful'> Helpful?</div>
        <div className='qa-underscore qa-helpful'> Yes ({answer.helpfulness})</div>
        <div className='qa-divider'>|</div>
        <div className='qa-underscore qa-tiny'> Report</div>

      </div>
    </div>
  )
}

export default Answer
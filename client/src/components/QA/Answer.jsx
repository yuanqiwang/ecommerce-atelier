import React from 'react';

const Answer = ({answer}) => {
  return (
    <div>
      <div className='question'>A:
          <span className ='tiny'> {answer.body}</span>
      </div>
      <div className='answerby tiny'>
        <div>by {answer.answerer_name}, {answer.date.slice(0,10)}</div>
        <div className='divider'>|</div>
        <div className='helpful'> Helpful?</div>
        <div className='underscore helpful'> Yes ({answer.helpfulness})</div>
        <div className='divider'>|</div>
        <div className='underscore tiny'> Report</div>
      </div>
    </div>
  )
}

export default Answer
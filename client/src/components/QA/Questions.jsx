import React from 'react'

class Question extends React.Component {


  render() {
    return (
    <div>
      <div className='container'>
        <div className='question'>Q: Who what which </div>
        <div className='tiny helpful'>
          <div className= 'helpful'> Helpful?</div>
          <div className='underscore helpful'> Yes</div>
          <div className='divider'>|</div>
          <div className='underscore helpful'> Add answers </div>
        </div>
      </div>
      <div className='question'>A:
        <span className ='tiny'> Icing macaroon bear claw something this could be multiple lines</span>
      </div>
      <div className='answerby tiny'>
        <div>by User1234, Jan 1, 2019</div>
        <div className='divider'>|</div>
        <div className='helpful'> Helpful?</div>
        <div className='underscore helpful'> Yes</div>
        <div className='divider'>|</div>
        <div className='underscore tiny'> Report</div>
      </div>
      <div className ='moreanswer tiny'>LOAD MORE ANSWERS</div>
    </div>
    )
  }
}

export default Question;
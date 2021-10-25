import React from 'react'

class MoreQuestions extends React.Component {


  render() {
    return (<div className='more-question' onClick={this.props.handleMoreQuestions}> MORE ANSWERED QUESTIONS </div>)
  }
}

export default MoreQuestions;
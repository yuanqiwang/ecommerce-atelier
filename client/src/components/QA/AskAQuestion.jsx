import React from 'react'

class AskAQuestion extends React.Component {


  render() {
    return (
      <div className='more-question'
        onClick={this.props.handleAskAQuestion}> ASK A QUESTION +
      </div>
    )
  }
}

export default AskAQuestion;
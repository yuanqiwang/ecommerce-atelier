import React, {useState, useEffect} from 'react';
import axios from 'axios';

const QuestionModal = ({ open, productId, productName, onClose, onSubmitQuestion}) => {

  if(!open) return null;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      body,
      name,
      email,
      product_id: productId
    }
    axios.post('/qa/questions', data)
      .then((res)  => {
        onSubmitQuestion();
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>

        <div >Ask Your Question</div>
        <p>About the {productName} </p>
        <form className='qa-form'>
          <div className='qa-form-control'>
            <label htmlFor='question'>Your Question (mandatory)*</label>
            <textarea
              className='qa-input'
              id ='question'
              name = 'body' //use for onChange
              type='textarea'
              rows="5" cols="33"
              maxLength='1000'
              autoComplete='off'
              onChange={(e)=> setBody(e.target.value)}
              required/>
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small> Error message</small>
          </div>
          <div className='qa-form-control'>
            <label htmlFor='nickname'>What is your nickname (mandatory)*</label>
            <input
              className='qa-input'
              id ='nickname'
              name = 'name' //use for onChange
              type='text'
              placeholder='Example: jackson11!'
              autoComplete='off'
              maxLength='60'
              onChange={(e)=> setName(e.target.value)}
              required
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <span className='qa-instructions'> For privacy reasons, do not use your full name or email address</span>
            <small> Error message</small>
          </div>
          <div className='qa-form-control'>
            <label htmlFor='email'>Your email (mandatory)*</label>
            <input
              className='qa-input'
              id='email'
              type='text'
              name = 'email' //use for onChange
              placeholder='Example: jack@email.com'
              autoComplete='off'
              maxLength='60'
              onChange={(e)=> setEmail(e.target.value)}
              required/>
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <span className='qa-instructions'> For authentication reasons, you will not be emailed</span>
            <small> Error message</small>
          </div>
          <button type='submit' onClick={(e)=> {onSubmit(e); onClose()}}>Submit</button>
          <button onClick={onClose}> Close</button>
        </form>
      </div>
   </div>

  )
}

export default QuestionModal
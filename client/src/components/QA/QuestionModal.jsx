import React, {useState, useEffect} from 'react';
import axios from 'axios';

const QuestionModal = ({ open, productId, productName, onClose}) => {


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
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>

          <div >Ask Your Question</div>
          {/* <p>About the {productName} </p> */}
        <form className='qa-form'>
          <p>
            <label htmlFor='question'>Question</label>
            <input
              className='qa-input'
              id ='question'
              name = 'body' //use for onChange
              type='textarea'
              autoComplete='off'
              onChange={(e)=> setBody(e.target.value)}
              required/>
          </p>
          <p>
            <label htmlFor='nickname'>Nickname</label>
            <input
              className='qa-input'
              id ='nickname'
              name = 'name' //use for onChange
              type='text'
              placeholder='Example: jackson11!'
              autoComplete='off'
              onChange={(e)=> setName(e.target.value)}
              required
            />
            <span className='instructions'> For privacy reasons, do not use your full name or email address</span>
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              className='qa-input'
              id='email'
              type='text'
              name = 'email' //use for onChange
              placeholder='Why did you like the product or not?'
              autoComplete='off'
              onChange={(e)=> setEmail(e.target.value)}
              required/>
            <span className='instructions'> For authentication reasons, you will not be emailed
            </span>
          </p>
          <button type='submit' onClick={(e)=> {
            onSubmit(e)
            onClose()}
          }
          >Submit</button>
        </form>
        <button onClick={onClose}> Close</button>
      </div>

    </div>
  )
}

export default QuestionModal
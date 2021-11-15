import React, {useState, useEffect} from 'react';
import axios from 'axios';
import validateInfo from './validateInfo.js';

const QuestionModal = ({ open, productId, productName, onClose, onSubmitQuestion}) => {

  if(!open) return null;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    body: '',
    name: '',
    email: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let error = validateInfo(values)
    setErrors(error);

    if (Object.keys(error).length == 0) {
      let data = {
        ...values,
        product_id: productId
      }
      axios.post('/qa/questions', data)
            .then((res)  => {
              onSubmitQuestion();
              onClose();
            })
            .catch((err) => console.log(err))
    }

  }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>
        <div className='qa-modal-header'>
          <h3>Ask Your Question</h3>
          <p>About the {productName} </p>
        </div>
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
              // onChange={(e)=> setBody(e.target.value)}
              value={values.body}
              onChange={handleChange}
              required/>
              {errors.body&&<small> {errors.body}</small>}
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
              value={values.name}
              // onChange={(e)=> setName(e.target.value)}
              onChange={handleChange}
              required
            />
            <span className='qa-instructions'> For privacy reasons, do not use your full name or email address</span>
            {errors.name&&<small> {errors.name}</small>}
          </div>
          <div className='qa-form-control'>
            <label htmlFor='email'>Your email (mandatory)*</label>
            <input
              className='qa-input'
              id='email'
              type='email'
              name = 'email' //use for onChange
              value={values.email}
              placeholder='Example: jack@email.com'
              autoComplete='off'
              maxLength='60'
              // onChange={(e)=> setEmail(e.target.value)}
              onChange={handleChange}
              required/>
            <span className='qa-instructions'> For authentication reasons, you will not be emailed</span>
            {errors.email&&<small> {errors.email}</small>}
          </div>
          <div className='qa-form-control qa-form-btn-container'>
            {/* <button type='submit' onClick={(e)=> {onSubmit(e)}}>Submit</button>
            <button onClick={onClose}> Close</button> */}
            <input type='submit' value='Submit' className='qa-form-btn' onClick={(e)=> {onSubmit(e)}} />
            <input type='submit' value='Close' className='qa-form-btn' onClick={onClose} />
          </div>
        </form>
      </div>
   </div>

  )
}

export default QuestionModal
import React, { useEffect, useState} from 'react'

const AnswerModal = ({open, productId, productName, question, onClose}) => {

  if (!open) {
    return null;
  }
  // console.log(productName, question)

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let data = {
  //     body,
  //     name,
  //     email,
  //     product_id: productId
  //   }
  //   axios.post('/qa/questions', data) //update this.
  //     .then((res)  => console.log(res))
  //     .catch((err) => console.log(err))
  // }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>

          <div >Submit your Answer</div>
          <p> {productName}: {question} </p>
        <form className='qa-form'>
          <p>
            <label htmlFor='answer'>Your Answer (mandatory)*</label>
            <textarea
              className='qa-input'
              id ='answer'
              name = 'body' //use for onChange
              type='textarea'
              rows="5" cols="33"
              maxLength='1000'
              autoComplete='off'
              onChange={(e)=> setBody(e.target.value)}
              required/>
          </p>
          <p>
            <label htmlFor='nickname'>What is your nickname (mandatory)*</label>
            <input
              className='qa-input'
              id ='nickname'
              name = 'name' //use for onChange
              type='text'
              placeholder='Example: jackson543!'
              autoComplete='off'
              maxLength='60'
              onChange={(e)=> setName(e.target.value)}
              required
            />
            <span className='instructions'> For privacy reasons, do not use your full name or email address</span>
          </p>
          <p>
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
export default AnswerModal
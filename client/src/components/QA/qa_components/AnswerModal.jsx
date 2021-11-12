import React, { useEffect, useState} from 'react'
import axios from 'axios';

const AnswerModal = ({open, questionId, productName, question, onClose, onSubmitAnswer}) => {

  if (!open) { return null }

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(true);


  const uploadImage = async e => {
    const file = e.target.files
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset', 'ketchup') //specific to cloudinary

    setLoading(true);
    const res  = await fetch('https://api.cloudinary.com/v1_1/dseonxo5o/image/upload',
      {
        method: "Post",
        body: data
      }
    )

    const resFile = await res.json()
    setPhotos([...photos, resFile.secure_url])
    setLoading(false)
    if (photos.length >= 4) {
      setShowUpload(false)
    }
  }

  const onSubmit = (e) => {
    // e.preventDefault()
    let data = { body, name, email, photos }
    axios.post(`/qa/questions/${questionId}/answers`, data)
    .then((res)  => {
      // trigger a rerender
      onSubmitAnswer()
    })
    .catch((err) => console.log(err))

  }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>
          <div className='qa-add-answer-header'>
            <div>Submit your Answer</div>
            <button className='close-btn' onClick={onClose}> x </button>
          </div>
          <div> {productName}: {question} </div>

        <form className='qa-form'>
          <div>
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
          </div>
          <div>
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
            <span className='qa-instructions'> For privacy reasons, do not use your full name or email address</span>
          </div>
          <div>
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
            <span className='qa-instructions'> For authentication reasons, you will not be emailed</span>
          </div>
            <div className='qa-image-upload'>
              {showUpload ?
                <input
                  type='file'
                  name='file'
                  placeholder = 'Upload an image'
                  onChange={uploadImage}
                  multiple
                />
                : null
              }
              {loading ? (
                <h3>loading ... </h3>
              ) : (
              <div className="form-group multi-preview">
                {(photos || []).map((url,i) => (
                    <img key={i} src={url} alt="..." />
                ))}
              </div>

              )}
            </div>

          <button type='submit' className='qa-submit-btn' onClick={(e)=> {onSubmit(e); onClose()}}>Submit</button>
        </form>

      </div>

    </div>
  )
}
export default AnswerModal
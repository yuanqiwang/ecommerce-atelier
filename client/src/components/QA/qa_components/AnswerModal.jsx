import React, { useEffect, useState} from 'react'

const AnswerModal = ({open, productId, productName, question, onClose}) => {

  if (!open) { return null}

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadMultipleFiles = (e) => {
    let fileObj = []
    let fileArray = [];
    // console.log('e.target.files', e.target.files[0])
    fileObj.push(e.target.files)

    for (let i = 0; i < fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    console.log(fileArray)
    setFiles([...files, fileArray])
  }

  const uploadFiles = (e) => {
      e.preventDefault()
      console.log(files)
  }

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ketchup') //specific to cloudinary

    setLoading(true);
    const res  = await (
      'https://api.cloudinary.com/v1_1/dseonxo5o/image/upload'
      {
        method: "Post",
        body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    sestLoading(false)


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
            <span className='qa-instructions'> For privacy reasons, do not use your full name or email address</span>
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
            <span className='qa-instructions'> For authentication reasons, you will not be emailed</span>
          </p>

          {/* <div className='qa-image-upload'>
            <label htmlFor='image'>Upload pictures</label>
            <input
              className='qa-input'
              id='image'
              type='file'
              multiple
              onChange={uploadMultipleFiles}
              />
              <div className="form-group multi-preview">
                    {(files || []).map((url,i) => (
                        <img key={i} src={url} alt="..." />
                    ))}
                </div>

          </div> */}
            <p>
              <input
                type='file'
                name='file'
                placeholder = 'Upload an image'
                onChange={uploadImage}
              />
              {loading ? (
                <h3>loading ... </h3>
              ) : (
                <img sr={image} style={{width: '300px'}} />
              )}
            </p>

          <button type='submit' className='qa-submit-btn' onClick={(e)=> { onSubmit(e); onClose()}}>Submit</button>
        </form>

      </div>

    </div>
  )
}
export default AnswerModal
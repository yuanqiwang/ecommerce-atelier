import React, { useState, useEffect} from 'react';

const ImageModal = ({handleModalClose, imageURL}) => {
  return (
    <div className='qa-modal' >
      <div className='qa-modal-main' >
          <div onClick={handleModalClose} className='qa-image-modal'>
            <img src={imageURL} />
          </div>
      </div>
    </div>
  )
}


export default ImageModal;

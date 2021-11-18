import React, { useState, useEffect} from 'react';

const ImageModal = ({handleModalClose, imageURL}) => {
  return (
    <div className='qa-modal' data-testid='image-modal'>
      <div className='qa-modal-main' >
          <div  className='qa-image-modal'>
            <i onClick={handleModalClose} className="far fa-window-close qa-close-icon"></i>
            <img src={imageURL} />
          </div>
      </div>
    </div>
  )
}


export default ImageModal;

import React, { useState, useEffect} from 'react';

const ImageModal = ({handleModalClose, imageURL}) => {
  return (
    <div className='qa-modal' data-testid='image-modal'>
      <div className='qa-modal-main' >
          <div  className='qa-image-modal'>
            <button onClick={handleModalClose} className="fas fa-times-circle qa-close-icon"></button>
          </div>
      </div>
    </div>
  )
}


export default ImageModal;

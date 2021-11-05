import React, {useState, useEffect} from 'react';



const ComparisonModal = ({isOpen}) => {
  if(!isOpen) return null;


  return (
    <div className='rp-comparison-modal'>
      <div className='rp-sub-modal'>
        <h3>Comparing</h3>
      </div>
    </div>
  )
}

export default ComparisonModal;
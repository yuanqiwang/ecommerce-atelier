import React, {useState, useEffect} from 'react';

const SearchQuestions = ({onChange}) => {
  return (
    <div className='qa-search-bar'>
        <input
           type='text'
           placeholder='HAVE A QUESTION? SEARCH FOR ANSWER...'
           onChange={(e)=>onChange(e)}
        />
        {/* <button className="qa-search-btn">
          <span>Magifier</span>
        </button> */}
        <button className="qa-search-btn">
         <span className="glyphicon glyphicon-search"></span>
        </button>

    </div>


  )
}


export default SearchQuestions;
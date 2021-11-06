import React, {useState, useEffect} from 'react';

const SearchQuestions = ({onChange}) => {
  return (
    <div className='qa-search-bar'>
        <input
           type='text'
           placeholder='Have a question? Search for answers…'
           onChange={(e)=>onChange(e)}
        />
        <button className="qa-search-btn">
          <span>Magifier</span>
        </button>

    </div>


  )
}


export default SearchQuestions;
import React, {useState, useEffect} from 'react';

const Search = ({onChange, placeholder}) => {
  return (
    <div className='qa-search-bar' >
        <input
           type='text'
           placeholder={placeholder}
           onChange={onChange}
        />
        <button className="qa-search-btn">
         {/* <span className="glyphicon glyphicon-search"></span> */}
         <i className="fa fa-search"></i>
        </button>

    </div>


  )
}


export default Search;
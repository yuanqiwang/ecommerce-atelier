import React, {useState, useEffect} from 'react';

const Search = ({onChange, placeholder}) => {
<<<<<<< HEAD

=======
>>>>>>> 6309ce81216760b4603c66313cabdb5aba305f49
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
import React, {useState, useEffect} from 'react';

const Helpful = ({id, localStorageName, helpfulness}) => {

  //[helpfulness, setHelpfulness] = useState(answer.helpfulness);
  let tempStorage = JSON.parse(localStorage.getItem(localStorageName)) || [];

  let initValue = false;
  if (tempStorage.includes(id)) {
    initValue = true
  }
  const [clickStatus, setClickStatus] = useState(initValue);
  const [helpfulnessCount, setHelpfulnessCount] = useState(helpfulness)

  const handleClick = () => {
    if (clickStatus) {
      console.log('already clicked')
    } else {
      setClickStatus(true);
      setHelpfulnessCount((prev) => prev+1)
      tempStorage.push(id);
      localStorage.setItem(localStorageName, JSON.stringify(tempStorage));
      //put request
    }
  }

  return (
        <div onClick={handleClick}>
          <span className={clickStatus? 'qa-not-clickable': 'qa-clickable'}>Yes </span> ({helpfulnessCount})
        </div>
  )
}

export default Helpful
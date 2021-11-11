import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Helpful = ({id, localStorageName, helpfulness}) => {

  //[helpfulness, setHelpfulness] = useState(answer.helpfulness);
  let tempStorage = JSON.parse(localStorage.getItem(localStorageName)) || [];

  let initValue = false;
  if (tempStorage.includes(id)) {
    initValue = true
  }
  let type = 'questions';
  if (localStorageName.indexOf('Answer') > 0) {
    type = 'answers'
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

      axios.put(`/qa/${type}/helpful`, {id: id})
      .then((res)  => console.log(res))
      .catch((err) => console.log(err))
    }
  }

  return (
        <div onClick={handleClick}>
          <span className={clickStatus? 'qa-not-clickable': 'qa-clickable'}>Yes </span> ({helpfulnessCount})
        </div>
  )
}

export default Helpful
import React from 'react';
import meanings from "./meanings.js";


const Traits = (props) => {
  const cats = props.cats
  console.log(cats)
  for (var i=0; i<cats.length; i++) {
    return (
      <div className="container-review space-between">
        <div>{meanings[cats[i]][0]}</div>
        <div>{meanings[cats[i]][2]}</div>
        <div>{meanings[cats[i]][4]}</div>
      </div>
    )
  }
  return (
    null
  )

}

export default Traits
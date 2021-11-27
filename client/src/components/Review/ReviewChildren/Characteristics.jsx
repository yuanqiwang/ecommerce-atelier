import React, { useState } from 'react'
import meanings from "./meanings.js";





const Characteristics = (props) => {
  let category, characteristicVals;
  let characArr = [];

  if (props.characteristics !== undefined) {
    category = Object.keys(props.characteristics)
    for (var i=0; i<category.length; i++) {
      characArr.push(category[i])
      characArr.push(parseFloat(props.characteristics[category[i]].value))
    }

    characteristicVals = characArr.map((item, index) =>
      index%2 === 0 ?
      <h3 className="review-characteristic" key={index}>{item}</h3> :
      <div className="cbar" key={index}>
        <input type="range" min="1" max="100" defaultValue={(item / 5) * 100} id="myRange"></input>
        <div className="rcontainer space-between">
          <div>{meanings[characArr[index - 1]][0]}</div>
          <div>{meanings[characArr[index - 1]][1]}</div>
          <div>{meanings[characArr[index - 1]][2]}</div>
        </div>
      </div>
    )
  }

  return (
    <>
    {characteristicVals}
    </>
  )

};
export default Characteristics
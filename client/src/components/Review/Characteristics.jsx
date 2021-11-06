import React from 'react'


const Characteristics = (props) => {
  let category, value;
  let characArr = [];
  if (props.characteristics !== undefined) {
    category = Object.keys(props.characteristics)
    for (var i=0; i<category.length; i++) {
      characArr.push(category[i])
      characArr.push(parseFloat(props.characteristics[category[i]].value))
    }
    value = characArr.map((item, index) =>
      index%2 === 0 ?
      <h3 className="review-characteristic" key={index}>{item}</h3> :
      <div id="progressbar">
        <div></div>
      </div>
    )
  }
  return (
    <>
    {value}
    </>
  )




};
export default Characteristics
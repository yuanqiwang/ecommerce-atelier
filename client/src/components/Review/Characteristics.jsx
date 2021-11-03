import React from 'react'

const Characteristics = (props) => {
  let category, cats, vals;
  let value = [];
  //console.log(props)
  if (props.characteristics !== undefined) {
    category = Object.keys(props.characteristics)
    for (var i=0; i<category.length; i++) {
      value.push(parseFloat(props.characteristics[category[i]].value))
    }
    cats = category.map((item, index) =>
      <div key={index}>{item}</div>
    )
    vals = value.map((item, index) =>
      <div key={index}>{item} out of 5</div>
    )

  }
  return (
    <>
    {cats}
    {vals}
    </>
  )




};
export default Characteristics
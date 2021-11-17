import React, {useState, useEffect} from 'react';

const Additional = ({images, changeBackground}) => {


  const [idx, setIndex] = useState(0);
  const [displayed, setDisplay] = useState(images.slice(0, 4))

  const toggleMainImage = (event) => {
    changeBackground(event.target.src);
  }

  return(
    <div className="additional-images">
    <button className="rp-prev-mini"
      onClick={() => {
      setIndex(idx-1)
      setDisplay(images.slice(idx-1, idx+3))}}
      hidden={idx === 0}
    > {'<'} </button>
    {displayed.map((image, i)=>
      <img
        key={i}
        className="thumbnail"
        src = {image}
        style={{'backgroundImage': "url('" + image + "')"}}
        onClick={toggleMainImage}/>)}
    <button className="rp-next-mini"
      onClick={()=> {
      setIndex(idx+1)
      setDisplay(images.slice(idx+1, idx+5))}}
      disabled={images.length < 4 || idx === images.length-4}
      hidden={idx+5 >= images.length}
    > {'>'} </button>
  </div>
  )
}

export default Additional;
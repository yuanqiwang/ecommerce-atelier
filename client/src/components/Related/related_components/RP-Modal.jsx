import React, {useState, useEffect} from 'react';
import RP_table from './RP-table.jsx';


const ComparisonModal = ({isOpen, mainFeature, currentFeature, mainName, currentName}) => {
  if(!isOpen) return null;
  const [features, setFeature] = useState([]);
  const [mF, setMF] = useState({});
  const [cF, setCF] = useState({});

  const helperFeature = () => {
    let f1 = {};
    let f2 = {};
    let combinedFeature = [];
    if(mainFeature.length > 0){
      for (var i=0; i<mainFeature.length; i++) {
        f1[mainFeature[i]['feature']] = mainFeature[i]['value']
        combinedFeature.push(mainFeature[i]['feature'])

      }
    }

    if(currentFeature.length > 0) {
      for (var j=0; j<currentFeature.length; j++) {
        f2[currentFeature[j].feature] = currentFeature[j].value
        if(!combinedFeature.includes(currentFeature[j].feature)){
          combinedFeature.push(currentFeature[j].feature)
        }
      }
    }

    //console.log(f1, f2, combinedFeature)//57
    setFeature(combinedFeature)
    setMF(f1)
    setCF(f2)
  }

  useEffect( () => {
    helperFeature()
  }, [])

  return (
     <div className='rp-comparison-modal'>
      <div className='rp-sub-modal'>
        <div id='title' style = {{'textAlign':'left'}}>Comparing</div>
        <table className = 'rp-table'>
          <tbody>
            <tr>
              <th>{mainName}</th>
              <th style={{'width':'40%'}}></th>
              <th>{currentName}</th>
            </tr>
            {
              features.length > 0 ?
                features.map((feature, i) => <RP_table feature={feature} key = {i} mF={mF} cF={cF} />)
              : null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonModal;
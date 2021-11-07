import React, {useState, useEffect} from 'react';


const RP_table = ({feature, mF, cF})=> {

  return(
    <tr>
      <td>
        {
          !mF.hasOwnProperty(feature) ?
          null
          : mF[feature] || '✔️'
        }
      </td>
      <td>{feature}</td>
      <td>
      {
          !cF.hasOwnProperty(feature) ?
          null
          : cF[feature] || '✔️'
        }
      </td>
   </tr>
  )
}

export default RP_table;
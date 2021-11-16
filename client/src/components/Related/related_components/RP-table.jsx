import React, {useState, useEffect} from 'react';


const RP_table = ({feature, mF, cF})=> {

  return(
    <tr className ='rp-table-contents'>
      <td >
        {
          !mF.hasOwnProperty(feature) ?
          null
          : mF[feature] ? mF[feature].replace( /"/g, "" ) : <i className="fas fa-check"></i>
        }
      </td>
      <td >{feature}</td>
      <td >
      {
          !cF.hasOwnProperty(feature) ?
          null
          : cF[feature] ? cF[feature].replace( /"/g, "" ) : <i className="fas fa-check"></i>
        }
      </td>
   </tr>
  )
}

export default RP_table;
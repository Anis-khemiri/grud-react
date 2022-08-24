
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import'

function RowDetails({Email, LastName, FirstName, Age, Id, OnDelete}) {
 
  return (
    <tr key={Id}>
    <th>{Email}</th>
    <td>{LastName}</td>
    <td>{FirstName}</td>
    <td>{Age}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
        <Link to={`/${Id}`} className="text-white">
         

<FontAwesomeIcon icon={solid("fa-pen-to-square")} />


        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default RowDetails
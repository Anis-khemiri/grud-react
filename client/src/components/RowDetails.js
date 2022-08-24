
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
function RowDetails({Email, LastName, FirstName, Age, Id, OnDelete}) {
 
  return (
    <tr key={Id}>
    <th>{Email}</th>
    <td>{LastName}</td>
    <td>{FirstName}</td>
    <td>{Age}</td>
    <td className="gap__actions">
      <span className="badge bg-info m-2">
        <Link to={`/${Id}`} className="text-white ">
         

<FontAwesomeIcon icon={faPenToSquare} />


        </Link>
      </span>

      <button className="badge bg-danger " onClick={()=>OnDelete(Id)}>
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </td>
  </tr>
  )
}

export default RowDetails
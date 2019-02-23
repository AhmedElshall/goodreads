
import React from 'react';
export default  function AutherItem(props){
   return(
      <tr>
      <td>{props.id}</td>
      <td>{props.photo}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.dateOfBirh}</td>
      <td>
         <button> edit</button>
         <button> delete</button>

      </td>
    
    </tr>
   );
  
}
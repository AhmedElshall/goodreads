
import React from 'react';
export default  function BookItem(props){
   return(
      <tr>
      <td>{props.id}</td>
      <td>{props.photo}</td>
      <td>{props.name}</td>
      <td>{props.categoryId}</td>
      <td>{props.autherId}</td>

      <td>
         <button> edit</button>
         <button> delete</button>

      </td>
    
    </tr>
   );
  
}
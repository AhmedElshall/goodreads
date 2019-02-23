
import React from 'react';
export default  function CategoryItem(props){
   return(
      <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>
         <button> edit</button>
         <button> delete</button>

      </td>
    
    </tr>
   );
  
}
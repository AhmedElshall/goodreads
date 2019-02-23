import React from "react";

 import styles from './AuthersPage.module.scss';
 import Table from 'react-bootstrap/Table';

 import AutherItem from "./AutherItem";
const authers = props => {
  return (
    <div className={styles.CategoryPage} >
    <div className={styles.CategoryPage} >
    <Table responsive>
  <thead>
    <tr>
      
      <th>Id</th>
      <th>photo</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>dateOfBirh</th>
      <th>Actions</th>
      
    </tr>
  </thead>
  <tbody>
   {  
     props.AutherList.map((element,index) =>(
     < AutherItem key={(index).toString()}
     
      id={element.id}
      photo= {element.photo} 
      firstName={element.firstName}
      lastName={element.lastName}
      dateOfBirh={element.dateOfBirh}
     />
      
  ))}
  </tbody>
  </Table>
  </div>
      
    </div>
    
    
  );
};

export default authers;

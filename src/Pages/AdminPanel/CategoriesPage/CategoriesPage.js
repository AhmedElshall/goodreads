import React from "react";
import styles from ".//CategoriesPage.module.scss";
// import styles from "./CategoriesPage.module.scss";
import Table from 'react-bootstrap/Table'
import CategoryItem from "./CategoryItem";

const categories = props => {
  console.log(props.categoryList);
  return (
    <div className={styles.CategoryPage}>

  <div className={styles.CategoryPage} >
  <Table responsive>
  <thead>
    <tr>
      
      <th>Id</th>
      <th>Name</th>
      <th>Actions</th>
      
    </tr>
  </thead>
  <tbody>
   {  
     props.categoryList.map((element,index) =>(
     <CategoryItem key={(index).toString()} name= {element.name} id={element.id}
     />
      
  ))}
  </tbody>
  </Table>
  </div>
      
    </div>
  );
};

export default categories;

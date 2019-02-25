import React from "react";
import { Table } from "react-bootstrap";

const table = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>cover</th>
          <th>Name</th>
          <th>Author</th>
          <th>Avg Rate</th>
          <th>Rating</th>
          <th>Shelve</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default table;

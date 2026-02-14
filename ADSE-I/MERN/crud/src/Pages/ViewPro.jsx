import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

function ViewPro() {
  const [pro, fetchPro] = useState([]);

  const fetchRecords = async() => {
    try {
      const response = await axios.get("http://localhost:3000/read");
      const data = response.data;
      fetchPro(data);
      console.log(data);
    }
    catch (error) {
      console.log("Error Occured: ", error);
    }
  }

  useEffect(() =>{
    fetchRecords()
  }, [])

  return (
    <div>
      <h1>All Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pro.map(p =>(
          <tr key={p._id}>
            <td>{p._id}</td>
            <td>{p.ProductName}</td>
            <td>{p.ProductPrice}</td>
            <td>{p.ProductDescription}</td>
            <td>Delete</td>
          </tr>
))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPro
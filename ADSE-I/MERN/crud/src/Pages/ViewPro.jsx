import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

import { useNavigate } from "react-router-dom";

function ViewPro() {

  //Update
  const navigate = useNavigate();

  const handleUpdate = (id) =>{
    navigate('/update', {state: {userId: id}})
  }

  const [pro, setPro] = useState([]);

  //Delete
  const handleDelete = (id) =>{
    try {
      axios.delete(`http://localhost:3000/delete/${id}`);
      setPro(pro.filter(u => u._id != id));
      console.log(data);
      alert("Record Deleted")
    }
    catch (error) {
      console.log("Error Occured: ", error);
    }
  }


  const fetchRecords = async() => {
    try {
      const response = await axios.get("http://localhost:3000/read");
      const data = response.data;
      setPro(data);
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
      <h3 className='text-center'>All Products</h3>
      <table className='table table-striped table-hover table-bordered'>
        <thead>
          <tr className='table-dark'>
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
            <td>
              <button onClick={() => (handleUpdate(p._id))} className='btn btn-warning m-2'>Edit</button>
              <button onClick={() => (handleDelete(p._id))} className='btn btn-danger m-2'>Delete</button>
            </td>
          </tr>
))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPro
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function AddPro() {
    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: ""
    })

    const handleChange = (e) => {
        setPro({...pro, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(pro);

        try{
            axios.post("http://localhost:3000/create", pro);
        }

        catch(error){
            console.log("Error Occured: ", error);
        }
        
    }

  return (
    <div>
        <input type="text" name="pn" placeholder='Product Name' onChange={handleChange} /> <br />
        <input type="text" name="pp" placeholder='Product Price' onChange={handleChange} /> <br />
        <input type="text" name="pd" placeholder='Product Description' onChange={handleChange} /> <br />
        <button onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default AddPro
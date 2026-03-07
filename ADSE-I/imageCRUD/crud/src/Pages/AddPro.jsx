import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function AddPro() {
    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: "",
        pi: null
    })

    const handleChange = (e) => {
        if(e.target.name == "pi"){
            setPro({...pro, pi: e.target.files[0]})
        }
        else{
            setPro({...pro, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(pro);

        const formData = new FormData();
        formData.append("pn", pro.pn)
        formData.append("pp", pro.pp)
        formData.append("pd", pro.pd)
        formData.append("pi", pro.pi)

        try{
            axios.post("http://localhost:3000/product", formData, {
                headers:{
                    "Content-Type" : "multipart/form-data"
                }
            });
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
        <input type="file" name="pi" placeholder='Product Image' onChange={handleChange} /> <br />
        <button onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default AddPro
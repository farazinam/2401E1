import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

function UpdatePro() {

    const location = useLocation();
    const getId = location.state?.userId;
    console.log(getId);

    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: ""
    })

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/update/${getId}`);
            const data = response.data;
            console.log(data);
            setPro({
                pn: data.ProductName,
                pp: data.ProductPrice,
                pd: data.ProductDescription,
            }
            )
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const handleChange = (e) => {
        setPro({ ...pro, [e.target.name]: e.target.value })
    }

    const handleSubmit = async() => {
         try {
            await axios.put(`http://localhost:3000/update/${getId}`,
            {
                pn: pro.pn,
                pp: pro.pp,
                pd: pro.pd,
            });
            alert("Updated Successfully");
            console.log(data);
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }


    return (
        <div>
            <input type="text" name="pn" value={pro.pn} placeholder='Product Name' onChange={handleChange} /> <br />
            <input type="text" name="pp" value={pro.pp} placeholder='Product Price' onChange={handleChange} /> <br />
            <input type="text" name="pd" value={pro.pd} placeholder='Product Description' onChange={handleChange} /> <br />
            <button onClick={handleSubmit}>Update Product</button>
        </div>
    )
}

export default UpdatePro
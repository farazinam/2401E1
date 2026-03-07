import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePro() {

    const navigate = useNavigate(); // for redirection form update page to view when update

    const location = useLocation();
    const getId = location.state?.userId;
    console.log(getId);

    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: "",
        pi: null
    })

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/${getId}`);
            const data = response.data;
            console.log(data);
            setPro({
                pn: data.ProductName,
                pp: data.ProductPrice,
                pd: data.ProductDescription,
                pi: null
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
        if (e.target.name === "pi") {
            setPro({ ...pro, pi: e.target.files[0] });
        } else {
            setPro({ ...pro, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("pn", pro.pn);
        formData.append("pp", pro.pp);
        formData.append("pd", pro.pd);

        if (pro.pi) {
            formData.append("pi", pro.pi);
        }

        try {
            await axios.put(`http://localhost:3000/product/${getId}`,
                formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
    );
            alert("Updated Successfully");

            navigate("/viewPro"); // for redirection to view product
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
            <input type="file" name="pi" onChange={handleChange} /> <br />
            <button onClick={handleSubmit}>Update Product</button>
        </div>
    )
}

export default UpdatePro
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function SignUp() {
    const [signup, setSignup] = useState({
        un: "",
        email: "",
        password:"",
        roleId: 2
    });

    const handleChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:3000/signup", signup);
        console.log("Response:", res.data);

        alert("Account Created !!");
        setUser({ username : "", email : "", password : "", roleID: "2"})
        navigate("/");
    } 
    catch (e) {
        console.log("Error: ", e);
        alert("Signup Failed!");
    }
}
  return (
    <div>
  <meta charSet="utf-8" />
  <title>DASHMIN - Bootstrap Admin Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content name="keywords" />
  <meta content name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />

  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
  {/* Icon Font Stylesheet */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Libraries Stylesheet */}
  <link href="AdminAsset/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="AdminAsset/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="AdminAsset/css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="AdminAsset/css/style.css" rel="stylesheet" />
  <div className="container-xxl position-relative bg-white d-flex p-0">
    {/* Spinner Start */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Sign Up Start */}
    <div className="container-fluid">
      <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <form onSubmit={handleSubmit}>
          <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <a href="index.html" className>
                <h3 className="text-primary"><i className="fa fa-hashtag me-2" />MERN</h3>
              </a>
              <h3>Sign Up</h3>
            </div>
            <div className="form-floating mb-3">
              <input type="text" name='un' onChange={handleChange} className="form-control" id="floatingText" placeholder="jhondoe" />
              <label htmlFor="floatingText">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" name='email' onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-4">
              <input type="password" name='password' onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <a href>Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
            <p className="text-center mb-0">Already have an Account? <Link to="/">Sign In</Link></p>
          </div>
        </form>
        </div>
      </div>
    </div>
    {/* Sign Up End */}
  </div>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</div>

  )
}

export default SignUp
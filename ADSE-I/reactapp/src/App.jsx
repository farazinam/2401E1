import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'
import axios from 'axios';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActions';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import LinkedIn from '@mui/icons-material/LinkedIn'
import YT from '@mui/icons-material/YouTube'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Facebook from '@mui/icons-material/Facebook'
import GitHub from '@mui/icons-material/GitHub'
import Insta from '@mui/icons-material/Instagram'

import ContactForm from './Components/Form'
import Index from './Components/WebPage'

//-------------- Day 1 ----------------

// function App() {
//   const name = "faraz";
//   return (
//     <>
//     <h1>Hello World - My name is {name}</h1>
//     <p>Learning React</p>
//     </>
//   )
// }

// const App = () => {
//   const name = "Aptech";
//   return (
//     <>
//     <h1>Hello World - My name is {name}</h1>
//     <p>Learning React</p>
//     </>
//   )
// }

// export default App



//-------------- Day 2 ----------------
// Properties

// function Greet (props){
//   return (
//    <h1>Welcome {props.cn}</h1>
//   )
// }

// // Destructuring Props
// function Age ({age}){
//   return <p>Age: {age}</p>
// }


// Children Props
// function Box({children}){
//   return <div style={{border: '2px solid gray', borderRadius: '10px'}}> {children} </div>
// }


// // Nesting Props
// function Header(){
//   return <h1> NavBar </h1>
// }

// function Footer(){
//   return <h1> All Right Reserved Aptech Laerning Malaysia - Copyright</h1>
// }

// function Lab(){
//   return (
//   <>
//   {/* <Greet cn="Aptech" />
//   <Age age={22} /> */}

//   {/* <Box>
//     <h1> React + Vite</h1>
//     <p> Semester V</p>
//   </Box> */}

//   <Header />
//   <div style={{display: 'flex'}}>
//     <Card title="Wallpaper1" description="Computer Wallpaper" />
//     <Card title="Wallpaper2" description="Computer Wallpaper" />
//   </div>
//   <Footer />
//   </>
//   )
// }

// export default Lab;


// function App(){
//   //const [count, setCount] = useState(0);   //useState

//   function Clicked(){
//     alert("Button Clicked!")
//   }

//   function Changed(e){
//     console.log(e.target.value); 
//   }

//   return (
//     <>
//     {/* <h1>Counter</h1>
//     <h4> Count : {count}</h4>
//     <button onClick={()=> setCount(count + 1)}>Increment</button> */}


//     <button onClick={Clicked}>Increment</button>
//     <input type="text" onChange={Changed} />

//     </>
//   )
// }

// export default App;




// function LoginStatus({isLoggedin}){
//   return (
//     <h1> {isLoggedin ? "User Logged In" : "Plesae Log In"} </h1>
//   )
// }

// function App(){
//   return <LoginStatus isLoggedin={false} />
// }

// export default App;


// function App(){
//   const [isDark, setDark] = useState(false)

//   const toggleTheme=()=>{
//     setDark(!isDark);
//   }

//   const design = {
//     background: isDark ? "#000" : "#fff", 
//     color : isDark ? "#fff" : "#000"
//   }

//   return (
    
//     <body style={design}>
//     <button onClick={toggleTheme}> CHANGE THEME </button>
//     </body>
    
//   )
// }

// export default App;



//-------------- Day 4 ----------------

// function LoginForm(){
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [showPass, setShowPass] = useState(false);

//   function getData(e){
//     e.preventDefault();
//     console.log(email);
//     console.log(password);  
//   }

//   return (
//     <form onSubmit={getData}>
//     <input 
//     type="text"
//     placeholder='Enter Your Email'
//     value={email}
//     onChange={(e)=> setEmail(e.target.value)} /> <br />

//     <input 
//     type={showPass ? "text" : "password"}
//     placeholder='Enter Your Password'
//     value={password}
//     onChange={(e)=> setPassword(e.target.value)} />

//     <span onClick={(e) => setShowPass(!showPass)}> { showPass ? "🙈" : "👁" } </span> <br />

//     <button type="submit">Get</button>
//     </form>
//   )

// }

// export default LoginForm;


//---use effect ----

function App1(){
  useEffect(()=>{
    console.log("This is Use Effect with no dependency Array");
  })

  return (
    <h1>Use Effect - no dependency Array</h1>
  )
}

function App2(){
  useEffect(()=>{
    console.log("This is Use Effect with empty dependency Array");
  },[])

  return (
    <h1>Use Effect - empty dependency Array</h1>
  )
}


function App3(){
  const [count, setCount] = useState(0);   //useState

  useEffect(()=>{
    console.log("Count Updated: " + count);
  },[count])

  return (
    <>
    <h1>Counter</h1>
    <h4> Count : {count}</h4>
    <button onClick={()=> setCount(count + 1)}>Increment</button>

    </>
  )
}

// ----- Fetch data - API ----
function FetchData(){
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    axios.
    get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      setUser(response.data),
      setLoading(false);
    }
  )
  },[])

  return (
    <>
    <h1> API DATA</h1>
    {loading && <p>Loading...</p>}

    <ul>
      {
        users.map((user)=>(
          <li key={user.id}>
           <span>Name:</span> {user.name} <br /> <span>Email:</span> {user.email}
          </li>
        ))
      }
    </ul>
    </>
  )
}

function App(){
  return (
    <>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <FetchData /> */}

    {/* ---- Componenets ---- */}

    {/* <Button variant='contained' color='success'>
      Click Here
    </Button>

    <Typography variant='h4'>
      This is Text Under Typography
    </Typography>

    <Cards sx={{width: 300, backgroundColor: "lightgreen"}}>
      <CardContent>
        <Typography variant='h4'> Zero - Luna</Typography>
        <Typography> WaterProof Watch </Typography>
      </CardContent>
      <CardAction>
        <Button variant='contained'>ADD TO CART</Button>
        <Button variant='contained'>Buy Now</Button>
      </CardAction>
    </Cards> */}

    {/* ---- Layout ---- */}

    {/* <Container maxWidth="md" sx={{border: '1px solid green'}}>
      This is Container
    </Container>

    <Box sx={{border: '1px solid blue', m:5, p:5}}>
      This is a Box
    </Box>

    <Grid container spacing={2} sx={{display: 'flex'}}>
      <Grid item xs={12} md={12} sx={{backgroundColor: 'gray', width: '600px', height: '200px'}} >This is Grid 1</Grid>
      <Grid item xs={12} md={12} sx={{backgroundColor: 'gray', width: '600px'}}>This is Grid 2</Grid>
    </Grid> */}

{/* <Button variant="outlined" startIcon={<LinkedIn />}>
  Linked In
</Button>
<Button variant="outlined" startIcon={<Facebook />}>
  FaceBook
</Button>
<Button variant="outlined" startIcon={<WhatsApp />}>
 WhatsApp
</Button>
<Button variant="outlined" startIcon={<YT />}>
  Youtube
</Button>
<Button variant="outlined" startIcon={<Insta />}>
  Instagram
</Button>
<Button variant="outlined" startIcon={<GitHub />}> 
</Button> */}

{/* <ContactForm /> */}
<Index />


    </>
  )
}

export default App;
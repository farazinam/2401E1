import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'


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



function App(){
  const [isDark, setDark] = useState(false)

  const toggleTheme=()=>{
    setDark(!isDark);
  }

  const design = {
    background: isDark ? "#000" : "#fff", 
    color : isDark ? "#fff" : "#000"
  }

  return (
    
    <body style={design}>
    <button onClick={toggleTheme}> CHANGE THEME </button>
    </body>
    
  )
}

export default App;
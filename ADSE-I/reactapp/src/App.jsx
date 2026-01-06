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
function Box({children}){
  return <div style={{border: '2px solid gray', borderRadius: '10px'}}> {children} </div>
}


// Nesting Props
function Header(){
  return <h1> NavBar </h1>
}

function Footer(){
  return <h1> All Right Reserved Aptech Laerning Malaysia - Copyright</h1>
}

function Lab(){
  return (
  <>
  {/* <Greet cn="Aptech" />
  <Age age={22} /> */}

  {/* <Box>
    <h1> React + Vite</h1>
    <p> Semester V</p>
  </Box> */}

  <Header />
  <div style={{display: 'flex'}}>
    <Card title="Wallpaper1" description="Computer Wallpaper" />
    <Card title="Wallpaper2" description="Computer Wallpaper" />
  </div>
  <Footer />
  </>
  )
}

export default Lab;
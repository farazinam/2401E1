import React from 'react'

function ChildA({setName}) {
  return (
    <input type="text" placeholder='Name' 
    onChange={(e) => setName(e.target.value)}  />
  )
}

export default ChildA
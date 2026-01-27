import { useRef } from 'react'

function UseRef() {

    // const nameRef = useRef(null); 
    // const cityRef = useRef(null); 

    const formRef = useRef({}); 

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log("NAME: ", formRef.current.name.value);
        console.log("CITY: ", formRef.current.city.value);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={(e) => (formRef.current.name = e)} />
        <input type="text" ref={(e) => (formRef.current.city = e)} />
        <button type="submit">Submit</button>
    </form>
  )
}

export default UseRef
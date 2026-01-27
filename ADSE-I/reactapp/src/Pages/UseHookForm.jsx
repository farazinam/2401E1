import { useForm } from "react-hook-form"

function UseHookForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const sub = (data) =>{
        console.log("Form Submitted: ", data);     
    }
  return (
    <form onSubmit={handleSubmit(sub)}>
        <input type="text"
        {...register("name", { required: "Name is Required"})}
        />
        <p style={{color:'red'}}>{errors.name?.message}</p>

        <input type="text"
        {...register("city", 
            { required: "City is Required", 
            minLength:{ value: 3,
                message: "City must be atleast 3 Characters"
             }})}
        />
        <p style={{color:'red'}}>{errors.city?.message}</p>

        <button>Submit</button>
    </form>
  )
}

export default UseHookForm
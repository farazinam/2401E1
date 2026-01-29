import { useForm } from "react-hook-form"

function UseHookForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const sub = (data) =>{
        console.log("Form Submitted: ", data);     
    }
  return (
    <form onSubmit={handleSubmit(sub)}>
        <input type="text" placeholder="name"
        {...register("name", { required: "Name is Required"})}
        />
        <p style={{color:'red'}}>{errors.name?.message}</p>

        <input type="text" placeholder="faraz@gmail.com"
        {...register("email", 
            { required: "Email is Required", 
            minLength:{ value: 3,
                message: "Email must be atleast 3 Characters"
             },
            pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please Provide Correct Email"
            }
            }
            
            )}
        />
        <p style={{color:'red'}}>{errors.email?.message}</p>

        <button>Submit</button>
    </form>
  )
}

export default UseHookForm
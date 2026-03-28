import { database } from "../connection/connection.mjs"

export const SignUp = async(req, res) => {  
   const {un, email, password, roleId} = req.body;
    try{
     await database.collection("users").insertOne({
        Username: un,
        Email: email,
        Password: password,
        RoleID: roleId
    })
    res.json(req.file);
   }
   catch(e){
    console.log("Error: ", e); 
   }
}
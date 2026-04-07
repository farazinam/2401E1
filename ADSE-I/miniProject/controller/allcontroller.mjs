import { database } from "../connection/connection.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const SignUp = async(req, res) => {  
   try{
      const {un, email, password, roleId} = req.body;
       const passwordHash = await bcrypt.hash(password, 10)

     await database.collection("users").insertOne({
        Username: un,
        Email: email,
        Password: passwordHash,
        RoleID: roleId
    })
   }
   catch(e){
    console.log("Error: ", e); 
   }
}

export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await database.collection("users").findOne({
      Email: email,
    });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
      return res.status(404).json({ message: "Password Incorrect" });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Logged in successfully",
      user,
      token
    });

  } catch (e) {
    console.log("Error: ", e);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const ViewProduct = async(req, res) =>{
    try{
        const data = await database.collection("imagecrud").find({}).toArray();
        res.json(data)
        console.log("Record Fetched", data);   
    }
    catch(error){
        console.log("Error: ", error);   
    }
}
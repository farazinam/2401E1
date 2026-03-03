import { ObjectId } from "mongodb";
import { database } from "../connection/connection.mjs";

export const AddProduct = async(req, res) =>{
    try{
        const {pn, pp, pd} = req.body;
        await database.collection("imagecrud").insertOne({
            ProductName: pn,
            ProductPrice: pp,
            ProductDescription: pd,
            ProductImage: req.file.path
        })
        res.json(req.file);
    }
    catch(error){
        console.log("Error: ", error);   
    }
}
export const ViewProduct = async(req, res) =>{
    try{
        const data = await database.collection("imagecrud").find({}).toArray();
        res.json(data)
        console.log("Record Inserted", data);   
    }
    catch(error){
        console.log("Error: ", error);   
    }
}

export const DeleteProduct = async(req, res) =>{
    try{
        const {id} = req.params;
        await database.collection("imagecrud").deleteOne({
            _id: new ObjectId(id)
        });
        console.log("Record Delete");   
    }
    catch(error){
        console.log("Error: ", error);   
    }
}
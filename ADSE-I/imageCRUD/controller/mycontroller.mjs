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
export const ViewProduct = (req, res) =>{
    res.send("View Product")
}
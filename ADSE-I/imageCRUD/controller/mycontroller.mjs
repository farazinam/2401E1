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

export const viewProductById = async (req, res) => {
  try {
    const {id} = req.params; 
    const result = await database
      .collection("imagecrud")
      .findOne({_id: new ObjectId(id)})
      res.json(result);   // send actual data
  //res.send(result); // use this when data didn't get from json()
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
};


export const updateProduct = async (req, res) => {
  try {

    const { id } = req.params;
    const { pn, pp, pd } = req.body;

    let updateData = {
      ProductName: pn,
      ProductPrice: pp,
      ProductDescription: pd
    };

    // If new image uploaded
    if (req.file) {
      updateData.ProductImage = req.file.path;
    }

    const result = await database.collection("imagecrud").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    console.log(`Product updated with _id: ${id}`);
    console.log(result);

    res.send(`Product updated with _id: ${id}`);
  } catch (error) {

    console.error("Error updating Product:", error);
    res.status(500).send("Error updating Product");
  }
};
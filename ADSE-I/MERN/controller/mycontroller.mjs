import { ObjectId } from "mongodb";
import { database } from "../connection/connection.mjs";

export const create = async (req,res) => {
    try { 
        const {pn, pp, pd} = req.body;
        await database.collection("product").insertOne({
            ProductName: pn,
            ProductPrice: pp,
            ProductDescription: pd
        });    
        console.log("Data Inserted");
        
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
    }
}


export const read = async(req, res) =>{
    try {
    const result = await database
      .collection("product")
      .find({})
      .toArray();   // IMPORTANT
    res.send(result);   // send actual data
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
}

export const deletePro = async(req, res) =>{
    try {
    const {id} = req.params;
    await database
      .collection("product")
      .deleteOne({
        _id: new ObjectId(id)
      });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
}

export const getIdFromView = async(req, res) =>{
    try {
    const {id} = req.params;
    const result = await database
      .collection("product")
      .findOne({
        _id: new ObjectId(id)
      });
      res.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
}

export const UpdatePro = async(req, res) =>{
    try {
    const {id} = req.params;
    const {pn, pp, pd} = req.body;
    const result = await database
      .collection("product")
      .updateOne({
        _id: new ObjectId(id)},
        {
          $set: {
            ProductName: pn,
            ProductPrice: pp,
            ProductDescription: pd,
          }
        }
      );
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
}

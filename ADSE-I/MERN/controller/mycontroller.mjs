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


export const read = (req, res) =>{
    res.send("This is Read Page")
}

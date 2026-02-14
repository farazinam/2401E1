
import { MongoClient, ServerApiVersion } from 'mongodb';  // ------ 1
const uri = "mongodb+srv://farazinam:123@mern.q3dcu9l.mongodb.net/?appName=MERN";  // ------ 2

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const database = await client.db("mern_crud") // ----- 3
export async function run() { // ------ 4
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) { // ------- 5
    console.log("Error Occured: ", e);
    await client.close();
  }
}
run();  // ------- 6

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000



// MiddleWare 

app.use(cors());
// app.use(cors({ origin: 'https://equi-sports-3d9f4.web.app' }));
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwii9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const equipmentCollection = client.db('sportsDB').collection('equipment')

   

    // Delete items from database 
    app.delete('/equipments/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await equipmentCollection.deleteOne(query)
      res.send(result)
    })


    // Get user added Data
    app.get('/equipments/:email', async(req, res) =>{
      const email = req.params.email
      const query = {userEmail: email}
      const result = await equipmentCollection.find(query).toArray()
      res.send(result)
    })


    // Read 
    app.get('/equipments', async (req, res) => {
      const cursor = equipmentCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    

    // Create
    app.post('/equipments', async (req, res) => {
      try {
        const newEquipment = req.body;

        if (!newEquipment.title || !newEquipment.price || !newEquipment.userName || !newEquipment.userEmail) {
          return res.status(400).json({
            error: "Missing required fields: title, price, userName, and userEmail are required."
          });
        }

        console.log("New Equipment Data: ", newEquipment);

        const result = await equipmentCollection.insertOne(newEquipment);

        if (result.insertedId) {
          res.status(201).json({ insertedId: result.insertedId });
        }

      } catch (error) {
        console.error("Error adding equipment:", error);

        res.status(500).json({
          error: "An error occurred while adding equipment. Please try again."
        });
      }
    });







    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Sports server is Running')
})

app.listen(port, () => {
  console.log(`Server running by port: ${port}`);

})
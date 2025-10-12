const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mithunpriyan157official_db_user:Mp%40157157@cluster0.d46wy7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const student = client.db("studentdb").collection("register");

    app.post("/upload", async (req, res) => {
      const data = req.body;
      console.log("Data Upload Successful", data);
      const result = await student.insertOne(data);
      console.log(result);
      res.send(result);
    });

    app.post("/uploadbulk", async (req, res) => {
      const students = req.body;
      const result = await student.insertMany(students);
      console.log("Inserted students:", result.insertedCount);
      res.send(result);
    });

    app.get("/getdata", async (req, res) => {
      try {
        const sdata = student.find();
        const result = await sdata.toArray();
        res.json(result);
        console.log(`Find collections done`);
      } catch (error) {
        console.error("Get Student error:", error);
        res.status(500).send("Server error");
      }
    });

    app.get("/getiddata/:id", async (req, res) => {
      const id = req.params.id;
      const obj = { _id: new ObjectId(id) };
      const result = await student.findOne(obj);
      console.log(`Find one data using get id`);
      res.send(result);
    });

    app.patch("/editdata/:id", async (req, res) => {
      const id = req.params.id;
      const obj = { _id: new ObjectId(id) };
      const data = req.body;
      const updatedata = { $set: { ...data } };
      const options = { upsert: true };
      const result = await student.updateOne(obj, updatedata, options);
      console.log("Update/Edited successful");
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const obj = { _id: new ObjectId(id) };
      const result = await student.deleteOne(obj);
      res.send(result);
    });

    app.delete("/deleteall", async (req, res) => {
      try {
        const result = await student.deleteMany({});
        res.json({ message: "All student data deleted", result });
      } catch (error) {
        console.error("Delete all error:", error);
        res.status(500).send("Failed to delete all");
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

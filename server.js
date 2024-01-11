
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vickClient_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define Schema for Client and Card data
const clientSchema = new mongoose.Schema({
  name: String,
});

const cardSortSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  category: String,
  sideA: String,
  sideB: String,
});

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  // Start the Apollo Server
  await server.start();
  
  // Apply Apollo Server middleware to Express
  server.applyMiddleware({ app });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(
      `Apollo Server is now available at http://localhost:${port}${server.graphqlPath}`
      );
    });
  }
  
  startServer();
  
  
  // const express = require("express");
  // const mongoose = require("mongoose");
  // const { ApolloServer } = require("apollo-server-express");
  // const bodyParser = require("body-parser");
  // const { typeDefs, resolvers } = require("./schemas");
  
  // const app = express();
  // const port = 3000;
  
  // app.use(bodyParser.json());
  
  // // Connect to MongoDB
  // mongoose.connect("mongodb://localhost:27017/vickClient_db", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  // const db = mongoose.connection;
  // db.on("error", console.error.bind(console, "MongoDB connection error:"));
  // db.once("open", () => {
  //   console.log("Connected to MongoDB");
  // });
  
  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // });
  
  // // Define Schema for Client and Card data
  // const clientSchema = new mongoose.Schema({
  //   name: String,
  // });
  
  // const cardSortSchema = new mongoose.Schema({
  //   client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  //   category: String,
  //   sideA: String,
  //   sideB: String,
  // });
  
  // // API Routes
  // app.post("/clients", async (req, res) => {
  //   try {
  //     const { name } = req.body;
  //     const newClient = new Client({ name });
  //     await newClient.save();
  //     res.json(newClient);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // });
  
  // app.post("/cardSorts", async (req, res) => {
  //   try {
  //     const { clientId, category, sideA, sideB } = req.body;
  //     const newCardSort = new CardSort({
  //       client: clientId,
  //       category,
  //       sideA,
  //       sideB,
  //     });
  //     await newCardSort.save();
  //     res.json(newCardSort);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // });
  
  // app.listen(port, () => {
  //   console.log(`Server is running on http://localhost:${port}`);
  // });
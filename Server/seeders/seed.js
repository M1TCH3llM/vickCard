// seed.js

const mongoose = require("mongoose");
const { Client, Card } = require("../models");
const clientsSeed = require("./clientSeed");
const cardsSeed = require("./cardSeed");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vickClient_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  try {
    // Seed clients
    const seededClients = await Client.insertMany(clientsSeed);
    console.log("Seeded Clients:", seededClients);

    // Seed cards
    const seededCards = await Card.insertMany(cardsSeed);
    console.log("Seeded Cards:", seededCards);

    console.log("Data seeding completed.");

    // Close the database connection after seeding
    db.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    db.close();
  }
});

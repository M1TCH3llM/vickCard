// models/card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  sideA: {
    type: String,
    required: true,
  },
  sideB: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

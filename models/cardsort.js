// models/cardSort.js
const mongoose = require('mongoose');

const cardSortSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  category: {
    type: String,
    enum: ['Yes', 'No', 'Maybe', 'Not sure'],
    required: true,
  },
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    required: true,
  },
});

const CardSort = mongoose.model('CardSort', cardSortSchema);

module.exports = CardSort;

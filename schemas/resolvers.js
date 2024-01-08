// schemas/resolvers.js

const { Client, Card, CardSort } = require('../models');

const resolvers = {
  Query: {
    getClientById: async (_, { clientId }) => {
      return await Client.findById(clientId);
    },
    getCardById: async (_, { cardId }) => {
      return await Card.findById(cardId);
    },
    getCardSortById: async (_, { cardSortId }) => {
      return await CardSort.findById(cardSortId);
    },
  },
  Mutation: {
    createClient: async (_, { name }) => {
      const newClient = new Client({ name });
      await newClient.save();
      return newClient;
    },
    createCard: async (_, { sideA, sideB }) => {
      const newCard = new Card({ sideA, sideB });
      await newCard.save();
      return newCard;
    },
    createCardSort: async (_, { clientId, category, sideDisplayed }) => {
      const client = await Client.findById(clientId);
      if (!client) {
        throw new Error('Client not found');
      }

      const newCardSort = new CardSort({ client, category, sideDisplayed });
      await newCardSort.save();
      return newCardSort;
    },
  },
};

module.exports = resolvers;

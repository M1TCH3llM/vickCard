// # schemas/typeDefs.js

const typeDefs = `
type Client {
  _id: ID!
  name: String!
}

type Card {
  _id: ID!
  sideA: String!
  sideB: String!
}

type CardSort {
  _id: ID!
  client: Client!
  category: String!
  sideDisplayed: String!
}

type Query {
  getClientById(clientId: ID!): Client
  getCardById(cardId: ID!): Card
  getCardSortById(cardSortId: ID!): CardSort
}

type Mutation {
  createClient(name: String!): Client
  createCard(sideA: String!, sideB: String!): Card
  createCardSort(clientId: ID!, category: String!, sideDisplayed: String!): CardSort
}

`;

module.exports = typeDefs;
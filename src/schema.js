const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
module.exports = gql`
  scalar DateTime

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
    favorites: [Note!]!
  }

  type Note {
    id: ID!
    content: String!
    author: User!
    favoriteCount: Int!
    favoritedBy: [User!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    me: User!
    note(id: ID!): Note!
    notes: [Note!]!
    user(username: String!): User
    users:[User!]!
  }

  type Mutation {
    deleteNote(id: ID!): Boolean!
    newNote(content: String!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
    toggleFavorite(id: ID!): Note!
    updateNote(id: ID!, content: String!): Note!
  }
`;

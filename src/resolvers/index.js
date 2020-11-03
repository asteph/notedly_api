const { GraphQLDateTime } = require('graphql-iso-date');
const Mutation = require('./mutation');
const Note = require('./note');
const Query = require('./query');
const User = require('./user');

module.exports = {
  DateTime: GraphQLDateTime,
  Mutation,
  Note,
  Query,
  User
};

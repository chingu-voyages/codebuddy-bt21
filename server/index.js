const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

mongoose.connect('mongodb://localhost:27017/codebuddy', { useNewUrlParser: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
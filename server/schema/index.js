const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    name: String!
    email: String!
    password: String!
    interests: [String]
    githubLink: String
  }

  type Query {
    users: [User]
  }
`;
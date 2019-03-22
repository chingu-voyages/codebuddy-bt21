const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    interests: [String]
    githubLink: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
  }
`;
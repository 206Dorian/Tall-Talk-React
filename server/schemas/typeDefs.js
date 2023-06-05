// typedefs.js

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Question {
    id: ID!
    question: String!
  }

  type Query {
    question(id: ID!): Question
    questions: [Question]
  }

  type Mutation {
    createQuestion(question: String!): Question
    updateQuestion(id: ID!, question: String!): Question
    deleteQuestion(id: ID!): ID
  }
`;

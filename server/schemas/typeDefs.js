const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Question {
    id: ID!
    text: String!
  }

  input QuestionInput {
    text: String!
  }

  type Query {
    question(id: ID!): Question
    questions: [Question]
  }

  type Mutation {
    createQuestion(text: String!): Question
    createBulkQuestions(questions: [QuestionInput!]!): [Question]
    updateQuestion(id: ID!, text: String!): Question
    deleteQuestion(id: ID!): ID
  }
`;
module.exports = typeDefs;
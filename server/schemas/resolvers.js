const {Questions} = require('../models')
require('dotenv').config();


// resolvers.js

const questions = [
    { id: '1', text: 'What is your favorite animal?' },
    { id: '2', text: 'Where would you like to travel?' },
    // Add more questions here
  ];
  
  const resolvers = {
    Query: {
      question: (parent, { id }) => {
        return questions.find((question) => question.id === id);
      },
      questions: () => {
        return questions;
      },
    },
    Mutation: {
      createQuestion: (parent, { text }) => {
        const newQuestion = { id: Date.now().toString(), text };
        questions.push(newQuestion);
        return newQuestion;
      },
      updateQuestion: (parent, { id, text }) => {
        const question = questions.find((question) => question.id === id);
        if (question) {
          question.text = text;
          return question;
        }
        return null;
      },
      deleteQuestion: (parent, { id }) => {
        const index = questions.findIndex((question) => question.id === id);
        if (index !== -1) {
          const deletedQuestion = questions[index];
          questions.splice(index, 1);
          return deletedQuestion.id;
        }
        return null;
      },
    },
  };
  
  module.exports = resolvers;
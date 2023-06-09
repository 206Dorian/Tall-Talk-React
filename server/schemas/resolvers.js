const Question = require('../models/Questions')

const resolvers = {
  Query: {
    question: async (parent, { id }) => {
      return await Question.findById(id);
    },
    questions: async () => {
      try {
        const questions = await Question.find({});
        console.log('Questions from database:', questions);  // log the result of the database query
        return questions;
      } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
      }
    },
    
    
  },
  Mutation: {
    createQuestion: async (parent, { text }) => {
      const newQuestion = new Question({ text });
      return await newQuestion.save();
    },
    updateQuestion: async (parent, { id, text }) => {
      return await Question.findByIdAndUpdate(id, { text }, { new: true }); // { new: true } option returns the updated document
    },
    deleteQuestion: async (parent, { id }) => {
      const deletedQuestion = await Question.findByIdAndDelete(id);
      if (deletedQuestion) {
        return deletedQuestion.id;
      }
      return null;
    },
  },
};

module.exports = resolvers;

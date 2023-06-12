const Question = require('../models/Questions')

const resolvers = {
  Query: {
    question: async (parent, { id }) => {
      return await Question.findById(id);
    },
    questions: async () => {
      return await Question.find({});
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

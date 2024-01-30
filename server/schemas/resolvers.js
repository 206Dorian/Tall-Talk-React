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

    createBulkQuestions: async (parent, { questions }) => {
      const createdQuestions = [];

      for (const questionData of questions) {
        const { text } = questionData;
        const newQuestion = new Question({ text });
        const createdQuestion = await newQuestion.save();
        createdQuestions.push(createdQuestion);
      }

      return createdQuestions;
    },

    updateQuestion: async (parent, { id, text }) => {
      try {
        const updatedQuestion = await Question.findByIdAndUpdate(id, { text }, { new: true });
  
        if (!updatedQuestion) {
          throw new Error('Question not found');
        }
  
        return updatedQuestion;
      } catch (error) {
        throw new Error(`Error updating question: ${error.message}`);
      }
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

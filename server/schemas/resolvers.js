// resolvers.js

const questions = [
    { id: '1', question: 'What is your favorite animal?' },
    { id: '2', question: 'Where would you like to travel?' },
    // Add more questions here
  ];
  
  export const resolvers = {
    Query: {
      question: (parent, { id }) => {
        return questions.find((question) => question.id === id);
      },
      questions: () => {
        return questions;
      },
    },
    Mutation: {
      createQuestion: (parent, { question }) => {
        const newQuestion = { id: Date.now().toString(), question };
        questions.push(newQuestion);
        return newQuestion;
      },
      updateQuestion: (parent, { id, question }) => {
        const question = questions.find((question) => question.id === id);
        if (question) {
          question.question = question;
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
  